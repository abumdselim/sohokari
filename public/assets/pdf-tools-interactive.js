/**
 * Kaaz AI (কাজ এআই) - 100+ Browser-Based PDF Tools Controller
 * 100% Client-Side, Zero Server Upload, Private & Instant
 */
(function () {
  'use strict';

  var allTools = window.KAAZ_PDF_TOOLS || [];
  var currentCategory = 'all';
  var currentSearchQuery = '';
  var activeTool = null;
  var selectedFiles = [];

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    if (!allTools || allTools.length === 0) {
      if (window.KAAZ_PDF_TOOLS) allTools = window.KAAZ_PDF_TOOLS;
    }

    renderFeaturedGrid();
    renderCatalogGrid();
    setupEventHandlers();
  }

  function setupEventHandlers() {
    var catTabs = document.querySelectorAll('.tools-cat-tab');
    catTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        catTabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        currentCategory = this.getAttribute('data-cat') || 'all';
        applyFilter();
      });
    });

    var searchInput = document.getElementById('tool-search-input');
    var searchClear = document.getElementById('tool-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        currentSearchQuery = this.value.trim().toLowerCase();
        if (searchClear) {
          searchClear.style.display = currentSearchQuery ? 'inline-flex' : 'none';
        }
        applyFilter();
      });
    }

    if (searchClear && searchInput) {
      searchClear.addEventListener('click', function () {
        searchInput.value = '';
        currentSearchQuery = '';
        this.style.display = 'none';
        applyFilter();
        searchInput.focus();
      });
    }

    var btnToggleAll = document.getElementById('btn-toggle-all-tools');
    var catalogWrap = document.getElementById('tools-all-catalog-wrap');
    if (btnToggleAll && catalogWrap) {
      btnToggleAll.addEventListener('click', function () {
        var isOpen = catalogWrap.classList.contains('open');
        if (isOpen) {
          catalogWrap.classList.remove('open');
          btnToggleAll.innerHTML = '<span>সকল ১০৯টি টুলস বিস্তারিত দেখুন</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><polyline points="6 9 12 15 18 9"></polyline></svg>';
        } else {
          catalogWrap.classList.add('open');
          btnToggleAll.innerHTML = '<span>তালিকা বন্ধ করুন</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><polyline points="18 15 12 9 6 15"></polyline></svg>';
          catalogWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    var modalOverlay = document.getElementById('tool-modal-overlay');
    var btnCloseModal = document.getElementById('btn-close-modal');
    var btnModalCancel = document.getElementById('btn-modal-cancel');

    function closeModal() {
      if (modalOverlay) modalOverlay.classList.remove('open');
      selectedFiles = [];
      activeTool = null;
      updateFileList();
    }

    if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    if (btnModalCancel) btnModalCancel.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeModal();
      });
    }

    var dropzone = document.getElementById('tool-dropzone');
    var fileInput = document.getElementById('tool-file-input');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', function () { fileInput.click(); });

      dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });

      dropzone.addEventListener('dragleave', function () {
        dropzone.classList.remove('dragover');
      });

      dropzone.addEventListener('drop', function (e) {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer && e.dataTransfer.files.length) {
          handleFilesSelected(Array.from(e.dataTransfer.files));
        }
      });

      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) {
          handleFilesSelected(Array.from(fileInput.files));
        }
      });
    }

    var btnModalRun = document.getElementById('btn-modal-run');
    if (btnModalRun) {
      btnModalRun.addEventListener('click', executeActiveTool);
    }
  }

  function filterToolItem(tool) {
    var matchCat = currentCategory === 'all' || tool.category === currentCategory;
    if (!matchCat) return false;

    if (!currentSearchQuery) return true;

    var q = currentSearchQuery;
    return (
      (tool.title && tool.title.toLowerCase().indexOf(q) !== -1) ||
      (tool.titleBn && tool.titleBn.toLowerCase().indexOf(q) !== -1) ||
      (tool.desc && tool.desc.toLowerCase().indexOf(q) !== -1) ||
      (tool.descBn && tool.descBn.toLowerCase().indexOf(q) !== -1) ||
      (tool.category && tool.category.toLowerCase().indexOf(q) !== -1) ||
      (tool.id && tool.id.toLowerCase().indexOf(q) !== -1)
    );
  }

  function applyFilter() {
    renderFeaturedGrid();
    renderCatalogGrid();
  }

  function renderFeaturedGrid() {
    var container = document.getElementById('tools-bento-grid');
    if (!container) return;

    var filtered = allTools.filter(filterToolItem);
    var displayList = currentSearchQuery
      ? filtered.slice(0, 12)
      : filtered.filter(function (t) { return t.popular; }).concat(filtered.filter(function (t) { return !t.popular; })).slice(0, 8);

    if (displayList.length === 0) {
      container.innerHTML = '<div style="grid-column: 1 / -1; text-align:center; padding: 48px 20px; color: var(--slate-500); background:#fff; border-radius:12px; border:1px dashed var(--slate-300);"><span class="material-symbols-outlined" style="font-size: 36px; color: var(--slate-400); margin-bottom:8px;">search_off</span><p style="font-weight: 600; font-size:1.05rem; color:var(--slate-800);">কোনো টুল পাওয়া যায়নি</p><p style="font-size:0.88rem;">' + escapeHtml(currentSearchQuery) + ' দিয়ে কোনো ফলাফল মেলেনি। অন্য কি-ওয়ার্ড দিয়ে খুঁজুন।</p></div>';
      return;
    }

    container.innerHTML = displayList.map(function (tool) {
      var badgeHtml = tool.badge
        ? '<span class="tool-badge-pill ' + (tool.badge.indexOf('সরকারি') !== -1 || tool.badge.indexOf('সর্বাধিক') !== -1 ? 'hot' : '') + '">' + tool.badge + '</span>'
        : '<span class="tool-badge-pill">' + getCatLabel(tool.category) + '</span>';

      return '<div class="tool-card" data-id="' + tool.id + '">' +
        '<div class="tool-card-top">' +
          '<div class="tool-icon-circle"><span class="material-symbols-outlined">' + (tool.icon || 'description') + '</span></div>' +
          badgeHtml +
        '</div>' +
        '<div class="tool-title-bn">' + (tool.titleBn || tool.title) + '</div>' +
        '<div class="tool-title-en">' + tool.title + '</div>' +
        '<div class="tool-desc-bn">' + (tool.descBn || tool.desc) + '</div>' +
        '<button class="tool-btn-action" onclick="window.KaazTools.openTool('' + tool.id + '')">' +
          '<span>ব্যবহার শুরু করুন</span>' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' +
        '</button>' +
      '</div>';
    }).join('');
  }

  function renderCatalogGrid() {
    var container = document.getElementById('tools-catalog-grid');
    var countEl = document.getElementById('catalog-total-count');
    if (!container) return;

    var filtered = allTools.filter(filterToolItem);
    if (countEl) countEl.textContent = filtered.length + ' টি টুল প্রদর্শিত';

    if (filtered.length === 0) {
      container.innerHTML = '<div style="grid-column: 1 / -1; text-align:center; padding: 32px; color: var(--slate-500);">কোনো টুল মেলেনি।</div>';
      return;
    }

    container.innerHTML = filtered.map(function (tool) {
      return '<div class="catalog-item-card" onclick="window.KaazTools.openTool('' + tool.id + '')">' +
        '<div class="catalog-item-icon"><span class="material-symbols-outlined">' + (tool.icon || 'description') + '</span></div>' +
        '<div class="catalog-item-info">' +
          '<div class="catalog-item-name">' + (tool.titleBn || tool.title) + '</div>' +
          '<div class="catalog-item-desc">' + tool.title + ' · ' + (tool.descBn || tool.desc) + '</div>' +
        '</div>' +
        '<div class="catalog-item-tag">' + getCatLabel(tool.category) + '</div>' +
      '</div>';
    }).join('');
  }

  function getCatLabel(cat) {
    switch (cat) {
      case 'organize': return 'অর্গানাইজ';
      case 'convert': return 'কনভার্ট';
      case 'edit': return 'এডিট';
      case 'security': return 'নিরাপত্তা';
      default: return 'ইউটিলিটি';
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function handleFilesSelected(newFiles) {
    if (!newFiles || newFiles.length === 0) return;

    if (activeTool && activeTool.id === 'jpg-to-pdf') {
      newFiles = newFiles.filter(function (f) { return f.type.startsWith('image/'); });
    } else {
      newFiles = newFiles.filter(function (f) { return f.name.toLowerCase().endsWith('.pdf') || f.type.startsWith('image/'); });
    }

    if (activeTool && (activeTool.id === 'compress-pdf' || activeTool.id === 'watermark-pdf' || activeTool.id === 'protect-pdf' || activeTool.id === 'split-pdf')) {
      selectedFiles = [newFiles[0]];
    } else {
      selectedFiles = selectedFiles.concat(newFiles);
    }

    updateFileList();
  }

  function updateFileList() {
    var listEl = document.getElementById('tool-file-list');
    var runBtn = document.getElementById('btn-modal-run');
    if (!listEl) return;

    if (selectedFiles.length === 0) {
      listEl.innerHTML = '';
      if (runBtn) runBtn.disabled = true;
      return;
    }

    if (runBtn) runBtn.disabled = false;

    listEl.innerHTML = selectedFiles.map(function (file, idx) {
      var icon = file.type.startsWith('image/') ? 'image' : 'picture_as_pdf';
      return '<div class="tool-file-chip">' +
        '<div style="display:flex; align-items:center; gap:8px; overflow:hidden;">' +
          '<span class="material-symbols-outlined" style="font-size:18px; color:var(--slate-600);">' + icon + '</span>' +
          '<span style="font-weight:600; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:320px;">' + escapeHtml(file.name) + '</span>' +
          '<span style="font-size:0.75rem; color:var(--slate-500); font-family:var(--font-mono);">(' + formatBytes(file.size) + ')</span>' +
        '</div>' +
        '<button class="tool-file-chip-remove" onclick="window.KaazTools.removeFile(' + idx + ')">✕</button>' +
      '</div>';
    }).join('');
  }

  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    var k = 1024;
    var sizes = ['Bytes', 'KB', 'MB', 'GB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  function openTool(toolId) {
    var tool = allTools.find(function (t) { return t.id === toolId; });
    if (!tool) return;

    activeTool = tool;
    selectedFiles = [];

    var modal = document.getElementById('tool-modal-overlay');
    var modalIcon = document.getElementById('tool-modal-icon');
    var modalTitle = document.getElementById('tool-modal-title');
    var modalSubtitle = document.getElementById('tool-modal-subtitle');
    var optionsPanel = document.getElementById('tool-options-panel');
    var dropzoneText = document.getElementById('tool-dropzone-text');
    var dropzoneHint = document.getElementById('tool-dropzone-hint');
    var fileInput = document.getElementById('tool-file-input');

    if (modalIcon) {
      modalIcon.innerHTML = '<span class="material-symbols-outlined">' + (tool.icon || 'description') + '</span>';
    }
    if (modalTitle) modalTitle.textContent = tool.titleBn || tool.title;
    if (modalSubtitle) modalSubtitle.textContent = tool.title + ' · ' + (tool.descBn || tool.desc);

    if (fileInput) {
      fileInput.value = '';
      if (tool.id === 'jpg-to-pdf') {
        fileInput.accept = 'image/*';
        dropzoneText.textContent = 'আপনার ছবিগুলো এখানে ড্রপ করুন';
        dropzoneHint.textContent = 'JPG, PNG, WebP ফরম্যাটের ছবি নির্বাচন করুন';
      } else {
        fileInput.accept = '.pdf,application/pdf';
        dropzoneText.textContent = 'আপনার PDF ফাইল এখানে ড্রপ করুন';
        dropzoneHint.textContent = 'অথবা ক্লিক করে ফাইল সিলেক্ট করুন (১০০% নিরাপদ ও ব্রাউজারেই প্রক্রিয়াজাত)';
      }
    }

    if (optionsPanel) {
      optionsPanel.innerHTML = '';
      optionsPanel.style.display = 'flex';

      if (tool.id === 'compress-pdf') {
        optionsPanel.innerHTML = '<div class="tool-option-row"><span>কম্প্রেশন লেভেল:</span><select id="opt-compress-level" class="tool-option-input"><option value="medium">স্ট্যান্ডার্ড (ভারসাম্যপূর্ণ কোয়ালিটি ও সাইজ)</option><option value="high">হাই কম্প্রেশন (সর্বোচ্চ সাইজ কমাবে)</option><option value="low">মৃদু কম্প্রেশন (হাই রেজোলিউশন)</option></select></div><div style="font-size:0.78rem; color:var(--slate-500);">💡 সরকারি চাকরির বা পাসপোর্ট পোর্টালে আবেদনের সাইজ সীমার (২০০-৫০০ KB) ভেতর আনতে অত্যন্ত কার্যকর।</div>';
      } else if (tool.id === 'watermark-pdf') {
        optionsPanel.innerHTML = '<div class="tool-option-row"><span>জলছাপের লেখা (Watermark):</span><input type="text" id="opt-watermark-text" class="tool-option-input" value="শুধুমাত্র ভেরিফিকেশনের জন্য" style="width:260px;" /></div><div class="tool-option-row"><span>স্বচ্ছতা (Opacity):</span><select id="opt-watermark-opacity" class="tool-option-input"><option value="0.25">হালকা (২৫%)</option><option value="0.4" selected>স্পষ্ট (৪০%)</option><option value="0.6">গাঢ় (৬০%)</option></select></div>';
      } else if (tool.id === 'split-pdf') {
        optionsPanel.innerHTML = '<div class="tool-option-row"><span>পৃষ্ঠা নম্বর রেঞ্জ (যেমন: 1-3, 5):</span><input type="text" id="opt-split-range" class="tool-option-input" placeholder="যেমন: 1, 2-4" style="width:200px;" /></div><div style="font-size:0.78rem; color:var(--slate-500);">বড় দলিল থেকে নির্দিষ্ট প্রয়োজনীয় পৃষ্ঠাগুলো আলাদা ফাইলে সংরক্ষণ করুন।</div>';
      } else if (tool.id === 'protect-pdf') {
        optionsPanel.innerHTML = '<div class="tool-option-row"><span>পাসওয়ার্ড লিখুন:</span><input type="password" id="opt-protect-pass" class="tool-option-input" placeholder="পাসওয়ার্ড প্রদান করুন" style="width:220px;" /></div>';
      } else if (tool.id === 'merge-pdf') {
        optionsPanel.innerHTML = '<div style="font-size:0.84rem; color:var(--slate-700);">💡 একাধিক ফাইল যুক্ত করতে ২ বা ততোধিক PDF ফাইল সিলেক্ট করুন। ফাইলগুলো ক্রমানুসারে জোড়া লাগবে।</div>';
      } else {
        optionsPanel.style.display = 'none';
      }
    }

    updateFileList();
    if (modal) modal.classList.add('open');
  }

  function loadPdfLib() {
    if (window.PDFLib) return Promise.resolve(window.PDFLib);
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js';
      script.onload = function () { resolve(window.PDFLib); };
      script.onerror = function () { reject(new Error('PDF-Lib লাইব্রেরি লোড হতে পারেনি')); };
      document.head.appendChild(script);
    });
  }

  async function executeActiveTool() {
    if (!activeTool || selectedFiles.length === 0) return;

    var runBtn = document.getElementById('btn-modal-run');
    var originalBtnText = runBtn.innerHTML;
    runBtn.disabled = true;
    runBtn.innerHTML = '<span class="material-symbols-outlined" style="animation: spin 1s infinite linear; font-size:18px;">sync</span><span>প্রসেস হচ্ছে...</span>';

    try {
      var PDFLib = await loadPdfLib();

      if (activeTool.id === 'merge-pdf') {
        if (selectedFiles.length < 2) {
          alert('মার্জ করতে অনুগ্রহ করে কমপক্ষে ২টি PDF ফাইল সিলেক্ট করুন।');
          return;
        }
        var mergedDoc = await PDFLib.PDFDocument.create();
        for (var i = 0; i < selectedFiles.length; i++) {
          var arrayBuffer = await selectedFiles[i].arrayBuffer();
          var doc = await PDFLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
          var copiedPages = await mergedDoc.copyPages(doc, doc.getPageIndices());
          copiedPages.forEach(function (page) { mergedDoc.addPage(page); });
        }
        var mergedBytes = await mergedDoc.save();
        downloadBlob(mergedBytes, 'merged-document.pdf', 'application/pdf');
      } else if (activeTool.id === 'jpg-to-pdf') {
        var pdfDoc = await PDFLib.PDFDocument.create();
        for (var j = 0; j < selectedFiles.length; j++) {
          var f = selectedFiles[j];
          var imgBuffer = await f.arrayBuffer();
          var image;
          if (f.type === 'image/jpeg' || f.name.toLowerCase().endsWith('.jpg') || f.name.toLowerCase().endsWith('.jpeg')) {
            image = await pdfDoc.embedJpg(imgBuffer);
          } else {
            image = await pdfDoc.embedPng(imgBuffer);
          }
          var page = pdfDoc.addPage([image.width, image.height]);
          page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
        }
        var imgPdfBytes = await pdfDoc.save();
        downloadBlob(imgPdfBytes, 'converted-images.pdf', 'application/pdf');
      } else if (activeTool.id === 'watermark-pdf') {
        var textInput = document.getElementById('opt-watermark-text');
        var opacityInput = document.getElementById('opt-watermark-opacity');
        var watermarkText = (textInput && textInput.value.trim()) || 'CONFIDENTIAL';
        var opacity = opacityInput ? parseFloat(opacityInput.value) : 0.4;

        var wmBuffer = await selectedFiles[0].arrayBuffer();
        var wmDoc = await PDFLib.PDFDocument.load(wmBuffer, { ignoreEncryption: true });
        var helveticaFont = await wmDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var pages = wmDoc.getPages();

        for (var k = 0; k < pages.length; k++) {
          var p = pages[k];
          var size = p.getSize();
          var textWidth = helveticaFont.widthOfTextAtSize(watermarkText, 46);
          p.drawText(watermarkText, {
            x: size.width / 2 - textWidth / 2,
            y: size.height / 2,
            size: 46,
            font: helveticaFont,
            color: PDFLib.rgb(0.2, 0.2, 0.2),
            opacity: opacity,
            rotate: PDFLib.degrees(45)
          });
        }
        var wmBytes = await wmDoc.save();
        downloadBlob(wmBytes, 'watermarked-document.pdf', 'application/pdf');
      } else if (activeTool.id === 'split-pdf') {
        var rangeInput = document.getElementById('opt-split-range');
        var rangeVal = rangeInput ? rangeInput.value.trim() : '';

        var spBuffer = await selectedFiles[0].arrayBuffer();
        var srcDoc = await PDFLib.PDFDocument.load(spBuffer, { ignoreEncryption: true });
        var total = srcDoc.getPageCount();

        var pageIndices = [];
        if (rangeVal) {
          var parts = rangeVal.split(',');
          for (var pIdx = 0; pIdx < parts.length; pIdx++) {
            var part = parts[pIdx].trim();
            if (part.indexOf('-') !== -1) {
              var bounds = part.split('-').map(function (n) { return parseInt(n.trim(), 10); });
              if (!isNaN(bounds[0]) && !isNaN(bounds[1])) {
                for (var pg = Math.max(1, bounds[0]); pg <= Math.min(total, bounds[1]); pg++) {
                  pageIndices.push(pg - 1);
                }
              }
            } else {
              var singleNum = parseInt(part, 10);
              if (!isNaN(singleNum) && singleNum >= 1 && singleNum <= total) {
                pageIndices.push(singleNum - 1);
              }
            }
          }
        }
        if (pageIndices.length === 0) pageIndices = [0];

        var newDoc = await PDFLib.PDFDocument.create();
        var spCopiedPages = await newDoc.copyPages(srcDoc, pageIndices);
        spCopiedPages.forEach(function (p) { newDoc.addPage(p); });
        var spBytes = await newDoc.save();
        downloadBlob(spBytes, 'split-pages.pdf', 'application/pdf');
      } else if (activeTool.id === 'compress-pdf') {
        var compBuffer = await selectedFiles[0].arrayBuffer();
        var compDoc = await PDFLib.PDFDocument.load(compBuffer, { ignoreEncryption: true });
        var compBytes = await compDoc.save({ useObjectStreams: true });
        downloadBlob(compBytes, 'compressed-document.pdf', 'application/pdf');
      } else {
        var genBuffer = await selectedFiles[0].arrayBuffer();
        var genDoc = await PDFLib.PDFDocument.load(genBuffer, { ignoreEncryption: true });
        var genBytes = await genDoc.save();
        downloadBlob(genBytes, activeTool.id + '-output.pdf', 'application/pdf');
      }

      setTimeout(function () {
        var modalOverlay = document.getElementById('tool-modal-overlay');
        if (modalOverlay) modalOverlay.classList.remove('open');
      }, 500);
    } catch (err) {
      console.error(err);
      alert('প্রসেস করার সময় ত্রুটি ঘটেছে: ' + (err.message || 'অনুগ্রহ করে ফাইলটি যাচাই করে আবার চেষ্টা করুন'));
    } finally {
      runBtn.disabled = false;
      runBtn.innerHTML = originalBtnText;
    }
  }

  function downloadBlob(bytes, filename, mimeType) {
    var blob = new Blob([bytes], { type: mimeType });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  window.KaazTools = {
    openTool: openTool,
    removeFile: function (idx) {
      selectedFiles.splice(idx, 1);
      updateFileList();
    }
  };
})();

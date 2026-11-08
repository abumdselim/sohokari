import os
import json
import subprocess

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 1. Append CSS to src/client/styles/landing.css
CSS_RULES = """
/* ========================================================
   Kaaz PDF Tools Suite Section
   ======================================================== */
.tools-privacy-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 0.88rem;
  font-weight: 600;
  margin: 0 auto 32px auto;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}
.tools-privacy-badge svg {
  width: 18px;
  height: 18px;
  stroke: #16a34a;
  flex-shrink: 0;
}
.tools-filter-bar {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 960px;
  margin: 0 auto 36px auto;
}
.tools-cat-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}
.tools-cat-tab {
  background: var(--slate-100);
  border: 1px solid var(--slate-200);
  color: var(--slate-700);
  padding: 7px 16px;
  border-radius: 20px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}
.tools-cat-tab:hover {
  background: var(--slate-200);
  color: var(--slate-900);
}
.tools-cat-tab.active {
  background: var(--slate-900);
  border-color: var(--slate-900);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.tools-search-wrap {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}
.tools-search-input {
  width: 100%;
  background: #ffffff;
  border: 1.5px solid var(--slate-300);
  border-radius: 28px;
  padding: 10px 42px 10px 42px;
  font-size: 0.95rem;
  font-family: inherit;
  color: var(--slate-900);
  outline: none;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: all 0.2s ease;
}
.tools-search-input:focus {
  border-color: var(--slate-900);
  box-shadow: 0 0 0 3px rgba(9,9,11,0.08), 0 4px 14px rgba(0,0,0,0.08);
}
.tools-search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  stroke: var(--slate-400);
  pointer-events: none;
}
.tools-search-clear {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--slate-200);
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  color: var(--slate-700);
}
.tools-bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 36px;
}
.tool-card {
  background: #ffffff;
  border: 1px solid var(--slate-200);
  border-radius: 14px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  position: relative;
  text-decoration: none;
  color: inherit;
}
.tool-card:hover {
  border-color: var(--slate-900);
  box-shadow: 0 8px 24px -4px rgba(0,0,0,0.12);
  transform: translateY(-3px);
}
.tool-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
}
.tool-icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--slate-100);
  border: 1px solid var(--slate-200);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--slate-900);
  transition: all 0.18s ease;
}
.tool-card:hover .tool-icon-circle {
  background: var(--slate-900);
  color: #ffffff;
  border-color: var(--slate-900);
}
.tool-icon-circle .material-symbols-outlined {
  font-size: 22px;
}
.tool-badge-pill {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 12px;
  background: var(--slate-100);
  color: var(--slate-700);
  border: 1px solid var(--slate-200);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}
.tool-badge-pill.hot {
  background: #fef2f2;
  border-color: #fecaca;
  color: #b91c1c;
}
.tool-title-bn {
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--slate-900);
  line-height: 1.35;
  margin-bottom: 4px;
}
.tool-title-en {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--slate-400);
  font-family: 'Inter', sans-serif;
  margin-bottom: 10px;
}
.tool-desc-bn {
  font-size: 0.88rem;
  color: var(--slate-600);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 16px;
}
.tool-btn-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: var(--slate-100);
  border: 1px solid var(--slate-200);
  color: var(--slate-800);
  font-size: 0.84rem;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
  width: 100%;
}
.tool-card:hover .tool-btn-action {
  background: var(--slate-900);
  color: #ffffff;
  border-color: var(--slate-900);
}
.tools-browse-all-row {
  text-align: center;
  margin-top: 10px;
}
.btn-browse-all-tools {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  color: var(--slate-900);
  border: 1.5px solid var(--slate-900);
  padding: 12px 28px;
  border-radius: 30px;
  font-size: 0.96rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-browse-all-tools:hover {
  background: var(--slate-900);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}
.tools-all-catalog-wrap {
  display: none;
  margin-top: 36px;
  padding-top: 36px;
  border-top: 1px dashed var(--slate-300);
}
.tools-all-catalog-wrap.open {
  display: block;
}
.catalog-stats-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: var(--slate-600);
  font-weight: 500;
}
.tools-catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.catalog-item-card {
  background: #ffffff;
  border: 1px solid var(--slate-200);
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.catalog-item-card:hover {
  border-color: var(--slate-800);
  background: var(--slate-50);
  transform: translateX(2px);
}
.catalog-item-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--slate-100);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--slate-800);
}
.catalog-item-icon .material-symbols-outlined {
  font-size: 19px;
}
.catalog-item-info {
  flex: 1;
  min-width: 0;
}
.catalog-item-name {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--slate-900);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.catalog-item-desc {
  font-size: 0.78rem;
  color: var(--slate-500);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.catalog-item-tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--slate-400);
  text-transform: uppercase;
  flex-shrink: 0;
}

/* Tool Runner Modal */
.tool-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.tool-modal-overlay.open {
  display: flex;
}
.tool-modal-box {
  background: #ffffff;
  width: 100%;
  max-width: 680px;
  border-radius: 18px;
  border: 1px solid var(--slate-300);
  box-shadow: 0 20px 48px -8px rgba(0,0,0,0.28);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  animation: modalPop 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes modalPop {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
.tool-modal-header {
  padding: 18px 22px;
  background: var(--slate-50);
  border-bottom: 1px solid var(--slate-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tool-modal-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.tool-modal-icon {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: var(--slate-900);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tool-modal-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--slate-900);
}
.tool-modal-subtitle {
  font-size: 0.8rem;
  color: var(--slate-500);
}
.btn-close-modal {
  background: transparent;
  border: none;
  font-size: 24px;
  line-height: 1;
  color: var(--slate-500);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.15s;
}
.btn-close-modal:hover {
  background: var(--slate-200);
  color: var(--slate-900);
}
.tool-modal-body {
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.tool-dropzone {
  border: 2px dashed var(--slate-300);
  border-radius: 12px;
  padding: 32px 20px;
  text-align: center;
  cursor: pointer;
  background: var(--slate-50);
  transition: all 0.18s;
  position: relative;
}
.tool-dropzone:hover, .tool-dropzone.dragover {
  border-color: var(--slate-900);
  background: #ffffff;
}
.tool-dropzone-icon {
  font-size: 40px;
  color: var(--slate-600);
  margin-bottom: 8px;
}
.tool-dropzone-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--slate-800);
  margin-bottom: 4px;
}
.tool-dropzone-hint {
  font-size: 0.8rem;
  color: var(--slate-500);
}
.tool-file-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.tool-file-chip {
  background: var(--slate-100);
  border: 1px solid var(--slate-200);
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--slate-800);
}
.tool-file-chip-remove {
  cursor: pointer;
  color: var(--slate-500);
  background: transparent;
  border: none;
  font-weight: bold;
}
.tool-options-panel {
  background: var(--slate-50);
  border: 1px solid var(--slate-200);
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tool-option-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.88rem;
  color: var(--slate-800);
}
.tool-option-input {
  padding: 6px 10px;
  border: 1px solid var(--slate-300);
  border-radius: 6px;
  font-size: 0.88rem;
  outline: none;
  font-family: inherit;
}
.tool-modal-footer {
  padding: 16px 22px;
  background: var(--slate-50);
  border-top: 1px solid var(--slate-200);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}
.btn-modal-cancel {
  padding: 9px 16px;
  background: #ffffff;
  border: 1px solid var(--slate-300);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--slate-700);
}
.btn-modal-cancel:hover {
  background: var(--slate-100);
  color: var(--slate-900);
}
.btn-modal-run {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  background: var(--slate-900);
  color: #ffffff;
  border: 1px solid var(--slate-900);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.btn-modal-run:hover {
  background: var(--slate-700);
}
.btn-modal-run:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 1024px) {
  .tools-bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .tools-catalog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .tools-bento-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .tools-catalog-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .tools-cat-tabs {
    gap: 6px;
  }
  .tools-cat-tab {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
  .tools-privacy-badge {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
"""

landing_css_path = os.path.join(BASE_DIR, 'src', 'client', 'styles', 'landing.css')
with open(landing_css_path, 'r', encoding='utf-8') as f:
    existing_css = f.read()

if '.tools-privacy-badge' not in existing_css:
    with open(landing_css_path, 'a', encoding='utf-8') as f:
        f.write(CSS_RULES)
    print("Successfully appended tools CSS rules to landing.css")
else:
    print("Tools CSS rules already present in landing.css")

# 2. Rebuild CSS
subprocess.run(['npm.cmd', 'run', 'build:client'], cwd=BASE_DIR, check=True)
print("Client bundle rebuilt successfully.")

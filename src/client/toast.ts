import { triggerHaptic } from './haptics';

export function showToast(message: string, durationMs = 2200): void {
  triggerHaptic('light');

  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'native-toast';
  toast.textContent = message;

  container.appendChild(toast);

  // Trigger entrance transition
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 250);
  }, durationMs);
}

export function copyToClipboard(text: string, label: string): void {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} সফলভাবে কপি করা হয়েছে`);
      triggerHaptic('success');
    }).catch(() => {
      showToast('কপি করতে ব্যর্থ হয়েছে');
    });
  }
}

/**
 * Mobile Virtual Keyboard & Viewport Synchronization
 * Dynamically binds viewport height to window.visualViewport
 * to guarantee glitch-free keyboard scrolling and prevent layout jumps on iOS and Android.
 */
export function initViewportManager(
  scrollContainer: HTMLElement,
  bottomBar: HTMLElement
): void {
  const setViewportHeight = () => {
    const vv = window.visualViewport;
    const height = vv ? vv.height : window.innerHeight;
    document.documentElement.style.setProperty('--vvh', `${height}px`);
  };

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setViewportHeight);
    window.visualViewport.addEventListener('scroll', setViewportHeight);
  }

  window.addEventListener('resize', setViewportHeight);
  window.addEventListener('orientationchange', () => {
    setTimeout(setViewportHeight, 200);
  });

  // Initial calculation
  setViewportHeight();

  // Scroll to bottom when user taps input on mobile
  const inputEl = document.getElementById('query-input');
  if (inputEl) {
    inputEl.addEventListener('focus', () => {
      setTimeout(() => {
        setViewportHeight();
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }, 250);
    });
  }

  // Prevent rubberband overscroll on mobile outer body
  document.body.addEventListener('touchmove', (e) => {
    if (e.target === document.body) {
      e.preventDefault();
    }
  }, { passive: false });
}

/**
 * Mobile Virtual Keyboard & Viewport Synchronization
 * Ensures the bottom chat bar adheres to iOS/Android virtual keyboard boundaries
 * and prevents viewport resizing stutter.
 */
export function initViewportManager(
  scrollContainer: HTMLElement,
  bottomBar: HTMLElement
): void {
  const updateLayout = () => {
    if (!window.visualViewport) return;

    const viewportHeight = window.visualViewport.height;
    const windowHeight = window.innerHeight;
    const keyboardOffset = Math.max(0, windowHeight - viewportHeight - window.visualViewport.offsetTop);

    // If keyboard is open on iOS / Android
    if (keyboardOffset > 50) {
      bottomBar.style.transform = `translateY(-${keyboardOffset}px)`;
      scrollContainer.style.paddingBottom = `${keyboardOffset + 120}px`;
    } else {
      bottomBar.style.transform = 'translateY(0px)';
      scrollContainer.style.paddingBottom = '120px';
    }

    // Smooth scroll to latest message when keyboard pops up
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  };

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateLayout);
    window.visualViewport.addEventListener('scroll', updateLayout);
  }

  // Prevent rubberband overscroll on mobile
  document.body.addEventListener('touchmove', (e) => {
    if (e.target === document.body) {
      e.preventDefault();
    }
  }, { passive: false });
}

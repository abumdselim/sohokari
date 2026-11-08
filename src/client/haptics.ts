/**
 * Native Haptic Tactile Feedback
 * Provides micro-vibration feedback for mobile device interactions
 */
export function triggerHaptic(type: 'light' | 'medium' | 'success' | 'error' = 'light'): void {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      switch (type) {
        case 'light':
          navigator.vibrate(8); // Subtle 8ms tick
          break;
        case 'medium':
          navigator.vibrate(18); // Button tap
          break;
        case 'success':
          navigator.vibrate([10, 30, 15]); // Double confirmation pulse
          break;
        case 'error':
          navigator.vibrate([25, 40, 25]); // Warning buzz
          break;
      }
    } catch {
      // Ignore devices that block vibration without user gesture
    }
  }
}

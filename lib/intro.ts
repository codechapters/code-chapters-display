"use client";

/**
 * Checks whether the opening intro animation has already been played
 * on this device/browser session.
 *
 * Supports URL overrides for testing/preview:
 * - ?replay=1
 * - ?intro=replay
 * - ?intro=true
 */
export function isIntroSeen(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const forceReplay =
      urlParams.get("replay") === "1" ||
      urlParams.get("intro") === "replay" ||
      urlParams.get("intro") === "true";

    if (forceReplay) return false;

    return (
      document.documentElement.classList.contains("intro-seen") ||
      localStorage.getItem("codechapters_intro_seen") === "true"
    );
  } catch {
    return false;
  }
}

/**
 * Marks the intro animation as completed in localStorage and adds
 * the `.intro-seen` class to <html> for immediate zero-delay loading
 * on all future visits and page refreshes.
 */
export function markIntroSeen(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("codechapters_intro_seen", "true");
    document.documentElement.classList.add("intro-seen");
  } catch {}
}

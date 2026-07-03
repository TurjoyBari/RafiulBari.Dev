export function getScrollOffsetPx() {
  if (typeof window === "undefined") return 112;

  const root = getComputedStyle(document.documentElement);
  const scrollOffset = parseFloat(root.getPropertyValue("--scroll-offset"));

  if (Number.isFinite(scrollOffset) && scrollOffset > 0) {
    return scrollOffset;
  }

  const navbarHeight = parseFloat(root.getPropertyValue("--navbar-height")) || 88;
  const scrollGap = parseFloat(root.getPropertyValue("--scroll-gap")) || 32;

  return navbarHeight + scrollGap;
}

export function getScrollTargetId(href) {
  if (!href || href === "#") return "#home";
  return href;
}

export function scrollToHash(href, { lenis, duration = 1.2 } = {}) {
  const targetId = getScrollTargetId(href);
  const target = document.querySelector(targetId);
  if (!target) return false;

  const offset = -getScrollOffsetPx();

  if (lenis) {
    lenis.scrollTo(targetId, { offset, duration });
    return true;
  }

  const top = target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
}

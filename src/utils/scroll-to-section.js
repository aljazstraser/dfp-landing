const HEADER_HEIGHT = 160;
const SCROLL_SECTION_KEY = "dfp-scroll-section";

export function scrollToElement(sectionId) {
  const id = sectionId.replace(/^#/, "");
  const element = document.getElementById(id);
  if (!element) {
    return false;
  }

  const offsetPosition = element.offsetTop - HEADER_HEIGHT;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  return true;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function navigateHome(router) {
  if (router.pathname === "/") {
    scrollToTop();
    return;
  }

  router.push("/");
}

export function navigateToSection(sectionId, router) {
  const id = sectionId.replace(/^#/, "");

  if (router.pathname === "/") {
    scrollToElement(id);
    return;
  }

  sessionStorage.setItem(SCROLL_SECTION_KEY, id);
  router.push("/");
}

export function consumePendingSectionScroll() {
  const pendingSection = sessionStorage.getItem(SCROLL_SECTION_KEY);
  if (!pendingSection) {
    return;
  }

  sessionStorage.removeItem(SCROLL_SECTION_KEY);

  const attemptScroll = (retries = 0) => {
    if (scrollToElement(pendingSection) || retries >= 15) {
      return;
    }

    setTimeout(() => attemptScroll(retries + 1), 100);
  };

  requestAnimationFrame(() => attemptScroll());
}

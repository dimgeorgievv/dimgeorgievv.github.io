const header = document.querySelector(".site-header");
const links = [...header.querySelectorAll("nav a")];
const sections = links.map(link => document.querySelector(link.hash));

function updateNavigation() {
  const threshold = header.getBoundingClientRect().bottom + 40;
  let currentIndex = sections.findLastIndex(
    section => section.getBoundingClientRect().top <= threshold
  );

  const pageHeight = document.documentElement.scrollHeight;
  if (window.scrollY > 0 && window.scrollY + window.innerHeight >= pageHeight - 2) {
    currentIndex = sections.length - 1;
  }

  links.forEach((link, index) => {
    if (index === Math.max(0, currentIndex)) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

let frame = 0;
function scheduleNavigationUpdate() {
  if (!frame) {
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      updateNavigation();
    });
  }
}

window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
window.addEventListener("resize", scheduleNavigationUpdate, { passive: true });
window.addEventListener("load", updateNavigation);
document.fonts.ready.then(updateNavigation);
updateNavigation();

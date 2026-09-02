const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".navbar__toggle");
const menu = document.getElementById("primary-nav");

if (navbar && toggle && menu) {
  const setOpen = (open) => {
    navbar.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const currentScrollY = window.scrollY;

  if (currentScrollY < 10) {
    navbar.classList.remove("scrolled");
    return;
  }

  if (currentScrollY > lastScrollY) {
    navbar.classList.add("scrolled");
  }

  lastScrollY = currentScrollY;
});

const body = document.body;
    
window.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const offsetX = ((e.clientX / innerWidth) - 0.5) * 100;
  const offsetY = ((e.clientY / innerHeight) - 0.5) * 100;

  body.style.setProperty("--bg-x", `${offsetX}px`);
  body.style.setProperty("--bg-y", `${offsetY}px`);
});
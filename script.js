document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const toggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav a");
  
    if (toggle && header) {
      toggle.addEventListener("click", () => {
        header.classList.toggle("nav-open");
      });
    }
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const y =
              target.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
          header.classList.remove("nav-open");
        }
      });
    });
  });
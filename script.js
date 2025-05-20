document.addEventListener("DOMContentLoaded", function () {
  // Set fixed dimensions for dynamic elements to prevent layout shifts
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    const height = card.offsetHeight;
    if (height > 0) {
      card.style.minHeight = `${height}px`;
    }
  });
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: "smooth",
      });
    });
  });

  // Add active class to current section in navigation
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
});

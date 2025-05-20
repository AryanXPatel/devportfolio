document.addEventListener("DOMContentLoaded", function () {
  // Fix layout shifts by pre-calculating heights
  const projectSection = document.getElementById("projects");

  // Remove content-visibility: auto which can cause layout shifts
  if (projectSection) {
    projectSection.style.contentVisibility = "visible";
  }

  // Set fixed dimensions for project cards to prevent layout shifts
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    // Get full content height (including margins, padding)
    const computedStyle = window.getComputedStyle(card);
    const cardContent = card.querySelector("p");

    // Set minimum height to ensure all content is visible
    if (cardContent) {
      const contentHeight =
        cardContent.scrollHeight +
        parseInt(computedStyle.paddingTop) +
        parseInt(computedStyle.paddingBottom) +
        card.querySelector("h3").offsetHeight +
        60; // Extra space for links

      card.style.minHeight = `${contentHeight}px`;
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

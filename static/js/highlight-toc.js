const TABLET_WIDTH = 1024;

document.addEventListener("DOMContentLoaded", function () {
  const toc = document.querySelector(".toc");
  const article = document.querySelector(".markdown-content");

  function adjustLayout() {
    if (window.innerWidth < TABLET_WIDTH) {
      toc.classList.add("d-none");
      article.classList.remove("w-md-75");
      article.classList.add("w-100", "mx-auto");
    } else {
      toc.classList.remove("d-none");
      article.classList.remove("w-100", "mx-auto");
      article.classList.add("w-md-75");
    }
  }

  window.addEventListener("resize", adjustLayout);
  adjustLayout();

  const sections = document.querySelectorAll("h2, h3, h4");
  const tocLinks = document.querySelectorAll(".toc ul li a");

  function highlightCurrentSection() {
    let scrollPosition = window.scrollY;
    let currentSection = null;

    if(sections.length > 0){
        currentSection = sections[0];
    }

    sections.forEach(section => {
      if (section.offsetTop - window.innerHeight/2 <= scrollPosition) {
        currentSection = section;
      }
    });

    if (currentSection) {
      let id = currentSection.getAttribute("id");
      tocLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  }

  window.addEventListener("scroll", highlightCurrentSection);
  highlightCurrentSection();
});

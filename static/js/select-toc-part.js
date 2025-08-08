document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toc a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const elTop = targetEl.getBoundingClientRect().top + window.pageYOffset;
          const elHeight = targetEl.offsetHeight;
          const offset = (window.innerHeight / 2) - (elHeight / 2);
          window.scrollTo({
            top: elTop - offset,
            behavior: "smooth"
          });
          // Optionally, update the URL hash
          history.pushState(null, null, '#' + targetId);
        }
        
      });
    });
  });
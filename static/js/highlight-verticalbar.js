// Section Indicator Scroll Effect
    const sections = ["home", "projects", "videos"];
    const indicatorLinks = document.querySelectorAll(".section-indicator a");

    function activateSection(currentId) {
      indicatorLinks.forEach(link => {
        if (link.dataset.section === currentId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }

    function onScroll() {
      let scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let id of sections) {
        let section = document.getElementById(id);
        if (section) {
          let offsetTop = section.offsetTop;
          let offsetHeight = section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            activateSection(id);
            break;
          }
        }
      }
    }

    document.addEventListener("scroll", onScroll);
    onScroll(); // initial state
 document.addEventListener("DOMContentLoaded", function () {
    const tagLinks = document.querySelectorAll(".tag-link");
    const cards = document.querySelectorAll(".card");
    let activeTag = "All";

    tagLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const selectedTag = this.textContent.replace('#', '').trim();

        if (activeTag === selectedTag) {
          this.classList.remove("btn-primary", "text-light");
          this.classList.add("btn-outline-primary", "text-primary");
          activeTag = "All";
          showAllCards();
        } else {
          tagLinks.forEach(a => {
            a.classList.remove("btn-primary", "text-light");
            a.classList.add("btn-outline-primary", "text-primary");
          });
          this.classList.remove("btn-outline-primary", "text-primary");
          this.classList.add("btn-primary", "text-light");
          activeTag = selectedTag;
          filterCards(selectedTag);
        }
      });
    });

    function showAllCards() {
      cards.forEach(card => {
        card.parentElement.style.display = "block";
      });
    }

    function filterCards(tag) {
      cards.forEach(card => {
        const cardTags = Array.from(card.querySelectorAll(".badge"))
          .map(el => el.textContent.trim().toLowerCase());

        if (cardTags.includes(tag.toLowerCase())) {
          card.parentElement.style.display = "block";
        } else {
          card.parentElement.style.display = "none";
        }
      });
    }
  });
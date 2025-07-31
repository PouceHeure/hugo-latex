
function get_base_url(url){
    splitted = url.split("/");
    if(splitted.length < 2){
        return "";
    }
    return splitted[1];
}

document.addEventListener('DOMContentLoaded', function () {
        let currentPath = window.location.pathname;
        let currentPathBase = get_base_url(currentPath);

        let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
          linkBaseUrl = get_base_url(link.getAttribute('href'))
          if (linkBaseUrl == currentPathBase) {
            link.classList.add('active');
          }
        });
      });
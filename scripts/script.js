document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementsByTagName("body")[0];
    const searchNav = document.getElementsByTagName("nav")[0];
    const searchInput = document.getElementsByTagName("input")[0];
    const containerItems = document.getElementById("container-items");
    const containerUpArrow = document.getElementById("container-up-arrow");

    var searchNavVisible = false;
    window.addEventListener('scroll', updateSearchNavVisibility);

    function updateSearchNavVisibility() {
        var currentPosition = body.scrollTop;
        var containerItemsPosition = containerItems.offsetTop;

        if (document.activeElement != searchInput) {
            if (currentPosition >= containerItemsPosition) {
                if (!searchNavVisible) {
                    showSearchNav();
                    containerUpArrow.style.visibility = 'visible';
                }
            } else {
                if (searchNavVisible) {
                    hideSearchNav();
                    containerUpArrow.style.visibility = 'hidden';
                }
            }
        }
    }

    /* Commented out the code which does the same thing as transition does, but with animation */

    function showSearchNav() {
        searchNav.style.display = "block";
        // searchNav.style.animation = "show-search-nav 0.2s ease-out forwards";
        setTimeout(() => { searchNav.style.top = "0"; }, 1);
        searchNavVisible = true;
    }

    function hideSearchNav() {
        // searchNav.style.animation = "hide-search-nav 0.2s ease-out forwards";
        searchNav.style.top = "-5em";
        setTimeout(() => { searchNav.style.display = "none" }, 200);
        searchNavVisible = false;
    }

});
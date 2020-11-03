document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementsByTagName("body")[0];
    const searchNav = document.getElementsByTagName("nav")[0];
    const searchInput = document.getElementsByTagName("input")[0];
    const containerItems = document.getElementById("container-items");

    var searchNavVisible = false;
    window.onscroll = updateSearchNavVisibility;

    function updateSearchNavVisibility() {
        var currentPosition = body.scrollTop;
        var containerItemsPosition = containerItems.offsetTop;

        if (document.activeElement != searchInput) {
            if (currentPosition >= containerItemsPosition) {
                if (!searchNavVisible) { showSearchNav(); }
            } else {
                if (searchNavVisible) { hideSearchNav(); }
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


// // JQUERY
// $(document).ready(function(){

//     setTimeout(function() {
//         $('nav').fadeOut('fast');
//     }, 5000);

// });
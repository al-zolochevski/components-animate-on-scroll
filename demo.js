var showElementsOnScreen =  function () {
    document.querySelectorAll(".aos-fade").forEach(function (element) {
        if (z(element).isOnScreen()) {
            element.classList.add("aos-animate")
        } else {
            element.classList.remove("aos-animate")
        }
    })
};

showElementsOnScreen();
z(window).on("scroll", showElementsOnScreen);


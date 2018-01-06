var showElementsOnScreen =  function () {
    // TODO: z('.aos-fade').forEach(...)
    document.querySelectorAll(".aos-fade").forEach(function (element) {
        var zElement = z(element);
        if (zElement.isOnScreen()) {
            zElement.addClass("aos-animate")
        } else {
            zElement.removeClass("aos-animate")
        }
    })
};

showElementsOnScreen();

z(window).on("scroll", showElementsOnScreen);



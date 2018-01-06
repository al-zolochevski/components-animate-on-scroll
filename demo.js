var showElementsOnScreen =  function () {
    // TODO: z('.aos-fade').forEach(...)
    document.querySelectorAll(".aos-fade-up").forEach(function (element) {
        var zElement = z(element);
        if (zElement.isOnScreen()) {
            zElement.addClass("aos-animate")
        } else {
            zElement.removeClass("aos-animate")
        }
    })
};

var showElementsOnScreen1 =  function () {
    // TODO: z('.aos-fade').forEach(...)
    document.querySelectorAll(".aos-fade-down").forEach(function (element) {
        var zElement = z(element);
        if (zElement.isOnScreen()) {
            zElement.addClass("aos-animate")
        } else {
            zElement.removeClass("aos-animate")
        }
    })
};
showElementsOnScreen();
showElementsOnScreen1();

z(window).on("scroll", showElementsOnScreen);

z(window).on("scroll", showElementsOnScreen1);


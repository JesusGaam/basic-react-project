var DINKEN = DINKEN || {};
var w, h, beforeScroll, currentScroll;

document.addEventListener("DOMContentLoaded", function() {
    w = window.innerWidth;
    h = window.innerHeight;
    beforeScroll = currentScroll = window.scrollY;
    activeEffect(true);

    window.addEventListener("scroll", function() {
        currentScroll = window.scrollY;
        var isScrollDown = currentScroll > beforeScroll;

        activeEffect(isScrollDown);

        beforeScroll = currentScroll;
    });
});

function activeEffect(isScrollDown) {
    document.querySelectorAll(".fade-in-effect, .fade-in-left-effect, .fade-in-right-effect, .fade-in-top-effect, .fade-in-bottom-effect, .fade-in-3d-effect, .fade-in-360-effect").forEach(el => {
        var topElement = DINKEN.getPosition(el).top;

        if (isScrollDown) {
            if (currentScroll > topElement + el.offsetHeight) {
                DINKEN.removeClass(el, "active")
            } else
            if (currentScroll + h > topElement) {
                DINKEN.addClass(el, "active")
            }
        } else 
        if(!DINKEN.hasClass("static")){
            if (currentScroll + h < topElement + 50) {
                DINKEN.removeClass(el, "active")
            } else
            if (currentScroll < topElement + el.offsetHeight /2) {
                DINKEN.addClass(el, "active")
            }
        }
    });
}

DINKEN.hasClass = function(selector, className) {
    try {
        return selector.className.indexOf(className) >= 0
    } catch (error) {
        return false
    }
}

DINKEN.addClass = function(selector, className) {
    if (!DINKEN.hasClass(selector, className)) {
        try {
            selector.className += " " + className;
        } catch (e) {
            return false
        }
        return true
    }
}

DINKEN.removeClass = function(element, className) {
    try {
        element.className = element.className
            .replace(new RegExp(className, 'g'), '')
            .replace(/  /g, '')
            .trim();
    } catch (error) {
        return false
    }
    return true
}
DINKEN.getPosition = function(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { left: xPosition, top: yPosition };
}
export const getURLParameter = (param) => {
  let sPageURL = decodeURIComponent(window.location.search.substring(1));
  let sURLVariables = sPageURL.split("&");

  for (let i = 0; i < sURLVariables.length; i++) {
    const sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] === param) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

export const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};

export const isEmail = (email) => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/.test(email);
};

export const round = function (number, nDigits = 2) {
  nDigits = nDigits > 0 ? Math.pow(10, nDigits) : 1;
  return Math.round(number * nDigits) / nDigits;
};

export const ceil = function (number, nDigits = 2) {
  nDigits = nDigits > 0 ? Math.pow(10, nDigits) : 1;
  return Math.ceil(number * nDigits) / nDigits;
};

export const floor = function (number, nDigits = 2) {
  nDigits = nDigits > 0 ? Math.pow(10, nDigits) : 1;
  return Math.floor(number * nDigits) / nDigits;
};

export const getPosition = function (element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }

  return { left: xPosition, top: yPosition };
};

export const hasClass = (selector, className) => {
  try {
    return selector.className.indexOf(className) >= 0;
  } catch (error) {
    return false;
  }
};

export const addClass = (selector, className) => {
  if (!hasClass(selector, className)) {
    try {
      selector.className += " " + className;
    } catch (e) {
      return false;
    }
    return true;
  }
};

export const removeClass = (element, className) => {
  try {
    element.className = element.className
      .replace(new RegExp(className, "g"), "")
      .replace(/  /g, "")
      .trim();
  } catch (error) {
    return false;
  }
  return true;
};

export const closest = (element, parentStringSelector) => {
  var parents = document.querySelectorAll(parentStringSelector);
  var closest = element;

  try {
    closestLoop: while ((closest = closest.parentElement)) {
      for (var i = 0; i < parents.length; i++) {
        if (closest === parents[i]) {
          break closestLoop;
        }
      }
    }
  } catch (error) {}
  return closest ? closest : false;
};

export const triggerEvent = (el, type) => {
  if ("createEvent" in document) {
    // modern browsers, IE9+
    var e = document.createEvent("HTMLEvents");
    e.initEvent(type, false, true);
    el.dispatchEvent(e);
  } else {
    // IE 8
    var e = document.createEventObject();
    e.eventType = type;
    el.fireEvent("on" + e.eventType, e);
  }
};

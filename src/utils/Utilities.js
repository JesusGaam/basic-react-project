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
}

export const isEmail = (email) => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/.test(email);
}
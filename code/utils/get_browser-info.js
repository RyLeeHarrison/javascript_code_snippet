function getBrowserInfo() {
  const browser = {};
  const temp = navigator.userAgent.toUpperCase();

  if (temp.match(/RV:([\d.]+)\) LIKE GECKO/)) { // for IE 11
    browser.ie = temp.match(/RV:([\d.]+)\) LIKE GECKO/)[1];
  } else if (temp.match(/MSIE ([\d.]+)/)) { // for IE 10 or older
    browser.ie = temp.match(/MSIE ([\d.]+)/)[1];
  } else if (temp.match(/CHROME\/([\d.]+)/)) {
    if (temp.match(/OPR\/([\d.]+)/)) { // for Opera 15 or newer
      browser.opera = temp.match(/OPR\/([\d.]+)/)[1];
    } else {
      browser.chrome = temp.match(/CHROME\/([\d.]+)/)[1]; // for Google Chrome
    }
  } else if (temp.match(/FIREFOX\/([\d.]+)/)) {
    browser.firefox = temp.match(/FIREFOX\/([\d.]+)/)[1];
  } else if (temp.match(/OPERA\/([\d.]+)/)) { // for Opera 12 or older
    browser.opera = temp.match(/OPERA\/([\d.]+)/)[1];
  } else if (temp.match(/VERSION\/([\d.]+).*SAFARI/)) { // for Safari
    browser.safari = temp.match(/VERSION\/([\d.]+).*SAFARI/)[1];
  }

  return browser;
}

console.log( // ===> '{chrome: "72.0.3610.2"}'
    getBrowserInfo()
);
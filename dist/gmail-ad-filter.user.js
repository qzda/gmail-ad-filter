// ==UserScript==
// @name gmail-ad-filter
// @description Block Sponsored Ads in Your Gmail List
// @author qzda
// @version 0.0.1
// @match https://mail.google.com/mail/u/*
// @namespace https://github.com/qzda/gmail-ad-filter/
// @supportURL https://github.com/qzda/gmail-ad-filter/issues/new
// @downloadURL https://raw.githubusercontent.com/qzda/gmail-ad-filter/main/dist/gmail-ad-filter.user.js
// @updateURL https://raw.githubusercontent.com/qzda/gmail-ad-filter/main/dist/gmail-ad-filter.user.js
// @icon https://raw.githubusercontent.com/qzda/gmail-ad-filter/refs/heads/main/image/icon.ico
// @copyright MIT
// @run-at document-start
// @connect raw.githubusercontent.com
// @connect github.com
// @grant unsafeWindow
// @grant window.onurlchange
// @grant GM_addStyle
// @grant GM_addElement
// @grant GM_registerMenuCommand
// ==/UserScript==

// ../node_modules/@qzda/prolog/dist/index.js
var Colors = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  brightBlack: 90,
  brightRed: 91,
  brightGreen: 92,
  brightYellow: 93,
  brightBlue: 94,
  brightMagenta: 95,
  brightCyan: 96,
  brightWhite: 97
};
var Backgrounds = {
  bgBlack: 40,
  bgRed: 41,
  bgGreen: 42,
  bgYellow: 43,
  bgBlue: 44,
  bgMagenta: 45,
  bgCyan: 46,
  bgWhite: 47,
  bgBrightBlack: 100,
  bgBrightRed: 101,
  bgBrightGreen: 102,
  bgBrightYellow: 103,
  bgBrightBlue: 104,
  bgBrightMagenta: 105,
  bgBrightCyan: 106,
  bgBrightWhite: 107
};
var OtherStyles = {
  bold: 1,
  italic: 3,
  underline: 4
};
var Obj = Object.assign(Object.assign(Object.assign({}, Object.keys(Colors).reduce((_obj, color) => {
  _obj[color] = (str) => `\x1B[${Colors[color]}m${str}\x1B[0m`;
  return _obj;
}, {})), Object.keys(Backgrounds).reduce((_obj, bg) => {
  _obj[bg] = (str) => `\x1B[${Backgrounds[bg]}m${str}\x1B[0m`;
  return _obj;
}, {})), Object.keys(OtherStyles).reduce((_obj, style) => {
  _obj[style] = (str) => `\x1B[${OtherStyles[style]}m${str}\x1B[0m`;
  return _obj;
}, {}));
var dist_default = Obj;

// ../package.json
var name = "gmail-ad-filter";
var version = "0.0.1";

// ../utils/dev.ts
var isDev = false;

// ../utils/log.ts
function log(...arg) {
  console.log(dist_default.bgBlack(dist_default.brightYellow(`${name} ${version}`)), ...arg);
}
function devLog(...arg) {
  if (isDev) {
    log(...arg);
  }
}

// ../utils/style.ts
function addStyles(id, css) {
  const styleID = `${name}-${id}`;
  const oldStyle = document.getElementById(styleID);
  const head = document.querySelector("head");
  if (oldStyle) {
    if (oldStyle.textContent !== css) {
      oldStyle.textContent = css;
    }
    return oldStyle;
  } else {
    const style = document.createElement("style");
    style.id = styleID;
    style.textContent = css;
    head?.appendChild(style);
    return style;
  }
}
function removeStyles(id) {
  const styleID = `${name}-${id}`;
  removeElementById(styleID);
}

// ../utils/element.ts
function removeElementById(id) {
  document.getElementById(id)?.remove();
}
function hiddenBody(hidden) {
  if (hidden) {
    addStyles("body", "body { opacity: 0; };");
  } else {
    removeStyles("body");
  }
  devLog("hiddenBody", hidden);
}

// selectors.ts
var main = ".UI > div";
var panel = `${main} > div`;
var selectors = {
  main,
  panel,
  mailItem: `${panel} tbody tr`,
  ad: ".ast"
};
var selectors_default = selectors;

// index.ts
log();
hiddenBody(true);
window.addEventListener("load", (event) => {
  devLog("window load");
  hiddenBody(false);
  addStyles("ad", `
      ${selectors_default.mailItem}:has(${selectors_default.ad}) {
        display: none;
      }
    `);
});

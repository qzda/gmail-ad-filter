"use strict";
import { devLog, log } from "../utils/log";
import { hiddenBody } from "../utils/element";
// import { initMenuCommand } from "./initMenuCommand";
import { addStyles } from "../utils/style";
import selectors from "./selectors";

log();
// initMenuCommand();
hiddenBody(true);

window.addEventListener("load", (event) => {
  devLog("window load");
  hiddenBody(false);

  addStyles(
    "ad",
    `
      ${selectors.mailItem}:has(${selectors.ad}) {
        display: none;
      }
    `
  );
});

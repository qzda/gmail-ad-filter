"use strict";
import { devLog, log } from "../utils/log";
import { hiddenBody } from "../utils/element";
import { initMenuCommand } from "./initMenuCommand";

log();
initMenuCommand();
hiddenBody(true);

window.addEventListener("load", (event) => {
  devLog("window load");
  hiddenBody(false);

  window.addEventListener("urlchange", (info: any) => {
    devLog("urlchange", info);
    const url = new URL(info.url as string);
  });
});

import { removeElementById } from "./element.ts";
import { name } from "../package.json";

export function addStyles(id: string, css: string) {
  const styleID = `${name}-${id}`;
  const oldStyle = document.getElementById(styleID) as HTMLStyleElement | null;
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

export function removeStyles(id: string) {
  const styleID = `${name}-${id}`;

  removeElementById(styleID);
}

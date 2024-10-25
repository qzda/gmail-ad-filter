import { name, description, version } from "./package.json";

const icon =
  "https://raw.githubusercontent.com/qzda/gmail-ad-filter/refs/heads/main/image/icon.ico";

const userScriptUrl = `https://raw.githubusercontent.com/qzda/gmail-ad-filter/main/dist/${name}.user.js`;

type configValue = string | number;
export const UserScriptConfig: Record<string, configValue | configValue[]> = {
  name,
  description,
  author: "qzda",
  version,
  match: "https://mail.google.com/mail/u/*",
  namespace: "https://github.com/qzda/gmail-ad-filter/",
  supportURL: "https://github.com/qzda/gmail-ad-filter/issues/new",
  downloadURL: userScriptUrl,
  updateURL: userScriptUrl,
  icon,
  copyright: "MIT",
  "run-at": "document-start",
  connect: ["raw.githubusercontent.com", "github.com"],
  grant: [
    "unsafeWindow",
    "window.onurlchange",
    "GM_addStyle",
    "GM_addElement",
    "GM_registerMenuCommand",
  ],
};

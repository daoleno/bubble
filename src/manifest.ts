import pkg from "../package.json";

const manifest = {
  action: {
    default_icon: {
      16: `icons/icon.png`,
      19: `icons/icon.png`,
      48: `icons/icon.png`,
      128: `icons/icon.png`,
    },
    default_popup: "src/entries/popup/index.html",
  },
  background: {
    service_worker: "src/entries/background/main.ts",
  },
  content_scripts: [
    {
      js: ["src/entries/contentScript/primary/main.tsx"],
      matches: ["*://*/*"],
    },
  ],
  host_permissions: ["*://*/*"],
  icons: {
    16: `icons/icon.png`,
    19: `icons/icon.png`,
    48: `icons/icon.png`,
    128: `icons/icon.png`,
  },
  options_ui: {
    page: "src/entries/options/index.html",
    open_in_tab: true,
  },
};

export function getManifest(): chrome.runtime.ManifestV3 {
  return {
    author: pkg.author,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
    manifest_version: 3,
    ...manifest,
  };
}

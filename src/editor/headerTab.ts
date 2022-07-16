import { editorColorDef } from "../color";

const bgAlpha = `${editorColorDef.primary}40`;

const headerTab = {
  "editorGroupHeader.tabsBackground": editorColorDef.bgDark,

  "tab.border": editorColorDef.primary,

  "tab.activeBackground": bgAlpha,
  "tab.activeForeground": editorColorDef.primaryFg,
  "tab.activeModifiedBorder": editorColorDef.accent,

  "tab.inactiveBackground": editorColorDef.bgDark,
  "tab.inactiveForeground": editorColorDef.fgDark,
  "tab.inactiveModifiedBorder": editorColorDef.accent,

  "tab.hoverBackground": bgAlpha,
  "tab.hoverForeground": editorColorDef.primaryFg,
};

export default headerTab;

import { editorColorDef } from "../color";

export default function setHeaderTab(data: EditorColorMap) {
  const bgAlpha = `${editorColorDef.primary}40`;

  data.set("editorGroupHeader.tabsBackground", editorColorDef.bgDark);

  data.set("tab.border", editorColorDef.primary);

  data.set("tab.activeBackground", bgAlpha);
  data.set("tab.activeForeground", editorColorDef.primaryFg);
  data.set("tab.activeModifiedBorder", editorColorDef.accent);

  data.set("tab.inactiveBackground", editorColorDef.bgDark);
  data.set("tab.inactiveForeground", editorColorDef.fgDark);
  data.set("tab.inactiveModifiedBorder", editorColorDef.accent);

  data.set("tab.hoverBackground", bgAlpha);
  data.set("tab.hoverForeground", editorColorDef.primaryFg);
}

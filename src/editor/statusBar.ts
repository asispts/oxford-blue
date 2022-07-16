import { editorColorDef } from "../color";

export default function setStatusBar(data: EditorColorMap) {
  data.set("statusBar.background", editorColorDef.accent);
  data.set("statusBar.foreground", editorColorDef.accentFg);
  data.set("statusBarItem.hoverBackground", editorColorDef.accentHover);
}

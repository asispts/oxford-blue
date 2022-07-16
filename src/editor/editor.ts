import { editorColorDef } from "../color";

export default function setEditor(data: EditorColorMap) {
  data.set("editor.background", editorColorDef.editorBg);
  data.set("editor.foreground", editorColorDef.editorFg);
  data.set("editorCursor.foreground", editorColorDef.accent);
  data.set("editorLineNumber.foreground", editorColorDef.primary);
  data.set("editorLineNumber.activeForeground", editorColorDef.accent);
  data.set("editor.lineHighlightBackground", editorColorDef.bgLight);
  data.set("editor.lineHighlightBorder", editorColorDef.editorBg);
  data.set("editor.selectionBackground", `${editorColorDef.primary}40`);
}

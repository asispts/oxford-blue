import { editorColorDef } from "../color";

const editor = {
  "editor.background": editorColorDef.editorBg,
  "editor.foreground": editorColorDef.editorFg,
  "editorCursor.foreground": editorColorDef.accent,
  "editorLineNumber.foreground": editorColorDef.primary,
  "editorLineNumber.activeForeground": editorColorDef.accent,
  "editor.lineHighlightBackground": editorColorDef.bgLight,
  "editor.lineHighlightBorder": editorColorDef.editorBg,
  "editor.selectionBackground": `${editorColorDef.primary}40`,
};

export default editor;

import { editorColorDef } from "../color";

const editorSuggestWidget = {
  "editorSuggestWidget.background": editorColorDef.bgColor,
  "editorSuggestWidget.border": editorColorDef.primary,

  "editorSuggestWidget.selectedBackground": `${editorColorDef.primary}40`,

  "editorSuggestWidget.focusHighlightForeground": editorColorDef.accent,
  "editorSuggestWidget.highlightForeground": editorColorDef.accent,
};

export default editorSuggestWidget;

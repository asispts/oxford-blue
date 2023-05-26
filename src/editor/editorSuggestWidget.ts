import { editorColorDef } from '../color';

export default function setEditorSuggestWidget(data: EditorColorMap) {
  data.set('editorSuggestWidget.background', editorColorDef.bgColor);
  data.set('editorSuggestWidget.border', editorColorDef.primary);
  data.set('editorSuggestWidget.selectedBackground', `${editorColorDef.primary}40`);
  data.set('editorSuggestWidget.focusHighlightForeground', editorColorDef.accent);
  data.set('editorSuggestWidget.highlightForeground', editorColorDef.accent);
}

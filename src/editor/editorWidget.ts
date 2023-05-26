import { editorColorDef } from '../color';

export default function setEditorWidget(data: EditorColorMap) {
  data.set('editorWidget.background', editorColorDef.bgColor);
  data.set('editorWidget.border', editorColorDef.primary);
}

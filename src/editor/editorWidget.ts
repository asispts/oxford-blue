import { editorColorDef } from '../color';

export default function setEditorWidget(data: ColorMap) {
  data.set('editorWidget.background', editorColorDef.bgColor);
  data.set('editorWidget.border', editorColorDef.primary);
}

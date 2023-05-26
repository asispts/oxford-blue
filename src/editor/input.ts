import { editorColorDef } from '../color';

export default function setInputColor(data: ColorMap) {
  data.set('input.background', editorColorDef.bgDark);
  data.set('input.border', editorColorDef.primary);
}

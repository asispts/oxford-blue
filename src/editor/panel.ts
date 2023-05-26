import { editorColorDef } from '../color';

export default function setPanelColor(data: ColorMap) {
  data.set('panel.border', editorColorDef.accent);
}

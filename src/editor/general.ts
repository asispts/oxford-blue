import { editorColorDef } from '../color';

export default function editorGeneralSetting(data: ColorMap) {
  data.set('foreground', editorColorDef.fgColor);
}

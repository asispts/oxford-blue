import { editorColorDef } from '../color';

export default function setListColor(data: EditorColorMap) {
  data.set('list.focusOutline', editorColorDef.primary);

  data.set('list.hoverBackground', editorColorDef.bgLight);

  data.set('list.inactiveSelectionBackground', editorColorDef.bgLight);

  data.set('list.activeSelectionBackground', editorColorDef.bgLight);
}

import { editorColorDef } from '../color';

export default function setActivityBar(data: EditorColorMap) {
  data.set('activityBar.background', editorColorDef.bgDark);
  data.set('activityBar.foreground', editorColorDef.accent);
  data.set('activityBar.inactiveForeground', editorColorDef.primary);
  data.set('activityBarBadge.background', editorColorDef.accent);
  data.set('activityBarBadge.foreground', editorColorDef.accentFg);
}

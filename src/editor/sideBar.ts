import { editorColorDef } from '../color';

export default function setSidebarColor(data: EditorColorMap) {
  data.set('sideBar.background', editorColorDef.bgColor);
  data.set('sideBarTitle.foreground', editorColorDef.fgDark);
  data.set('sideBarSectionHeader.background', editorColorDef.bgDark);
  data.set('sideBarSectionHeader.foreground', editorColorDef.fgDark);
}

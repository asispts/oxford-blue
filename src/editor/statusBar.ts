import { editorColorDef } from '../color';

export default function setStatusBar(data: ColorMap) {
  data.set('statusBar.background', editorColorDef.accent);
  data.set('statusBar.foreground', editorColorDef.accentFg);
  data.set('statusBarItem.hoverBackground', editorColorDef.accentHover);
  data.set('statusBar.debuggingBackground', editorColorDef.secondary);
  data.set('statusBar.debuggingForeground', editorColorDef.secondaryFg);
  data.set('statusBar.noFolderBackground', editorColorDef.primary);
  data.set('statusBar.noFolderForeground', editorColorDef.primaryFg);
}

import { editorColorDef } from "../color";

export default function setPanelColor(data: EditorColorMap) {
  data.set("panel.border", editorColorDef.accent);
}

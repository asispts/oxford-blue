import { editorColorDef } from "./color";
import setActivityBar from "./editor/activityBar";
import setBreadcrumb from "./editor/breadcrumb";
import setDropdown from "./editor/dropdown";
import setEditor from "./editor/editor";
import setEditorSuggestWidget from "./editor/editorSuggestWidget";
import setEditorWidget from "./editor/editorWidget";
import setHeaderTab from "./editor/headerTab";
import setInputColor from "./editor/input";
import setListColor from "./editor/list";
import setPanelColor from "./editor/panel";
import setSidebarColor from "./editor/sideBar";
import setStatusBar from "./editor/statusBar";

export default function getEditorColor(): Object {
  const data: EditorColorMap = new Map([
    ["foreground", editorColorDef.fgColor],
  ]);

  setActivityBar(data);
  setBreadcrumb(data);
  setDropdown(data);
  setEditor(data);
  setEditorSuggestWidget(data);
  setEditorWidget(data);
  setHeaderTab(data);
  setInputColor(data);
  setListColor(data);
  setPanelColor(data);
  setSidebarColor(data);
  setStatusBar(data);

  return Object.fromEntries(data);
}

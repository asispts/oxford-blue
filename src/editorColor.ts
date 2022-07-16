import { editorColorDef } from "./color";
import activityBar from "./editor/activityBar";
import breadcrumb from "./editor/breadcrumb";
import dropdown from "./editor/dropdown";
import editor from "./editor/editor";
import editorSuggestWidget from "./editor/editorSuggestWidget";
import editorWidget from "./editor/editorWidget";
import headerTab from "./editor/headerTab";
import input from "./editor/input";
import list from "./editor/list";
import panel from "./editor/panel";
import sidebar from "./editor/sideBar";
import statusBar from "./editor/statusBar";

export default function getEditorColor() {
  return {
    foreground: editorColorDef.steelBlueLight,
    ...activityBar,
    ...breadcrumb,
    ...dropdown,
    ...editor,
    ...editorSuggestWidget,
    ...editorWidget,
    ...headerTab,
    ...input,
    ...list,
    ...panel,
    ...sidebar,
    ...statusBar,
  };
}

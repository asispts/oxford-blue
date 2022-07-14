import editorColorDef from "../colors/editorColorDef";
import activityBar from "./activityBar";
import breadcrumb from "./breadcrumb";
import dropdown from "./dropdown";
import editor from "./editor";
import editorSuggestWidget from "./editorSuggestWidget";
import editorWidget from "./editorWidget";
import editorGroupHeader from "./headerTab";
import input from "./input";
import list from "./list";
import panel from "./panel";
import sidebar from "./sideBar";
import statusBar from "./statusBar";

const editorColor = {
  foreground: editorColorDef.steelBlueLight,
  ...activityBar,
  ...sidebar,
  ...list,
  ...editor,
  ...editorSuggestWidget,
  ...editorGroupHeader,
  ...breadcrumb,
  ...statusBar,
  ...editorWidget,
  ...input,
  ...dropdown,
  ...panel,
};

export default editorColor;

import fs from "node:fs/promises";
import getEditorColor from "./editorColor";
import getTokenColor from "./tokenColors";

(async function () {
  const theme = {
    name: "oxford-blue",
    type: "dark",
    semanticHighlighting: true,
    colors: getEditorColor(),
    tokenColors: getTokenColor(),
  };

  try {
    await fs.writeFile(
      "./oxford-blue-color-theme.json",
      JSON.stringify(theme, null, 4)
    );
  } catch (error) {
    console.log(error);
  }
})();

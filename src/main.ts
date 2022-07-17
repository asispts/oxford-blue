import fs from "node:fs/promises";
import editorColorGenerator from "./editorColorGenerator";
import tokenColorGenerator from "./tokenColorGenerator";

(async function () {
  const theme = {
    name: "oxford-blue",
    type: "dark",
    semanticHighlighting: true,
    colors: editorColorGenerator(),
    tokenColors: tokenColorGenerator(),
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

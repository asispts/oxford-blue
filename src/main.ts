import fs from "node:fs/promises";
import editorColor from "./editor/editorColor";
import tokenColors from "./token/tokenColors";

async function generate(content: string) {
  try {
    await fs.writeFile("./oxford-blue-color-theme.json", content);
  } catch (error) {
    console.log(error);
  }
}

const theme = {
  name: "oxford-blue",
  type: "dark",
  semanticHighlighting: true,
  colors: editorColor,
  tokenColors: tokenColors,
};

generate(JSON.stringify(theme, null, 4));

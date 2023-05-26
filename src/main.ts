import { writeFile } from 'fs/promises';
import * as editorModules from './editor';
import tokenColors from './util/tokenColors';

const editorColors = (): Record<string, string> => {
  const data: EditorColorMap = new Map();

  Object.values(editorModules).forEach((module) => {
    if (typeof module === 'function') {
      module(data);
    }
  });

  return Object.fromEntries(new Map([...data].sort()));
};

(async () => {
  const theme = {
    name: 'oxford-blue',
    type: 'dark',
    semanticHighlighting: true,
    colors: editorColors(),
    tokenColors: tokenColors(),
  };

  try {
    await writeFile('./oxford-blue-color-theme.json', JSON.stringify(theme, null, 4));
  } catch (error) {
    console.log(error);
  }
})();

import { writeFile } from 'fs/promises';
import tokenColors from './util/tokenColors';
import editorColors from './util/editorColors';
import semanticColors from './util/semanticColors';

(async () => {
  const theme = {
    name: 'oxford-blue',
    type: 'dark',
    semanticHighlighting: true,
    colors: editorColors(),
    tokenColors: tokenColors(),
    semanticTokenColors: semanticColors(),
  };

  try {
    await writeFile('./oxford-blue-color-theme.json', JSON.stringify(theme, null, 4));
  } catch (error) {
    console.log(error);
  }
})();

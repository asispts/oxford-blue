import * as editorModules from '../editor';

export default function editorColors(): Record<string, string> {
  const data: EditorColorMap = new Map();

  Object.values(editorModules).forEach((fn) => {
    if (typeof fn === 'function') {
      fn(data);
    }
  });

  return Object.fromEntries(new Map([...data].sort()));
}

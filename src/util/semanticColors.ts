import * as semanticModules from '../semantic';

export default function semanticColors(): Record<string, string> {
  const data: ColorMap = new Map();

  Object.values(semanticModules).forEach((fn) => {
    if (typeof fn === 'function') {
      fn(data);
    }
  });

  return Object.fromEntries(new Map([...data].sort()));
}

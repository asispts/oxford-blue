import { tokenColorsDef } from '../color';

export default function defaultLibrary(data: ColorMap): void {
  data.set('*.defaultLibrary', tokenColorsDef.supportClass);
  data.set('method.defaultLibrary', tokenColorsDef.builtin);
  data.set('property.defaultLibrary', tokenColorsDef.builtin);
}

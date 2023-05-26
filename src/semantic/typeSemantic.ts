import { tokenColorsDef } from '../color';

export default function typeSemantic(data: ColorMap): void {
  data.set('type', tokenColorsDef.supportClass);
  data.set('interface', tokenColorsDef.supportClass);

  data.set('type.declaration', tokenColorsDef.default);
  data.set('interface.declaration', tokenColorsDef.default);
  data.set('class.declaration', tokenColorsDef.default);
}

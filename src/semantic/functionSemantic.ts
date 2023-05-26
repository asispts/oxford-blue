import { syntaxColors, tokenColorsDef } from '../color';

export default function functionSemantic(data: ColorMap): void {
  data.set('function', syntaxColors.red);
  data.set('method', tokenColorsDef.default);
  data.set('function.declaration', tokenColorsDef.default);
  data.set('method.declaration', syntaxColors.red);
}

import { syntaxColors, tokenColorsDef } from '../color';

export default function variableSemantic(data: ColorMap): void {
  data.set('property', tokenColorsDef.default);

  data.set('property.declaration', syntaxColors.cyan);
}

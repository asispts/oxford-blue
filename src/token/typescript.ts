import { syntaxColors, tokenColorsDef } from '../color';
import TokenColor from '../TokenColor';

export default function typescriptToken(token: TokenColor) {
  token.set('String template expression', ['punctuation.definition.template-expression'], {
    foreground: syntaxColors.salmon,
  });

  token.set('jsdoc keyword', ['punctuation.definition.block.tag.jsdoc', 'storage.type.class.jsdoc'], {
    foreground: tokenColorsDef.comment,
    fontStyle: 'bold italic',
  });
}

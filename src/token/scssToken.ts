import { syntaxColors } from '../color';
import TokenColor from '../TokenColor';

export default function scssToken(token: TokenColor) {
  token.set(
    'SCSS keyword',
    [
      'keyword.control.at-rule',
      'punctuation.definition.keyword', // Character @ in scss. eq: @import
      'punctuation.definition.interpolation', // scss e.q: #{...}
    ],
    {
      foreground: syntaxColors.blueLight,
    }
  );

  token.set(
    'CSS class and ID selector',
    [
      'punctuation.definition.entity.css', // . and # characters
    ],
    {
      foreground: syntaxColors.orange,
    }
  );
}

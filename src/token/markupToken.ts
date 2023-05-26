import { syntaxColors } from '../color';

export default function markupToken(token: TokenColor) {
  token.set(
    'String',
    [
      'entity.name.tag',
      'punctuation.definition.tag', // markup <> characters
    ],
    {
      foreground: syntaxColors.salmon,
    }
  );

  token.set('Markup attribute name', ['entity.other.attribute-name'], {
    foreground: syntaxColors.orange,
  });

  token.set('JSX component', ['support.class.component'], {
    foreground: syntaxColors.cyan,
  });
}

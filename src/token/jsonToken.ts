import { syntaxColors } from '../color';

export default function jsonToken(token: TokenColor) {
  token.set(
    'JSON object key',
    [
      'support.type.property-name.json', // json object key
      'punctuation.support.type.property-name', // json object key quotation
    ],
    {
      foreground: syntaxColors.salmon,
    }
  );
}

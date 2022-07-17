import { syntaxColors } from "../color";
import TokenColor from "../TokenColor";

export default function typescriptToken(token: TokenColor) {
  token.set(
    "String template expression",
    ["punctuation.definition.template-expression"],
    {
      foreground: syntaxColors.salmon,
    }
  );
}

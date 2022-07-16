import { tokenColorsDef } from "../color";
import tokenScope from "../utils/helper";

export default function getMarkupTokens() {
  const tokens: Array<TokenColorType> = [];

  tokenScope(
    tokens,
    "Markup tag",
    [
      "entity.name.tag", // markup tag name
      "punctuation.definition.tag", // markup <> characters
    ],
    {
      foreground: tokenColorsDef.keyword,
    }
  );

  tokenScope(
    tokens,
    "Markup attribute name",
    [
      "entity.other.attribute-name", // markup attribute name
    ],
    {
      foreground: tokenColorsDef.variable,
    }
  );

  return tokens;
}

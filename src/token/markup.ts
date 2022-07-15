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
      foreground: "#ffa65e",
    }
  );

  tokenScope(
    tokens,
    "Markup attribute name",
    [
      "entity.other.attribute-name", // markup attribute name
    ],
    {
      foreground: "#efff73",
    }
  );

  return tokens;
}

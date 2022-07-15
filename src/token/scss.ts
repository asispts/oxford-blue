import tokenScope from "../utils/helper";

export default function getScssTokens() {
  const tokens: Array<TokenColorType> = [];

  tokenScope(
    tokens,
    "SCSS keyword",
    [
      "keyword.control.at-rule",
      "punctuation.definition.keyword", // Character @ in scss. eq: @import
      "punctuation.definition.interpolation", // scss e.q: #{...}
    ],
    {
      foreground: "#ffa65e",
    }
  );

  tokenScope(
    tokens,
    "CSS tag selector",
    [
      "entity.name.tag.css", // tag selector
    ],
    {
      foreground: "#ffa65e",
    }
  );

  tokenScope(
    tokens,
    "CSS class and ID selector",
    [
      "entity.other.attribute-name.class.css", // class selector
      "entity.other.attribute-name.id.css", // id selector
    ],
    {
      foreground: "#efff73",
    }
  );

  return tokens;
}

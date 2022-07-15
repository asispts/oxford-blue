import tokenColorsDef from "../colors/tokenColorsDef";
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
      foreground: tokenColorsDef.keyword,
    }
  );

  tokenScope(
    tokens,
    "CSS tag selector",
    [
      "entity.name.tag.css", // tag selector
    ],
    {
      foreground: tokenColorsDef.keyword,
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
      foreground: tokenColorsDef.variable,
    }
  );

  return tokens;
}

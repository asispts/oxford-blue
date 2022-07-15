import tokenColorsDef from "../colors/tokenColorsDef";
import tokenScope from "../utils/helper";

export default function getPhpTokens() {
  const tokens: Array<TokenColorType> = [];

  tokenScope(
    tokens,
    "PHP8 attributes",
    [
      "support.attribute.php",
      "meta.attribute.php",
      "entity.name.variable.parameter",
    ],
    {
      foreground: tokenColorsDef.muted,
      fontStyle: "italic",
    }
  );

  return tokens;
}

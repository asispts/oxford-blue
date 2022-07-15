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
      foreground: "#5a829e",
      fontStyle: "italic",
    }
  );

  return tokens;
}

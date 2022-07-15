import tokenScope from "../utils/helper";

export default function getJsonTokens() {
  const tokens: Array<TokenColorType> = [];

  tokenScope(
    tokens,
    "JSON object key",
    [
      "support.type.property-name.json", // json object key
      "punctuation.support.type.property-name", // json object key quotation
    ],
    {
      foreground: "#ffa65e",
    }
  );

  return tokens;
}

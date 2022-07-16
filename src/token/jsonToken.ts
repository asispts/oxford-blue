import { syntaxColors } from "../color";
import TokenColor from "./TokenColor";

export default function jsonToken(token: TokenColor) {
  token.set(
    "JSON object key",
    [
      "support.type.property-name.json", // json object key
      "punctuation.support.type.property-name", // json object key quotation
    ],
    {
      foreground: syntaxColors.blueLight,
    }
  );
}

import { tokenColorsDef } from "../color";
import tokenScope from "../utils/helper";

export default function getMakefileTokens() {
  const tokens: Array<TokenColorType> = [];

  tokenScope(
    tokens,
    "Makefile target",
    [
      "entity.name.function.target", // makefile target
    ],
    {
      foreground: tokenColorsDef.keyword,
    }
  );

  return tokens;
}

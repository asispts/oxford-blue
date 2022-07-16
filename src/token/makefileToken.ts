import { syntaxColors } from "../color";
import TokenColor from "./TokenColor";

export default function makefileToken(token: TokenColor) {
  token.set("Makefile target", ["entity.name.function.target"], {
    foreground: syntaxColors.cyan,
  });

  token.set("Makefile target", ["meta.scope.prerequisites"], {
    foreground: syntaxColors.green,
  });
}

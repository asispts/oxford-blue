import { tokenColorsDef } from "../color";
import TokenColor from "./TokenColor";

export default function phpToken(token: TokenColor) {
  token.set(
    "<?php and ?> symbols",
    [
      "punctuation.section.embedded", // <?php ?>
    ],
    {
      foreground: tokenColorsDef.keywordOperator,
    }
  );

  token.set("PHPDoc keywords", ["keyword.other.phpdoc"], {
    foreground: tokenColorsDef.comment,
    fontStyle: "italic bold",
  });

  token.set(
    "PHP8 Attributes",
    [
      "support.attribute.php",
      "meta.attribute.php",
      "entity.name.variable.parameter",
    ],
    {
      foreground: tokenColorsDef.comment,
      fontStyle: "italic",
    }
  );
}

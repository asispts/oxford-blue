import tokenColorsDef from "../colors/tokenColorsDef";
import tokenScope from "../utils/helper";

export default function getMarkdownTokens(): Array<TokenColorType> {
  const tokens: Array<TokenColorType> = [];

  tokenScope(tokens, "Default markdown text", ["text.html.markdown"], {
    foreground: tokenColorsDef.default,
  });

  tokenScope(tokens, "Markdown quotation", ["markup.quote.markdown"], {
    foreground: tokenColorsDef.muted,
  });

  tokenScope(
    tokens,
    "Markdown headings",
    ["markup.heading.markdown", "punctuation.definition.heading.markdown"],
    {
      foreground: tokenColorsDef.keyword,
      fontStyle: "bold",
    }
  );

  tokenScope(tokens, "Markdown italic", ["markup.italic.markdown"], {
    foreground: tokenColorsDef.default,
    fontStyle: "italic",
  });

  tokenScope(tokens, "Markdown bold", ["markup.bold.markdown"], {
    foreground: tokenColorsDef.default,
    fontStyle: "bold",
  });

  tokenScope(
    tokens,
    "Markdown inline code",
    ["markup.inline.raw", "punctuation.definition.raw"],
    {
      foreground: tokenColorsDef.variable,
    }
  );

  tokenScope(tokens, "Markdown block code", ["fenced_code.block.language"], {
    foreground: tokenColorsDef.muted,
  });

  tokenScope(tokens, "Markdown link", ["markup.underline.link"], {
    foreground: tokenColorsDef.supportClass,
  });

  return tokens;
}

import tokenScope from "../utils/helper";

export default function getMarkdownTokens(): Array<TokenColorType> {
  const tokens: Array<TokenColorType> = [];

  tokenScope(tokens, "Default markdown text", ["text.html.markdown"], {
    foreground: "#9bc4e2",
  });
  tokenScope(tokens, "Markdown quotation", ["markup.quote.markdown"], {
    foreground: "#5a829e",
  });
  tokenScope(
    tokens,
    "Markdown headings",
    ["markup.heading.markdown", "punctuation.definition.heading.markdown"],
    {
      foreground: "#ffa65e",
      fontStyle: "bold",
    }
  );
  tokenScope(tokens, "Markdown italic", ["markup.italic.markdown"], {
    foreground: "#9bc4e2",
    fontStyle: "italic",
  });
  tokenScope(tokens, "Markdown bold", ["markup.bold.markdown"], {
    foreground: "#9bc4e2",
    fontStyle: "bold",
  });
  tokenScope(
    tokens,
    "Markdown inline code",
    ["markup.inline.raw", "punctuation.definition.raw"],
    {
      foreground: "#efff73",
    }
  );
  tokenScope(tokens, "Markdown block code", ["fenced_code.block.language"], {
    foreground: "#5a829e",
  });
  tokenScope(tokens, "Markdown link", ["markup.underline.link"], {
    foreground: "#0AE0EE",
  });

  return tokens;
}

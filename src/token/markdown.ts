import tokenScope from "../utils/helper";

export default function markdownColors(): Array<TokenColorType> {
  return [
    tokenScope("Default markdown text", ["text.html.markdown"], {
      foreground: "#9bc4e2",
    }),
    tokenScope("Markdown quotation", ["markup.quote.markdown"], {
      foreground: "#5a829e",
    }),
    tokenScope(
      "Markdown headings",
      ["markup.heading.markdown", "punctuation.definition.heading.markdown"],
      {
        foreground: "#ffa65e",
        fontStyle: "bold",
      }
    ),
    tokenScope("Markdown italic", ["markup.italic.markdown"], {
      foreground: "#9bc4e2",
      fontStyle: "italic",
    }),
    tokenScope("Markdown bold", ["markup.bold.markdown"], {
      foreground: "#9bc4e2",
      fontStyle: "bold",
    }),
    tokenScope(
      "Markdown inline code",
      ["markup.inline.raw", "punctuation.definition.raw"],
      {
        foreground: "#efff73",
      }
    ),
    tokenScope("Markdown block code", ["fenced_code.block.language"], {
      foreground: "#5a829e",
    }),
    tokenScope("Markdown link", ["markup.underline.link"], {
      foreground: "#0AE0EE",
    }),
  ];
}

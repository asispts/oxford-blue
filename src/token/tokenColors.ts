import tokenColorsDef from "../colors/tokenColorsDef";
import tokenScope from "../utils/helper";
import markdownColors from "./markdown";

const scope: TokenScopeType = {
  default: ["variable.other.property", "meta.method-call"],
  muted: [
    "punctuation",
    "support.other.namespace",
    "punctuation.separator.inheritance",
    "entity.name.type.namespace",
  ],
  comments: ["comment", "punctuation.definition.comment"],
  commentKeywords: ["keyword.other.phpdoc"],
  strings: ["string", "punctuation.definition.string"],
  constants: [
    "constant",
    "punctuation.section.embedded", // <?php ?>
    "keyword.other.unit", // scss e.q: 100%
    "punctuation.definition.constant", // scss e.q: #f00
    "support.constant", // php e.q: DIRECTORY_SEPARATOR
    "punctuation.definition.entity", // html e.q: &copy;
  ],
  keywords: [
    "keyword",
    "keyword.operator.new", // js new operator
    "storage.modifier",
    "storage.type",
    "support.type.property-name.json",
    "punctuation.support.type.property-name",
    "entity.name.tag",
    "punctuation.definition.tag",
    "support.type.primitive",
    "punctuation.definition.keyword", // scss e.q: @import
    "punctuation.definition.interpolation", // scss e.q: #{...}
    "entity.name.function.target", // makefile target
  ],
  variables: [
    "variable",
    "punctuation.definition.variable",
    "entity.other.attribute-name",
  ],
  builtinFunctions: ["support.function", "support.class.builtin"],
  functionCalls: ["meta.function-call"],
  supportClasses: ["support.class"],
  attributes: [
    "support.attribute.php",
    "meta.attribute.php",
    "entity.name.variable.parameter",
  ],
};

const tokenColors: Array<TokenColorType> = [
  tokenScope("Default color", scope.default, { foreground: "#9BC4E2" }),
  tokenScope("Muted text", scope.muted, { foreground: "#5a829e" }),
  tokenScope("Comment", scope.comments, {
    foreground: tokenColorsDef.blue,
    fontStyle: "italic",
  }),
  tokenScope("Comment Keyword", scope.commentKeywords, {
    foreground: tokenColorsDef.blue,
    fontStyle: "italic bold",
  }),
  tokenScope("String", scope.strings, { foreground: "#64DE83" }),
  tokenScope("Constant", scope.constants, { foreground: "#8373ff" }),
  tokenScope("Keywords", scope.keywords, { foreground: "#ffa65e" }),
  tokenScope("Variables", scope.variables, { foreground: "#efff73" }),
  tokenScope("Built-in functions", scope.builtinFunctions, {
    foreground: "#ff73ef",
  }),
  tokenScope("Functions call", scope.functionCalls, { foreground: "#ff7a73" }),
  tokenScope("Support classes", scope.supportClasses, {
    foreground: "#0AE0EE",
  }),
  tokenScope("PHP8 attributes", scope.attributes, {
    foreground: "#5a829e",
    fontStyle: "italic",
  }),
];

const markdownScope = markdownColors();

tokenColors.push(...markdownScope);

export default tokenColors;

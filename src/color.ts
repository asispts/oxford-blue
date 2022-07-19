const oxfordBlue = {
  default: "#002147",
  dark: "#001a39",
  light: "#002959",
};

const paleCerulean = {
  default: "#72ABD6",
  dark: "#2D658D",
  light: "#9BC4E2",
};

const editorColorDef = {
  // Editor colors
  editorBg: oxfordBlue.dark,
  editorFg: paleCerulean.default,

  // Background colors
  bgColor: oxfordBlue.default,
  bgDark: oxfordBlue.dark,
  bgLight: oxfordBlue.light,

  // Foreground colors
  fgColor: paleCerulean.default,
  fgDark: paleCerulean.dark,
  fgLight: paleCerulean.light,

  // Primary colors
  primary: "#0069e6",
  primaryFg: "#e1e4f8",

  // Accent colors
  accent: "#efff73",
  accentFg: "#4B4E29",
  accentHover: "#bdcf44",
};

const syntaxColors = {
  blueLight: "#369CFF",
  yellow: "#efff73",
  yellowDark: "#d3e830",
  green: "#64de83",
  purple: "#8373ff",
  cyan: "#13d3d3",
  orange: "#ffa65e",
  magenta: "#ff73ef",
  salmon: "#ff7a73",
  red: "#E6427C", // unused
  blue: "#176bcf", // unused
};

const tokenColorsDef = {
  default: paleCerulean.default,
  muted: paleCerulean.dark,
  comment: paleCerulean.dark,
  string: syntaxColors.green,
  constant: syntaxColors.purple,
  keyword: syntaxColors.blueLight,
  dataType: syntaxColors.orange,
  keywordOperator: syntaxColors.orange,
  storage: syntaxColors.cyan,
  variable: syntaxColors.yellow,
  builtin: syntaxColors.magenta,
  supportClass: syntaxColors.salmon,
  functionCalls: paleCerulean.light,
};

export { editorColorDef, syntaxColors, tokenColorsDef };

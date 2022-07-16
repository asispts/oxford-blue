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
  blue: "#176bcf",
  blueLight: "#4C9EFF",
  yellow: "#efff73",
  yellowDark: "#d3e830",
  green: "#64de83",
  purple: "#8373ff",
  cyan: "#13d3d3",
  orange: "#ffa65e",
  salmon: "#ff7a73",
  magenta: "#ff73ef",
};

const tokenColorsDef = {
  default: paleCerulean.default,
  muted: paleCerulean.dark,
  comment: paleCerulean.dark,
  string: syntaxColors.green,
  constant: syntaxColors.purple,
  keyword: syntaxColors.blue,
  keywordOperator: syntaxColors.salmon,
  storage: syntaxColors.cyan,
  dataType: syntaxColors.orange,
  variable: syntaxColors.yellow,
  builtin: syntaxColors.magenta,
  supportClass: syntaxColors.blueLight,
  functionCalls: paleCerulean.light,
};

export { editorColorDef, syntaxColors, tokenColorsDef };

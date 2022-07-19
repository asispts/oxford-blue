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
  blueLight: "#369CFF",
  yellow: "#efff73",
  yellowDark: "#d3e830",
  green: "#64de83",
  purple: "#8373ff",
  orange: "#ffa65e",
  magenta: "#ff73ef",
  salmon: "#ff7a73",
  cyan: "#13d3d3", // unused
  red: "#E6427C", // unused
};

const tokenColorsDef = {
  default: paleCerulean.default,
  muted: paleCerulean.dark,
  comment: paleCerulean.dark,
  string: syntaxColors.green,
  constant: syntaxColors.purple,
  keyword: syntaxColors.blue,
  dataType: syntaxColors.orange,
  keywordOperator: syntaxColors.orange,
  storage: syntaxColors.blueLight,
  variable: syntaxColors.yellow,
  builtin: syntaxColors.magenta,
  supportClass: syntaxColors.salmon,
  functionCalls: paleCerulean.light,
};

export { editorColorDef, syntaxColors, tokenColorsDef };

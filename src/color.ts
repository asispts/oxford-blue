const colors = {
  light: "#9bc4e2",
  lightDark: "#5a829e",
  blue: "#176bcf",
  yellow: "#efff73",
  green: "#64de83",
  purple: "#8373ff",
  cyan: "#0ae0ee",
  orange: "#ffa65e",
  magenta: "#ff73ef",
  red: "#ff7a73",
};

const oxfordBlue = {
  default: "#002147",
  dark: "#001a39",
  light: "#002959",
};

const steelBlue = {
  default: "#5A91BF",
  dark: "#396A93",
  light: "#91B6D4",
};

const editorColorDef = {
  // Editor colors
  editorBg: oxfordBlue.dark,
  editorFg: steelBlue.default,

  // Background colors
  bgColor: oxfordBlue.default,
  bgDark: oxfordBlue.dark,
  bgLight: oxfordBlue.light,

  // Foreground colors
  fgColor: steelBlue.default,
  fgDark: steelBlue.dark,
  fgLight: steelBlue.light,

  // Primary colors
  primary: "#0069e6",
  primaryFg: "#e1e4f8",

  // Accent colors
  accent: "#efff73",
  accentFg: "#4B4E29",
  accentHover: "#bdcf44",
};

const tokenColorsDef = {
  default: colors.light,
  muted: colors.lightDark,
  comment: colors.blue,
  string: colors.green,
  constant: colors.purple,
  keyword: colors.orange,
  variable: colors.yellow,
  builtin: colors.magenta,
  functionCalls: colors.red,
  supportClass: colors.cyan,
  datatype: colors.orange,
  modifier: colors.orange,
};

export { editorColorDef, tokenColorsDef };

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

const editorColorDef = {
  ob: "#002147",
  obDark: "#001a39",
  obLight: "#002959",
  steelBlueLight: "#91B6D4",
  steelBlue: "#5A91BF",
  steelBlueDark: "#396A93",
  yellow: colors.yellow,
  blue: colors.blue,
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

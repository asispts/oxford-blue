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

export default tokenColorsDef;

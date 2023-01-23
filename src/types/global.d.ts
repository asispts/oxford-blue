type EditorColorMap = Map<string, string>;

type SemanticColor = {
  [key: string]: string;
};

interface TokenSettingType {
  foreground: string;
  fontStyle?: string;
}

type TokenColorType = {
  name: string;
  scope: Array<string>;
  settings: TokenSettingType;
};

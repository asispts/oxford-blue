type ColorMap = Map<string, string>;

type TokenSettingType = {
  foreground: string;
  fontStyle?: string;
};

type TokenColorType = {
  name: string;
  scope: string[];
  settings: TokenSettingType;
};

interface TokenColor {
  set(name: string, scope: string[], settings: TokenSettingType): void;
  getData(): TokenColorType[];
}

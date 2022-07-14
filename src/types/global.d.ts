interface TokenSettingType {
  foreground: string;
  fontStyle?: string;
}

interface TokenColorType {
  name: string;
  scope: Array<string>;
  settings: TokenSettingType;
}

interface TokenScopeType {
  default: Array<string>;
  muted: Array<string>;
  comments: Array<string>;
  commentKeywords: Array<string>;
  strings: Array<string>;
  constants: Array<string>;
  keywords: Array<string>;
  variables: Array<string>;
  builtinFunctions: Array<string>;
  functionCalls: Array<string>;
  supportClasses: Array<string>;
  attributes: Array<string>;
}

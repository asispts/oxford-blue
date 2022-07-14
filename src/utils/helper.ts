function tokenScope(
  name: string,
  scope: Array<string>,
  settings: TokenSettingType
): TokenColorType {
  return {
    name,
    scope,
    settings,
  };
}

export default tokenScope;

function tokenScope(
  token: Array<TokenColorType>,
  name: string,
  scope: Array<string>,
  settings: TokenSettingType
) {
  if (scope.length <= 0) {
    return;
  }

  token.push({ name, scope, settings });
}

export default tokenScope;

class TokenColor {
  private data: Array<TokenColorType>;

  constructor() {
    this.data = [];
  }

  set(name: string, scope: Array<string>, settings: TokenSettingType) {
    if (scope.length <= 0) {
      return;
    }

    this.data.push({ name, scope, settings });
  }

  getData(): Array<TokenColorType> {
    return this.data;
  }
}

export default TokenColor;

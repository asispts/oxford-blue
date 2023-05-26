import * as tokenModules from '../token';

class TokenColorImpl implements TokenColor {
  private data: TokenColorType[] = [];

  set(name: string, scope: string[], settings: TokenSettingType): void {
    if (scope.length > 0) {
      this.data.push({ name, scope, settings });
    }
  }

  getData(): TokenColorType[] {
    return this.data;
  }
}

export default function tokenColors(): TokenColorType[] {
  const token: TokenColorImpl = new TokenColorImpl();

  Object.values(tokenModules).forEach((fn) => {
    if (typeof fn === 'function') {
      fn(token);
    }
  });

  return token.getData();
}

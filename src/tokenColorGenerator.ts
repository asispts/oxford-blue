import setGenericToken from "./token/genericToken";
import jsonToken from "./token/jsonToken";
import makefileToken from "./token/makefileToken";
import markupToken from "./token/markup";
import phpToken from "./token/phpToken";
import scssToken from "./token/scssToken";
import typescriptToken from "./token/typescript";
import TokenColor from "./TokenColor";

export default function tokenColorGenerator() {
  const token = new TokenColor();

  setGenericToken(token);
  phpToken(token);
  jsonToken(token);
  makefileToken(token);
  markupToken(token);
  scssToken(token);
  typescriptToken(token);

  return token.getData();
}

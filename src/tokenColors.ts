import setGenericToken from "./token/genericToken";
import jsonToken from "./token/jsonToken";
import makefileToken from "./token/makefileToken";
import markupToken from "./token/markup";
import phpToken from "./token/phpToken";
import scssToken from "./token/scssToken";
import TokenColor from "./token/TokenColor";
import typescriptToken from "./token/typescript";

export default function getTokenColor() {
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

import setGenericToken from "./token/genericToken";
import jsonToken from "./token/jsonToken";
import phpToken from "./token/phpToken";
import TokenColor from "./token/TokenColor";

export default function getTokenColor() {
  const token = new TokenColor();

  setGenericToken(token);
  phpToken(token);
  jsonToken(token);

  return token.getData();
}

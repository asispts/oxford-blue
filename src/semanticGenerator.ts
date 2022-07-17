import getSemanticToken from "./semantic/genericSemantic";

export default function semanticGenerator(): Object {
  const semantic = getSemanticToken();

  return semantic.getData();
}

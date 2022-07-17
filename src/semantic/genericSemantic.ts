import { tokenColorsDef } from "../color";
import {
  SemanticModifier,
  SemanticToken,
  SemanticTokenType,
} from "../SemanticToken";

export default function getSemanticToken(): SemanticToken {
  const semantic = new SemanticToken();

  // Generic
  semantic.generic(SemanticTokenType.Function, tokenColorsDef.functionCalls);
  semantic.generic(SemanticTokenType.Method, tokenColorsDef.functionCalls);
  semantic.generic(SemanticTokenType.Interface, tokenColorsDef.supportClass);
  semantic.generic(SemanticTokenType.Type, tokenColorsDef.supportClass);

  // Declaration
  semantic.set(SemanticModifier.Declaration, tokenColorsDef.default);
  semantic.set(
    SemanticModifier.Declaration,
    tokenColorsDef.variable,
    SemanticTokenType.Property
  );

  // Builtin variables, functions, etc
  semantic.set(SemanticModifier.DefaultLibrary, tokenColorsDef.builtin);
  // Except for method call
  // semantic.set(
  //   SemanticModifier.DefaultLibrary,
  //   tokenColorsDef.default,
  //   SemanticTokenType.Method
  // );

  return semantic;
}

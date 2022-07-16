import { tokenColorsDef } from "./color";
import getGenericScope from "./token/generic";
import getJsonTokens from "./token/json";
import getMakefileTokens from "./token/makefile";
import getMarkdownTokens from "./token/markdown";
import getMarkupTokens from "./token/markup";
import getPhpTokens from "./token/php";
import getScssTokens from "./token/scss";
import tokenScope from "./utils/helper";

function generateToken(tokens: Array<TokenColorType>, scope: TokenScopeType) {
  tokenScope(tokens, "Default color", scope.default, {
    foreground: tokenColorsDef.default,
  });
  tokenScope(tokens, "Muted text", scope.muted, {
    foreground: tokenColorsDef.muted,
  });
  tokenScope(tokens, "Comment", scope.comments, {
    foreground: tokenColorsDef.comment,
    fontStyle: "italic",
  });
  tokenScope(tokens, "Comment Keyword", scope.commentKeywords, {
    foreground: tokenColorsDef.comment,
    fontStyle: "italic bold",
  });
  tokenScope(tokens, "String", scope.strings, {
    foreground: tokenColorsDef.string,
  });
  tokenScope(tokens, "Constant", scope.constants, {
    foreground: tokenColorsDef.constant,
  });
  tokenScope(tokens, "Keywords", scope.keywords, {
    foreground: tokenColorsDef.keyword,
  });
  tokenScope(tokens, "Modifiers", scope.modifiers, {
    foreground: tokenColorsDef.keyword,
  });
  tokenScope(tokens, "Data types", scope.datatypes, {
    foreground: tokenColorsDef.keyword,
  });
  tokenScope(tokens, "Variables", scope.variables, {
    foreground: tokenColorsDef.variable,
  });
  tokenScope(tokens, "Built-in functions and classes", scope.builtin, {
    foreground: tokenColorsDef.builtin,
  });
  tokenScope(tokens, "Functions call", scope.functionCalls, {
    foreground: tokenColorsDef.functionCalls,
  });
  tokenScope(tokens, "Support classes", scope.supportClasses, {
    foreground: tokenColorsDef.supportClass,
  });
}

export default function getTokenColor() {
  const scope = getGenericScope();
  const tokens: Array<TokenColorType> = [];
  generateToken(tokens, scope);

  const phpTokens = getPhpTokens();
  const mdTokens = getMarkdownTokens();
  const jsonTokens = getJsonTokens();
  const markupTokens = getMarkupTokens();
  const scssTokens = getScssTokens();
  const makefileTokens = getMakefileTokens();

  return [
    ...tokens,
    ...phpTokens,
    ...mdTokens,
    ...jsonTokens,
    ...markupTokens,
    ...scssTokens,
    ...makefileTokens,
  ];
}

import tokenColorsDef from "./colors/tokenColorsDef";
import getGenericScope from "./token/generic";
import getJsonTokens from "./token/json";
import getMakefileTokens from "./token/makefile";
import getMarkdownTokens from "./token/markdown";
import getMarkupTokens from "./token/markup";
import getPhpTokens from "./token/php";
import getScssTokens from "./token/scss";
import tokenScope from "./utils/helper";

function generateToken(tokens: Array<TokenColorType>, scope: TokenScopeType) {
  tokenScope(tokens, "Default color", scope.default, { foreground: "#9BC4E2" });
  tokenScope(tokens, "Muted text", scope.muted, { foreground: "#5a829e" });
  tokenScope(tokens, "Comment", scope.comments, {
    foreground: tokenColorsDef.blue,
    fontStyle: "italic",
  });
  tokenScope(tokens, "Comment Keyword", scope.commentKeywords, {
    foreground: tokenColorsDef.blue,
    fontStyle: "italic bold",
  });
  tokenScope(tokens, "String", scope.strings, { foreground: "#64DE83" });
  tokenScope(tokens, "Constant", scope.constants, { foreground: "#8373ff" });
  tokenScope(tokens, "Keywords", scope.keywords, { foreground: "#ffa65e" });
  tokenScope(tokens, "Variables", scope.variables, { foreground: "#efff73" });
  tokenScope(tokens, "Built-in functions and classes", scope.builtin, {
    foreground: "#ff73ef",
  });
  tokenScope(tokens, "Functions call", scope.functionCalls, {
    foreground: "#ff7a73",
  });
  tokenScope(tokens, "Support classes", scope.supportClasses, {
    foreground: "#0AE0EE",
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

enum SemanticModifier {
  Declaration = "declaration",
  Definition = "definition",
  Readonly = "readonly",
  Static = "static",
  Deprecated = "deprecated",
  Abstract = "abstract",
  Async = "async",
  Modification = "modification",
  Documentation = "documentation",
  DefaultLibrary = "defaultLibrary",
}

enum SemanticTokenType {
  Namespace = "namespace",
  Class = "class",
  Enum = "enum",
  Interface = "interface",
  Struct = "struct",
  TypeParameter = "typeParameter",
  Type = "type",
  Parameter = "parameter",
  Variable = "variable",
  Property = "property",
  EnumMember = "enumMember",
  Decorator = "decorator",
  Event = "event",
  Function = "function",
  Method = "method",
  Macro = "macro",
  Label = "label",
  Comment = "comment",
  String = "string",
  Keyword = "keyword",
  Number = "number",
  Regexp = "regexp",
  Operator = "operator",
}

enum SemanticLanguage {
  Typescript = "ts",
}

class SemanticToken {
  private data: SemanticColor;

  constructor() {
    this.data = {};
  }

  set(
    modifier: SemanticModifier,
    value: string,
    tokenType?: SemanticTokenType,
    language?: SemanticLanguage
  ) {
    let type = "*";
    if (tokenType !== undefined) {
      type = tokenType;
    }

    let scope = `${type}.${modifier}`;
    if (language !== undefined) {
      scope = `${scope}:${language}`;
    }

    this.data[scope] = value;
  }

  generic(type: SemanticTokenType, value: string) {
    this.data[type] = value;
  }

  getData(): SemanticColor {
    return this.data;
  }
}

export { SemanticToken, SemanticModifier, SemanticTokenType, SemanticLanguage };

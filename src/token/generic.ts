export default function getGenericScope(): TokenScopeType {
  const scope = {
    default: ["variable.other.property", "meta.method-call"],
    muted: [
      "punctuation",
      "support.other.namespace",

      // eq: namespace separator in PHP
      "punctuation.separator.inheritance",

      // eq: namespace definition in PHP
      // namespace App;
      "entity.name.type.namespace",
    ],
    comments: ["comment", "punctuation.definition.comment"],
    commentKeywords: ["keyword.other.phpdoc"],
    strings: ["string", "punctuation.definition.string"],
    constants: [
      "constant",
      "punctuation.section.embedded", // <?php ?>
      "keyword.other.unit", // scss e.q: 100%
      "punctuation.definition.constant", // scss e.q: #f00
      "support.constant", // php e.q: DIRECTORY_SEPARATOR
      "punctuation.definition.entity", // html e.q: &copy;
    ],
    keywords: [
      "keyword",
      "keyword.operator.new", // js new operator
    ],
    modifiers: ["storage.modifier"],
    datatypes: [
      "storage.type",
      "support.type.primitive", // Primitive data types in typescript
    ],
    variables: [
      "variable",
      "punctuation.definition.variable", // Char "$" in php variable
    ],
    builtin: ["support.function", "support.class.builtin"],
    functionCalls: ["meta.function-call"],
    supportClasses: ["support.class"],
  };

  return scope;
}

import { tokenColorsDef } from '../color';

export default function genericToken(token: TokenColor): void {
  token.set('Default text', ['variable.other.property'], { foreground: tokenColorsDef.default });
  token.set('Muted text', ['punctuation'], { foreground: tokenColorsDef.muted });
  token.set('Comment', ['comment', 'punctuation.definition.comment'], {
    foreground: tokenColorsDef.comment,
    fontStyle: 'italic',
  });
  token.set('String', ['string', 'punctuation.definition.string'], {
    foreground: tokenColorsDef.string,
  });

  token.set(
    'Variable',
    [
      'variable',
      'punctuation.definition.variable', // Char "$" in php variable
    ],
    {
      foreground: tokenColorsDef.variable,
    }
  );

  token.set(
    'Constant',
    [
      'constant',
      'keyword.other.unit', // scss e.q: 100%
      'punctuation.definition.constant', // scss e.q: #f00
      'support.constant', // php e.q: DIRECTORY_SEPARATOR
      'punctuation.definition.entity', // html e.q: &copy;
    ],
    {
      foreground: tokenColorsDef.constant,
    }
  );

  token.set('Keyword Operators', ['keyword.operator'], {
    foreground: tokenColorsDef.keywordOperator,
    fontStyle: '',
  });

  token.set(
    'Keyword',
    [
      'keyword',
      'keyword.operator.new', // js new operator
      'storage.modifier',
    ],
    {
      foreground: tokenColorsDef.keyword,
      fontStyle: 'italic',
    }
  );

  token.set('Storage', ['storage.type'], {
    foreground: tokenColorsDef.storage,
    fontStyle: 'italic',
  });

  token.set(
    'Data type',
    [
      'keyword.other.type',
      'support.type.primitive', // Primitive data types in typescript
    ],
    {
      foreground: tokenColorsDef.dataType,
      fontStyle: '',
    }
  );

  token.set('Builtin classes and functions', ['support.function', 'support.class.builtin'], {
    foreground: tokenColorsDef.builtin,
  });

  token.set('Support class', ['support.class'], {
    foreground: tokenColorsDef.supportClass,
  });

  token.set('Function call', ['meta.function-call', 'meta.method-call'], {
    foreground: tokenColorsDef.functionCalls,
  });

  token.set(
    'Namespace path',
    [
      // eq: namespace declaration in PHP
      // namespace App;
      'entity.name.type.namespace',

      // Import namespace
      'support.other.namespace',

      // eq: namespace separator in PHP
      'punctuation.separator.inheritance',
    ],
    {
      foreground: tokenColorsDef.muted,
      fontStyle: 'italic',
    }
  );

  token.set('Punctuation accessor', ['punctuation.accessor'], { foreground: tokenColorsDef.keywordOperator });
}

import { syntaxColors, tokenColorsDef } from '../color';
import TokenColor from '../TokenColor';

export default function markdownToken(token: TokenColor) {
  token.set('Markdown headings', ['markup.heading.markdown', 'punctuation.definition.heading.markdown'], {
    foreground: tokenColorsDef.functionCalls,
    fontStyle: 'bold',
  });

  token.set('Markdown code block', ['punctuation.definition.markdown', 'fenced_code.block.language'], {
    foreground: tokenColorsDef.comment,
  });

  token.set('Markdown block code', ['markup.fenced_code.block.markdown'], {
    foreground: syntaxColors.blue,
  });

  token.set('Markdown inline code', ['markup.inline.raw.string.markdown', 'punctuation.definition.raw.markdown'], {
    foreground: syntaxColors.orange,
  });

  token.set('Markdown link', ['markup.underline.link'], {
    foreground: syntaxColors.cyan,
  });

  token.set('Markdown quotation', ['markup.quote.markdown'], {
    foreground: tokenColorsDef.comment,
  });

  token.set('Markdown bold text', ['markup.bold.markdown', 'punctuation.definition.bold.markdown'], {
    foreground: tokenColorsDef.functionCalls,
    fontStyle: 'bold',
  });

  token.set('Markdown italic text', ['markup.italic.markdown', 'punctuation.definition.italic.markdown'], {
    foreground: tokenColorsDef.functionCalls,
    fontStyle: 'italic',
  });

  token.set(
    'Markdown strikethrough text',
    ['markup.strikethrough.markdown', 'punctuation.definition.strikethrough.markdown'],
    {
      foreground: tokenColorsDef.functionCalls,
    }
  );
}

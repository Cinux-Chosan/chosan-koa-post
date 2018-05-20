import { helper } from '@ember/component/helper';
import Marked from 'npm:marked';

export function renderType([content = '', type] /*, hash*/ ) {
  switch (type) {
    case 'md':
    case 'markdown':
      // content = markdown.toHTML(content);
      content = Marked(content)
      break;
    case 'html':
      break;
    default:
      break;
  }
  return content;
}

export default helper(renderType);

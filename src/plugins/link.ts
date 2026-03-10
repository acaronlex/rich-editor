import { showDialog } from '../ui/dialog';
import { exec } from '../commands';

export function insertLink(contentEl: HTMLElement): void {
  const selection = window.getSelection();
  let existingUrl = '';
  let existingText = '';

  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    existingText = range.toString();

    let node: Node | null = range.startContainer;
    while (node && node !== contentEl) {
      if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === 'A') {
        existingUrl = (node as HTMLAnchorElement).href;
        existingText = existingText || (node as HTMLElement).textContent || '';
        break;
      }
      node = node.parentNode;
    }
  }

  const savedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;

  showDialog({
    title: existingUrl ? 'Edit Link' : 'Insert Link',
    fields: [
      { name: 'url', label: 'URL', value: existingUrl, placeholder: 'https://example.com' },
      { name: 'text', label: 'Text', value: existingText, placeholder: 'Link text' },
    ],
  }).then((data) => {
    if (!data.url) return;

    contentEl.focus();
    if (savedRange) {
      const sel = window.getSelection()!;
      sel.removeAllRanges();
      sel.addRange(savedRange);
    }

    if (existingUrl) {
      let node: Node | null = savedRange?.startContainer || null;
      while (node && node !== contentEl) {
        if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === 'A') {
          (node as HTMLAnchorElement).href = data.url;
          if (data.text) (node as HTMLElement).textContent = data.text;
          return;
        }
        node = node.parentNode;
      }
    }

    if (data.text && (!selection || selection.toString() === '')) {
      const a = document.createElement('a');
      a.href = data.url;
      a.textContent = data.text;
      if (savedRange) {
        savedRange.deleteContents();
        savedRange.insertNode(a);
      } else {
        contentEl.appendChild(a);
      }
    } else {
      exec('createLink', data.url);
    }
  }).catch(() => { /* cancelled */ });
}

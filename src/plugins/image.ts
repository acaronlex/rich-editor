import { showDialog } from '../ui/dialog';
import type { RichEditorConfig } from '../types';

export function insertImage(contentEl: HTMLElement, config: RichEditorConfig): void {
  const selection = window.getSelection();
  const savedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;

  if (config.file_picker_callback) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 're-image-upload-field';
    input.style.display = 'none';
    document.body.appendChild(input);

    const cleanup = () => {
      if (document.body.contains(input)) document.body.removeChild(input);
    };

    const originalValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!;
    Object.defineProperty(input, 'value', {
      set(v: string) {
        originalValue.set!.call(this, v);
        cleanup();
        contentEl.focus();
        if (savedRange) {
          const sel = window.getSelection()!;
          sel.removeAllRanges();
          sel.addRange(savedRange);
        }
        document.execCommand('insertImage', false, v);
      },
      get() {
        return originalValue.get!.call(this);
      },
    });

    config.file_picker_callback(input.id, '', { filetype: 'image' }, window);
    return;
  }

  showDialog({
    title: 'Insert Image',
    fields: [
      { name: 'src', label: 'Image URL', placeholder: 'https://example.com/image.jpg' },
      { name: 'alt', label: 'Alt text', placeholder: 'Description' },
    ],
  }).then((data) => {
    if (!data.src) return;
    contentEl.focus();
    if (savedRange) {
      const sel = window.getSelection()!;
      sel.removeAllRanges();
      sel.addRange(savedRange);
    }
    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt || '';
    img.style.maxWidth = '100%';
    if (savedRange) {
      savedRange.deleteContents();
      savedRange.insertNode(img);
    } else {
      contentEl.appendChild(img);
    }
  }).catch(() => { /* cancelled */ });
}

import { icons } from './icons';
import { exec, queryState, formatBlock } from './commands';
import { ColorPicker } from './ui/color-picker';
import { Dropdown } from './ui/dropdown';
import { insertLink } from './plugins/link';
import { insertImage } from './plugins/image';
import { TablePicker } from './plugins/table';
import { CodeView } from './plugins/code-view';
import { Fullscreen } from './plugins/fullscreen';
import type { RichEditorConfig } from './types';

export const DEFAULT_TOOLBAR =
  'undo redo | formatselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image table | code fullscreen';

interface ToolbarContext {
  contentEl: HTMLElement;
  config: RichEditorConfig;
  codeView: CodeView;
  fullscreen: Fullscreen;
}

export function createToolbar(
  toolbarStr: string,
  ctx: ToolbarContext
): { el: HTMLElement; updateState: () => void; destroy: () => void } {
  const toolbar = document.createElement('div');
  toolbar.className = 're-toolbar';
  toolbar.setAttribute('role', 'toolbar');

  const destroyables: { destroy: () => void }[] = [];
  const toggleButtons: { btn: HTMLButtonElement; command: string }[] = [];

  const groups = toolbarStr.split('|').map((g) => g.trim().split(/\s+/));

  for (const group of groups) {
    const groupEl = document.createElement('div');
    groupEl.className = 're-toolbar-group';

    for (const name of group) {
      if (!name) continue;

      if (name === 'formatselect') {
        const btn = makeButton('formatselect', 'Format', icons.formatselect);
        const dropdown = new Dropdown(
          btn,
          [
            { label: 'Paragraph', value: 'p' },
            { label: 'Heading 1', value: 'h1' },
            { label: 'Heading 2', value: 'h2' },
            { label: 'Heading 3', value: 'h3' },
            { label: 'Heading 4', value: 'h4' },
            { label: 'Preformatted', value: 'pre' },
          ],
          (value) => {
            ctx.contentEl.focus();
            formatBlock(value);
          }
        );
        btn.addEventListener('click', () => dropdown.toggle(btn.getBoundingClientRect()));
        destroyables.push(dropdown);
        groupEl.appendChild(btn);
        continue;
      }

      if (name === 'forecolor' || name === 'backcolor') {
        const cmd = name === 'forecolor' ? 'foreColor' : 'hiliteColor';
        const btn = makeButton(name, name === 'forecolor' ? 'Text color' : 'Background color', icons[name]);
        const picker = new ColorPicker(btn, (color) => {
          ctx.contentEl.focus();
          exec(cmd, color);
        });
        btn.addEventListener('click', () => picker.toggle());
        destroyables.push(picker);
        groupEl.appendChild(btn);
        continue;
      }

      if (name === 'table') {
        const btn = makeButton('table', 'Insert table', icons.table);
        const picker = new TablePicker(btn, ctx.contentEl);
        btn.addEventListener('click', () => picker.toggle());
        destroyables.push(picker);
        groupEl.appendChild(btn);
        continue;
      }

      const btn = makeButton(name, name, icons[name] || name);
      btn.addEventListener('click', () => handleCommand(name, ctx));

      if (['bold', 'italic', 'underline', 'strikethrough'].includes(name)) {
        toggleButtons.push({ btn, command: name });
      }

      groupEl.appendChild(btn);
    }

    toolbar.appendChild(groupEl);
  }

  function updateState(): void {
    for (const { btn, command } of toggleButtons) {
      btn.classList.toggle('active', queryState(command));
    }
  }

  return {
    el: toolbar,
    updateState,
    destroy() {
      for (const d of destroyables) d.destroy();
    },
  };
}

function makeButton(name: string, tooltip: string, iconHtml: string): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 're-btn';
  btn.dataset.command = name;
  btn.title = tooltip;
  btn.innerHTML = iconHtml;
  return btn;
}

function handleCommand(name: string, ctx: ToolbarContext): void {
  const cmdMap: Record<string, () => void> = {
    bold: () => { ctx.contentEl.focus(); exec('bold'); },
    italic: () => { ctx.contentEl.focus(); exec('italic'); },
    underline: () => { ctx.contentEl.focus(); exec('underline'); },
    strikethrough: () => { ctx.contentEl.focus(); exec('strikeThrough'); },
    alignleft: () => { ctx.contentEl.focus(); exec('justifyLeft'); },
    aligncenter: () => { ctx.contentEl.focus(); exec('justifyCenter'); },
    alignright: () => { ctx.contentEl.focus(); exec('justifyRight'); },
    alignjustify: () => { ctx.contentEl.focus(); exec('justifyFull'); },
    bullist: () => { ctx.contentEl.focus(); exec('insertUnorderedList'); },
    numlist: () => { ctx.contentEl.focus(); exec('insertOrderedList'); },
    indent: () => { ctx.contentEl.focus(); exec('indent'); },
    outdent: () => { ctx.contentEl.focus(); exec('outdent'); },
    undo: () => { ctx.contentEl.focus(); exec('undo'); },
    redo: () => { ctx.contentEl.focus(); exec('redo'); },
    removeformat: () => { ctx.contentEl.focus(); exec('removeFormat'); },
    link: () => insertLink(ctx.contentEl),
    image: () => insertImage(ctx.contentEl, ctx.config),
    code: () => ctx.codeView.toggle(),
    fullscreen: () => ctx.fullscreen.toggle(),
    help: () => {
      window.open('https://github.com/acaronlex/rich-editor', '_blank');
    },
  };

  const handler = cmdMap[name];
  if (handler) handler();
}

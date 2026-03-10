import type { RichEditorConfig } from './types';
import { createToolbar, DEFAULT_TOOLBAR } from './toolbar';
import { CodeView } from './plugins/code-view';
import { Fullscreen } from './plugins/fullscreen';
import { TableContextMenu } from './plugins/table';

export class EditorInstance {
  private textarea: HTMLTextAreaElement;
  private config: RichEditorConfig;
  private container: HTMLDivElement;
  private contentEl: HTMLDivElement;
  private toolbar: ReturnType<typeof createToolbar>;
  private codeView: CodeView;
  private fullscreen: Fullscreen;
  private tableContextMenu: TableContextMenu;
  private dirty = false;
  private selectionChangeHandler: () => void;

  constructor(textarea: HTMLTextAreaElement, config: RichEditorConfig) {
    this.textarea = textarea;
    this.config = config;

    // Create container
    this.container = document.createElement('div');
    this.container.className = 're-container';

    // Create content area
    this.contentEl = document.createElement('div');
    this.contentEl.className = 're-content';
    this.contentEl.contentEditable = 'true';
    this.contentEl.innerHTML = textarea.value;

    if (config.height) {
      this.contentEl.style.minHeight = `${config.height}px`;
    }

    // Init plugins
    this.codeView = new CodeView(this.contentEl, this.container);
    this.fullscreen = new Fullscreen(this.container);

    // Create toolbar
    this.toolbar = createToolbar(config.toolbar || DEFAULT_TOOLBAR, {
      contentEl: this.contentEl,
      config: this.config,
      codeView: this.codeView,
      fullscreen: this.fullscreen,
    });

    this.container.appendChild(this.toolbar.el);
    this.container.appendChild(this.contentEl);

    // Table context menu
    this.tableContextMenu = new TableContextMenu(this.contentEl);

    // Replace textarea
    textarea.style.display = 'none';
    textarea.parentNode?.insertBefore(this.container, textarea.nextSibling);

    // Events
    this.contentEl.addEventListener('input', () => {
      this.dirty = true;
    });

    this.selectionChangeHandler = () => {
      if (this.container.contains(document.activeElement) || document.activeElement === this.contentEl) {
        this.toolbar.updateState();
      }
    };
    document.addEventListener('selectionchange', this.selectionChangeHandler);

    // Auto-save on form submit
    const form = textarea.closest('form');
    if (form) {
      form.addEventListener('submit', () => this.save());
    }

    // Load external CSS
    if (config.content_css) {
      for (const url of config.content_css) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
      }
    }
  }

  getContent(): string {
    return this.codeView.getContent();
  }

  setContent(html: string): void {
    this.contentEl.innerHTML = html;
  }

  save(): void {
    this.textarea.value = this.getContent();
  }

  isDirty(): boolean {
    return this.dirty;
  }

  destroy(): void {
    this.save();
    document.removeEventListener('selectionchange', this.selectionChangeHandler);
    this.toolbar.destroy();
    this.codeView.destroy();
    this.fullscreen.destroy();
    this.tableContextMenu.destroy();
    this.container.remove();
    this.textarea.style.display = '';
  }
}

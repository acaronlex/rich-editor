export class CodeView {
  private contentEl: HTMLElement;
  private textarea: HTMLTextAreaElement | null = null;
  private isActive = false;
  private container: HTMLElement;

  constructor(contentEl: HTMLElement, container: HTMLElement) {
    this.contentEl = contentEl;
    this.container = container;
  }

  toggle(): void {
    if (this.isActive) {
      this.showRich();
    } else {
      this.showCode();
    }
    this.isActive = !this.isActive;
  }

  get active(): boolean {
    return this.isActive;
  }

  private showCode(): void {
    this.textarea = document.createElement('textarea');
    this.textarea.className = 're-code-view';
    this.textarea.value = this.contentEl.innerHTML;
    this.contentEl.style.display = 'none';
    this.container.appendChild(this.textarea);
  }

  private showRich(): void {
    if (this.textarea) {
      this.contentEl.innerHTML = this.textarea.value;
      this.textarea.remove();
      this.textarea = null;
    }
    this.contentEl.style.display = '';
  }

  getContent(): string {
    if (this.isActive && this.textarea) {
      return this.textarea.value;
    }
    return this.contentEl.innerHTML;
  }

  destroy(): void {
    if (this.textarea) {
      this.textarea.remove();
    }
  }
}

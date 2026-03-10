const COLORS = [
  '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff',
  '#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff',
  '#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc',
  '#dd7e6b', '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#a4c2f4', '#9fc5e8', '#b4a7d6', '#d5a6bd',
];

export class ColorPicker {
  private el: HTMLDivElement;
  private isOpen = false;
  private onSelect: (color: string) => void;
  private closeHandler: (e: MouseEvent) => void;
  private anchor: HTMLElement;

  constructor(anchor: HTMLElement, onSelect: (color: string) => void) {
    this.anchor = anchor;
    this.onSelect = onSelect;
    this.el = document.createElement('div');
    this.el.className = 're-dropdown re-color-grid';

    for (const color of COLORS) {
      const swatch = document.createElement('div');
      swatch.className = 're-color-swatch';
      swatch.style.backgroundColor = color;
      swatch.title = color;
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onSelect(color);
        this.hide();
      });
      this.el.appendChild(swatch);
    }

    anchor.parentElement?.appendChild(this.el);

    this.closeHandler = (e: MouseEvent) => {
      if (!this.el.contains(e.target as Node) && !anchor.contains(e.target as Node)) {
        this.hide();
      }
    };
  }

  toggle(): void {
    if (this.isOpen) {
      this.hide();
    } else {
      this.show();
    }
  }

  show(): void {
    const rect = this.anchor.getBoundingClientRect();
    const parentRect = this.anchor.parentElement!.getBoundingClientRect();
    this.el.style.top = `${rect.bottom - parentRect.top}px`;
    this.el.style.left = `${rect.left - parentRect.left}px`;
    this.el.style.display = 'grid';
    this.isOpen = true;
    document.addEventListener('click', this.closeHandler);
  }

  hide(): void {
    this.el.style.display = 'none';
    this.isOpen = false;
    document.removeEventListener('click', this.closeHandler);
  }

  destroy(): void {
    this.hide();
    this.el.remove();
  }
}

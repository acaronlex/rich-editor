export interface DropdownOption {
  label: string;
  value: string;
}

export class Dropdown {
  private el: HTMLDivElement;
  private isOpen = false;
  private onSelect: (value: string) => void;
  private closeHandler: (e: MouseEvent) => void;

  constructor(
    anchor: HTMLElement,
    options: DropdownOption[],
    onSelect: (value: string) => void
  ) {
    this.onSelect = onSelect;
    this.el = document.createElement('div');
    this.el.className = 're-dropdown';

    for (const opt of options) {
      const item = document.createElement('div');
      item.className = 're-dropdown-item';
      item.textContent = opt.label;
      item.dataset.value = opt.value;
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onSelect(opt.value);
        this.hide();
      });
      this.el.appendChild(item);
    }

    anchor.parentElement?.appendChild(this.el);

    this.closeHandler = (e: MouseEvent) => {
      if (!this.el.contains(e.target as Node) && !anchor.contains(e.target as Node)) {
        this.hide();
      }
    };
  }

  toggle(anchorRect: DOMRect): void {
    if (this.isOpen) {
      this.hide();
    } else {
      this.show(anchorRect);
    }
  }

  show(anchorRect: DOMRect): void {
    this.el.style.top = `${anchorRect.bottom}px`;
    this.el.style.left = `${anchorRect.left}px`;
    this.el.style.display = 'block';
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

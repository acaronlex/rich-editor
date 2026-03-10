export class TablePicker {
  private el: HTMLDivElement;
  private isOpen = false;
  private anchor: HTMLElement;
  private contentEl: HTMLElement;
  private closeHandler: (e: MouseEvent) => void;
  private label: HTMLDivElement;
  private maxRows = 8;
  private maxCols = 8;

  constructor(anchor: HTMLElement, contentEl: HTMLElement) {
    this.anchor = anchor;
    this.contentEl = contentEl;

    this.el = document.createElement('div');
    this.el.className = 're-dropdown re-table-picker';

    const grid = document.createElement('div');
    grid.className = 're-table-grid';
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${this.maxCols}, 18px)`;
    grid.style.gap = '2px';

    for (let r = 0; r < this.maxRows; r++) {
      for (let c = 0; c < this.maxCols; c++) {
        const cell = document.createElement('div');
        cell.className = 're-table-cell';
        cell.dataset.row = String(r + 1);
        cell.dataset.col = String(c + 1);
        cell.addEventListener('mouseover', () => this.highlight(r + 1, c + 1));
        cell.addEventListener('click', (e) => {
          e.stopPropagation();
          this.insertTable(r + 1, c + 1);
          this.hide();
        });
        grid.appendChild(cell);
      }
    }

    this.label = document.createElement('div');
    this.label.className = 're-table-label';
    this.label.textContent = '0 x 0';

    this.el.appendChild(grid);
    this.el.appendChild(this.label);
    anchor.parentElement?.appendChild(this.el);

    this.closeHandler = (e: MouseEvent) => {
      if (!this.el.contains(e.target as Node) && !anchor.contains(e.target as Node)) {
        this.hide();
      }
    };
  }

  private highlight(rows: number, cols: number): void {
    this.label.textContent = `${rows} x ${cols}`;
    const cells = this.el.querySelectorAll('.re-table-cell');
    cells.forEach((cell) => {
      const el = cell as HTMLElement;
      const r = parseInt(el.dataset.row!, 10);
      const c = parseInt(el.dataset.col!, 10);
      el.classList.toggle('active', r <= rows && c <= cols);
    });
  }

  private insertTable(rows: number, cols: number): void {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    for (let r = 0; r < rows; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < cols; c++) {
        const td = document.createElement(r === 0 ? 'th' : 'td');
        td.innerHTML = '&nbsp;';
        td.style.border = '1px solid #ccc';
        td.style.padding = '6px 8px';
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    this.contentEl.focus();
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(table);
      range.setStartAfter(table);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      this.contentEl.appendChild(table);
    }
  }

  toggle(): void {
    if (this.isOpen) this.hide();
    else this.show();
  }

  show(): void {
    const rect = this.anchor.getBoundingClientRect();
    const parentRect = this.anchor.parentElement!.getBoundingClientRect();
    this.el.style.top = `${rect.bottom - parentRect.top}px`;
    this.el.style.left = `${rect.left - parentRect.left}px`;
    this.el.style.display = 'block';
    this.isOpen = true;
    this.highlight(0, 0);
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

export class TableContextMenu {
  private el: HTMLDivElement;
  private contentEl: HTMLElement;

  constructor(contentEl: HTMLElement) {
    this.contentEl = contentEl;
    this.el = document.createElement('div');
    this.el.className = 're-table-context-menu';
    this.el.style.display = 'none';

    const actions = [
      { label: 'Insert row above', action: () => this.insertRow(true) },
      { label: 'Insert row below', action: () => this.insertRow(false) },
      { label: 'Insert column left', action: () => this.insertCol(true) },
      { label: 'Insert column right', action: () => this.insertCol(false) },
      { label: 'Delete row', action: () => this.deleteRow() },
      { label: 'Delete column', action: () => this.deleteCol() },
      { label: 'Delete table', action: () => this.deleteTable() },
    ];

    for (const a of actions) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 're-table-ctx-btn';
      btn.textContent = a.label;
      btn.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        a.action();
        this.hide();
      });
      this.el.appendChild(btn);
    }

    document.body.appendChild(this.el);

    contentEl.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const td = target.closest('td, th');
      if (td && contentEl.contains(td)) {
        const rect = td.getBoundingClientRect();
        this.el.style.top = `${rect.bottom + window.scrollY + 4}px`;
        this.el.style.left = `${rect.left + window.scrollX}px`;
        this.el.style.display = 'flex';
      } else {
        this.hide();
      }
    });

    document.addEventListener('click', (e) => {
      if (!this.el.contains(e.target as Node) && !contentEl.contains(e.target as Node)) {
        this.hide();
      }
    });
  }

  private getActiveCell(): HTMLTableCellElement | null {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;
    let node: Node | null = sel.anchorNode;
    while (node && node !== this.contentEl) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (el.tagName === 'TD' || el.tagName === 'TH') return el as HTMLTableCellElement;
      }
      node = node.parentNode;
    }
    return null;
  }

  private insertRow(above: boolean): void {
    const cell = this.getActiveCell();
    if (!cell) return;
    const row = cell.parentElement as HTMLTableRowElement;
    const table = row.closest('table');
    if (!table) return;
    const newRow = document.createElement('tr');
    for (let i = 0; i < row.cells.length; i++) {
      const td = document.createElement('td');
      td.innerHTML = '&nbsp;';
      td.style.border = '1px solid #ccc';
      td.style.padding = '6px 8px';
      newRow.appendChild(td);
    }
    if (above) {
      row.before(newRow);
    } else {
      row.after(newRow);
    }
  }

  private insertCol(left: boolean): void {
    const cell = this.getActiveCell();
    if (!cell) return;
    const colIndex = cell.cellIndex;
    const table = cell.closest('table');
    if (!table) return;
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
      const td = document.createElement(i === 0 && rows[i].cells[0]?.tagName === 'TH' ? 'th' : 'td');
      td.innerHTML = '&nbsp;';
      td.style.border = '1px solid #ccc';
      td.style.padding = '6px 8px';
      const refCell = rows[i].cells[left ? colIndex : colIndex + 1];
      if (refCell) {
        rows[i].insertBefore(td, refCell);
      } else {
        rows[i].appendChild(td);
      }
    }
  }

  private deleteRow(): void {
    const cell = this.getActiveCell();
    if (!cell) return;
    const row = cell.parentElement as HTMLTableRowElement;
    const table = row.closest('table');
    if (!table) return;
    if (table.rows.length <= 1) {
      table.remove();
    } else {
      row.remove();
    }
  }

  private deleteCol(): void {
    const cell = this.getActiveCell();
    if (!cell) return;
    const colIndex = cell.cellIndex;
    const table = cell.closest('table');
    if (!table) return;
    if (table.rows[0]?.cells.length <= 1) {
      table.remove();
      return;
    }
    for (let i = table.rows.length - 1; i >= 0; i--) {
      const c = table.rows[i].cells[colIndex];
      if (c) c.remove();
    }
  }

  private deleteTable(): void {
    const cell = this.getActiveCell();
    if (!cell) return;
    const table = cell.closest('table');
    table?.remove();
  }

  hide(): void {
    this.el.style.display = 'none';
  }

  destroy(): void {
    this.el.remove();
  }
}

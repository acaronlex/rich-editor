export interface DialogField {
  name: string;
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
}

export interface DialogOptions {
  title: string;
  fields: DialogField[];
  okText?: string;
  cancelText?: string;
}

export function showDialog(options: DialogOptions): Promise<Record<string, string>> {
  return new Promise((resolve, reject) => {
    const overlay = document.createElement('div');
    overlay.className = 're-dialog-overlay';

    const dialog = document.createElement('div');
    dialog.className = 're-dialog';

    const titleEl = document.createElement('div');
    titleEl.className = 're-dialog-title';
    titleEl.textContent = options.title;
    dialog.appendChild(titleEl);

    const form = document.createElement('form');
    form.className = 're-dialog-body';

    for (const field of options.fields) {
      const row = document.createElement('div');
      row.className = 're-dialog-field';

      const label = document.createElement('label');
      label.textContent = field.label;
      label.setAttribute('for', `re-field-${field.name}`);
      row.appendChild(label);

      const input = document.createElement('input');
      input.type = field.type || 'text';
      input.name = field.name;
      input.id = `re-field-${field.name}`;
      input.value = field.value || '';
      input.placeholder = field.placeholder || '';
      row.appendChild(input);

      form.appendChild(row);
    }

    dialog.appendChild(form);

    const buttons = document.createElement('div');
    buttons.className = 're-dialog-buttons';

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.className = 're-dialog-btn re-dialog-btn-cancel';
    cancelBtn.textContent = options.cancelText || 'Cancel';

    const okBtn = document.createElement('button');
    okBtn.type = 'button';
    okBtn.className = 're-dialog-btn re-dialog-btn-ok';
    okBtn.textContent = options.okText || 'OK';

    buttons.appendChild(cancelBtn);
    buttons.appendChild(okBtn);
    dialog.appendChild(buttons);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    const firstInput = form.querySelector('input');
    if (firstInput) firstInput.focus();

    const close = () => {
      document.body.removeChild(overlay);
    };

    okBtn.addEventListener('click', () => {
      const data: Record<string, string> = {};
      const inputs = form.querySelectorAll('input');
      inputs.forEach((inp) => {
        data[inp.name] = inp.value;
      });
      close();
      resolve(data);
    });

    cancelBtn.addEventListener('click', () => {
      close();
      reject(new Error('Dialog cancelled'));
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        close();
        reject(new Error('Dialog cancelled'));
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      okBtn.click();
    });
  });
}

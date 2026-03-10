import css from '../styles/editor.css';

let injected = false;

export function injectStyles(): void {
  if (injected) return;
  injected = true;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

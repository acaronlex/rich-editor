const svg = (inner: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">${inner}</svg>`;

export const icons: Record<string, string> = {
  bold: svg('<path d="M4 2h5a3 3 0 0 1 2.1 5.2A3.5 3.5 0 0 1 9.5 14H4V2zm2 5h3a1 1 0 0 0 0-2H6v2zm0 2v3h3.5a1.5 1.5 0 0 0 0-3H6z"/>'),
  italic: svg('<path d="M6 2h6v2h-2.2l-2.6 8H9v2H3v-2h2.2l2.6-8H6V2z"/>'),
  underline: svg('<path d="M3 14h10v1.5H3V14zM8 12a4 4 0 0 1-4-4V2h2v6a2 2 0 0 0 4 0V2h2v6a4 4 0 0 1-4 4z"/>'),
  strikethrough: svg('<path d="M2 8h12v1.5H2V8zm3-4.5C5 2.7 5.7 2 7 2h2c1.3 0 2 .7 2 1.5V4h-2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V4H5v-.5zM7 10h2v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V12h2v.5c0 .8-.7 1.5-2 1.5H9c-1.3 0-2-.7-2-1.5V10z"/>'),
  forecolor: svg('<path d="M8 1L3 12h2l1.2-3h3.6L11 12h2L8 1zm-1 6.5L8 4.5l1 3H7z"/><rect x="2" y="13" width="12" height="2" fill="#e53935"/>'),
  backcolor: svg('<path d="M2 1h12v12H2V1zm1 1v10h10V2H3z"/><rect x="4" y="4" width="8" height="6" fill="#fff176"/><rect x="2" y="13" width="12" height="2" fill="#fff176"/>'),
  alignleft: svg('<path d="M2 2h12v2H2V2zm0 4h8v2H2V6zm0 4h12v2H2v-2zm0 4h8v2H2v-2z"/>'),
  aligncenter: svg('<path d="M2 2h12v2H2V2zm2 4h8v2H4V6zm-2 4h12v2H2v-2zm2 4h8v2H4v-2z"/>'),
  alignright: svg('<path d="M2 2h12v2H2V2zm4 4h8v2H6V6zm-4 4h12v2H2v-2zm4 4h8v2H6v-2z"/>'),
  alignjustify: svg('<path d="M2 2h12v2H2V2zm0 4h12v2H2V6zm0 4h12v2H2v-2zm0 4h12v2H2v-2z"/>'),
  bullist: svg('<circle cx="3" cy="4" r="1.5"/><path d="M6 3h8v2H6V3z"/><circle cx="3" cy="8" r="1.5"/><path d="M6 7h8v2H6V7z"/><circle cx="3" cy="12" r="1.5"/><path d="M6 11h8v2H6v-2z"/>'),
  numlist: svg('<text x="1" y="5" font-size="4" font-family="sans-serif">1.</text><path d="M6 3h8v2H6V3z"/><text x="1" y="9" font-size="4" font-family="sans-serif">2.</text><path d="M6 7h8v2H6V7z"/><text x="1" y="13" font-size="4" font-family="sans-serif">3.</text><path d="M6 11h8v2H6v-2z"/>'),
  indent: svg('<path d="M2 2h12v2H2V2zm4 4h8v2H6V6zm0 4h8v2H6v-2zm-4 4h12v2H2v-2zM2 5l3 2.5L2 10V5z"/>'),
  outdent: svg('<path d="M2 2h12v2H2V2zm4 4h8v2H6V6zm0 4h8v2H6v-2zm-4 4h12v2H2v-2zM5 5L2 7.5 5 10V5z"/>'),
  link: svg('<path d="M6.9 11.1a2.5 2.5 0 0 1 0-3.5l.7-.7 1.4 1.4-.7.7a.8.8 0 0 0 0 1.2.8.8 0 0 0 1.2 0l2-2a.8.8 0 0 0 0-1.2L10.1 5.6l1.4-1.4 1.4 1.4a2.5 2.5 0 0 1 0 3.5l-2 2a2.5 2.5 0 0 1-3.5 0l-.5-.5zm2.2-5.2a2.5 2.5 0 0 1 0 3.5l-.7.7-1.4-1.4.7-.7a.8.8 0 0 0 0-1.2.8.8 0 0 0-1.2 0l-2 2a.8.8 0 0 0 0 1.2l1.4 1.4L4.5 12.8 3.1 11.4a2.5 2.5 0 0 1 0-3.5l2-2a2.5 2.5 0 0 1 3.5 0l.5.5z"/>'),
  image: svg('<rect x="1" y="2" width="14" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="5" cy="6" r="1.5"/><path d="M1 11l3-4 2.5 3L10 6l5 7H1z"/>'),
  table: svg('<rect x="1" y="2" width="14" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="1" y1="6" x2="15" y2="6" stroke="currentColor" stroke-width="1"/><line x1="1" y1="10" x2="15" y2="10" stroke="currentColor" stroke-width="1"/><line x1="6" y1="2" x2="6" y2="14" stroke="currentColor" stroke-width="1"/><line x1="11" y1="2" x2="11" y2="14" stroke="currentColor" stroke-width="1"/>'),
  code: svg('<path d="M5.7 4.3L2 8l3.7 3.7 1.4-1.4L4.8 8l2.3-2.3-1.4-1.4zm4.6 0L8.9 5.7 11.2 8l-2.3 2.3 1.4 1.4L14 8l-3.7-3.7z"/>'),
  fullscreen: svg('<path d="M2 2h4v2H4v2H2V2zm8 0h4v4h-2V4h-2V2zM2 10h2v2h2v2H2v-4zm10 2v2h4v-4h-2v2h-2z"/>'),
  undo: svg('<path d="M4 7h5a3 3 0 0 1 0 6H7v-2h2a1 1 0 0 0 0-2H4v2L1 8l3-3v2z"/>'),
  redo: svg('<path d="M12 7H7a3 3 0 0 0 0 6h2v-2H7a1 1 0 0 1 0-2h5v2l3-3-3-3v2z"/>'),
  removeformat: svg('<path d="M2 2h6v2H7L5 12H3l2-8H3V2zm5.5 5l5 7h-2l-1.5-2.1L7.5 14h-2l3.5-4.9L7 7h2z"/>'),
  help: svg('<circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 6a2 2 0 0 1 4 0c0 1.1-.9 1.5-1.5 2-.2.2-.5.4-.5.8V10h-1V8.5c0-.6.4-1 .8-1.3.5-.4.7-.6.7-1.2a.5.5 0 0 0-1 0H6zm1 6h2v2H7v-2z"/>'),
  formatselect: svg('<path d="M2 3h12v2H2V3zm2 4h8v1.5H4V7zm-1 3.5h10v1.5H3V10.5z"/>'),
};

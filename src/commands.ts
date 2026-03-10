export function exec(command: string, value?: string): void {
  document.execCommand(command, false, value);
}

export function queryState(command: string): boolean {
  return document.queryCommandState(command);
}

export function formatBlock(tag: string): void {
  document.execCommand('formatBlock', false, `<${tag}>`);
}

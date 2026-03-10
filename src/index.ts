import type { RichEditorConfig } from './types';
import { EditorInstance } from './editor';
import { injectStyles } from './styles';

const instances = new Map<string, EditorInstance>();

function init(config: RichEditorConfig): void {
  injectStyles();
  const elements = document.querySelectorAll<HTMLTextAreaElement>(config.selector);
  elements.forEach((textarea) => {
    const id = textarea.id || `re-${instances.size}`;
    if (!textarea.id) textarea.id = id;
    if (instances.has(id)) {
      instances.get(id)!.destroy();
    }
    const instance = new EditorInstance(textarea, config);
    instances.set(id, instance);
  });
}

function get(id: string): EditorInstance | undefined {
  return instances.get(id);
}

function triggerSave(): void {
  instances.forEach((instance) => instance.save());
}

export { init, get, triggerSave, instances, EditorInstance };
export type { RichEditorConfig };

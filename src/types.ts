export interface RichEditorConfig {
  selector: string;
  height?: number;
  toolbar?: string;
  file_picker_callback?: (field_name: string, url: string, type: { filetype: string }, win: Window) => void;
  content_css?: string[];
  relative_urls?: boolean;
  plugins?: string[];
}

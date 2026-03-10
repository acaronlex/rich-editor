# rich-editor

A lightweight WYSIWYG rich text editor with zero dependencies.

## Install

```bash
npm install @acaronlex/rich-editor
```

Or use via CDN:

```html
<script src="https://unpkg.com/@acaronlex/rich-editor/dist/rich-editor.umd.js"></script>
```

## Usage

```html
<textarea id="editor">Hello <b>world</b></textarea>

<script>
  RichEditor.init({
    selector: '#editor',
    height: 300,
  });
</script>
```

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `selector` | `string` | (required) | CSS selector for textarea(s) to replace |
| `height` | `number` | `200` | Minimum height of the editing area in pixels |
| `toolbar` | `string` | see below | Pipe-separated groups of space-separated button names |
| `file_picker_callback` | `function` | `undefined` | Custom file picker for image uploads |
| `content_css` | `string[]` | `[]` | Additional CSS files to load |
| `relative_urls` | `boolean` | `undefined` | Use relative URLs for links |
| `plugins` | `string[]` | `[]` | Reserved for future plugin system |

**Default toolbar:**
```
undo redo | formatselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image table | code fullscreen
```

## API

```js
// Initialize editor(s)
RichEditor.init({ selector: '#editor' });

// Get an editor instance by textarea id
const editor = RichEditor.get('editor');

// Get HTML content
const html = editor.getContent();

// Set HTML content
editor.setContent('<p>New content</p>');

// Sync content back to textarea (called automatically on form submit)
RichEditor.triggerSave();

// Destroy editor and restore textarea
editor.destroy();
```

## License

MIT

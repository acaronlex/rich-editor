"use strict";var RichEditor=(()=>{var z=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var F=Object.prototype.hasOwnProperty;var _=(l,e)=>{for(var o in e)z(l,o,{get:e[o],enumerable:!0})},P=(l,e,o,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of j(e))!F.call(l,n)&&n!==o&&z(l,n,{get:()=>e[n],enumerable:!(t=$(e,n))||t.enumerable});return l};var q=l=>P(z({},"__esModule",{value:!0}),l);var J={};_(J,{EditorInstance:()=>E,get:()=>Y,init:()=>X,instances:()=>u,triggerSave:()=>G});var d=l=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">${l}</svg>`,x={bold:d('<path d="M4 2h5a3 3 0 0 1 2.1 5.2A3.5 3.5 0 0 1 9.5 14H4V2zm2 5h3a1 1 0 0 0 0-2H6v2zm0 2v3h3.5a1.5 1.5 0 0 0 0-3H6z"/>'),italic:d('<path d="M6 2h6v2h-2.2l-2.6 8H9v2H3v-2h2.2l2.6-8H6V2z"/>'),underline:d('<path d="M3 14h10v1.5H3V14zM8 12a4 4 0 0 1-4-4V2h2v6a2 2 0 0 0 4 0V2h2v6a4 4 0 0 1-4 4z"/>'),strikethrough:d('<path d="M2 8h12v1.5H2V8zm3-4.5C5 2.7 5.7 2 7 2h2c1.3 0 2 .7 2 1.5V4h-2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V4H5v-.5zM7 10h2v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V12h2v.5c0 .8-.7 1.5-2 1.5H9c-1.3 0-2-.7-2-1.5V10z"/>'),forecolor:d('<path d="M8 1L3 12h2l1.2-3h3.6L11 12h2L8 1zm-1 6.5L8 4.5l1 3H7z"/><rect x="2" y="13" width="12" height="2" fill="#e53935"/>'),backcolor:d('<path d="M2 1h12v12H2V1zm1 1v10h10V2H3z"/><rect x="4" y="4" width="8" height="6" fill="#fff176"/><rect x="2" y="13" width="12" height="2" fill="#fff176"/>'),alignleft:d('<path d="M2 2h12v2H2V2zm0 4h8v2H2V6zm0 4h12v2H2v-2zm0 4h8v2H2v-2z"/>'),aligncenter:d('<path d="M2 2h12v2H2V2zm2 4h8v2H4V6zm-2 4h12v2H2v-2zm2 4h8v2H4v-2z"/>'),alignright:d('<path d="M2 2h12v2H2V2zm4 4h8v2H6V6zm-4 4h12v2H2v-2zm4 4h8v2H6v-2z"/>'),alignjustify:d('<path d="M2 2h12v2H2V2zm0 4h12v2H2V6zm0 4h12v2H2v-2zm0 4h12v2H2v-2z"/>'),bullist:d('<circle cx="3" cy="4" r="1.5"/><path d="M6 3h8v2H6V3z"/><circle cx="3" cy="8" r="1.5"/><path d="M6 7h8v2H6V7z"/><circle cx="3" cy="12" r="1.5"/><path d="M6 11h8v2H6v-2z"/>'),numlist:d('<text x="1" y="5" font-size="4" font-family="sans-serif">1.</text><path d="M6 3h8v2H6V3z"/><text x="1" y="9" font-size="4" font-family="sans-serif">2.</text><path d="M6 7h8v2H6V7z"/><text x="1" y="13" font-size="4" font-family="sans-serif">3.</text><path d="M6 11h8v2H6v-2z"/>'),indent:d('<path d="M2 2h12v2H2V2zm4 4h8v2H6V6zm0 4h8v2H6v-2zm-4 4h12v2H2v-2zM2 5l3 2.5L2 10V5z"/>'),outdent:d('<path d="M2 2h12v2H2V2zm4 4h8v2H6V6zm0 4h8v2H6v-2zm-4 4h12v2H2v-2zM5 5L2 7.5 5 10V5z"/>'),link:d('<path d="M6.9 11.1a2.5 2.5 0 0 1 0-3.5l.7-.7 1.4 1.4-.7.7a.8.8 0 0 0 0 1.2.8.8 0 0 0 1.2 0l2-2a.8.8 0 0 0 0-1.2L10.1 5.6l1.4-1.4 1.4 1.4a2.5 2.5 0 0 1 0 3.5l-2 2a2.5 2.5 0 0 1-3.5 0l-.5-.5zm2.2-5.2a2.5 2.5 0 0 1 0 3.5l-.7.7-1.4-1.4.7-.7a.8.8 0 0 0 0-1.2.8.8 0 0 0-1.2 0l-2 2a.8.8 0 0 0 0 1.2l1.4 1.4L4.5 12.8 3.1 11.4a2.5 2.5 0 0 1 0-3.5l2-2a2.5 2.5 0 0 1 3.5 0l.5.5z"/>'),image:d('<rect x="1" y="2" width="14" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="5" cy="6" r="1.5"/><path d="M1 11l3-4 2.5 3L10 6l5 7H1z"/>'),table:d('<rect x="1" y="2" width="14" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="1" y1="6" x2="15" y2="6" stroke="currentColor" stroke-width="1"/><line x1="1" y1="10" x2="15" y2="10" stroke="currentColor" stroke-width="1"/><line x1="6" y1="2" x2="6" y2="14" stroke="currentColor" stroke-width="1"/><line x1="11" y1="2" x2="11" y2="14" stroke="currentColor" stroke-width="1"/>'),code:d('<path d="M5.7 4.3L2 8l3.7 3.7 1.4-1.4L4.8 8l2.3-2.3-1.4-1.4zm4.6 0L8.9 5.7 11.2 8l-2.3 2.3 1.4 1.4L14 8l-3.7-3.7z"/>'),fullscreen:d('<path d="M2 2h4v2H4v2H2V2zm8 0h4v4h-2V4h-2V2zM2 10h2v2h2v2H2v-4zm10 2v2h4v-4h-2v2h-2z"/>'),undo:d('<path d="M4 7h5a3 3 0 0 1 0 6H7v-2h2a1 1 0 0 0 0-2H4v2L1 8l3-3v2z"/>'),redo:d('<path d="M12 7H7a3 3 0 0 0 0 6h2v-2H7a1 1 0 0 1 0-2h5v2l3-3-3-3v2z"/>'),removeformat:d('<path d="M2 2h6v2H7L5 12H3l2-8H3V2zm5.5 5l5 7h-2l-1.5-2.1L7.5 14h-2l3.5-4.9L7 7h2z"/>'),help:d('<circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 6a2 2 0 0 1 4 0c0 1.1-.9 1.5-1.5 2-.2.2-.5.4-.5.8V10h-1V8.5c0-.6.4-1 .8-1.3.5-.4.7-.6.7-1.2a.5.5 0 0 0-1 0H6zm1 6h2v2H7v-2z"/>'),formatselect:d('<path d="M2 3h12v2H2V3zm2 4h8v1.5H4V7zm-1 3.5h10v1.5H3V10.5z"/>')};function p(l,e){document.execCommand(l,!1,e)}function R(l){return document.queryCommandState(l)}function N(l){document.execCommand("formatBlock",!1,`<${l}>`)}var U=["#000000","#434343","#666666","#999999","#b7b7b7","#cccccc","#d9d9d9","#efefef","#f3f3f3","#ffffff","#980000","#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#4a86e8","#0000ff","#9900ff","#ff00ff","#e6b8af","#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#c9daf8","#cfe2f3","#d9d2e9","#ead1dc","#dd7e6b","#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#a4c2f4","#9fc5e8","#b4a7d6","#d5a6bd"],y=class{constructor(e,o){this.isOpen=!1;this.anchor=e,this.onSelect=o,this.el=document.createElement("div"),this.el.className="re-dropdown re-color-grid";for(let t of U){let n=document.createElement("div");n.className="re-color-swatch",n.style.backgroundColor=t,n.title=t,n.addEventListener("click",i=>{i.stopPropagation(),this.onSelect(t),this.hide()}),this.el.appendChild(n)}e.parentElement?.appendChild(this.el),this.closeHandler=t=>{!this.el.contains(t.target)&&!e.contains(t.target)&&this.hide()}}toggle(){this.isOpen?this.hide():this.show()}show(){let e=this.anchor.getBoundingClientRect(),o=this.anchor.parentElement.getBoundingClientRect();this.el.style.top=`${e.bottom-o.top}px`,this.el.style.left=`${e.left-o.left}px`,this.el.style.display="grid",this.isOpen=!0,document.addEventListener("click",this.closeHandler)}hide(){this.el.style.display="none",this.isOpen=!1,document.removeEventListener("click",this.closeHandler)}destroy(){this.hide(),this.el.remove()}};var w=class{constructor(e,o,t){this.isOpen=!1;this.onSelect=t,this.el=document.createElement("div"),this.el.className="re-dropdown";for(let n of o){let i=document.createElement("div");i.className="re-dropdown-item",i.textContent=n.label,i.dataset.value=n.value,i.addEventListener("click",r=>{r.stopPropagation(),this.onSelect(n.value),this.hide()}),this.el.appendChild(i)}e.parentElement?.appendChild(this.el),this.closeHandler=n=>{!this.el.contains(n.target)&&!e.contains(n.target)&&this.hide()}}toggle(e){this.isOpen?this.hide():this.show(e)}show(e){this.el.style.top=`${e.bottom}px`,this.el.style.left=`${e.left}px`,this.el.style.display="block",this.isOpen=!0,document.addEventListener("click",this.closeHandler)}hide(){this.el.style.display="none",this.isOpen=!1,document.removeEventListener("click",this.closeHandler)}destroy(){this.hide(),this.el.remove()}};function C(l){return new Promise((e,o)=>{let t=document.createElement("div");t.className="re-dialog-overlay";let n=document.createElement("div");n.className="re-dialog";let i=document.createElement("div");i.className="re-dialog-title",i.textContent=l.title,n.appendChild(i);let r=document.createElement("form");r.className="re-dialog-body";for(let c of l.fields){let g=document.createElement("div");g.className="re-dialog-field";let f=document.createElement("label");f.textContent=c.label,f.setAttribute("for",`re-field-${c.name}`),g.appendChild(f);let b=document.createElement("input");b.type=c.type||"text",b.name=c.name,b.id=`re-field-${c.name}`,b.value=c.value||"",b.placeholder=c.placeholder||"",g.appendChild(b),r.appendChild(g)}n.appendChild(r);let a=document.createElement("div");a.className="re-dialog-buttons";let s=document.createElement("button");s.type="button",s.className="re-dialog-btn re-dialog-btn-cancel",s.textContent=l.cancelText||"Cancel";let h=document.createElement("button");h.type="button",h.className="re-dialog-btn re-dialog-btn-ok",h.textContent=l.okText||"OK",a.appendChild(s),a.appendChild(h),n.appendChild(a),t.appendChild(n),document.body.appendChild(t);let v=r.querySelector("input");v&&v.focus();let m=()=>{document.body.removeChild(t)};h.addEventListener("click",()=>{let c={};r.querySelectorAll("input").forEach(f=>{c[f.name]=f.value}),m(),e(c)}),s.addEventListener("click",()=>{m(),o(new Error("Dialog cancelled"))}),t.addEventListener("click",c=>{c.target===t&&(m(),o(new Error("Dialog cancelled")))}),r.addEventListener("submit",c=>{c.preventDefault(),h.click()})})}function V(l){let e=window.getSelection(),o="",t="";if(e&&e.rangeCount>0){let i=e.getRangeAt(0);t=i.toString();let r=i.startContainer;for(;r&&r!==l;){if(r.nodeType===Node.ELEMENT_NODE&&r.tagName==="A"){o=r.href,t=t||r.textContent||"";break}r=r.parentNode}}let n=e&&e.rangeCount>0?e.getRangeAt(0).cloneRange():null;C({title:o?"Edit Link":"Insert Link",fields:[{name:"url",label:"URL",value:o,placeholder:"https://example.com"},{name:"text",label:"Text",value:t,placeholder:"Link text"}]}).then(i=>{if(i.url){if(l.focus(),n){let r=window.getSelection();r.removeAllRanges(),r.addRange(n)}if(o){let r=n?.startContainer||null;for(;r&&r!==l;){if(r.nodeType===Node.ELEMENT_NODE&&r.tagName==="A"){r.href=i.url,i.text&&(r.textContent=i.text);return}r=r.parentNode}}if(i.text&&(!e||e.toString()==="")){let r=document.createElement("a");r.href=i.url,r.textContent=i.text,n?(n.deleteContents(),n.insertNode(r)):l.appendChild(r)}else p("createLink",i.url)}}).catch(()=>{})}function A(l,e){let o=window.getSelection(),t=o&&o.rangeCount>0?o.getRangeAt(0).cloneRange():null;if(e.file_picker_callback){let n=document.createElement("input");n.type="text",n.id="re-image-upload-field",n.style.display="none",document.body.appendChild(n);let i=()=>{document.body.contains(n)&&document.body.removeChild(n)},r=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");Object.defineProperty(n,"value",{set(a){if(r.set.call(this,a),i(),l.focus(),t){let s=window.getSelection();s.removeAllRanges(),s.addRange(t)}document.execCommand("insertImage",!1,a)},get(){return r.get.call(this)}}),e.file_picker_callback(n.id,"",{filetype:"image"},window);return}C({title:"Insert Image",fields:[{name:"src",label:"Image URL",placeholder:"https://example.com/image.jpg"},{name:"alt",label:"Alt text",placeholder:"Description"}]}).then(n=>{if(!n.src)return;if(l.focus(),t){let r=window.getSelection();r.removeAllRanges(),r.addRange(t)}let i=document.createElement("img");i.src=n.src,i.alt=n.alt||"",i.style.maxWidth="100%",t?(t.deleteContents(),t.insertNode(i)):l.appendChild(i)}).catch(()=>{})}var H=class{constructor(e,o){this.isOpen=!1;this.maxRows=8;this.maxCols=8;this.anchor=e,this.contentEl=o,this.el=document.createElement("div"),this.el.className="re-dropdown re-table-picker";let t=document.createElement("div");t.className="re-table-grid",t.style.display="grid",t.style.gridTemplateColumns=`repeat(${this.maxCols}, 18px)`,t.style.gap="2px";for(let n=0;n<this.maxRows;n++)for(let i=0;i<this.maxCols;i++){let r=document.createElement("div");r.className="re-table-cell",r.dataset.row=String(n+1),r.dataset.col=String(i+1),r.addEventListener("mouseover",()=>this.highlight(n+1,i+1)),r.addEventListener("click",a=>{a.stopPropagation(),this.insertTable(n+1,i+1),this.hide()}),t.appendChild(r)}this.label=document.createElement("div"),this.label.className="re-table-label",this.label.textContent="0 x 0",this.el.appendChild(t),this.el.appendChild(this.label),e.parentElement?.appendChild(this.el),this.closeHandler=n=>{!this.el.contains(n.target)&&!e.contains(n.target)&&this.hide()}}highlight(e,o){this.label.textContent=`${e} x ${o}`,this.el.querySelectorAll(".re-table-cell").forEach(n=>{let i=n,r=parseInt(i.dataset.row,10),a=parseInt(i.dataset.col,10);i.classList.toggle("active",r<=e&&a<=o)})}insertTable(e,o){let t=document.createElement("table");t.style.borderCollapse="collapse",t.style.width="100%";for(let i=0;i<e;i++){let r=document.createElement("tr");for(let a=0;a<o;a++){let s=document.createElement(i===0?"th":"td");s.innerHTML="&nbsp;",s.style.border="1px solid #ccc",s.style.padding="6px 8px",r.appendChild(s)}t.appendChild(r)}this.contentEl.focus();let n=window.getSelection();if(n&&n.rangeCount>0){let i=n.getRangeAt(0);i.deleteContents(),i.insertNode(t),i.setStartAfter(t),i.collapse(!0),n.removeAllRanges(),n.addRange(i)}else this.contentEl.appendChild(t)}toggle(){this.isOpen?this.hide():this.show()}show(){let e=this.anchor.getBoundingClientRect(),o=this.anchor.parentElement.getBoundingClientRect();this.el.style.top=`${e.bottom-o.top}px`,this.el.style.left=`${e.left-o.left}px`,this.el.style.display="block",this.isOpen=!0,this.highlight(0,0),document.addEventListener("click",this.closeHandler)}hide(){this.el.style.display="none",this.isOpen=!1,document.removeEventListener("click",this.closeHandler)}destroy(){this.hide(),this.el.remove()}},L=class{constructor(e){this.contentEl=e,this.el=document.createElement("div"),this.el.className="re-table-context-menu",this.el.style.display="none";let o=[{label:"Insert row above",action:()=>this.insertRow(!0)},{label:"Insert row below",action:()=>this.insertRow(!1)},{label:"Insert column left",action:()=>this.insertCol(!0)},{label:"Insert column right",action:()=>this.insertCol(!1)},{label:"Delete row",action:()=>this.deleteRow()},{label:"Delete column",action:()=>this.deleteCol()},{label:"Delete table",action:()=>this.deleteTable()}];for(let t of o){let n=document.createElement("button");n.type="button",n.className="re-table-ctx-btn",n.textContent=t.label,n.addEventListener("mousedown",i=>{i.preventDefault(),i.stopPropagation(),t.action(),this.hide()}),this.el.appendChild(n)}document.body.appendChild(this.el),e.addEventListener("click",t=>{let i=t.target.closest("td, th");if(i&&e.contains(i)){let r=i.getBoundingClientRect();this.el.style.top=`${r.bottom+window.scrollY+4}px`,this.el.style.left=`${r.left+window.scrollX}px`,this.el.style.display="flex"}else this.hide()}),document.addEventListener("click",t=>{!this.el.contains(t.target)&&!e.contains(t.target)&&this.hide()})}getActiveCell(){let e=window.getSelection();if(!e||e.rangeCount===0)return null;let o=e.anchorNode;for(;o&&o!==this.contentEl;){if(o.nodeType===Node.ELEMENT_NODE){let t=o;if(t.tagName==="TD"||t.tagName==="TH")return t}o=o.parentNode}return null}insertRow(e){let o=this.getActiveCell();if(!o)return;let t=o.parentElement;if(!t.closest("table"))return;let i=document.createElement("tr");for(let r=0;r<t.cells.length;r++){let a=document.createElement("td");a.innerHTML="&nbsp;",a.style.border="1px solid #ccc",a.style.padding="6px 8px",i.appendChild(a)}e?t.before(i):t.after(i)}insertCol(e){let o=this.getActiveCell();if(!o)return;let t=o.cellIndex,n=o.closest("table");if(!n)return;let i=n.rows;for(let r=0;r<i.length;r++){let a=document.createElement(r===0&&i[r].cells[0]?.tagName==="TH"?"th":"td");a.innerHTML="&nbsp;",a.style.border="1px solid #ccc",a.style.padding="6px 8px";let s=i[r].cells[e?t:t+1];s?i[r].insertBefore(a,s):i[r].appendChild(a)}}deleteRow(){let e=this.getActiveCell();if(!e)return;let o=e.parentElement,t=o.closest("table");t&&(t.rows.length<=1?t.remove():o.remove())}deleteCol(){let e=this.getActiveCell();if(!e)return;let o=e.cellIndex,t=e.closest("table");if(t){if(t.rows[0]?.cells.length<=1){t.remove();return}for(let n=t.rows.length-1;n>=0;n--){let i=t.rows[n].cells[o];i&&i.remove()}}}deleteTable(){let e=this.getActiveCell();if(!e)return;e.closest("table")?.remove()}hide(){this.el.style.display="none"}destroy(){this.el.remove()}};var D="undo redo | formatselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image table | code fullscreen";function S(l,e){let o=document.createElement("div");o.className="re-toolbar",o.setAttribute("role","toolbar");let t=[],n=[],i=l.split("|").map(a=>a.trim().split(/\s+/));for(let a of i){let s=document.createElement("div");s.className="re-toolbar-group";for(let h of a){if(!h)continue;if(h==="formatselect"){let m=k("formatselect","Format",x.formatselect),c=new w(m,[{label:"Paragraph",value:"p"},{label:"Heading 1",value:"h1"},{label:"Heading 2",value:"h2"},{label:"Heading 3",value:"h3"},{label:"Heading 4",value:"h4"},{label:"Preformatted",value:"pre"}],g=>{e.contentEl.focus(),N(g)});m.addEventListener("click",()=>c.toggle(m.getBoundingClientRect())),t.push(c),s.appendChild(m);continue}if(h==="forecolor"||h==="backcolor"){let m=h==="forecolor"?"foreColor":"hiliteColor",c=k(h,h==="forecolor"?"Text color":"Background color",x[h]),g=new y(c,f=>{e.contentEl.focus(),p(m,f)});c.addEventListener("click",()=>g.toggle()),t.push(g),s.appendChild(c);continue}if(h==="table"){let m=k("table","Insert table",x.table),c=new H(m,e.contentEl);m.addEventListener("click",()=>c.toggle()),t.push(c),s.appendChild(m);continue}let v=k(h,h,x[h]||h);v.addEventListener("click",()=>K(h,e)),["bold","italic","underline","strikethrough"].includes(h)&&n.push({btn:v,command:h}),s.appendChild(v)}o.appendChild(s)}function r(){for(let{btn:a,command:s}of n)a.classList.toggle("active",R(s))}return{el:o,updateState:r,destroy(){for(let a of t)a.destroy()}}}function k(l,e,o){let t=document.createElement("button");return t.type="button",t.className="re-btn",t.dataset.command=l,t.title=e,t.innerHTML=o,t}function K(l,e){let t={bold:()=>{e.contentEl.focus(),p("bold")},italic:()=>{e.contentEl.focus(),p("italic")},underline:()=>{e.contentEl.focus(),p("underline")},strikethrough:()=>{e.contentEl.focus(),p("strikeThrough")},alignleft:()=>{e.contentEl.focus(),p("justifyLeft")},aligncenter:()=>{e.contentEl.focus(),p("justifyCenter")},alignright:()=>{e.contentEl.focus(),p("justifyRight")},alignjustify:()=>{e.contentEl.focus(),p("justifyFull")},bullist:()=>{e.contentEl.focus(),p("insertUnorderedList")},numlist:()=>{e.contentEl.focus(),p("insertOrderedList")},indent:()=>{e.contentEl.focus(),p("indent")},outdent:()=>{e.contentEl.focus(),p("outdent")},undo:()=>{e.contentEl.focus(),p("undo")},redo:()=>{e.contentEl.focus(),p("redo")},removeformat:()=>{e.contentEl.focus(),p("removeFormat")},link:()=>V(e.contentEl),image:()=>A(e.contentEl,e.config),code:()=>e.codeView.toggle(),fullscreen:()=>e.fullscreen.toggle(),help:()=>{window.open("https://github.com/acaronlex/rich-editor","_blank")}}[l];t&&t()}var M=class{constructor(e,o){this.textarea=null;this.isActive=!1;this.contentEl=e,this.container=o}toggle(){this.isActive?this.showRich():this.showCode(),this.isActive=!this.isActive}get active(){return this.isActive}showCode(){this.textarea=document.createElement("textarea"),this.textarea.className="re-code-view",this.textarea.value=this.contentEl.innerHTML,this.contentEl.style.display="none",this.container.appendChild(this.textarea)}showRich(){this.textarea&&(this.contentEl.innerHTML=this.textarea.value,this.textarea.remove(),this.textarea=null),this.contentEl.style.display=""}getContent(){return this.isActive&&this.textarea?this.textarea.value:this.contentEl.innerHTML}destroy(){this.textarea&&this.textarea.remove()}};var T=class{constructor(e){this.isActive=!1;this.container=e}toggle(){this.isActive=!this.isActive,this.container.classList.toggle("re-fullscreen",this.isActive),document.body.style.overflow=this.isActive?"hidden":""}get active(){return this.isActive}destroy(){this.isActive&&this.toggle()}};var E=class{constructor(e,o){this.dirty=!1;this.textarea=e,this.config=o,this.container=document.createElement("div"),this.container.className="re-container",this.contentEl=document.createElement("div"),this.contentEl.className="re-content",this.contentEl.contentEditable="true",this.contentEl.innerHTML=e.value,o.height&&(this.contentEl.style.minHeight=`${o.height}px`),this.codeView=new M(this.contentEl,this.container),this.fullscreen=new T(this.container),this.toolbar=S(o.toolbar||D,{contentEl:this.contentEl,config:this.config,codeView:this.codeView,fullscreen:this.fullscreen}),this.container.appendChild(this.toolbar.el),this.container.appendChild(this.contentEl),this.tableContextMenu=new L(this.contentEl),e.style.display="none",e.parentNode?.insertBefore(this.container,e.nextSibling),this.contentEl.addEventListener("input",()=>{this.dirty=!0}),this.selectionChangeHandler=()=>{(this.container.contains(document.activeElement)||document.activeElement===this.contentEl)&&this.toolbar.updateState()},document.addEventListener("selectionchange",this.selectionChangeHandler);let t=e.closest("form");if(t&&t.addEventListener("submit",()=>this.save()),o.content_css)for(let n of o.content_css){let i=document.createElement("link");i.rel="stylesheet",i.href=n,document.head.appendChild(i)}}getContent(){return this.codeView.getContent()}setContent(e){this.contentEl.innerHTML=e}save(){this.textarea.value=this.getContent()}isDirty(){return this.dirty}destroy(){this.save(),document.removeEventListener("selectionchange",this.selectionChangeHandler),this.toolbar.destroy(),this.codeView.destroy(),this.fullscreen.destroy(),this.tableContextMenu.destroy(),this.container.remove(),this.textarea.style.display=""}};var O=`:root {\r
  --re-primary: #1a73e8;\r
  --re-border: #dadce0;\r
  --re-bg: #fff;\r
  --re-toolbar-bg: #f8f9fa;\r
}\r
\r
.re-container {\r
  border: 1px solid var(--re-border);\r
  border-radius: 6px;\r
  overflow: hidden;\r
  background: var(--re-bg);\r
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\r
  position: relative;\r
}\r
\r
.re-toolbar {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 2px;\r
  padding: 4px 6px;\r
  border-bottom: 1px solid var(--re-border);\r
  background: var(--re-toolbar-bg);\r
  align-items: center;\r
}\r
\r
.re-toolbar-group {\r
  display: flex;\r
  gap: 1px;\r
  align-items: center;\r
  padding-right: 6px;\r
  margin-right: 4px;\r
  border-right: 1px solid var(--re-border);\r
}\r
\r
.re-toolbar-group:last-child {\r
  border-right: none;\r
  padding-right: 0;\r
  margin-right: 0;\r
}\r
\r
.re-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 28px;\r
  height: 28px;\r
  padding: 0;\r
  border: none;\r
  border-radius: 4px;\r
  background: transparent;\r
  color: #444;\r
  cursor: pointer;\r
  transition: background-color 0.15s;\r
}\r
\r
.re-btn:hover {\r
  background: #e8eaed;\r
}\r
\r
.re-btn:active {\r
  background: #d2d4d7;\r
}\r
\r
.re-btn.active {\r
  background: #d3e3fd;\r
  color: var(--re-primary);\r
}\r
\r
.re-btn svg {\r
  width: 16px;\r
  height: 16px;\r
}\r
\r
.re-content {\r
  padding: 12px 16px;\r
  min-height: 200px;\r
  outline: none;\r
  overflow: auto;\r
  line-height: 1.6;\r
  color: #202124;\r
  font-size: 14px;\r
}\r
\r
.re-content:focus {\r
  outline: none;\r
}\r
\r
.re-content img {\r
  max-width: 100%;\r
  height: auto;\r
}\r
\r
.re-content table {\r
  border-collapse: collapse;\r
  width: 100%;\r
  margin: 8px 0;\r
}\r
\r
.re-content table td,\r
.re-content table th {\r
  border: 1px solid #ccc;\r
  padding: 6px 8px;\r
  min-width: 40px;\r
}\r
\r
.re-content table th {\r
  background: #f5f5f5;\r
  font-weight: 600;\r
}\r
\r
.re-content blockquote {\r
  border-left: 3px solid var(--re-primary);\r
  margin: 8px 0;\r
  padding: 4px 12px;\r
  color: #555;\r
}\r
\r
.re-content pre {\r
  background: #f5f5f5;\r
  padding: 12px;\r
  border-radius: 4px;\r
  overflow-x: auto;\r
  font-family: 'Cascadia Code', 'Fira Code', monospace;\r
  font-size: 13px;\r
}\r
\r
/* Dropdown */\r
.re-dropdown {\r
  position: absolute;\r
  display: none;\r
  background: var(--re-bg);\r
  border: 1px solid var(--re-border);\r
  border-radius: 6px;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r
  z-index: 100000;\r
  min-width: 120px;\r
  padding: 4px;\r
}\r
\r
.re-dropdown-item {\r
  padding: 6px 12px;\r
  cursor: pointer;\r
  border-radius: 4px;\r
  font-size: 13px;\r
  white-space: nowrap;\r
}\r
\r
.re-dropdown-item:hover {\r
  background: #e8eaed;\r
}\r
\r
/* Color picker */\r
.re-color-grid {\r
  display: grid;\r
  grid-template-columns: repeat(10, 22px);\r
  gap: 3px;\r
  padding: 8px;\r
  min-width: auto;\r
}\r
\r
.re-color-swatch {\r
  width: 22px;\r
  height: 22px;\r
  border-radius: 3px;\r
  cursor: pointer;\r
  border: 1px solid rgba(0, 0, 0, 0.1);\r
  transition: transform 0.1s;\r
}\r
\r
.re-color-swatch:hover {\r
  transform: scale(1.2);\r
  border-color: #333;\r
  z-index: 1;\r
}\r
\r
/* Table picker */\r
.re-table-picker {\r
  padding: 8px;\r
}\r
\r
.re-table-grid {\r
  display: grid;\r
  gap: 2px;\r
}\r
\r
.re-table-cell {\r
  width: 18px;\r
  height: 18px;\r
  border: 1px solid var(--re-border);\r
  border-radius: 2px;\r
  cursor: pointer;\r
  background: var(--re-bg);\r
}\r
\r
.re-table-cell.active {\r
  background: #d3e3fd;\r
  border-color: var(--re-primary);\r
}\r
\r
.re-table-label {\r
  text-align: center;\r
  font-size: 12px;\r
  color: #666;\r
  margin-top: 6px;\r
}\r
\r
/* Table context menu */\r
.re-table-context-menu {\r
  position: absolute;\r
  display: none;\r
  flex-wrap: wrap;\r
  gap: 2px;\r
  background: var(--re-bg);\r
  border: 1px solid var(--re-border);\r
  border-radius: 6px;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r
  z-index: 100001;\r
  padding: 4px;\r
}\r
\r
.re-table-ctx-btn {\r
  display: block;\r
  width: 100%;\r
  text-align: left;\r
  padding: 5px 10px;\r
  border: none;\r
  background: none;\r
  cursor: pointer;\r
  font-size: 12px;\r
  border-radius: 3px;\r
  white-space: nowrap;\r
}\r
\r
.re-table-ctx-btn:hover {\r
  background: #e8eaed;\r
}\r
\r
/* Dialog */\r
.re-dialog-overlay {\r
  position: fixed;\r
  inset: 0;\r
  background: rgba(0, 0, 0, 0.4);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  z-index: 100002;\r
}\r
\r
.re-dialog {\r
  background: var(--re-bg);\r
  border-radius: 10px;\r
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);\r
  min-width: 380px;\r
  max-width: 90vw;\r
  padding: 0;\r
  animation: re-dialog-in 0.15s ease-out;\r
}\r
\r
@keyframes re-dialog-in {\r
  from {\r
    opacity: 0;\r
    transform: scale(0.95);\r
  }\r
  to {\r
    opacity: 1;\r
    transform: scale(1);\r
  }\r
}\r
\r
.re-dialog-title {\r
  padding: 16px 20px 12px;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #202124;\r
  border-bottom: 1px solid var(--re-border);\r
}\r
\r
.re-dialog-body {\r
  padding: 16px 20px;\r
}\r
\r
.re-dialog-field {\r
  margin-bottom: 12px;\r
}\r
\r
.re-dialog-field label {\r
  display: block;\r
  margin-bottom: 4px;\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #555;\r
}\r
\r
.re-dialog-field input {\r
  width: 100%;\r
  padding: 8px 10px;\r
  border: 1px solid var(--re-border);\r
  border-radius: 4px;\r
  font-size: 14px;\r
  outline: none;\r
  box-sizing: border-box;\r
  transition: border-color 0.15s;\r
}\r
\r
.re-dialog-field input:focus {\r
  border-color: var(--re-primary);\r
  box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);\r
}\r
\r
.re-dialog-buttons {\r
  display: flex;\r
  justify-content: flex-end;\r
  gap: 8px;\r
  padding: 12px 20px 16px;\r
}\r
\r
.re-dialog-btn {\r
  padding: 8px 20px;\r
  border: none;\r
  border-radius: 4px;\r
  font-size: 14px;\r
  cursor: pointer;\r
  font-weight: 500;\r
  transition: background-color 0.15s;\r
}\r
\r
.re-dialog-btn-cancel {\r
  background: #f1f3f4;\r
  color: #444;\r
}\r
\r
.re-dialog-btn-cancel:hover {\r
  background: #e2e4e6;\r
}\r
\r
.re-dialog-btn-ok {\r
  background: var(--re-primary);\r
  color: white;\r
}\r
\r
.re-dialog-btn-ok:hover {\r
  background: #1565c0;\r
}\r
\r
/* Code view */\r
.re-code-view {\r
  width: 100%;\r
  min-height: 200px;\r
  border: none;\r
  padding: 12px 16px;\r
  font-family: 'Cascadia Code', 'Fira Code', monospace;\r
  font-size: 13px;\r
  line-height: 1.5;\r
  resize: vertical;\r
  outline: none;\r
  box-sizing: border-box;\r
  background: #fafafa;\r
  color: #333;\r
}\r
\r
/* Fullscreen */\r
.re-fullscreen {\r
  position: fixed;\r
  inset: 0;\r
  z-index: 99999;\r
  background: var(--re-bg);\r
  border-radius: 0;\r
  border: none;\r
}\r
\r
.re-fullscreen .re-content {\r
  height: calc(100vh - 50px);\r
  max-height: none;\r
}\r
\r
.re-fullscreen .re-code-view {\r
  height: calc(100vh - 50px);\r
}\r
\r
/* Responsive */\r
@media (max-width: 640px) {\r
  .re-toolbar {\r
    gap: 1px;\r
    padding: 3px;\r
  }\r
\r
  .re-btn {\r
    width: 26px;\r
    height: 26px;\r
  }\r
\r
  .re-toolbar-group {\r
    padding-right: 4px;\r
    margin-right: 2px;\r
  }\r
\r
  .re-dialog {\r
    min-width: 90vw;\r
  }\r
}\r
`;var I=!1;function B(){if(I)return;I=!0;let l=document.createElement("style");l.textContent=O,document.head.appendChild(l)}var u=new Map;function X(l){B(),document.querySelectorAll(l.selector).forEach(o=>{let t=o.id||`re-${u.size}`;o.id||(o.id=t),u.has(t)&&u.get(t).destroy();let n=new E(o,l);u.set(t,n)})}function Y(l){return u.get(l)}function G(){u.forEach(l=>l.save())}return q(J);})();
//# sourceMappingURL=rich-editor.umd.js.map

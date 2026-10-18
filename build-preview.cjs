// Standalone preview renderer for locally viewing the Next.js home without npm.
const fs = require('fs');
const vm = require('vm');
const ts = require('typescript');
const path = require('path');
const jsx = (type, props = {}) => ({type, props});
const Fragment = Symbol.for('mock.fragment');
const escape = (text) => String(text).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(node) {
  if (node == null || node === false || node === true) return '';
  if (Array.isArray(node)) return node.map(render).join('');
  if (typeof node === 'string' || typeof node === 'number') return escape(node);
  let {type, props = {}} = node;
  if (type === Fragment) return render(props.children);
  if (typeof type === 'function') return render(type(props));
  if (!type) return '';
  if(type==='__raw')return props.html;
  let attrs = '';
  for(const [k,v] of Object.entries(props)) {
    if(k==='children'||k==='key'||k==='ref'||v==null||k.startsWith('on'))continue;
    if((type==='img' && k==='fill')||k==='priority'||k==='quality'||k==='sizes')continue;
    if(k==='strokeWidth') {attrs+=` stroke-width="${escape(v)}"`;continue;}
    if(k==='className') {attrs+=` class="${escape(v)}"`;continue;}
    if(k==='htmlFor') {attrs+=` for="${escape(v)}"`;continue;}
    if(k==='open') {if(v)attrs+=' open';continue;}
    if(k==='style' && typeof v==='object'){attrs+=' style="'+Object.entries(v).map(([x,y])=>`${x.replace(/([A-Z])/g, '-$1').toLowerCase()}:${y}`).join(';')+'"'; continue;}
    attrs+=` ${k}="${escape(v)}"`;
  }
  if(['img','input','hr','br','meta','link'].includes(type)) return `<${type}${attrs}>`;
  return `<${type}${attrs}>${render(props.children)}</${type}>`;
}
const iconPaths = {
  ArrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
  ArrowRight: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  ArrowDown: '<path d="M12 5v14m-7-7 7 7 7-7"/>',
  Check: '<path d="m5 12 4 4L19 6"/>',
  ChevronDown: '<path d="m6 9 6 6 6-6"/>',
  Clock3: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  MessageCircle: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8A8.5 8.5 0 0 1 12.5 20a8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5a8.5 8.5 0 0 1 8.5-8.5h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
  Leaf: '<path d="M11 20A7 7 0 0 1 4 13C4 5 16 3 21 3c0 5-1 17-9 17Z"/><path d="M4 21c1-6 6-10 12-13"/>',
  Heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  Waves: '<path d="M2 6c1.5 0 1.5 2 3.5 2S7.5 6 9 6s1.5 2 3.5 2S14.5 6 16 6s1.5 2 3.5 2S21.5 6 23 6M2 12c1.5 0 1.5 2 3.5 2S7.5 12 9 12s1.5 2 3.5 2S14.5 12 16 12s1.5 2 3.5 2 2-2 3.5-2M2 18c1.5 0 1.5 2 3.5 2S7.5 18 9 18s1.5 2 3.5 2S14.5 18 16 18s1.5 2 3.5 2 2-2 3.5-2"/>',
  Sparkles: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM5 18l.7 1.8L7.5 20.5l-1.8.7L5 23l-.7-1.8-1.8-.7 1.8-.7L5 18ZM20 1l.7 1.8 1.8.7-1.8.7L20 6l-.7-1.8-1.8-.7 1.8-.7L20 1Z"/>',
  Stethoscope: '<path d="M6 3v6a4 4 0 0 0 8 0V3M4 3h4m4 0h4M10 13v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="12" r="2"/>',
  CalendarDays: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M7 2v4M17 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  MapPin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  ScanLine: '<path d="M4 8V4h4m8 0h4v4M20 16v4h-4M8 20H4v-4M4 12h16"/>',
  Instagram: '<rect width="18" height="18" x="3" y="3" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
};
const lucide = new Proxy({}, {get: (_,iconName) => ({size = 24,strokeWidth = 1.5, className = '', ...props}) => jsx('svg',{...props, className, width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':strokeWidth,'stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true',children: {type:'__raw',props:{html:iconPaths[iconName] || '<circle cx="12" cy="12" r="7"/>'}}})});

const img = (props) => jsx('img',{...props,src:props.src.replace(/^\//,'public/'),style:{position:'absolute',inset:0,width:'100%',height:'100%'}});
const mods = {'react/jsx-runtime':{jsx,jsxs:jsx, Fragment}, 'next/image':{__esModule:true,default:img}, 'lucide-react':lucide};
const source=fs.readFileSync(path.join(__dirname,'app/page.tsx'),'utf8');
const compiled=ts.transpileModule(source,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}});
const ctx={module:{exports:{}},exports:{}, require:(n)=>{if(mods[n])return mods[n];throw Error('unmocked '+n);},console};
ctx.exports=ctx.module.exports;
vm.runInNewContext(compiled.outputText,ctx,{filename:'home.js'});
const home=ctx.module.exports.default;
const rendered=render(home());
const html=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Alline Silvestre — Prévia V3</title><link rel="stylesheet" href="app/globals.css"/></head><body>${rendered}</body></html>`;
fs.writeFileSync(path.join(__dirname,'preview.html'),html);
console.log('Generated preview.html',html.length,'chars');

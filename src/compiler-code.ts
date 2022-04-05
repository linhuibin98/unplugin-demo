const code =
  'import { openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"\n' +
  "\n" +
  "export function render(_ctx, _cache) {\n" +
  '  return (_openBlock(), _createElementBlock("div", null, "Hello Unplugin"))\n' +
  "}";

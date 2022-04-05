import {createUnplugin} from 'unplugin'
import { importModule } from 'local-pkg'

export const unplugin = createUnplugin((options) => {
    return {
        name: 'unplugin-demo',
        resolveId: (id) => {
            // 拦截id解析，不让其他插件解析：文件系统...
            if (id === 'virtual-module') {
                return id;
            }
            return null; // 返回null，让其他插件解析
        },
        load: async (id) => {
            // 拦截插件读取内容，不让其他插件读取内容：文件系统...
            if (id === 'virtual-module') {
                const { compileTemplate } = await importModule('@vue/compiler-sfc')
                let {code} = compileTemplate({
                    source: '<div>Hello Unplugin</div>',
                    id: 'demo',
                    filename: 'demo.vue',
                });
                code = code.replace(/^export /gm, '')
                code += `\n\nexport default { name: 'virtual-module', render: render }`
                return code; // 返回模拟的模块内容代码
            }
            return null; // 返回null，让其他插件加载内容
        }
    }
});

export const webpack = unplugin.webpack;

export default unplugin;


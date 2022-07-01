import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    // default
    './src/index',
  ],
  outDir: 'dist',
  // Generates .d.ts declaration file
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})

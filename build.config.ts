import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  outDir: 'dist', // default
  clean: true,
  rollup: {
    emitCJS: true,
  },
});

const { series, rimraf, mkdirp } = require('nps-utils');

module.exports = {
  scripts: {
    default: 'nps build',
    standards: {
      default: series('npx nps standards.typing', 'npx nps standards.unit'),
      typing: 'tsc',
      unit: 'npx jest'
    },
    build: {
      description: 'Builds the assets',
      default: series('npx nps clean', 'npx nps build.lib', 'npx nps build.types'),
      watch: 'nodemon --watch src --exec npx nps build',
      lib: series(mkdirp('lib'), `npx babel src --extensions '.ts,.tsx,.js' --config-file ./babel.config.json --out-dir ./lib`),
      types: 'npx tsc --declaration --outDir lib/ --emitDeclarationOnly --declarationMap',
    },
    clean: {
      description: 'Deletes the various generated folders',
      script: rimraf('./lib'),
    },
  },
};

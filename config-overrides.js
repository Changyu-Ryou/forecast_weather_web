// eslint-disable-next-line @typescript-eslint/no-var-requires
const { alias } = require('react-app-rewire-alias');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, babelInclude } = require('customize-cra');

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      alias({
        '@': 'src/',
      }),
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve('src'),
        path.resolve('../common'),
      ])
    )(config, env)
  );
};

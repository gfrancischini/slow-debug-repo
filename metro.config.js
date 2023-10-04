const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const OriginalResolver = require('metro-resolver');
const path = require('path');
const blacklistedModules = ['react-native-screens'];
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (blacklistedModules.includes(moduleName)) {
        return {
          filePath: path.join(
            __dirname,
            '/src/react-native-screen-shim-module.js',
          ),
          type: 'sourceFile',
        };
      } else {
        return OriginalResolver.resolve(
          {...context, resolveRequest: undefined},
          moduleName,
          platform,
        );
      }
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

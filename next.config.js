const withPlugins = require('next-compose-plugins');
const typescript = require('@zeit/next-typescript');
const dotenv = require('dotenv-webpack');
const css = require('@zeit/next-css');
const path = require('path');
const optimizedImages = require('next-optimized-images');
const fonts = require('next-fonts');
const bundleAnalyzer = require('@zeit/next-bundle-analyzer');

const config = {
  distDir: '../dist/app',
};

module.exports = withPlugins([
  [typescript],
  [css],
  [optimizedImages],
  [fonts],
  [bundleAnalyzer, {
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
      },
      browser: {
        analyzerMode: 'static',
      },
    }
  }],
], {
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    return config;
  },
  ...config,
});

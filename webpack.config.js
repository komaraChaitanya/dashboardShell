const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    uniqueName: "dashboardShell",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        featureModule: "featureModule@http://localhost:4201/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: false, requiredVersion: "^19.2.0" },
        "@angular/common": { singleton: true, strictVersion: false, requiredVersion: "^19.2.0" },
        "@angular/router": { singleton: true, strictVersion: false, requiredVersion: "^19.2.0" },
      }
    })
  ],
};

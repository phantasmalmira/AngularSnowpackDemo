// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/src",
  },
  install: ["@angular/common"],
  plugins: [
    [
      "angular-snowpack-plugin",
      {
        src: "src",
        logLevel: "normal",
        tsConfig: "tsconfig.app.json",
        ngccTargets: ["@angular/router"],
      },
    ],
  ],
  // installOptions: {},
  // devOptions: {},
  buildOptions: {
    out: "dist",
    clean: true,
    sourceMaps: true,
  },
};

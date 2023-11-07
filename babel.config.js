module.exports = api => {
  api.cache(true);

  /** @type {import('@types/babel__core').PluginItem[]} */
  const plugins = [
    [
      "relay",
      {
        artifactDirectory: "queries/__generated__",
      },
    ],
    "@emotion"
  ];

  return {
    presets: [
      [
        "next/babel",
        {
          // cspell: ignore corejs
          "preset-env": {
            useBuiltIns: "usage",
            corejs: { version: "3.30", proposals: true },
          },
        },        
      ],
    ],
    plugins,
  };
};

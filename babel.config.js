module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@constants': './src/constants',
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@infrastructure': './src/infrastructure',
            '@data': './src/data',
            '@types': './src/types',
          },
        },
      ],
    ],
  };
};

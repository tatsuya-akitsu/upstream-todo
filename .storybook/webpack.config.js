module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      }
    ],
  }, {
    test: /\.module\.s(a|c)ss$/,
    loader: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          url: false,
          importLoaders: 2,
          sourceMap: true
        }
      },
      { loader: require.resolve('postcss-loader') },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true
        }
      }
    ]
  }, {
    test: /\.(gif|png|jpg|jpeg|svg|ttf|eot|wof|woff|woff2)$/,
    loader: require.resolve('url-loader')
  });
  config.resolve.extensions.push('.ts', '.tsx', '.scss', '.css');
  return config;
};

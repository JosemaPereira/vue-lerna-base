module.exports = (mixConfig, overrideConfig) =>
  require('./karma.conf.common')(
    Object.assign({}, mixConfig, {
      plugins: [
        ...mixConfig.plugins,
        require('karma-jsdom-launcher'),
        require('karma-teamcity-reporter')
      ],
      reporters: [...mixConfig.reporters, 'teamcity']
    }),
    Object.assign({}, { browsers: ['jsdom'] }, overrideConfig)
  );

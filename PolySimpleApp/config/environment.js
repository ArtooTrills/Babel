/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'poly-simple',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      // 'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      'font-src': "'self' fonts.gstatic.com fonts.googleapis.com",
      'connect-src': "'self' ws://localhost:35729 ws://0.0.0.0:35729 http://0.0.0.0:4200/csp-report http://localhost:3000 ws://localhost:3000",
      // 'img-src': "'self' www.facebook.com p.typekit.net",
      'style-src': "'self' fonts.googleapis.com",
      // 'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    },
    sassOptions: {
      includePaths: ['bower_components/material-design-lite/src']
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

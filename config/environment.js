'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'calev',
    environment,
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    torii: { sessionServiceName: 'session' },
    firebase: {
      apiKey: "AIzaSyCc7G9mw4FNKNDnuPOfQ9yrnpsAuXauka4",
    authDomain: "ember-test-9067b.firebaseapp.com",
    databaseURL: "https://ember-test-9067b.firebaseio.com",
    projectId: "ember-test-9067b",
    storageBucket: "ember-test-9067b.appspot.com",
    messagingSenderId: "953270278653"
    },
    gmap: {
      exclude: true,
      libraries: ['places', 'geometry'],
      key: 'AIzaSyBjbWTA62z3lk-vPi3U697zQa6S-HD8QDs',
      channel: 'my-google-map-api-channel',
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
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
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};

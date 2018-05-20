'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      prepend: EmberApp.env() === 'production' ? '//posts-1256188574.cos.ap-chengdu.myqcloud.com/app-ember/' : ''
    },
    babel: {
      plugins: [
        'transform-decorators-legacy', 'transform-object-rest-spread'
      ],
      presets: ["es2015", "stage-0"]
    },
    sassOptions: {
      includePaths: ['node_modules/bootstrap/scss']
    },
    basicDepsOptions: {
      bootstrapOptions: {
        autoImport: false
      },
      messengerOptions: {
        autoImport: true
      },
      markdownCssOptions: {
        autoImport: true
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/chosen-package/chosen.min.css');
  app.import('vendor/chosen-package/chosen.jquery.min.js');
  app.import('vendor/chosen-package/chosen-sprite.png', { destDir: 'assets' });
  app.import('vendor/chosen-package/chosen-sprite@2x.png', { destDir: 'assets' });
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');

  return app.toTree();
};

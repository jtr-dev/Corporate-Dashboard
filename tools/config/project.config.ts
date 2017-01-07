import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
      'node_modules/font-awesome/fonts/**'
  ];
  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'font-awesome/css/font-awesome.css', inject: true },
      { src: 'jquery/dist/jquery.js', inject: 'libs' },
      { src: 'moment/moment.js', inject: 'libs' },
      { src: 'fullcalendar/dist/fullcalendar.css', inject: true },
      { src: 'fullcalendar/dist/fullcalendar.min.js', inject: 'libs' },
      { src: 'perfect-scrollbar/dist/css/perfect-scrollbar.css', inject: true },
      { src: 'perfect-scrollbar/dist/js/perfect-scrollbar.jquery.js', inject: 'libs' },
      { src: 'chart.js/Chart.js', inject: 'libs' },
<<<<<<< HEAD
      { src: 'lodash/lodash.min.js', inject: 'libs'},
      // { src: 'angular2-datatable/lib/DataTable.js', inject: true},
      // { src: 'lodash', inject: 'libs' }
=======
>>>>>>> ed6b5fe27a5c60520242f789ef0d799eb29d5bc5
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      { src: `${this.ASSETS_SRC}/extra/jqvmap/jqvmap.css`, inject: true, vendor: false},
      { src: `${this.ASSETS_SRC}/extra/jqvmap/jquery.vmap.js`, inject: true, vendor: false },
      { src: `${this.ASSETS_SRC}/extra/jqvmap/maps/jquery.vmap.world.js`, inject: true, vendor: false },
      { src: `${this.ASSETS_SRC}/extra/c3/c3.min.css`, inject: true, vendor: false },
      { src: `${this.ASSETS_SRC}/extra/c3/c3.min.js`, inject: true, vendor: false },
      { src: `${this.ASSETS_SRC}/extra/d3/d3.js`, inject: true, vendor: false },
      { src: `${this.ASSETS_SRC}/extra/progressButton/classie.js`, inject: true, vendor: false},
      { src: `${this.ASSETS_SRC}/extra/progressButton/modernizr.custom.js`, inject: true, vendor: false},
      { src: `${this.ASSETS_SRC}/extra/progressButton/progressButton.js`, inject: true, vendor: false},
      { src: `${this.ASSETS_SRC}/extra/growl/css/growl.css`, inject: true, vendor: false},
      { src: `${this.ASSETS_SRC}/extra/growl/js/growl.js`, inject: true, vendor: false },
      { src: `${this.ASSETS_SRC}/extra/datetimepicker/css/bootstrap-datetimepicker.css`, inject: true, vendor: false},
      { src: `${this.ASSETS_SRC}/extra/datetimepicker/js/bootstrap-datetimepicker.min.js`, inject: true, vendor: false },
      { src: `${this.ASSETS_SRC}/extra/jb-editor/editor.css`, inject: true, vendor: false},
      { src: `${this.ASSETS_SRC}/extra/jb-editor/editor.js`, inject: true, vendor: false},
      { src: `${this.CSS_SRC}/app-midnight-blue.${this.getInjectableStyleExtension()}`, inject: true, vendor: false }
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];
        // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [
      {
      name: 'angular2-datatable',
      // Path to the package's bundle
      path: 'node_modules/angular2-datatable/',
       packageMeta: {
        main: 'index.js',
        defaultExtension: 'js'
      }
    },
    {
       name: 'lodash',
      // Path to the package's bundle
      path: 'node_modules/lodash/',
       packageMeta: {
        main: 'index.js',
        defaultExtension: 'js'
      }
    }
    ];

    this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}

import * as gulp from 'gulp';

/**
 * This sample task copies all TypeScript files over to the appropiate `dist/dev|prod|test` directory, depending on the
 * current application environment.
 */
export = () => {
	return gulp.src('node_modules/moment/moment.js')
    	.pipe(gulp.dest('./node_modules'));
};

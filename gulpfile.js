var gulp = require('gulp');
var plumber = require("gulp-plumber");//コンパイルエラーが起きても watch を抜けないようになる
var concat  = require('gulp-concat');
var browserify = require("gulp-browserify");//NodeJSのコードをブラウザ向けコードに変換
var _tasks = [
	'modules'
];

// src 中の *.js を処理
gulp.task('modules', function(){
	gulp.src(["./src_gulp/sample_cat/sample/module.js"])
		.pipe(plumber())
		.pipe(concat('module.js'))
		.pipe(gulp.dest( './modules/sample_cat/sample/' ))
	;
	gulp.src(["./src_gulp/sample_cat/sample/module.css.scss"])
		.pipe(plumber())
		.pipe(concat('module.css.scss'))
		.pipe(gulp.dest( './modules/sample_cat/sample/' ))
	;
});

// src 中のすべての拡張子を監視して処理
gulp.task("watch", function() {
	gulp.watch(["src_gulp/**/*"], _tasks);
});


// src 中のすべての拡張子を処理(default)
gulp.task("default", _tasks);

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var open = require('open');

// 定义路径
var app = {
    devPath:'./build/',
    distPath:'./dist/',
    srcPath:'./src/'
}
// E: \item\angularkit\bower_components\angular\angular.min.js
//打包依赖的插件和包
gulp.task('bundle',function(){
  gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/angular-route/angular-route.min.js',
  ])
  .pipe($.plumber()) //编译错误后继续往下执行
  .pipe($.concat('bundle.js')) //合并文件
  .pipe(gulp.dest(app.devPath + 'static/js')) //生成到这个路径里面
})


gulp.task('script',function(){
  gulp.src('./src/script/**/*.js')
    .pipe($.plumber()) //编译错误后继续往下执行
    .pipe($.concat('all.js')) //合并文件
    .pipe(gulp.dest(app.devPath + 'static/js')) //生成到这个路径里面
    .pipe($.rename('all.min.js')) // 重命名文件
    .pipe($.uglify()) //压缩js文件
    .pipe(gulp.dest(app.distPath + 'static/js')) //生成到生产环境里面    
})
// npm i gulp gulp-plumber gulp-concat gulp-load-plugins open gulp-rename gulp-uglify -D
// npm i gulp gulp-plumber gulp-concat gulp-load-plugins open gulp-rename gulp-uglify -D
// npm i gulp gulp-plumber gulp-concat gulp-load-plugins open gulp-rename gulp-uglify -D
// npm i gulp gulp-plumber gulp-concat gulp-load-plugins open gulp-rename gulp-uglify -D

//启动一个serve 
gulp.task('serve',function(){
    connect.server({
        root:[app.devPath], //设置网站的根路径
        livereload:true,
        port:8080 
    })
})

gulp.task('dev',[
  'serve',
  'script',
  'bundle'
])
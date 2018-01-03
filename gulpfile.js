var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default',()=>{
    nodemon({
        script:'index.js',
        ext:'js',
        env:{
            port: 9000
        },
        ignore: ['node_modules/**/']
    })
    .on('restart',()=>{
        console.log('Server is restarting');
    });
});
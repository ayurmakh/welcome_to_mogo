var gulp      = require('gulp'), // Ïîäêëþ÷àåì Gulp
    sass        = require('gulp-sass'), //Ïîäêëþ÷àåì Sass ïàêåò,
    browserSync = require('browser-sync'); // Ïîäêëþ÷àåì Browser Sync

gulp.task('sass', function(){ // Ñîçäàåì òàñê Sass
    return gulp.src('app/sass/**/*.sass') // Áåðåì èñòî÷íèê
        .pipe(sass()) // Ïðåîáðàçóåì Sass â CSS ïîñðåäñòâîì gulp-sass
        .pipe(gulp.dest('app/css')) // Âûãðóæàåì ðåçóëüòàòà â ïàïêó app/css
        .pipe(browserSync.reload({stream: true})) // Îáíîâëÿåì CSS íà ñòðàíèöå ïðè èçìåíåíèè
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() { // Ñîçäàåì òàñê browser-sync
    browserSync({ // Âûïîëíÿåì browserSync
        server: { // Îïðåäåëÿåì ïàðàìåòðû ñåðâåðà
            baseDir: 'app' // Äèðåêòîðèÿ äëÿ ñåðâåðà - app
        },
        notify: false // Îòêëþ÷àåì óâåäîìëåíèÿ
    });
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')); // Íàáëþäåíèå çà sass ôàéëàìè
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
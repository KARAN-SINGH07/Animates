    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
    var cors=require('cors');
    var mongoose = require('mongoose');
    var multer=require('multer');
    const upload=multer({dest: 'uploads/'})

    var indexRouter = require('./routes/index');
    var usersRouter = require('./routes/users');
    var adminRouter = require('./routes/admin');
    var otpRouter= require('./routes/otp');
    var productlistingRouter = require('./routes/productlisting');
    var emailsendRouter = require('./routes/emailsend');

    var app = express();
    
    app.use(cors());
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'public/images')));

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/admin', adminRouter);
    app.use('/productlisting',productlistingRouter);
    app.use('/emailsend', emailsendRouter);
    app.use('/otpsend', otpRouter);


    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now())
        }
    });
      
    
    
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });
    //MongoDB connectivity with Mongoose starts here
    mongoose.connect('mongodb://127.0.0.1:27017/apkdatabase', { useNewUrlParser: true },
        (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Database Connected")
            }

        }
    )



   


    






    module.exports = app;
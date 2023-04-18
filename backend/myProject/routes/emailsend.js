var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var app = express();

/* GET emailsend listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/buyproduct', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ks5754111@gmail.com',
          pass: 'gydjdnbrrdyvbrgh'
        }
      });
      // router.get('/getdetails', function(req, res)
      // {
      //   Details.find({}).then(DetailsData => res.json(DetailsData)).catch(err => {
      //     console.log(err);
      //     res.json(err);
      //   })
      // })
      var mailOptions = {
        from: 'ks5754111@gmail.com',
        to: 'bangaripallavi2000@gmail.com',
        subject: 'Order Details',
        text: 'Please Ignore me and Please delete Me.'  

      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
            res.json({ message: "Email sent to admin and we will contact you soon"});
        //   res.json('Email sent: ' + info.response);
        }
      });
  
      // error handler
      app.use(function(err, req, res, next) {
          // set locals, only providing error in development
          res.locals.message = err.message;
          res.locals.error = req.app.get('env') === 'development' ? err : {};
  
          // render the error page
          res.status(err.status || 500);
          res.render('error');
      });
  
});


module.exports = router;
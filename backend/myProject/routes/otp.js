var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Otp= require('../models/otp');
const nodemailer = require('nodemailer'); 
let { encryptPassword, comparePasswords, generateJwt } =
  require('../utils/loginutils');
// const { response } = require('../app');
var app = express();


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/send',async(req,res)=>{
    let data = await User.findOne({email:req.body.email});
    const responseType={};
    if(data){
        let otpcode=Math.floor((Math.random()*10000)+1);
        let otpData = new Otp({
            email:req.body.email,
            code:otpcode,
            expireIn:new Date().getTime()+300*1000
        })   
        let otpResponse=await otpData.save();
        responseType.statusText='Success';
        responseType.message='OTP send to your email id';
        mailer(data,otpData);
    }else{
        responseType.statusText='error';
        responseType.message="Email ID doesn't exists";
        // return res.status(400).send({ message: "Email ID doesn't exists" });
    }
    res.status(200).json(responseType);
 })

 router.post('/changepassword',async (req,res)=>{
    let data = await Otp.findOne({email:req.body.email,code:req.body.otpcode});
    const response={};
    if(data){
        let currentTime=new Date().getTime();
        let diff=data.expireIn - currentTime;
        if(diff<0){
            response.message='Token expire'
            response.statusText='error'
            // return res.status(400).send({ message: "Token Expired" });
        }else{
            let user=await User.findOne({email:req.body.email})
            // user.password=req.body.password;
            user.password = await encryptPassword(req.body.password);
            user.save();
            response.message = 'Password changed successfully'
            response.statusText='Success';
        }
    }else{
        response.message='Invalid Otp'
        response.statusText='error'
        // return res.status(400).send({ message: "Invalid OTP!" });
    }
    res.status(200).json(response)
 })

 const mailer=(data1,otpdata)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ks5754111@gmail.com',
          pass: 'atfghgetxtpxcdpj'
        }
      });
      ;
      // router.get('/getdetails', function(req, res)
      // {
      //   Details.find({}).then(DetailsData => res.json(DetailsData)).catch(err => {
      //     console.log(err);
      //     res.json(err);
      //   })
      // })
      const correcteddata=data1.toString().replaceAll(`'`, ``);
      var mailOptions = {
        from: 'ks5754111@gmail.com',
        to: correcteddata,
        subject: "AniMates Reset Password from admin (Karan Singh)",
        text: 'Your One Time Password for reset password is '+ otpdata.code+'. Thank you!'   

      };
      
      transporter.sendMail(mailOptions, function(error, info,response){
        if (error) {
          console.log(error);
          
        } else {
            res.json({ message: "Email sent to admin and we will contact you soon"}+info.response);
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

 }
// const emailsend=async(req,res)=>{
    
//         let data = await User.findOne({email:req.body.email});
//         const responseType={};
//         if(data){
//             let otpcode=Math.floor((Math.random()*10000)+1);
//             let otpData = new Otp({
//                 email:req.body.email,
//                 code:otpcode,
//                 expireIn:new Date().getTime()+300*1000
//             })   
//             let otpResponse=await otpData.save();
//             responseType.statusText='Success';
//             responseType.message='OTP is send to your email. So please check your Email Inbox';
    
//         }else{
//             responseType.statusText='Success';
//             responseType.message="Email ID doesn't exists";
//         }
//         res.status(200).json(responseType);
   
// }
// router.post('/send',emailsend)

module.exports =router;
// module.exports =changePassword; 

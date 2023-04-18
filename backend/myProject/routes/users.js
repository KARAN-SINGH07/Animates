var express = require('express');
var router = express.Router();
var User = require('../models/user');

let { encryptPassword, comparePasswords, generateJwt } =
  require('../utils/loginutils');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// User Register API starts here 

router.post('/register', async (req, res) => {
  try {

    const userEmailCheck =
      await User.findOne(
        { email: new RegExp(`^${req.body.email}$`, 'i') }).exec();

    // console.log(adminEmailChk);
    if (userEmailCheck)
    return res.status(400).send({ message: "Email Already Registered" });
    req.body.password = await encryptPassword(req.body.password);

    let user = await new User(req.body).save();
    res.status(200).json({ message: "User Register Successfully", data: user, success: true });

    //   await nodemail('contact@jiorooms.com', req.body.email, 'Registration Successfull', "You have been successfully registered")
    //   res.json({ message: 'Admin Registered', success: true });

  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else
      res.json({ message: 'Error', data: err, success: false });
  }
})

//   User Register API Close


// User Login API Starts Here

router.post('/login', async (req, res) => {
  try {

    const user =
      await User.findOne
        ({
          email: new
            RegExp(`^${req.body.email}$`, 'i')
        }).exec();

  
    if (!user)
    return res.status(400).send({ message: "You are not registered" });

    const checkPassword = await
      comparePasswords(req.body.password, user.password);

    if (!checkPassword)
    return res.status(400).send({ message: "Check Your Credentials" });

    const token = await generateJwt(User._id);
    res.json({ message: 'Logged In', data: token, success: true });

  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else
      res.json({ message: 'Error', data: err, success: false });
  }
})


// User Login Api Ends

//getUser This end point is to get data 
router.get('/getUser', async (req, res) => {
  try {
      const getuser = await User.find().exec();
      res.json({ message: 'User Details', data: getuser, success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});

router.post('/deleteUser', async (req, res) => {
  try {
      await User.findByIdAndRemove(req.body.id).exec();
      res.json({ message: "Successfully Deleted", success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});



module.exports = router;

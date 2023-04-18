var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');

let { encryptPassword, comparePasswords, generateJwt, admin } =
  require('../utils/loginutils');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// User Register API starts here 

router.post('/register', async (req, res) => {
  try {

    const adminEmailCheck =
      await Admin.findOne(
        { email: new RegExp(`^${req.body.email}$`, 'i') }).exec();

    // console.log(adminEmailChk);
    if (adminEmailCheck)
    return res.status(400).send({ message: "Email Already Registered" });

    req.body.password = await encryptPassword(req.body.password);

    let admin = await new Admin(req.body).save();
    res.status(200).json({ message: "Admin Register Successfully", data: admin, success: true });

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

    const admin =
      await Admin.findOne
        ({
          email: new
            RegExp(`^${req.body.email}$`, 'i')
        }).exec();

  
    if (!admin)
    return res.status(400).send({ message: "You are not registered" });

    const checkPassword = await
      comparePasswords(req.body.password, admin.password);

    if (!checkPassword)
    return res.status(400).send({ message: "Check Your Credentials" });
    

    const admintoken = await generateJwt(Admin._id);
    res.json({ message: 'Logged In', data: admintoken, success: true });

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


//getUser 
router.get('/getAdmin', async (req, res) => {
  try {
      const getadmin = await Admin.find().exec();
      res.json({ message: 'Admin Details', data: getadmin, success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});

// router.post('/deleteUser', async (req, res) => {
//   try {
//       await User.findByIdAndRemove(req.body.id).exec();
//       res.json({ message: "Successfully Deleted", success: true });
//   }
//   catch (err) {
//       res.json({ message: err.message, success: false })

//   }
// });



module.exports = router;

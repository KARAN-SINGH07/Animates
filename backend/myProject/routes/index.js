var express = require('express');
var router = express.Router();

var User= require('../models/user')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
// router.post('/user', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.post('/addUser', async (req, res) => {
  try {
      let user = await new User(req.body).save();
      res.json({ message: "User Added Successfully", data: user, success: true })
  }
  catch (err) {
      res.json({ message: err.message, success: false })
  }
});

router.get('/getUser', async (req, res) => {
  try {
      const getuser = await User.find().exec();
      res.json({ message: 'User Details', data: getuser, success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});

router.post('/updateUser', async (req, res) => {
  try {
     let user=  await User.findByIdAndUpdate(req.body.id, { name: req.body.name}).exec();
      res.json({ message: "User Successfully Updated", data :user, success: true });
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







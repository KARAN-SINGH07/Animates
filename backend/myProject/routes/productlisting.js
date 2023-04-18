var express = require('express');
var router = express.Router();
var ProductListing = require('../models/productlisting')
const path = require('path');
const multer = require('multer');
const params = require('params');


/* GET productlistings listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '..', 'public', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
  });
  
  const upload = multer({ storage: storage });
  
  router.post('/addproduct', upload.single('image'), async(req, res) => {
    try {
      const productlistingcheck = await ProductListing.findOne(
        { productname: new RegExp(`^${req.body.productname}$`, 'i') }).exec();
      if (productlistingcheck) {
        return res.status(400).send({ message: "Product Name already exists." });
      }
      const productlisting = new ProductListing({
        productname: req.body.productname,
        description: req.body.description,
        companyname: req.body.companyname,
        quantity: req.body.quantity,
        price: req.body.price,
        image: req.file.filename // Store the image filename in the database
      });
      await productlisting.save();
      res.json({ message: "Product Added Successfully", data: productlisting, success: true })
    } catch (err) {
      res.json({ message: err.message, success: false })
    }
  });
  
  router.get('/product/:id', async (req, res) => {
    try {
      const productlistings = await ProductListing.findById(req.params.id); 
      if (!productlistings) {
        return res.status(404).json({ msg: 'Product not found' });
      }
      res.json(productlistings);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
router.get('/getproduct', async(req, res) => {
  try {
    const productlistings = await ProductListing.find().exec();
    
    // Map through the productlistings array and append the image path to each product object
    const products = productlistings.map(product => {
      return {
        _id: product._id,
        productname: product.productname,
        description: product  .description,
        companyname: product.companyname,
        quantity: product.quantity,
        price: product.price,
        image: `/images/${product.image}` // Append image path
      }
    })

    res.json(products);
  } catch (err) {
    res.json({ message: err.message, success: false });
  }
});


router.post('/updateproduct',upload.single('image'), async(req, res) => {
    try {
        const productlistingcheck=
        await ProductListing.findOne(
          { productname: new RegExp(`^${req.body.productname}$`, 'i') }).exec();
        
          if (productlistingcheck)
          return res.status(400).send({ message: "Product Name already exists." });
          
        let productlisting = await ProductListing.findByIdAndUpdate(req.body.id, { productname: req.body.productname, description: req.body.description, companyname: req.body.companyname, 
        quantity: req.body.quantity, 
        price: req.body.price,image: req.file.filename }).exec();
        res.json({ message: "Product Successfully Updated", data: productlisting, success: true });
    } catch (err) {
        res.json({ message: err.message, success: false })

    }
});
// router.post('/updateproduct', async(req, res) => {
//     try {
//         const productlistingcheck=
//         await ProductListing.findOne(
//           { productname: new RegExp(`^${req.body.productname}$`, 'i') }).exec();
        
//           if (productlistingcheck)
//           return res.status(400).send({ message: "Product Name already exists." });
          
//         let productlisting = await ProductListing.findByIdAndUpdate(req.body.id, { productname: req.body.productname, description: req.body.description, companyname: req.body.companyname, 
//         quantity: req.body.quantity, 
//         price: req.body.price }).exec();
//         res.json({ message: "Product Successfully Updated", data: productlisting, success: true });
//     } catch (err) {
//         res.json({ message: err.message, success: false })

//     }
// });

router.post('/deleteproduct', async(req, res) => {
    try {
        await ProductListing.findByIdAndRemove(req.body.id).exec();
        res.json({ message: "Successfully Deleted", success: true });
    } catch (err) {
        res.json({ message: err.message, success: false })

    }
});
module.exports = router;
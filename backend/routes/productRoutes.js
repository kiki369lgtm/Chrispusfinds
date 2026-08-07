const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const { validateProduct, validateId } = require('../middleware/validateProduct');
const express = require("express");
const upload = require("../middleware/upload");

router.post('/', validateProduct, controller.createProduct);
router.post('/upload', upload.array('images', 5), controller.uploadProductImages);
router.get('/', controller.getAllProducts);
router.get('/suggest', controller.suggestProducts);
router.get('/:id', validateId, controller.getProductById);
router.put('/:id', validateId, controller.updateProduct);
router.delete('/:id', validateId, controller.deleteProduct);

module.exports = router;
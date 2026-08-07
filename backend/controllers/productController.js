const Product = require('../models/productModel');
const cloudinary = require('../config/cloudinary');

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        console.error('Create product error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const { category, subcategory, search, brand, limit, offset } = req.query;
        const products = await Product.findAll({
            category,
            subcategory,
            search,
            brand,
            limit: limit ? parseInt(limit) : 50,
            offset: offset ? parseInt(offset) : 0
        });
        res.json({ success: true, count: products.length, data: products });
    } catch (error) {
        console.error('Get products error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.validatedId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.json({ success: true, data: product });
    } catch (error) {
        console.error('Get product error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.update(req.validatedId, req.body);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.json({ success: true, data: product });
    } catch (error) {
        console.error('Update product error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.delete(req.validatedId);
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Delete product error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Upload product images to Cloudinary
exports.uploadProductImages = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ success: false, message: 'No files uploaded' });
        }

        const uploadPromises = req.files.map(file => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: 'rehoboth/products' },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve({
                            url: result.secure_url,
                            public_id: result.public_id
                        });
                    }
                );
                uploadStream.end(file.buffer);
            });
        });

        const results = await Promise.all(uploadPromises);
        
        res.json({
            success: true,
            data: {
                image_urls: results.map(r => r.url),
                cloudinary_public_ids: results.map(r => r.public_id)
            }
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ success: false, message: 'Upload failed' });
    }
};
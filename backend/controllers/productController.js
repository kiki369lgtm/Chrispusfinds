const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        if (error.code === '23505') { // unique violation
            return res.status(409).json({ success: false, message: 'SKU already exists' });
        }
        console.error('Create product error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const { limit, offset, category, subcategory, search } = req.query;
        const products = await Product.findAll({
            limit: limit ? parseInt(limit) : 20,
            offset: offset ? parseInt(offset) : 0,
            category,
            subcategory,
            search
        });
        res.json({ success: true, count: products.length, data: products });
    } catch (error) {
        console.error('Get products error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.suggestProducts = async (req, res) => {
    try {
        const { q, limit } = req.query;
        if (!q || !q.trim()) {
            return res.json({ success: true, count: 0, data: [] });
        }
        const suggestions = await Product.suggest(q.trim(), limit ? parseInt(limit) : 8);
        res.json({ success: true, count: suggestions.length, data: suggestions });
    } catch (error) {
        console.error('Suggest products error:', error);
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
        if (error.code === '23505') {
            return res.status(409).json({ success: false, message: 'SKU already exists' });
        }
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
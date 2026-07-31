const validateProduct = (req, res, next) => {
    const { name, category, cash_price, deposit, weekly_installment, image_urls } = req.body;
    const errors = [];

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
        errors.push('Name is required and must be at least 2 characters');
    }
    if (!category || typeof category !== 'string') {
        errors.push('Category is required');
    }
    if (cash_price === undefined || isNaN(cash_price) || Number(cash_price) < 0) {
        errors.push('Cash price must be a non-negative number');
    }
    if (deposit === undefined || isNaN(deposit) || Number(deposit) < 0) {
        errors.push('Deposit must be a non-negative number');
    }
    if (weekly_installment === undefined || isNaN(weekly_installment) || Number(weekly_installment) < 0) {
        errors.push('Weekly installment must be a non-negative number');
    }
    if (!image_urls || !Array.isArray(image_urls) || image_urls.length === 0) {
        errors.push('Image URLs must be a non-empty array');
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
    }
    next();
};

const validateId = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ success: false, message: 'Invalid product ID' });
    }
    req.validatedId = id;
    next();
};

module.exports = { validateProduct, validateId };
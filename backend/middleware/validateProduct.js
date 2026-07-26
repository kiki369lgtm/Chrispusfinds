const validateProduct = (req, res, next) => {
    const { name, category, cash_price, deposit, daily_installment, installment_months } = req.body;
    const errors = [];

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
        errors.push('Name is required and must be at least 2 characters');
    }
    if (!category || typeof category !== 'string' || category.trim().length < 2) {
        errors.push('Category is required and must be at least 2 characters');
    }
    if (cash_price === undefined || isNaN(cash_price) || Number(cash_price) < 0) {
        errors.push('cash_price must be a non-negative number');
    }
    if (deposit !== undefined && (isNaN(deposit) || Number(deposit) < 0)) {
        errors.push('deposit must be a non-negative number');
    }
    if (daily_installment !== undefined && (isNaN(daily_installment) || Number(daily_installment) < 0)) {
        errors.push('daily_installment must be a non-negative number');
    }
    if (installment_months !== undefined && (!Number.isInteger(Number(installment_months)) || Number(installment_months) < 0)) {
        errors.push('installment_months must be a non-negative integer');
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
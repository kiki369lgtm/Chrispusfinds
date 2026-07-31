DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    subcategory VARCHAR(100),

    cash_price DECIMAL(12,2) NOT NULL CHECK (cash_price >= 0),
    deposit DECIMAL(12,2) NOT NULL CHECK (deposit >= 0),
    weekly_installment DECIMAL(12,2) NOT NULL CHECK (weekly_installment >= 0),

    image_urls TEXT[] NOT NULL DEFAULT '{}',
    description TEXT,
    full_details JSONB DEFAULT '{}'::jsonb,
    is_active BOOLEAN DEFAULT true,
    cloudinary_public_id TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_subcategory ON products(subcategory);
CREATE INDEX idx_products_active ON products(is_active);
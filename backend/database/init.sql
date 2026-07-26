CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    subcategory VARCHAR(100),
    cash_price DECIMAL(10, 2) NOT NULL CHECK (cash_price >= 0),
    deposit DECIMAL(10, 2) DEFAULT 0 CHECK (deposit >= 0),
    daily_installment DECIMAL(10, 2) DEFAULT 0 CHECK (daily_installment >= 0),
    installment_months INTEGER DEFAULT 0 CHECK (installment_months >= 0),
    image TEXT,
    images JSONB DEFAULT '[]',
    description TEXT,
    full_details JSONB DEFAULT '{}',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for common queries
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_subcategory ON products(subcategory);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);

-- Trigram indexes for fuzzy/typo-tolerant search suggestions
CREATE INDEX IF NOT EXISTS idx_products_name_trgm ON products USING GIN (name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_products_category_trgm ON products USING GIN (category gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_products_subcategory_trgm ON products USING GIN (subcategory gin_trgm_ops);
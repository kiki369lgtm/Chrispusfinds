const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// GET all products
export const getProducts = async (filters = {}) => {
    const cleaned = Object.fromEntries(
        Object.entries(filters).filter(([, value]) => value !== undefined && value !== null && value !== '')
    );
    const params = new URLSearchParams(cleaned);
    const res = await fetch(`${API_URL}/products?${params}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
};

// GET live search suggestions (typeahead)
export const suggestProducts = async (query, limit = 8, signal) => {
    const params = new URLSearchParams({ q: query, limit });
    const res = await fetch(`${API_URL}/products/suggest?${params}`, { signal });
    if (!res.ok) throw new Error('Failed to fetch suggestions');
    return res.json();
};

// GET single product
export const getProduct = async (id) => {
    const res = await fetch(`${API_URL}/products/${id}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
};

// POST create product
export const createProduct = async (productData) => {
    const res = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to create product');
    return data;
};

// PUT update product
export const updateProduct = async (id, productData) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to update product');
    return data;
};

// DELETE product
export const deleteProduct = async (id) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) throw new Error('Failed to delete product');
    return true;
};
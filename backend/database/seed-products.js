const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const pool = require('../config/db');

const products = [
    {
        name: 'Samsung A06 64GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 11300,
        deposit: 2260,
        daily_installment: 50,
        installment_months: 6,
        image: '/images/samsung-a06-64gb.jpg',
        images: ["/images/samsung-a06-64gb-front.jpg", "/images/samsung-a06-64gb-back.jpg", "/images/samsung-a06-64gb-side.jpg", "/images/samsung-a06-64gb-box.jpg"],
        description: 'Samsung A06 64GB smartphone with impressive features and reliable performance. Cash price Ksh 11,300. Available on flexible daily installment plan.',
        full_details: {"display": "6.5 inch HD+ 60Hz", "processor": "Exynos 850", "ram": "4GB", "storage": "64GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A06 128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 13500,
        deposit: 2700,
        daily_installment: 60,
        installment_months: 6,
        image: '/images/samsung-a06-128gb.jpg',
        images: ["/images/samsung-a06-128gb-front.jpg", "/images/samsung-a06-128gb-back.jpg", "/images/samsung-a06-128gb-side.jpg", "/images/samsung-a06-128gb-box.jpg"],
        description: 'Samsung A06 128GB smartphone with impressive features and reliable performance. Cash price Ksh 13,500. Available on flexible daily installment plan.',
        full_details: {"display": "6.5 inch HD+ 60Hz", "processor": "Exynos 850", "ram": "4GB", "storage": "128GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A07 64GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 12300,
        deposit: 2460,
        daily_installment: 55,
        installment_months: 6,
        image: '/images/samsung-a07-64gb.jpg',
        images: ["/images/samsung-a07-64gb-front.jpg", "/images/samsung-a07-64gb-back.jpg", "/images/samsung-a07-64gb-side.jpg", "/images/samsung-a07-64gb-box.jpg"],
        description: 'Samsung A07 64GB smartphone with impressive features and reliable performance. Cash price Ksh 12,300. Available on flexible daily installment plan.',
        full_details: {"display": "6.5 inch HD+ 60Hz", "processor": "Exynos 850", "ram": "4GB", "storage": "64GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A07 128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 14000,
        deposit: 2800,
        daily_installment: 62,
        installment_months: 6,
        image: '/images/samsung-a07-128gb.jpg',
        images: ["/images/samsung-a07-128gb-front.jpg", "/images/samsung-a07-128gb-back.jpg", "/images/samsung-a07-128gb-side.jpg", "/images/samsung-a07-128gb-box.jpg"],
        description: 'Samsung A07 128GB smartphone with impressive features and reliable performance. Cash price Ksh 14,000. Available on flexible daily installment plan.',
        full_details: {"display": "6.5 inch HD+ 60Hz", "processor": "Exynos 850", "ram": "4GB", "storage": "128GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A16 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 16500,
        deposit: 3300,
        daily_installment: 73,
        installment_months: 6,
        image: '/images/samsung-a16-4gb-128gb.jpg',
        images: ["/images/samsung-a16-4gb-128gb-front.jpg", "/images/samsung-a16-4gb-128gb-back.jpg", "/images/samsung-a16-4gb-128gb-side.jpg", "/images/samsung-a16-4gb-128gb-box.jpg"],
        description: 'Samsung A16 4GB/128GB smartphone with impressive features and reliable performance. Cash price Ksh 16,500. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G99", "ram": "4GB", "storage": "4GB", "camera": "50MP Main + 2MP Macro", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A17 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 18500,
        deposit: 3700,
        daily_installment: 82,
        installment_months: 6,
        image: '/images/samsung-a17-4gb-128gb.jpg',
        images: ["/images/samsung-a17-4gb-128gb-front.jpg", "/images/samsung-a17-4gb-128gb-back.jpg", "/images/samsung-a17-4gb-128gb-side.jpg", "/images/samsung-a17-4gb-128gb-box.jpg"],
        description: 'Samsung A17 4GB/128GB smartphone with impressive features and reliable performance. Cash price Ksh 18,500. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G99", "ram": "4GB", "storage": "4GB", "camera": "50MP Main + 2MP Macro", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A17 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 24900,
        deposit: 4980,
        daily_installment: 111,
        installment_months: 6,
        image: '/images/samsung-a17-256gb.jpg',
        images: ["/images/samsung-a17-256gb-front.jpg", "/images/samsung-a17-256gb-back.jpg", "/images/samsung-a17-256gb-side.jpg", "/images/samsung-a17-256gb-box.jpg"],
        description: 'Samsung A17 256GB smartphone with impressive features and reliable performance. Cash price Ksh 24,900. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G99", "ram": "4GB", "storage": "256GB", "camera": "50MP Main + 2MP Macro", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A26 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 31500,
        deposit: 6300,
        daily_installment: 140,
        installment_months: 6,
        image: '/images/samsung-a26-256gb.jpg',
        images: ["/images/samsung-a26-256gb-front.jpg", "/images/samsung-a26-256gb-back.jpg", "/images/samsung-a26-256gb-side.jpg", "/images/samsung-a26-256gb-box.jpg"],
        description: 'Samsung A26 256GB smartphone with impressive features and reliable performance. Cash price Ksh 31,500. Available on flexible daily installment plan.',
        full_details: {"display": "6.5 inch FHD+ 90Hz", "processor": "Exynos 1280", "ram": "4GB", "storage": "256GB", "camera": "50MP Main + 5MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A36 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 37500,
        deposit: 7500,
        daily_installment: 167,
        installment_months: 6,
        image: '/images/samsung-a36-256gb.jpg',
        images: ["/images/samsung-a36-256gb-front.jpg", "/images/samsung-a36-256gb-back.jpg", "/images/samsung-a36-256gb-side.jpg", "/images/samsung-a36-256gb-box.jpg"],
        description: 'Samsung A36 256GB smartphone with impressive features and reliable performance. Cash price Ksh 37,500. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch FHD+ 120Hz", "processor": "Exynos 1380", "ram": "4GB", "storage": "256GB", "camera": "50MP OIS Main + 8MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A56 8GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 45000,
        deposit: 9000,
        daily_installment: 200,
        installment_months: 6,
        image: '/images/samsung-a56-8gb-256gb.jpg',
        images: ["/images/samsung-a56-8gb-256gb-front.jpg", "/images/samsung-a56-8gb-256gb-back.jpg", "/images/samsung-a56-8gb-256gb-side.jpg", "/images/samsung-a56-8gb-256gb-box.jpg"],
        description: 'Samsung A56 8GB/256GB smartphone with impressive features and reliable performance. Cash price Ksh 45,000. Available on flexible daily installment plan.',
        full_details: {"display": "6.7 inch FHD+ 120Hz", "processor": "Exynos 1480", "ram": "4GB", "storage": "8GB", "camera": "50MP OIS Main + 12MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Awesome Graphite", "Awesome Silver", "Awesome Violet"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A27 6GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 30000,
        deposit: 6000,
        daily_installment: 133,
        installment_months: 6,
        image: '/images/samsung-a27-6gb-128gb.jpg',
        images: ["/images/samsung-a27-6gb-128gb-front.jpg", "/images/samsung-a27-6gb-128gb-back.jpg", "/images/samsung-a27-6gb-128gb-side.jpg", "/images/samsung-a27-6gb-128gb-box.jpg"],
        description: 'Samsung A27 6GB/128GB smartphone with impressive features and reliable performance. Cash price Ksh 30,000. Available on flexible daily installment plan.',
        full_details: {"display": "6.5 inch FHD+ 90Hz", "processor": "Exynos 1280", "ram": "4GB", "storage": "6GB", "camera": "50MP Main + 5MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A27 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 36000,
        deposit: 7200,
        daily_installment: 160,
        installment_months: 6,
        image: '/images/samsung-a27-256gb.jpg',
        images: ["/images/samsung-a27-256gb-front.jpg", "/images/samsung-a27-256gb-back.jpg", "/images/samsung-a27-256gb-side.jpg", "/images/samsung-a27-256gb-box.jpg"],
        description: 'Samsung A27 256GB smartphone with impressive features and reliable performance. Cash price Ksh 36,000. Available on flexible daily installment plan.',
        full_details: {"display": "6.5 inch FHD+ 90Hz", "processor": "Exynos 1280", "ram": "4GB", "storage": "256GB", "camera": "50MP Main + 5MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A37 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 39000,
        deposit: 7800,
        daily_installment: 173,
        installment_months: 6,
        image: '/images/samsung-a37-256gb.jpg',
        images: ["/images/samsung-a37-256gb-front.jpg", "/images/samsung-a37-256gb-back.jpg", "/images/samsung-a37-256gb-side.jpg", "/images/samsung-a37-256gb-box.jpg"],
        description: 'Samsung A37 256GB smartphone with impressive features and reliable performance. Cash price Ksh 39,000. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch FHD+ 120Hz", "processor": "Exynos 1380", "ram": "4GB", "storage": "256GB", "camera": "50MP OIS Main + 8MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A57 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 46500,
        deposit: 9300,
        daily_installment: 207,
        installment_months: 6,
        image: '/images/samsung-a57-256gb.jpg',
        images: ["/images/samsung-a57-256gb-front.jpg", "/images/samsung-a57-256gb-back.jpg", "/images/samsung-a57-256gb-side.jpg", "/images/samsung-a57-256gb-box.jpg"],
        description: 'Samsung A57 256GB smartphone with impressive features and reliable performance. Cash price Ksh 46,500. Available on flexible daily installment plan.',
        full_details: {"display": "6.7 inch FHD+ 120Hz", "processor": "Exynos 1480", "ram": "4GB", "storage": "256GB", "camera": "50MP OIS Main + 12MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Awesome Graphite", "Awesome Silver", "Awesome Violet"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung S26 12GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 98000,
        deposit: 19600,
        daily_installment: 436,
        installment_months: 6,
        image: '/images/samsung-s26-12gb-256gb.jpg',
        images: ["/images/samsung-s26-12gb-256gb-front.jpg", "/images/samsung-s26-12gb-256gb-back.jpg", "/images/samsung-s26-12gb-256gb-side.jpg", "/images/samsung-s26-12gb-256gb-box.jpg"],
        description: 'Samsung S26 12GB/256GB smartphone with impressive features and reliable performance. Cash price Ksh 98,000. Available on flexible daily installment plan.',
        full_details: {"display": "6.8 inch QHD+ 120Hz", "processor": "Snapdragon 8 Gen 3", "ram": "4GB", "storage": "12GB", "camera": "200MP Main + 50MP Ultra-wide + 10MP Telephoto", "battery": "5000mAh", "os": "Android 14", "colors": ["Titanium Black", "Titanium Gray", "Titanium Violet"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung S25 Ultra 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 110000,
        deposit: 22000,
        daily_installment: 489,
        installment_months: 6,
        image: '/images/samsung-s25-ultra-256gb.jpg',
        images: ["/images/samsung-s25-ultra-256gb-front.jpg", "/images/samsung-s25-ultra-256gb-back.jpg", "/images/samsung-s25-ultra-256gb-side.jpg", "/images/samsung-s25-ultra-256gb-box.jpg"],
        description: 'Samsung S25 Ultra 256GB smartphone with impressive features and reliable performance. Cash price Ksh 110,000. Available on flexible daily installment plan.',
        full_details: {"display": "6.8 inch QHD+ 120Hz", "processor": "Snapdragon 8 Gen 3", "ram": "4GB", "storage": "256GB", "camera": "200MP Main + 50MP Ultra-wide + 10MP Telephoto", "battery": "5000mAh", "os": "Android 14", "colors": ["Titanium Black", "Titanium Gray", "Titanium Violet"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung A56 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 42300,
        deposit: 8460,
        daily_installment: 188,
        installment_months: 6,
        image: '/images/samsung-a56-256gb.jpg',
        images: ["/images/samsung-a56-256gb-front.jpg", "/images/samsung-a56-256gb-back.jpg", "/images/samsung-a56-256gb-side.jpg", "/images/samsung-a56-256gb-box.jpg"],
        description: 'Samsung A56 256GB smartphone with impressive features and reliable performance. Cash price Ksh 42,300. Available on flexible daily installment plan.',
        full_details: {"display": "6.7 inch FHD+ 120Hz", "processor": "Exynos 1480", "ram": "4GB", "storage": "256GB", "camera": "50MP OIS Main + 12MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Awesome Graphite", "Awesome Silver", "Awesome Violet"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung Tab A11 4GB/64GB',
        category: 'Tablets',
        subcategory: 'Samsung',
        cash_price: 16100,
        deposit: 3220,
        daily_installment: 72,
        installment_months: 6,
        image: '/images/samsung-tab-a11-4gb-64gb.jpg',
        images: ["/images/samsung-tab-a11-4gb-64gb-front.jpg", "/images/samsung-tab-a11-4gb-64gb-back.jpg", "/images/samsung-tab-a11-4gb-64gb-side.jpg", "/images/samsung-tab-a11-4gb-64gb-box.jpg"],
        description: 'Samsung Tab A11 4GB/64GB tablet with stunning display and powerful performance. Ideal for work and entertainment. Cash price Ksh 16,100.',
        full_details: {"display": "10.9 inch LCD", "processor": "Snapdragon 680", "ram": "4GBGB", "storage": "4GB", "camera": "8MP Main", "battery": "8000mAh", "os": "Android 14", "colors": ["Gray", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung Tab A11 8GB/128GB',
        category: 'Tablets',
        subcategory: 'Samsung',
        cash_price: 21500,
        deposit: 4300,
        daily_installment: 96,
        installment_months: 6,
        image: '/images/samsung-tab-a11-8gb-128gb.jpg',
        images: ["/images/samsung-tab-a11-8gb-128gb-front.jpg", "/images/samsung-tab-a11-8gb-128gb-back.jpg", "/images/samsung-tab-a11-8gb-128gb-side.jpg", "/images/samsung-tab-a11-8gb-128gb-box.jpg"],
        description: 'Samsung Tab A11 8GB/128GB tablet with stunning display and powerful performance. Ideal for work and entertainment. Cash price Ksh 21,500.',
        full_details: {"display": "10.9 inch LCD", "processor": "Snapdragon 680", "ram": "4GBGB", "storage": "8GB", "camera": "8MP Main", "battery": "8000mAh", "os": "Android 14", "colors": ["Gray", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung Tab A11 Plus 6GB/128GB',
        category: 'Tablets',
        subcategory: 'Samsung',
        cash_price: 31000,
        deposit: 6200,
        daily_installment: 138,
        installment_months: 6,
        image: '/images/samsung-tab-a11-plus-6gb-128gb.jpg',
        images: ["/images/samsung-tab-a11-plus-6gb-128gb-front.jpg", "/images/samsung-tab-a11-plus-6gb-128gb-back.jpg", "/images/samsung-tab-a11-plus-6gb-128gb-side.jpg", "/images/samsung-tab-a11-plus-6gb-128gb-box.jpg"],
        description: 'Samsung Tab A11 Plus 6GB/128GB tablet with stunning display and powerful performance. Ideal for work and entertainment. Cash price Ksh 31,000.',
        full_details: {"display": "11 inch LCD 90Hz", "processor": "Snapdragon 7 Gen 1", "ram": "4GBGB", "storage": "6GB", "camera": "13MP Main + 5MP Ultra-wide", "battery": "10090mAh", "os": "Android 14", "colors": ["Gray", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung Buds Pro 2',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 5300,
        deposit: 1060,
        daily_installment: 24,
        installment_months: 6,
        image: '/images/samsung-buds-pro-2.jpg',
        images: ["/images/samsung-buds-pro-2-front.jpg", "/images/samsung-buds-pro-2-back.jpg", "/images/samsung-buds-pro-2-side.jpg", "/images/samsung-buds-pro-2-box.jpg"],
        description: 'Genuine Samsung Buds Pro 2. Premium quality with excellent performance. Cash price Ksh 5,300.',
        full_details: {"display": "N/A", "processor": "N/A", "ram": "N/A", "storage": "N/A", "camera": "N/A", "battery": "500mAh (Case)", "os": "N/A", "colors": ["Graphite", "White", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung Headphones Pro',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 9100,
        deposit: 1820,
        daily_installment: 40,
        installment_months: 6,
        image: '/images/samsung-headphones-pro.jpg',
        images: ["/images/samsung-headphones-pro-front.jpg", "/images/samsung-headphones-pro-back.jpg", "/images/samsung-headphones-pro-side.jpg", "/images/samsung-headphones-pro-box.jpg"],
        description: 'Genuine Samsung Headphones Pro. Premium quality with excellent performance. Cash price Ksh 9,100.',
        full_details: {"display": "N/A", "processor": "N/A", "ram": "N/A", "storage": "N/A", "camera": "N/A", "battery": "600mAh", "os": "N/A", "colors": ["Black", "Silver", "Blue"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung Headphones (A)',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 18000,
        deposit: 3600,
        daily_installment: 80,
        installment_months: 6,
        image: '/images/samsung-headphones-a.jpg',
        images: ["/images/samsung-headphones-a-front.jpg", "/images/samsung-headphones-a-back.jpg", "/images/samsung-headphones-a-side.jpg", "/images/samsung-headphones-a-box.jpg"],
        description: 'Genuine Samsung Headphones (A). Premium quality with excellent performance. Cash price Ksh 18,000.',
        full_details: {"display": "N/A", "processor": "N/A", "ram": "N/A", "storage": "N/A", "camera": "N/A", "battery": "600mAh", "os": "N/A", "colors": ["Black", "Silver", "Blue"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung Watch 2 Pro',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 6400,
        deposit: 1280,
        daily_installment: 28,
        installment_months: 6,
        image: '/images/samsung-watch-2-pro.jpg',
        images: ["/images/samsung-watch-2-pro-front.jpg", "/images/samsung-watch-2-pro-back.jpg", "/images/samsung-watch-2-pro-side.jpg", "/images/samsung-watch-2-pro-box.jpg"],
        description: 'Genuine Samsung Watch 2 Pro. Premium quality with excellent performance. Cash price Ksh 6,400.',
        full_details: {"display": "1.5 inch Super AMOLED", "processor": "Exynos W1000", "ram": "2GBGB", "storage": "16GBGB", "camera": "N/A", "battery": "425mAh", "os": "Wear OS 5", "colors": ["Black", "Silver", "Gold"], "warranty": "1 Year"}
    },
    {
        name: 'Samsung Watch 3 Pro',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 10100,
        deposit: 2020,
        daily_installment: 45,
        installment_months: 6,
        image: '/images/samsung-watch-3-pro.jpg',
        images: ["/images/samsung-watch-3-pro-front.jpg", "/images/samsung-watch-3-pro-back.jpg", "/images/samsung-watch-3-pro-side.jpg", "/images/samsung-watch-3-pro-box.jpg"],
        description: 'Genuine Samsung Watch 3 Pro. Premium quality with excellent performance. Cash price Ksh 10,100.',
        full_details: {"display": "1.5 inch Super AMOLED", "processor": "Exynos W1000", "ram": "2GBGB", "storage": "16GBGB", "camera": "N/A", "battery": "425mAh", "os": "Wear OS 5", "colors": ["Black", "Silver", "Gold"], "warranty": "1 Year"}
    },
    {
        name: 'Itel 2163',
        category: 'Feature Phones',
        subcategory: 'Itel',
        cash_price: 800,
        deposit: 160,
        daily_installment: 4,
        installment_months: 6,
        image: '/images/itel-2163.jpg',
        images: ["/images/itel-2163-front.jpg", "/images/itel-2163-back.jpg", "/images/itel-2163-side.jpg", "/images/itel-2163-box.jpg"],
        description: 'Reliable Itel 2163 feature phone with long battery life. Perfect for calls and texts. Cash price Ksh 800.',
        full_details: {"display": "6.5 inch HD+", "processor": "Octa-core", "ram": "4GB", "storage": "128GB", "camera": "50MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Itel 2160',
        category: 'Feature Phones',
        subcategory: 'Itel',
        cash_price: 950,
        deposit: 190,
        daily_installment: 4,
        installment_months: 6,
        image: '/images/itel-2160.jpg',
        images: ["/images/itel-2160-front.jpg", "/images/itel-2160-back.jpg", "/images/itel-2160-side.jpg", "/images/itel-2160-box.jpg"],
        description: 'Reliable Itel 2160 feature phone with long battery life. Perfect for calls and texts. Cash price Ksh 950.',
        full_details: {"display": "6.5 inch HD+", "processor": "Octa-core", "ram": "4GB", "storage": "128GB", "camera": "50MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Nokia 105',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 1350,
        deposit: 270,
        daily_installment: 6,
        installment_months: 6,
        image: '/images/nokia-105.jpg',
        images: ["/images/nokia-105-front.jpg", "/images/nokia-105-back.jpg", "/images/nokia-105-side.jpg", "/images/nokia-105-box.jpg"],
        description: 'Reliable Nokia 105 feature phone with long battery life. Perfect for calls and texts. Cash price Ksh 1,350.',
        full_details: {"display": "6.5 inch HD+", "processor": "Octa-core", "ram": "4GB", "storage": "128GB", "camera": "50MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Nokia 3210',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 5700,
        deposit: 1140,
        daily_installment: 25,
        installment_months: 6,
        image: '/images/nokia-3210.jpg',
        images: ["/images/nokia-3210-front.jpg", "/images/nokia-3210-back.jpg", "/images/nokia-3210-side.jpg", "/images/nokia-3210-box.jpg"],
        description: 'Reliable Nokia 3210 feature phone with long battery life. Perfect for calls and texts. Cash price Ksh 5,700.',
        full_details: {"display": "6.5 inch HD+", "processor": "Octa-core", "ram": "4GB", "storage": "128GB", "camera": "50MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Nokia 235',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 5200,
        deposit: 1040,
        daily_installment: 23,
        installment_months: 6,
        image: '/images/nokia-235.jpg',
        images: ["/images/nokia-235-front.jpg", "/images/nokia-235-back.jpg", "/images/nokia-235-side.jpg", "/images/nokia-235-box.jpg"],
        description: 'Reliable Nokia 235 feature phone with long battery life. Perfect for calls and texts. Cash price Ksh 5,200.',
        full_details: {"display": "6.5 inch HD+", "processor": "Octa-core", "ram": "4GB", "storage": "128GB", "camera": "50MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Nokia 215',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 4600,
        deposit: 920,
        daily_installment: 20,
        installment_months: 6,
        image: '/images/nokia-215.jpg',
        images: ["/images/nokia-215-front.jpg", "/images/nokia-215-back.jpg", "/images/nokia-215-side.jpg", "/images/nokia-215-box.jpg"],
        description: 'Reliable Nokia 215 feature phone with long battery life. Perfect for calls and texts. Cash price Ksh 4,600.',
        full_details: {"display": "6.5 inch HD+", "processor": "Octa-core", "ram": "4GB", "storage": "128GB", "camera": "50MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Nokia 150',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 2800,
        deposit: 560,
        daily_installment: 12,
        installment_months: 6,
        image: '/images/nokia-150.jpg',
        images: ["/images/nokia-150-front.jpg", "/images/nokia-150-back.jpg", "/images/nokia-150-side.jpg", "/images/nokia-150-box.jpg"],
        description: 'Reliable Nokia 150 feature phone with long battery life. Perfect for calls and texts. Cash price Ksh 2,800.',
        full_details: {"display": "6.5 inch HD+", "processor": "Octa-core", "ram": "4GB", "storage": "128GB", "camera": "50MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Nokia 130',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 2700,
        deposit: 540,
        daily_installment: 12,
        installment_months: 6,
        image: '/images/nokia-130.jpg',
        images: ["/images/nokia-130-front.jpg", "/images/nokia-130-back.jpg", "/images/nokia-130-side.jpg", "/images/nokia-130-box.jpg"],
        description: 'Reliable Nokia 130 feature phone with long battery life. Perfect for calls and texts. Cash price Ksh 2,700.',
        full_details: {"display": "6.5 inch HD+", "processor": "Octa-core", "ram": "4GB", "storage": "128GB", "camera": "50MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Nokia 110',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 1700,
        deposit: 340,
        daily_installment: 8,
        installment_months: 6,
        image: '/images/nokia-110.jpg',
        images: ["/images/nokia-110-front.jpg", "/images/nokia-110-back.jpg", "/images/nokia-110-side.jpg", "/images/nokia-110-box.jpg"],
        description: 'Reliable Nokia 110 feature phone with long battery life. Perfect for calls and texts. Cash price Ksh 1,700.',
        full_details: {"display": "6.5 inch HD+", "processor": "Octa-core", "ram": "4GB", "storage": "128GB", "camera": "50MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Redmi A7 3GB/64GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 11300,
        deposit: 2260,
        daily_installment: 50,
        installment_months: 6,
        image: '/images/redmi-a7-3gb-64gb.jpg',
        images: ["/images/redmi-a7-3gb-64gb-front.jpg", "/images/redmi-a7-3gb-64gb-back.jpg", "/images/redmi-a7-3gb-64gb-side.jpg", "/images/redmi-a7-3gb-64gb-box.jpg"],
        description: 'Redmi A7 3GB/64GB smartphone with impressive features and reliable performance. Cash price Ksh 11,300. Available on flexible daily installment plan.',
        full_details: {"display": "6.52 inch HD+", "processor": "MediaTek Helio G36", "ram": "4GB", "storage": "3GB", "camera": "13MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Light Blue", "Light Green", "Black"], "warranty": "1 Year"}
    },
    {
        name: 'Redmi A7 Pro 4GB/64GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 12300,
        deposit: 2460,
        daily_installment: 55,
        installment_months: 6,
        image: '/images/redmi-a7-pro-4gb-64gb.jpg',
        images: ["/images/redmi-a7-pro-4gb-64gb-front.jpg", "/images/redmi-a7-pro-4gb-64gb-back.jpg", "/images/redmi-a7-pro-4gb-64gb-side.jpg", "/images/redmi-a7-pro-4gb-64gb-box.jpg"],
        description: 'Redmi A7 Pro 4GB/64GB smartphone with impressive features and reliable performance. Cash price Ksh 12,300. Available on flexible daily installment plan.',
        full_details: {"display": "6.52 inch HD+", "processor": "MediaTek Helio G36", "ram": "4GB", "storage": "4GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Redmi 15C 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 14600,
        deposit: 2920,
        daily_installment: 65,
        installment_months: 6,
        image: '/images/redmi-15c-4gb-128gb.jpg',
        images: ["/images/redmi-15c-4gb-128gb-front.jpg", "/images/redmi-15c-4gb-128gb-back.jpg", "/images/redmi-15c-4gb-128gb-side.jpg", "/images/redmi-15c-4gb-128gb-box.jpg"],
        description: 'Redmi 15C 4GB/128GB smartphone with impressive features and reliable performance. Cash price Ksh 14,600. Available on flexible daily installment plan.',
        full_details: {"display": "6.71 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "4GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Starry Black", "Starlight Green"], "warranty": "1 Year"}
    },
    {
        name: 'Redmi 15C 4GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 16700,
        deposit: 3340,
        daily_installment: 74,
        installment_months: 6,
        image: '/images/redmi-15c-4gb-256gb.jpg',
        images: ["/images/redmi-15c-4gb-256gb-front.jpg", "/images/redmi-15c-4gb-256gb-back.jpg", "/images/redmi-15c-4gb-256gb-side.jpg", "/images/redmi-15c-4gb-256gb-box.jpg"],
        description: 'Redmi 15C 4GB/256GB smartphone with impressive features and reliable performance. Cash price Ksh 16,700. Available on flexible daily installment plan.',
        full_details: {"display": "6.71 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "4GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Starry Black", "Starlight Green"], "warranty": "1 Year"}
    },
    {
        name: 'Redmi 15C 8GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 19750,
        deposit: 3950,
        daily_installment: 88,
        installment_months: 6,
        image: '/images/redmi-15c-8gb-256gb.jpg',
        images: ["/images/redmi-15c-8gb-256gb-front.jpg", "/images/redmi-15c-8gb-256gb-back.jpg", "/images/redmi-15c-8gb-256gb-side.jpg", "/images/redmi-15c-8gb-256gb-box.jpg"],
        description: 'Redmi 15C 8GB/256GB smartphone with impressive features and reliable performance. Cash price Ksh 19,750. Available on flexible daily installment plan.',
        full_details: {"display": "6.71 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "8GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Starry Black", "Starlight Green"], "warranty": "1 Year"}
    },
    {
        name: 'Redmi Note 15 6GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 25200,
        deposit: 5040,
        daily_installment: 112,
        installment_months: 6,
        image: '/images/redmi-note-15-6gb-128gb.jpg',
        images: ["/images/redmi-note-15-6gb-128gb-front.jpg", "/images/redmi-note-15-6gb-128gb-back.jpg", "/images/redmi-note-15-6gb-128gb-side.jpg", "/images/redmi-note-15-6gb-128gb-box.jpg"],
        description: 'Redmi Note 15 6GB/128GB smartphone with impressive features and reliable performance. Cash price Ksh 25,200. Available on flexible daily installment plan.',
        full_details: {"display": "6.67 inch FHD+ 120Hz", "processor": "MediaTek Helio G99", "ram": "4GB", "storage": "6GB", "camera": "108MP Main + 8MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Redmi Note 15 Pro 256GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 35800,
        deposit: 7160,
        daily_installment: 159,
        installment_months: 6,
        image: '/images/redmi-note-15-pro-256gb.jpg',
        images: ["/images/redmi-note-15-pro-256gb-front.jpg", "/images/redmi-note-15-pro-256gb-back.jpg", "/images/redmi-note-15-pro-256gb-side.jpg", "/images/redmi-note-15-pro-256gb-box.jpg"],
        description: 'Redmi Note 15 Pro 256GB smartphone with impressive features and reliable performance. Cash price Ksh 35,800. Available on flexible daily installment plan.',
        full_details: {"display": "6.67 inch FHD+ 120Hz AMOLED", "processor": "Snapdragon 7s Gen 2", "ram": "4GB", "storage": "256GB", "camera": "200MP Main + 8MP Ultra-wide", "battery": "5100mAh", "os": "Android 14", "colors": ["Midnight Black", "Aurora Purple", "Ocean Blue"], "warranty": "1 Year"}
    },
    {
        name: 'Infinix Smart 20 64GB',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 11900,
        deposit: 2380,
        daily_installment: 53,
        installment_months: 6,
        image: '/images/infinix-smart-20-64gb.jpg',
        images: ["/images/infinix-smart-20-64gb-front.jpg", "/images/infinix-smart-20-64gb-back.jpg", "/images/infinix-smart-20-64gb-side.jpg", "/images/infinix-smart-20-64gb-box.jpg"],
        description: 'Infinix Smart 20 64GB smartphone with impressive features and reliable performance. Cash price Ksh 11,900. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch HD+", "processor": "Unisoc T603", "ram": "4GB", "storage": "64GB", "camera": "13MP Main + AI Lens", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Green"], "warranty": "1 Year"}
    },
    {
        name: 'Infinix Hot 60i 256GB',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 16300,
        deposit: 3260,
        daily_installment: 72,
        installment_months: 6,
        image: '/images/infinix-hot-60i-256gb.jpg',
        images: ["/images/infinix-hot-60i-256gb-front.jpg", "/images/infinix-hot-60i-256gb-back.jpg", "/images/infinix-hot-60i-256gb-side.jpg", "/images/infinix-hot-60i-256gb-box.jpg"],
        description: 'Infinix Hot 60i 256GB smartphone with impressive features and reliable performance. Cash price Ksh 16,300. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "Unisoc T606", "ram": "4GB", "storage": "256GB", "camera": "50MP Main + AI Lens", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Infinix Hot 70 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 16300,
        deposit: 3260,
        daily_installment: 72,
        installment_months: 6,
        image: '/images/infinix-hot-70-4gb-128gb.jpg',
        images: ["/images/infinix-hot-70-4gb-128gb-front.jpg", "/images/infinix-hot-70-4gb-128gb-back.jpg", "/images/infinix-hot-70-4gb-128gb-side.jpg", "/images/infinix-hot-70-4gb-128gb-box.jpg"],
        description: 'Infinix Hot 70 4GB/128GB smartphone with impressive features and reliable performance. Cash price Ksh 16,300. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "4GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Infinix Note Edge',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 31700,
        deposit: 6340,
        daily_installment: 141,
        installment_months: 6,
        image: '/images/infinix-note-edge.jpg',
        images: ["/images/infinix-note-edge-front.jpg", "/images/infinix-note-edge-back.jpg", "/images/infinix-note-edge-side.jpg", "/images/infinix-note-edge-box.jpg"],
        description: 'Infinix Note Edge smartphone with impressive features and reliable performance. Cash price Ksh 31,700. Available on flexible daily installment plan.',
        full_details: {"display": "6.78 inch FHD+ 144Hz", "processor": "MediaTek Dimensity 7020", "ram": "4GB", "storage": "128GB", "camera": "64MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Infinix Note 60 Pro',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 38500,
        deposit: 7700,
        daily_installment: 171,
        installment_months: 6,
        image: '/images/infinix-note-60-pro.jpg',
        images: ["/images/infinix-note-60-pro-front.jpg", "/images/infinix-note-60-pro-back.jpg", "/images/infinix-note-60-pro-side.jpg", "/images/infinix-note-60-pro-box.jpg"],
        description: 'Infinix Note 60 Pro smartphone with impressive features and reliable performance. Cash price Ksh 38,500. Available on flexible daily installment plan.',
        full_details: {"display": "6.78 inch FHD+ 120Hz", "processor": "MediaTek Helio G99", "ram": "4GB", "storage": "128GB", "camera": "108MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Infinix Zero Flip 512GB',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 44000,
        deposit: 8800,
        daily_installment: 196,
        installment_months: 6,
        image: '/images/infinix-zero-flip-512gb.jpg',
        images: ["/images/infinix-zero-flip-512gb-front.jpg", "/images/infinix-zero-flip-512gb-back.jpg", "/images/infinix-zero-flip-512gb-side.jpg", "/images/infinix-zero-flip-512gb-box.jpg"],
        description: 'Infinix Zero Flip 512GB smartphone with impressive features and reliable performance. Cash price Ksh 44,000. Available on flexible daily installment plan.',
        full_details: {"display": "6.9 inch FHD+ 120Hz Foldable AMOLED", "processor": "MediaTek Dimensity 8020", "ram": "4GB", "storage": "512GB", "camera": "108MP Main + 32MP Ultra-wide", "battery": "4720mAh", "os": "Android 14", "colors": ["Rock Black", "Palms Green"], "warranty": "1 Year"}
    },
    {
        name: 'Tecno Pop 20 128GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 15000,
        deposit: 3000,
        daily_installment: 67,
        installment_months: 6,
        image: '/images/tecno-pop-20-128gb.jpg',
        images: ["/images/tecno-pop-20-128gb-front.jpg", "/images/tecno-pop-20-128gb-back.jpg", "/images/tecno-pop-20-128gb-side.jpg", "/images/tecno-pop-20-128gb-box.jpg"],
        description: 'Tecno Pop 20 128GB smartphone with impressive features and reliable performance. Cash price Ksh 15,000. Available on flexible daily installment plan.',
        full_details: {"display": "6.56 inch HD+", "processor": "Unisoc T606", "ram": "4GB", "storage": "128GB", "camera": "13MP Main + AI Lens", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Green"], "warranty": "1 Year"}
    },
    {
        name: 'Tecno Spark 50 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 17200,
        deposit: 3440,
        daily_installment: 76,
        installment_months: 6,
        image: '/images/tecno-spark-50-4gb-128gb.jpg',
        images: ["/images/tecno-spark-50-4gb-128gb-front.jpg", "/images/tecno-spark-50-4gb-128gb-back.jpg", "/images/tecno-spark-50-4gb-128gb-side.jpg", "/images/tecno-spark-50-4gb-128gb-box.jpg"],
        description: 'Tecno Spark 50 4GB/128GB smartphone with impressive features and reliable performance. Cash price Ksh 17,200. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "4GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Gravity Black", "Cyber White"], "warranty": "1 Year"}
    },
    {
        name: 'Tecno Spark 50 4GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 19500,
        deposit: 3900,
        daily_installment: 87,
        installment_months: 6,
        image: '/images/tecno-spark-50-4gb-256gb.jpg',
        images: ["/images/tecno-spark-50-4gb-256gb-front.jpg", "/images/tecno-spark-50-4gb-256gb-back.jpg", "/images/tecno-spark-50-4gb-256gb-side.jpg", "/images/tecno-spark-50-4gb-256gb-box.jpg"],
        description: 'Tecno Spark 50 4GB/256GB smartphone with impressive features and reliable performance. Cash price Ksh 19,500. Available on flexible daily installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "4GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Gravity Black", "Cyber White"], "warranty": "1 Year"}
    },
    {
        name: 'Tecno Camon 50 256GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 31600,
        deposit: 6320,
        daily_installment: 140,
        installment_months: 6,
        image: '/images/tecno-camon-50-256gb.jpg',
        images: ["/images/tecno-camon-50-256gb-front.jpg", "/images/tecno-camon-50-256gb-back.jpg", "/images/tecno-camon-50-256gb-side.jpg", "/images/tecno-camon-50-256gb-box.jpg"],
        description: 'Tecno Camon 50 256GB smartphone with impressive features and reliable performance. Cash price Ksh 31,600. Available on flexible daily installment plan.',
        full_details: {"display": "6.78 inch FHD+ 120Hz", "processor": "MediaTek Helio G99", "ram": "4GB", "storage": "256GB", "camera": "64MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Silver"], "warranty": "1 Year"}
    },
    {
        name: 'Tecno Camon 50 Pro 256GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 38600,
        deposit: 7720,
        daily_installment: 172,
        installment_months: 6,
        image: '/images/tecno-camon-50-pro-256gb.jpg',
        images: ["/images/tecno-camon-50-pro-256gb-front.jpg", "/images/tecno-camon-50-pro-256gb-back.jpg", "/images/tecno-camon-50-pro-256gb-side.jpg", "/images/tecno-camon-50-pro-256gb-box.jpg"],
        description: 'Tecno Camon 50 Pro 256GB smartphone with impressive features and reliable performance. Cash price Ksh 38,600. Available on flexible daily installment plan.',
        full_details: {"display": "6.78 inch FHD+ 120Hz AMOLED", "processor": "MediaTek Dimensity 8200", "ram": "4GB", "storage": "256GB", "camera": "50MP OIS Main + 50MP Portrait", "battery": "5000mAh", "os": "Android 14", "colors": ["Basaltic Dark", "Sahara Dust Gold"], "warranty": "1 Year"}
    }
];


const seedDatabase = async () => {
    try {
        console.log('Starting product seed...');

        // Clear existing products
        await pool.query('DELETE FROM products');
        await pool.query('ALTER SEQUENCE products_id_seq RESTART WITH 1');

        let inserted = 0;
        for (const product of products) {
            await pool.query(`
                INSERT INTO products (
                    name, category, subcategory, cash_price, deposit,
                    daily_installment, installment_months, image, images,
                    description, full_details
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            `, [
                product.name,
                product.category,
                product.subcategory,
                product.cash_price,
                product.deposit,
                product.daily_installment,
                product.installment_months,
                product.image,
                JSON.stringify(product.images),
                product.description,
                JSON.stringify(product.full_details)
            ]);
            inserted++;
        }

        const { rows } = await pool.query('SELECT COUNT(*) FROM products');
        console.log(`\n✅ Seed complete! Inserted ${inserted} products.`);
        console.log(`📦 Total products in database: ${rows[0].count}`);

        // Show summary by category
        const summary = await pool.query(`
            SELECT category, subcategory, COUNT(*) as count, MIN(cash_price) as min_price, MAX(cash_price) as max_price
            FROM products
            GROUP BY category, subcategory
            ORDER BY category, subcategory
        `);

        console.log('\n📊 Inventory Summary:');
        console.log('─────────────────────────────────────────');
        for (const row of summary.rows) {
            console.log(`${row.subcategory}: ${row.count} products | Ksh ${row.min_price} - Ksh ${row.max_price}`);
        }

    } catch (error) {
        console.error('❌ Seed failed:', error);
    } finally {
        await pool.end();
    }
};

seedDatabase();
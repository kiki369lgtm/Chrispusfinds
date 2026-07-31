const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const pool = require('../config/db');

const products = [
    {
        name: 'Samsung A06 64GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 12204.0,
        deposit: 2440.8,
        weekly_installment: 375.51,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a06-64gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a06-64gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a06-64gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a06-64gb-box.jpg"],
        description: 'Samsung A06 64GB smartphone with impressive features and reliable performance. Now at Ksh 12,204.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.5 inch HD+ 60Hz", "processor": "Exynos 850", "ram": "4GB", "storage": "64GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a06-64gb'
    },
    {
        name: 'Samsung A06 128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 14580.0,
        deposit: 2916.0,
        weekly_installment: 448.62,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a06-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a06-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a06-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a06-128gb-box.jpg"],
        description: 'Samsung A06 128GB smartphone with impressive features and reliable performance. Now at Ksh 14,580.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.5 inch HD+ 60Hz", "processor": "Exynos 850", "ram": "4GB", "storage": "128GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a06-128gb'
    },
    {
        name: 'Samsung A07 64GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 13284.0,
        deposit: 2656.8,
        weekly_installment: 408.74,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a07-64gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a07-64gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a07-64gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a07-64gb-box.jpg"],
        description: 'Samsung A07 64GB smartphone with impressive features and reliable performance. Now at Ksh 13,284.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.5 inch HD+ 60Hz", "processor": "Exynos 850", "ram": "4GB", "storage": "64GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a07-64gb'
    },
    {
        name: 'Samsung A07 128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 15120.0,
        deposit: 3024.0,
        weekly_installment: 465.23,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a07-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a07-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a07-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a07-128gb-box.jpg"],
        description: 'Samsung A07 128GB smartphone with impressive features and reliable performance. Now at Ksh 15,120.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.5 inch HD+ 60Hz", "processor": "Exynos 850", "ram": "4GB", "storage": "128GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a07-128gb'
    },
    {
        name: 'Samsung A16 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 17820.0,
        deposit: 3564.0,
        weekly_installment: 548.31,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a16-4gb-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a16-4gb-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a16-4gb-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a16-4gb-128gb-box.jpg"],
        description: 'Samsung A16 4GB/128GB smartphone with impressive features and reliable performance. Now at Ksh 17,820.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G99", "ram": "4GB", "storage": "128GB", "camera": "50MP Main + 2MP Macro", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a16-4gb-128gb'
    },
    {
        name: 'Samsung A17 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 19980.0,
        deposit: 3996.0,
        weekly_installment: 614.77,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a17-4gb-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a17-4gb-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a17-4gb-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a17-4gb-128gb-box.jpg"],
        description: 'Samsung A17 4GB/128GB smartphone with impressive features and reliable performance. Now at Ksh 19,980.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G99", "ram": "4GB", "storage": "128GB", "camera": "50MP Main + 2MP Macro", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a17-4gb-128gb'
    },
    {
        name: 'Samsung A17 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 26892.0,
        deposit: 5378.4,
        weekly_installment: 827.45,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a17-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a17-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a17-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a17-256gb-box.jpg"],
        description: 'Samsung A17 256GB smartphone with impressive features and reliable performance. Now at Ksh 26,892.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G99", "ram": "4GB", "storage": "256GB", "camera": "50MP Main + 2MP Macro", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Light Blue", "Light Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a17-256gb'
    },
    {
        name: 'Samsung A26 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 34020.0,
        deposit: 6804.0,
        weekly_installment: 1046.77,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a26-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a26-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a26-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a26-256gb-box.jpg"],
        description: 'Samsung A26 256GB smartphone with impressive features and reliable performance. Now at Ksh 34,020.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.5 inch FHD+ 90Hz", "processor": "Exynos 1280", "ram": "6GB", "storage": "256GB", "camera": "50MP Main + 5MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Silver", "Blue"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a26-256gb'
    },
    {
        name: 'Samsung A36 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 40500.0,
        deposit: 8100.0,
        weekly_installment: 1246.15,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a36-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a36-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a36-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a36-256gb-box.jpg"],
        description: 'Samsung A36 256GB smartphone with impressive features and reliable performance. Now at Ksh 40,500.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch FHD+ 120Hz", "processor": "Exynos 1380", "ram": "8GB", "storage": "256GB", "camera": "50MP OIS Main + 8MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Awesome Graphite", "Awesome Silver", "Awesome Violet"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a36-256gb'
    },
    {
        name: 'Samsung A56 8GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 48600.0,
        deposit: 9720.0,
        weekly_installment: 1495.38,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a56-8gb-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a56-8gb-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a56-8gb-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a56-8gb-256gb-box.jpg"],
        description: 'Samsung A56 8GB/256GB smartphone with impressive features and reliable performance. Now at Ksh 48,600.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.7 inch FHD+ 120Hz", "processor": "Exynos 1480", "ram": "8GB", "storage": "256GB", "camera": "50MP OIS Main + 12MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Awesome Graphite", "Awesome Silver", "Awesome Violet"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a56-8gb-256gb'
    },
    {
        name: 'Samsung A27 6GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 32400.0,
        deposit: 6480.0,
        weekly_installment: 996.92,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a27-6gb-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a27-6gb-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a27-6gb-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a27-6gb-128gb-box.jpg"],
        description: 'Samsung A27 6GB/128GB smartphone with impressive features and reliable performance. Now at Ksh 32,400.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.5 inch FHD+ 90Hz", "processor": "Exynos 1280", "ram": "6GB", "storage": "128GB", "camera": "50MP Main + 5MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Silver", "Blue"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a27-6gb-128gb'
    },
    {
        name: 'Samsung A27 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 38880.0,
        deposit: 7776.0,
        weekly_installment: 1196.31,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a27-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a27-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a27-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a27-256gb-box.jpg"],
        description: 'Samsung A27 256GB smartphone with impressive features and reliable performance. Now at Ksh 38,880.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.5 inch FHD+ 90Hz", "processor": "Exynos 1280", "ram": "6GB", "storage": "256GB", "camera": "50MP Main + 5MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Silver", "Blue"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a27-256gb'
    },
    {
        name: 'Samsung A37 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 42120.0,
        deposit: 8424.0,
        weekly_installment: 1296.0,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a37-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a37-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a37-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a37-256gb-box.jpg"],
        description: 'Samsung A37 256GB smartphone with impressive features and reliable performance. Now at Ksh 42,120.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch FHD+ 120Hz", "processor": "Exynos 1380", "ram": "8GB", "storage": "256GB", "camera": "50MP OIS Main + 8MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Awesome Graphite", "Awesome Silver", "Awesome Violet"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a37-256gb'
    },
    {
        name: 'Samsung A57 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 50220.0,
        deposit: 10044.0,
        weekly_installment: 1545.23,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a57-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a57-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a57-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a57-256gb-box.jpg"],
        description: 'Samsung A57 256GB smartphone with impressive features and reliable performance. Now at Ksh 50,220.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.7 inch FHD+ 120Hz", "processor": "Exynos 1480", "ram": "8GB", "storage": "256GB", "camera": "50MP OIS Main + 12MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Awesome Graphite", "Awesome Silver", "Awesome Violet"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a57-256gb'
    },
    {
        name: 'Samsung S26 12GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 105840.0,
        deposit: 21168.0,
        weekly_installment: 3256.62,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-s26-12gb-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-s26-12gb-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-s26-12gb-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-s26-12gb-256gb-box.jpg"],
        description: 'Samsung S26 12GB/256GB smartphone with impressive features and reliable performance. Now at Ksh 105,840.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.8 inch QHD+ 120Hz", "processor": "Snapdragon 8 Gen 3", "ram": "12GB", "storage": "256GB", "camera": "200MP Main + 50MP Ultra-wide + 10MP Telephoto", "battery": "5000mAh", "os": "Android 14", "colors": ["Titanium Black", "Titanium Gray", "Titanium Violet"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-s26-12gb-256gb'
    },
    {
        name: 'Samsung S25 Ultra 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 118800.0,
        deposit: 23760.0,
        weekly_installment: 3655.38,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-s25-ultra-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-s25-ultra-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-s25-ultra-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-s25-ultra-256gb-box.jpg"],
        description: 'Samsung S25 Ultra 256GB smartphone with impressive features and reliable performance. Now at Ksh 118,800.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.8 inch QHD+ 120Hz", "processor": "Snapdragon 8 Gen 3", "ram": "12GB", "storage": "256GB", "camera": "200MP Main + 50MP Ultra-wide + 10MP Telephoto", "battery": "5000mAh", "os": "Android 14", "colors": ["Titanium Black", "Titanium Gray", "Titanium Violet"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-s25-ultra-256gb'
    },
    {
        name: 'Samsung A56 256GB',
        category: 'Mobile Phones',
        subcategory: 'Samsung',
        cash_price: 45684.0,
        deposit: 9136.8,
        weekly_installment: 1405.66,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a56-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a56-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a56-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-a56-256gb-box.jpg"],
        description: 'Samsung A56 256GB smartphone with impressive features and reliable performance. Now at Ksh 45,684.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.7 inch FHD+ 120Hz", "processor": "Exynos 1480", "ram": "8GB", "storage": "256GB", "camera": "50MP OIS Main + 12MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Awesome Graphite", "Awesome Silver", "Awesome Violet"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-a56-256gb'
    },
    {
        name: 'Samsung Tab A11 4GB/64GB',
        category: 'Tablets',
        subcategory: 'Samsung',
        cash_price: 17388.0,
        deposit: 3477.6,
        weekly_installment: 535.02,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-4gb-64gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-4gb-64gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-4gb-64gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-4gb-64gb-box.jpg"],
        description: 'Samsung Tab A11 4GB/64GB tablet with stunning display and powerful performance. Ideal for work and entertainment. Now at Ksh 17,388.00.',
        full_details: {"display": "10.9 inch LCD", "processor": "Snapdragon 680", "ram": "4GB", "storage": "64GB", "camera": "8MP Main", "battery": "8000mAh", "os": "Android 14", "colors": ["Gray", "Silver"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-tab-a11-4gb-64gb'
    },
    {
        name: 'Samsung Tab A11 8GB/128GB',
        category: 'Tablets',
        subcategory: 'Samsung',
        cash_price: 23220.0,
        deposit: 4644.0,
        weekly_installment: 714.46,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-8gb-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-8gb-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-8gb-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-8gb-128gb-box.jpg"],
        description: 'Samsung Tab A11 8GB/128GB tablet with stunning display and powerful performance. Ideal for work and entertainment. Now at Ksh 23,220.00.',
        full_details: {"display": "10.9 inch LCD", "processor": "Snapdragon 680", "ram": "8GB", "storage": "128GB", "camera": "8MP Main", "battery": "8000mAh", "os": "Android 14", "colors": ["Gray", "Silver"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-tab-a11-8gb-128gb'
    },
    {
        name: 'Samsung Tab A11 Plus 6GB/128GB',
        category: 'Tablets',
        subcategory: 'Samsung',
        cash_price: 33480.0,
        deposit: 6696.0,
        weekly_installment: 1030.15,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-plus-6gb-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-plus-6gb-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-plus-6gb-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-tab-a11-plus-6gb-128gb-box.jpg"],
        description: 'Samsung Tab A11 Plus 6GB/128GB tablet with stunning display and powerful performance. Ideal for work and entertainment. Now at Ksh 33,480.00.',
        full_details: {"display": "11 inch LCD 90Hz", "processor": "Snapdragon 7 Gen 1", "ram": "6GB", "storage": "128GB", "camera": "13MP Main + 5MP Ultra-wide", "battery": "10090mAh", "os": "Android 14", "colors": ["Gray", "Silver"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-tab-a11-plus-6gb-128gb'
    },
    {
        name: 'Samsung Buds Pro 2',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 5724.0,
        deposit: 1144.8,
        weekly_installment: 176.12,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-buds-pro-2-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-buds-pro-2-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-buds-pro-2-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-buds-pro-2-box.jpg"],
        description: 'Genuine Samsung Buds Pro 2. Premium quality with excellent performance. Now at Ksh 5,724.00.',
        full_details: {"display": "N/A", "processor": "N/A", "ram": "N/A", "storage": "N/A", "camera": "N/A", "battery": "500mAh (Case)", "os": "N/A", "colors": ["Graphite", "White", "Silver"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-buds-pro-2'
    },
    {
        name: 'Samsung Headphones Pro',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 9828.0,
        deposit: 1965.6,
        weekly_installment: 302.4,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-headphones-pro-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-headphones-pro-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-headphones-pro-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-headphones-pro-box.jpg"],
        description: 'Genuine Samsung Headphones Pro. Premium quality with excellent performance. Now at Ksh 9,828.00.',
        full_details: {"display": "N/A", "processor": "N/A", "ram": "N/A", "storage": "N/A", "camera": "N/A", "battery": "600mAh", "os": "N/A", "colors": ["Black", "Silver", "Blue"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-headphones-pro'
    },
    {
        name: 'Samsung Headphones (A)',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 19440.0,
        deposit: 3888.0,
        weekly_installment: 598.15,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-headphones-a-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-headphones-a-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-headphones-a-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-headphones-a-box.jpg"],
        description: 'Genuine Samsung Headphones (A). Premium quality with excellent performance. Now at Ksh 19,440.00.',
        full_details: {"display": "N/A", "processor": "N/A", "ram": "N/A", "storage": "N/A", "camera": "N/A", "battery": "600mAh", "os": "N/A", "colors": ["Black", "Silver", "Blue"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-headphones-a'
    },
    {
        name: 'Samsung Watch 2 Pro',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 6912.0,
        deposit: 1382.4,
        weekly_installment: 212.68,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-watch-2-pro-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-watch-2-pro-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-watch-2-pro-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-watch-2-pro-box.jpg"],
        description: 'Genuine Samsung Watch 2 Pro. Premium quality with excellent performance. Now at Ksh 6,912.00.',
        full_details: {"display": "1.5 inch Super AMOLED", "processor": "Exynos W1000", "ram": "2GB", "storage": "16GB", "camera": "N/A", "battery": "425mAh", "os": "Wear OS 5", "colors": ["Black", "Silver", "Gold"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-watch-2-pro'
    },
    {
        name: 'Samsung Watch 3 Pro',
        category: 'Accessories',
        subcategory: 'Samsung',
        cash_price: 10908.0,
        deposit: 2181.6,
        weekly_installment: 335.63,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-watch-3-pro-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-watch-3-pro-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-watch-3-pro-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/samsung-watch-3-pro-box.jpg"],
        description: 'Genuine Samsung Watch 3 Pro. Premium quality with excellent performance. Now at Ksh 10,908.00.',
        full_details: {"display": "1.5 inch Super AMOLED", "processor": "Exynos W1000", "ram": "2GB", "storage": "16GB", "camera": "N/A", "battery": "425mAh", "os": "Wear OS 5", "colors": ["Black", "Silver", "Gold"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/samsung-watch-3-pro'
    },
    {
        name: 'Itel 2163',
        category: 'Feature Phones',
        subcategory: 'Itel',
        cash_price: 864.0,
        deposit: 172.8,
        weekly_installment: 26.58,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/itel-2163-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/itel-2163-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/itel-2163-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/itel-2163-box.jpg"],
        description: 'Reliable Itel 2163 feature phone with long battery life. Perfect for calls and texts. Now at Ksh 864.00.',
        full_details: {"display": "1.77 inch QQVGA", "processor": "Spreadtrum", "ram": "N/A", "storage": "4MB", "camera": "No Camera", "battery": "1000mAh", "os": "Series 30+", "colors": ["Black", "Blue", "Red"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/itel-2163'
    },
    {
        name: 'Itel 2160',
        category: 'Feature Phones',
        subcategory: 'Itel',
        cash_price: 1026.0,
        deposit: 205.2,
        weekly_installment: 31.57,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/itel-2160-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/itel-2160-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/itel-2160-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/itel-2160-box.jpg"],
        description: 'Reliable Itel 2160 feature phone with long battery life. Perfect for calls and texts. Now at Ksh 1,026.00.',
        full_details: {"display": "1.77 inch QQVGA", "processor": "Spreadtrum", "ram": "N/A", "storage": "4MB", "camera": "No Camera", "battery": "1000mAh", "os": "Series 30+", "colors": ["Black", "Blue", "Red"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/itel-2160'
    },
    {
        name: 'Nokia 105',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 1458.0,
        deposit: 291.6,
        weekly_installment: 44.86,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-105-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-105-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-105-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-105-box.jpg"],
        description: 'Reliable Nokia 105 feature phone with long battery life. Perfect for calls and texts. Now at Ksh 1,458.00.',
        full_details: {"display": "1.77 inch QQVGA", "processor": "Spreadtrum", "ram": "N/A", "storage": "4MB", "camera": "No Camera", "battery": "1000mAh", "os": "Series 30+", "colors": ["Black", "Blue", "Red"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/nokia-105'
    },
    {
        name: 'Nokia 3210',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 6156.0,
        deposit: 1231.2,
        weekly_installment: 189.42,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-3210-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-3210-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-3210-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-3210-box.jpg"],
        description: 'Reliable Nokia 3210 feature phone with long battery life. Perfect for calls and texts. Now at Ksh 6,156.00.',
        full_details: {"display": "1.77 inch QQVGA", "processor": "Spreadtrum", "ram": "N/A", "storage": "4MB", "camera": "No Camera", "battery": "1000mAh", "os": "Series 30+", "colors": ["Black", "Blue", "Red"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/nokia-3210'
    },
    {
        name: 'Nokia 235',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 5616.0,
        deposit: 1123.2,
        weekly_installment: 172.8,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-235-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-235-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-235-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-235-box.jpg"],
        description: 'Reliable Nokia 235 feature phone with long battery life. Perfect for calls and texts. Now at Ksh 5,616.00.',
        full_details: {"display": "1.77 inch QQVGA", "processor": "Spreadtrum", "ram": "N/A", "storage": "4MB", "camera": "No Camera", "battery": "1000mAh", "os": "Series 30+", "colors": ["Black", "Blue", "Red"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/nokia-235'
    },
    {
        name: 'Nokia 215',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 4968.0,
        deposit: 993.6,
        weekly_installment: 152.86,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-215-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-215-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-215-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-215-box.jpg"],
        description: 'Reliable Nokia 215 feature phone with long battery life. Perfect for calls and texts. Now at Ksh 4,968.00.',
        full_details: {"display": "1.77 inch QQVGA", "processor": "Spreadtrum", "ram": "N/A", "storage": "4MB", "camera": "No Camera", "battery": "1000mAh", "os": "Series 30+", "colors": ["Black", "Blue", "Red"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/nokia-215'
    },
    {
        name: 'Nokia 150',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 3024.0,
        deposit: 604.8,
        weekly_installment: 93.05,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-150-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-150-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-150-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-150-box.jpg"],
        description: 'Reliable Nokia 150 feature phone with long battery life. Perfect for calls and texts. Now at Ksh 3,024.00.',
        full_details: {"display": "1.77 inch QQVGA", "processor": "Spreadtrum", "ram": "N/A", "storage": "4MB", "camera": "No Camera", "battery": "1000mAh", "os": "Series 30+", "colors": ["Black", "Blue", "Red"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/nokia-150'
    },
    {
        name: 'Nokia 130',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 2916.0,
        deposit: 583.2,
        weekly_installment: 89.72,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-130-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-130-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-130-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-130-box.jpg"],
        description: 'Reliable Nokia 130 feature phone with long battery life. Perfect for calls and texts. Now at Ksh 2,916.00.',
        full_details: {"display": "1.77 inch QQVGA", "processor": "Spreadtrum", "ram": "N/A", "storage": "4MB", "camera": "No Camera", "battery": "1000mAh", "os": "Series 30+", "colors": ["Black", "Blue", "Red"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/nokia-130'
    },
    {
        name: 'Nokia 110',
        category: 'Feature Phones',
        subcategory: 'Nokia',
        cash_price: 1836.0,
        deposit: 367.2,
        weekly_installment: 56.49,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-110-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-110-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-110-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/nokia-110-box.jpg"],
        description: 'Reliable Nokia 110 feature phone with long battery life. Perfect for calls and texts. Now at Ksh 1,836.00.',
        full_details: {"display": "1.77 inch QQVGA", "processor": "Spreadtrum", "ram": "N/A", "storage": "4MB", "camera": "No Camera", "battery": "1000mAh", "os": "Series 30+", "colors": ["Black", "Blue", "Red"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/nokia-110'
    },
    {
        name: 'Redmi A7 3GB/64GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 12204.0,
        deposit: 2440.8,
        weekly_installment: 375.51,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-a7-3gb-64gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-a7-3gb-64gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-a7-3gb-64gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-a7-3gb-64gb-box.jpg"],
        description: 'Redmi A7 3GB/64GB smartphone with impressive features and reliable performance. Now at Ksh 12,204.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.52 inch HD+", "processor": "MediaTek Helio G36", "ram": "3GB", "storage": "64GB", "camera": "13MP Main", "battery": "5000mAh", "os": "Android 14", "colors": ["Light Blue", "Light Green", "Black"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/redmi-a7-3gb-64gb'
    },
    {
        name: 'Redmi A7 Pro 4GB/64GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 13284.0,
        deposit: 2656.8,
        weekly_installment: 408.74,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-a7-pro-4gb-64gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-a7-pro-4gb-64gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-a7-pro-4gb-64gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-a7-pro-4gb-64gb-box.jpg"],
        description: 'Redmi A7 Pro 4GB/64GB smartphone with impressive features and reliable performance. Now at Ksh 13,284.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.52 inch HD+", "processor": "MediaTek Helio G36", "ram": "4GB", "storage": "64GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Light Blue", "Light Green", "Black"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/redmi-a7-pro-4gb-64gb'
    },
    {
        name: 'Redmi 15C 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 15768.0,
        deposit: 3153.6,
        weekly_installment: 485.17,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-4gb-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-4gb-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-4gb-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-4gb-128gb-box.jpg"],
        description: 'Redmi 15C 4GB/128GB smartphone with impressive features and reliable performance. Now at Ksh 15,768.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.71 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "128GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Starry Black", "Starlight Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/redmi-15c-4gb-128gb'
    },
    {
        name: 'Redmi 15C 4GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 18036.0,
        deposit: 3607.2,
        weekly_installment: 554.95,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-4gb-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-4gb-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-4gb-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-4gb-256gb-box.jpg"],
        description: 'Redmi 15C 4GB/256GB smartphone with impressive features and reliable performance. Now at Ksh 18,036.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.71 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "256GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Starry Black", "Starlight Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/redmi-15c-4gb-256gb'
    },
    {
        name: 'Redmi 15C 8GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 21330.0,
        deposit: 4266.0,
        weekly_installment: 656.31,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-8gb-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-8gb-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-8gb-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-15c-8gb-256gb-box.jpg"],
        description: 'Redmi 15C 8GB/256GB smartphone with impressive features and reliable performance. Now at Ksh 21,330.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.71 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "8GB", "storage": "256GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Starry Black", "Starlight Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/redmi-15c-8gb-256gb'
    },
    {
        name: 'Redmi Note 15 6GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 27216.0,
        deposit: 5443.2,
        weekly_installment: 837.42,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-note-15-6gb-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-note-15-6gb-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-note-15-6gb-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-note-15-6gb-128gb-box.jpg"],
        description: 'Redmi Note 15 6GB/128GB smartphone with impressive features and reliable performance. Now at Ksh 27,216.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.67 inch FHD+ 120Hz", "processor": "MediaTek Helio G99", "ram": "6GB", "storage": "128GB", "camera": "108MP Main + 8MP Ultra-wide", "battery": "5000mAh", "os": "Android 14", "colors": ["Midnight Black", "Aurora Purple", "Ocean Blue"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/redmi-note-15-6gb-128gb'
    },
    {
        name: 'Redmi Note 15 Pro 256GB',
        category: 'Mobile Phones',
        subcategory: 'Redmi',
        cash_price: 38664.0,
        deposit: 7732.8,
        weekly_installment: 1189.66,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-note-15-pro-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-note-15-pro-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-note-15-pro-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/redmi-note-15-pro-256gb-box.jpg"],
        description: 'Redmi Note 15 Pro 256GB smartphone with impressive features and reliable performance. Now at Ksh 38,664.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.67 inch FHD+ 120Hz AMOLED", "processor": "Snapdragon 7s Gen 2", "ram": "8GB", "storage": "256GB", "camera": "200MP Main + 8MP Ultra-wide", "battery": "5100mAh", "os": "Android 14", "colors": ["Midnight Black", "Aurora Purple", "Ocean Blue"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/redmi-note-15-pro-256gb'
    },
    {
        name: 'Infinix Smart 20 64GB',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 12852.0,
        deposit: 2570.4,
        weekly_installment: 395.45,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-smart-20-64gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-smart-20-64gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-smart-20-64gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-smart-20-64gb-box.jpg"],
        description: 'Infinix Smart 20 64GB smartphone with impressive features and reliable performance. Now at Ksh 12,852.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch HD+", "processor": "Unisoc T603", "ram": "3GB", "storage": "64GB", "camera": "13MP Main + AI Lens", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/infinix-smart-20-64gb'
    },
    {
        name: 'Infinix Hot 60i 256GB',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 17604.0,
        deposit: 3520.8,
        weekly_installment: 541.66,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-hot-60i-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-hot-60i-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-hot-60i-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-hot-60i-256gb-box.jpg"],
        description: 'Infinix Hot 60i 256GB smartphone with impressive features and reliable performance. Now at Ksh 17,604.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "Unisoc T606", "ram": "4GB", "storage": "256GB", "camera": "50MP Main + AI Lens", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/infinix-hot-60i-256gb'
    },
    {
        name: 'Infinix Hot 70 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 17604.0,
        deposit: 3520.8,
        weekly_installment: 541.66,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-hot-70-4gb-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-hot-70-4gb-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-hot-70-4gb-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-hot-70-4gb-128gb-box.jpg"],
        description: 'Infinix Hot 70 4GB/128GB smartphone with impressive features and reliable performance. Now at Ksh 17,604.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "128GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/infinix-hot-70-4gb-128gb'
    },
    {
        name: 'Infinix Note Edge',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 34236.0,
        deposit: 6847.2,
        weekly_installment: 1053.42,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-note-edge-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-note-edge-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-note-edge-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-note-edge-box.jpg"],
        description: 'Infinix Note Edge smartphone with impressive features and reliable performance. Now at Ksh 34,236.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.78 inch FHD+ 144Hz", "processor": "MediaTek Dimensity 7020", "ram": "8GB", "storage": "256GB", "camera": "64MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/infinix-note-edge'
    },
    {
        name: 'Infinix Note 60 Pro',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 41580.0,
        deposit: 8316.0,
        weekly_installment: 1279.38,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-note-60-pro-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-note-60-pro-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-note-60-pro-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-note-60-pro-box.jpg"],
        description: 'Infinix Note 60 Pro smartphone with impressive features and reliable performance. Now at Ksh 41,580.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.78 inch FHD+ 120Hz", "processor": "MediaTek Helio G99", "ram": "8GB", "storage": "256GB", "camera": "108MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/infinix-note-60-pro'
    },
    {
        name: 'Infinix Zero Flip 512GB',
        category: 'Mobile Phones',
        subcategory: 'Infinix',
        cash_price: 47520.0,
        deposit: 9504.0,
        weekly_installment: 1462.15,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-zero-flip-512gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-zero-flip-512gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-zero-flip-512gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/infinix-zero-flip-512gb-box.jpg"],
        description: 'Infinix Zero Flip 512GB smartphone with impressive features and reliable performance. Now at Ksh 47,520.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.9 inch FHD+ 120Hz Foldable AMOLED", "processor": "MediaTek Dimensity 8020", "ram": "8GB", "storage": "512GB", "camera": "108MP Main + 32MP Ultra-wide", "battery": "4720mAh", "os": "Android 14", "colors": ["Rock Black", "Palms Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/infinix-zero-flip-512gb'
    },
    {
        name: 'Tecno Pop 20 128GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 16200.0,
        deposit: 3240.0,
        weekly_installment: 498.46,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-pop-20-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-pop-20-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-pop-20-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-pop-20-128gb-box.jpg"],
        description: 'Tecno Pop 20 128GB smartphone with impressive features and reliable performance. Now at Ksh 16,200.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.56 inch HD+", "processor": "Unisoc T606", "ram": "4GB", "storage": "128GB", "camera": "13MP Main + AI Lens", "battery": "5000mAh", "os": "Android 14", "colors": ["Black", "Blue", "Green"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/tecno-pop-20-128gb'
    },
    {
        name: 'Tecno Spark 50 4GB/128GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 18576.0,
        deposit: 3715.2,
        weekly_installment: 571.57,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-spark-50-4gb-128gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-spark-50-4gb-128gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-spark-50-4gb-128gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-spark-50-4gb-128gb-box.jpg"],
        description: 'Tecno Spark 50 4GB/128GB smartphone with impressive features and reliable performance. Now at Ksh 18,576.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "128GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Gravity Black", "Cyber White"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/tecno-spark-50-4gb-128gb'
    },
    {
        name: 'Tecno Spark 50 4GB/256GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 21060.0,
        deposit: 4212.0,
        weekly_installment: 648.0,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-spark-50-4gb-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-spark-50-4gb-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-spark-50-4gb-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-spark-50-4gb-256gb-box.jpg"],
        description: 'Tecno Spark 50 4GB/256GB smartphone with impressive features and reliable performance. Now at Ksh 21,060.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.6 inch HD+ 90Hz", "processor": "MediaTek Helio G85", "ram": "4GB", "storage": "256GB", "camera": "50MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Gravity Black", "Cyber White"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/tecno-spark-50-4gb-256gb'
    },
    {
        name: 'Tecno Camon 50 256GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 34128.0,
        deposit: 6825.6,
        weekly_installment: 1050.09,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-camon-50-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-camon-50-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-camon-50-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-camon-50-256gb-box.jpg"],
        description: 'Tecno Camon 50 256GB smartphone with impressive features and reliable performance. Now at Ksh 34,128.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.78 inch FHD+ 120Hz", "processor": "MediaTek Helio G99", "ram": "8GB", "storage": "256GB", "camera": "64MP Main + 2MP Depth", "battery": "5000mAh", "os": "Android 14", "colors": ["Basaltic Dark", "Sahara Dust Gold"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/tecno-camon-50-256gb'
    },
    {
        name: 'Tecno Camon 50 Pro 256GB',
        category: 'Mobile Phones',
        subcategory: 'Tecno',
        cash_price: 41688.0,
        deposit: 8337.6,
        weekly_installment: 1282.71,
        image_urls: ["https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-camon-50-pro-256gb-front.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-camon-50-pro-256gb-back.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-camon-50-pro-256gb-side.jpg", "https://res.cloudinary.com/rehoboth-enterprise/image/upload/v1/rehoboth/products/tecno-camon-50-pro-256gb-box.jpg"],
        description: 'Tecno Camon 50 Pro 256GB smartphone with impressive features and reliable performance. Now at Ksh 41,688.00. Available on flexible weekly installment plan.',
        full_details: {"display": "6.78 inch FHD+ 120Hz AMOLED", "processor": "MediaTek Dimensity 8200", "ram": "8GB", "storage": "256GB", "camera": "50MP OIS Main + 50MP Portrait", "battery": "5000mAh", "os": "Android 14", "colors": ["Basaltic Dark", "Sahara Dust Gold"], "warranty": "1 Year"},
        cloudinary_public_id: 'rehoboth/products/tecno-camon-50-pro-256gb'
    }
];


const seedDatabase = async () => {
    try {
        console.log('Starting product seed v4...');

        await pool.query('DELETE FROM products');
        await pool.query('ALTER SEQUENCE products_id_seq RESTART WITH 1');

        let inserted = 0;
        for (const product of products) {
            await pool.query(`
                INSERT INTO products (
                    name, category, subcategory, cash_price, deposit,
                    weekly_installment, image_urls, description,
                    full_details, cloudinary_public_id
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            `, [
                product.name,
                product.category,
                product.subcategory,
                product.cash_price,
                product.deposit,
                product.weekly_installment,
                product.image_urls,
                product.description,
                JSON.stringify(product.full_details),
                product.cloudinary_public_id
            ]);
            inserted++;
        }

        const { rows } = await pool.query('SELECT COUNT(*) FROM products');
        console.log(`\n✅ Seed complete! Inserted ${inserted} products.`);
        console.log(`📦 Total products in database: ${rows[0].count}`);

        const summary = await pool.query(`
            SELECT subcategory, COUNT(*) as count,
                   MIN(cash_price) as min_price,
                   MAX(cash_price) as max_price,
                   SUM(cash_price) as total_value
            FROM products
            GROUP BY subcategory
            ORDER BY subcategory
        `);

        console.log('\n📊 Inventory by Brand:');
        console.log('──────────────────────────────────────────────────────');
        for (const row of summary.rows) {
            console.log(`${row.subcategory}: ${row.count} products | Ksh ${row.min_price} - Ksh ${row.max_price}`);
        }

        const grand = await pool.query('SELECT SUM(cash_price) as total FROM products');
        console.log(`\n💰 Grand total inventory value (with 8% profit): Ksh ${grand.rows[0].total}`);

    } catch (error) {
        console.error('❌ Seed failed:', error);
    } finally {
        await pool.end();
    }
};

seedDatabase();
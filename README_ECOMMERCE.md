# ShopHub E-Commerce Platform

A modern, full-stack e-commerce website built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

### Frontend Features
- Responsive design that works on mobile, tablet, and desktop devices
- Modern, clean user interface with smooth transitions and animations
- Product browsing with category filtering
- Search functionality for products
- Product cards with images, descriptions, pricing, and stock information

### Backend Features
- Supabase database with PostgreSQL
- Row Level Security (RLS) for data protection
- Authentication system for admin access
- RESTful API through Supabase client

### Admin Panel Features
- Secure admin authentication
- Product management (create, read, update, delete)
- Category management (create, read, update, delete)
- Real-time data updates
- Image URL support for products

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth

## Database Schema

### Categories Table
- `id` - UUID primary key
- `name` - Unique category name
- `description` - Category description
- `created_at` - Timestamp
- `updated_at` - Timestamp

### Products Table
- `id` - UUID primary key
- `name` - Product name
- `description` - Product description
- `price` - Decimal price
- `category_id` - Foreign key to categories
- `image_url` - Product image URL
- `stock` - Available stock quantity
- `created_at` - Timestamp
- `updated_at` - Timestamp

## Getting Started

### Prerequisites
The Supabase database is already configured and running. No additional setup is required.

### Installation

1. Install dependencies:
```bash
npm install
```

2. The environment variables are already configured in `.env`

3. Start the development server:
```bash
npm run dev
```

The application will be available at the local development URL.

### Build for Production

```bash
npm run build
```

## Usage Guide

### Public Features (No Login Required)

1. **Home Page**: View featured products in a grid layout
2. **Products Page**: Browse all products with search and category filtering
3. **Categories Page**: View all available categories with product counts

### Admin Features (Login Required)

1. **Create Admin Account**:
   - Click "Login" in the navigation
   - Click "Need an account? Sign Up"
   - Enter email and password
   - Click "Sign Up"

2. **Access Admin Panel**:
   - Click "Login" and enter your credentials
   - Click "Admin" button in the navigation

3. **Manage Products**:
   - View all products in a table format
   - Click "Add Product" to create new products
   - Click edit icon to modify existing products
   - Click delete icon to remove products
   - Fill in product details (name, price, category, stock, description, image URL)

4. **Manage Categories**:
   - Switch to "Category Management" tab
   - Click "Add Category" to create new categories
   - Click edit icon to modify existing categories
   - Click delete icon to remove categories

### Sample Data

The database comes pre-populated with:
- 3 categories: Electronics, Furniture, Stationery
- 3 sample products (one in each category)

### Adding Product Images

For product images, you can use:
- Pexels stock photos (e.g., https://images.pexels.com/photos/...)
- Any other image hosting service
- Direct URLs to images

Example Pexels URLs:
- Laptop: https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800
- Desk: https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800
- Notebook: https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=800

## Security Features

- Row Level Security (RLS) enabled on all tables
- Public read access for products and categories
- Authenticated users only can create, update, or delete data
- Secure authentication with Supabase Auth
- SQL injection prevention through Supabase client
- Input validation on all forms

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── CategoryManagement.tsx
│   ├── Login.tsx
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   └── ProductManagement.tsx
├── contexts/           # React contexts
│   └── AuthContext.tsx
├── lib/               # Library files
│   └── supabase.ts
├── pages/             # Page components
│   ├── Admin.tsx
│   ├── Categories.tsx
│   ├── Home.tsx
│   └── Products.tsx
├── App.tsx            # Main application component
├── index.css          # Global styles
└── main.tsx           # Application entry point
```

## API Integration

All data operations are handled through the Supabase client:

```typescript
import { supabase } from './lib/supabase';

// Fetch products
const { data } = await supabase.from('products').select('*');

// Create product
await supabase.from('products').insert([productData]);

// Update product
await supabase.from('products').update(productData).eq('id', productId);

// Delete product
await supabase.from('products').delete().eq('id', productId);
```

## Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

🍽️ Bistro Bliss — Complete Project Guide
Prepared for Presentation
📌 Project Overview
Bistro Bliss is a modern, full-stack restaurant web application that provides a seamless digital experience for both customers and restaurant administrators. The platform enables customers to browse menus, place orders, reserve tables, manage their profiles, and track their orders — all from one elegant, responsive website.

App Name: Bistro Bliss
Type: Full-Stack Restaurant Web Application
Framework: Next.js 16 (React 19)
Database: Supabase (PostgreSQL)
Authentication: NextAuth v5
Deployment Ready: Yes

Admin Account :
email : admin@admin.com 
password: password123

User Account : you can register new account.
 
🗂️ Pages & Features Summary
Page	Route	Access
Home	/	Public
Menu	/menu	Public
About	/about	Public
Blog	/blog	Public
Contact	/contact	Public
Login	/auth/login	Guest Only
Sign Up	/auth/signup	Guest Only
Shopping Cart	/cart	Logged In
Checkout	/cart (inline)	Logged In
My Orders	/orders	Logged In
My Profile	/profile	Logged In
Table Reservation	/reservation	Logged In
Admin Dashboard	/dashboard	Admin Only
🏠 1. Home Page
The homepage is the first impression of the restaurant and is composed of 7 distinct animated sections, all powered by Framer Motion scroll animations for a polished, modern feel.

Sections:
1.1 Hero Section
Eye-catching full-screen banner that introduces the restaurant brand
Call-to-action buttons leading to the Menu and Reservation pages
1.2 Browse Our Menu
Showcases 4 main food categories as navigable cards:
🍳 Breakfast
🍽️ Main Dishes
🥤 Drinks
🍰 Desserts
Each card has an icon, title, and short description
Animated staggered entrance on scroll
1.3 Provide Healthy
Section highlighting the restaurant's commitment to healthy, fresh ingredients
Emphasizes quality and nutritional value
1.4 Events & Special Occasions
Showcases 4 types of special event services:
🍱 Catering
🎂 Birthdays
💍 Weddings
🎉 Events
Each event type includes a photograph and description
1.5 Fast Food Delivery
Highlights the delivery service with key bullet points:
⏰ Delivery within 30 minutes
💰 Best Offers & Prices
🌐 Online Services Available
Features attractive food imagery with hover zoom animations
1.6 What Our Customers Say
Testimonials / customer reviews section to build trust
1.7 Our Blog & Articles
Preview of the latest 5 blog articles with images and dates
"Read All Articles" button linking to the full blog page
🍕 2. Menu Page (/menu)
The menu page is a dynamic, filterable product catalog fetched in real-time from the database.

Features:
Category Filter — Filter menu items by category (e.g., Breakfast, Main Dishes, Drinks, Desserts)
Product Cards — Each menu item displays:
Product image
Product name & description
Price
Size Selection — Customers can pick a size (e.g., Small, Medium, Large), each with its own price
Extras Selection — Optional add-ons like toppings or sauces, with individual pricing
Add to Cart Button — Adds the item (with selected size and extras) directly to the shopping cart
Order App Links — Section displaying links to download the mobile app (if applicable)
Server-Side Data Prefetching — Data is loaded on the server before the page renders, ensuring fast load times with no loading flash
🔐 3. Authentication System
The app uses NextAuth v5 with two sign-in methods, and all credentials are validated using Formik + Yup for secure, user-friendly form handling.

3.1 Sign Up (/auth/signup)
Fields: Full Name, Email, Password, Confirm Password
Validation Rules:
Name must be provided
Valid email format required
Password minimum 8 characters
Confirm Password must match
After successful registration, the user is automatically signed in and redirected to the homepage
3.2 Login (/auth/login)
Fields: Email, Password
Validation Rules:
Valid email required
Password minimum 8 characters
Google OAuth — One-click sign-in with Google account
Displays user-friendly error messages (e.g., "Invalid email or password")
Redirects to home after successful login
3.3 Session Management
Sessions are persisted using NextAuth
Header changes dynamically: shows Login button for guests, shows user avatar menu for logged-in users
Protected pages redirect unauthenticated users
🛒 4. Shopping Cart (/cart)
The cart is a real-time, client-side managed experience powered by Zustand state management.

Features:
Cart Items Display
Each item shows:
Product image
Product name
Selected size with price
Selected extras with individual prices
Quantity controls (increase / decrease)
Remove button (trash icon)
Per-item total price calculation
Quantity Management
➕ Increase quantity — updates total live
➖ Decrease quantity — removes item when quantity reaches 0
🗑️ Delete item — removes from cart immediately with toast notification
Price Summary
Subtotal — Sum of all item prices × quantities
Delivery Fee — Fixed $5.00
Grand Total — Subtotal + Delivery fee
Checkout Form
Shown alongside the cart when items are present
Connected to the logged-in user's profile
Submits a complete order to the database
Empty Cart State
Friendly "no items" message when cart is empty
"Go To Menu" shortcut button
✅ 5. Order Checkout & Success
Checkout Flow:
Customer reviews cart items
Fills in checkout details
Clicks "Place Order"
Redirected to a Success Page with a confirmation message:
"Your order was placed successfully. Thank you for choosing Bistro Bliss!"
Orders are saved to the database and become visible in the admin dashboard
📋 6. My Orders (/orders)
Logged-in customers can view their complete order history.

Features:
Lists all past orders for the logged-in user
Displays order ID, products, and total price
Fetches data specific to the authenticated user's ID
👤 7. User Profile (/profile)
Customers can view and update their personal information.

Features:
Profile Photo — View current photo; upload a new image (stored via Cloudinary image hosting)
Update Form — Edit:
Full Name
Email
Phone Number
Country
Password
Changes are validated and saved to the database
Displays current profile data pre-filled into the form
🪑 8. Table Reservation (/reservation)
Customers can book a table at the restaurant directly through the website.

Features:
Reservation Form with Formik + Yup validation:
Name — Minimum 2 characters required
Phone Number — Minimum 8 digits required
Date — Date picker
Time — Time picker
Total Persons — Minimum 1 person required
Submit button disabled until form is valid
Loading state shown while submitting
On success: redirected to a confirmation page with message:
"Your Reservation was made successfully. Thank you for choosing Bistro Bliss!"
Reservation data is stored in database and visible in admin dashboard
ℹ️ 9. About Us (/about)
Tells the restaurant's story and builds trust with visitors.

Sections:
Hero heading with restaurant philosophy
Provide Healthy section (reused from homepage)
About Video — An embedded video showcasing the restaurant experience
Little Information — Key stats or highlights (years open, dishes served, team members, etc.)
Customer Testimonials — Reviews section (reused from homepage)
📰 10. Blog (/blog)
A content marketing section that provides food-related articles.

Features:
Blog Listing Page — Grid of blog cards (responsive: 1→2→3→4 columns)
Each card shows: cover image, publication date, title
Individual Blog Pages — Each article has its own detail page at /blog/[id]
Articles are pre-defined in the app constants
📞 11. Contact Page (/contact)
Allows customers to get in touch with the restaurant.

Features:
Contact Form — Customers can send a message directly
Contact Information Display:
📞 Phone: +1-234-567-8900
🕐 Hours: Mon-Fri 11am–8pm | Sat-Sun 9am–10pm
📍 Address: 123 Bridge Street, Nowhere Land, LA 12345
🧭 12. Navigation & Header
The header is fixed at the top of all pages and adapts to screen size.

Features:
Logo & Brand Name — Links back to homepage
Navigation Links:
Home, Menu, About, Blog, Contact, Orders (for logged-in users)
Admin: Dashboard link (for admin users only)
"Book A Table" Button — Quick access to reservation page
Auth Button:
Shows Login for guests
Shows user avatar + dropdown for logged-in users (Profile, Sign Out)
Cart Button — Shows current item count badge
Mobile Menu (Drawer) — Slide-in navigation for mobile screens
Top Loading Bar — Red progress bar appears at the top during page transitions
🎛️ 13. Admin Dashboard (/dashboard)
A powerful, protected admin panel for managing all restaurant operations. Only users with the ADMIN role can access this page.

The dashboard is organized into 5 tabs:

Tab 1: 📦 Products Management
Feature	Description
View All Products	Table listing all products with image, name, category, price, extras
Search	Live search by product name
Add New Product	Button linking to a dedicated add product form
Edit Product	Opens an edit modal for each product
Delete Product	Confirmation dialog before deletion
Loading Skeleton	Displayed while data loads
Tab 2: 🏷️ Categories Management
Feature	Description
View All Categories	Table listing category name, number of products, and associated products
Search	Live search by category name
Add New Category	Modal form to create a new category
Edit Category	Modal form pre-filled with existing data
Delete Category	Delete with confirmation
Tab 3: 👥 Users Management
Feature	Description
View All Users	Table showing user avatar, name, email, country
Search	Live search by user name
Toggle Admin Role	Checkbox per user — check/uncheck to grant or revoke admin privileges instantly
Real-time Update	Role changes reflected immediately via API call
Tab 4: 🧾 Orders Management
Feature	Description
View All Orders	Table listing Order ID, number of products, total amount
Search	Live search by Order ID
View Order Details	Modal showing full breakdown of each order (all products, sizes, extras)
Tab 5: 📅 Reservations Management
Feature	Description
View All Reservations	Table showing Name, Phone, Date, Time, Total Persons, Created At
Search	Live search by customer name
🔧 Technical Architecture
Technology Stack
Layer	Technology	Purpose
Framework	Next.js 16	Full-stack React framework with App Router
UI Library	React 19	Latest React with concurrent features
Styling	TailwindCSS v4	Utility-first responsive styling
Database	Supabase (PostgreSQL)	Real-time cloud database
Authentication	NextAuth v5	Session management, Google OAuth
State Management	Zustand	Cart state, persisted across sessions
Data Fetching	TanStack React Query	Server state, caching, and mutations
Forms	Formik + Yup	Form management and validation
Animations	Framer Motion	Smooth page and scroll animations
Image Hosting	Cloudinary	Profile & product image uploads
UI Components	Radix UI	Accessible dialog, tabs, select, etc.
Notifications	Sonner (Toast)	Success/error toast notifications
Icons	Lucide React	Clean, consistent icon set
Fonts	Google Fonts (Roboto + Playfair Display)	Premium typography
Password Hashing	bcryptjs	Secure credential storage
Type Safety	TypeScript	Full type safety across the codebase
Key Design Patterns
Server-Side Rendering (SSR) — Dashboard and menu data are pre-fetched on the server for fast page loads
Hydration Boundary — Seamlessly transitions from server to client rendering without flickering
HOC Pattern (WithLoadingAndErrors) — Reusable wrapper that handles loading skeletons and error states across all data tables
Custom Hooks — useCustomQuery and useCustomMutation abstract TanStack Query logic for reuse
Protected Routes — Pages like Cart, Profile, Orders redirect unauthenticated users
Role-Based Access — Admin Dashboard only accessible to users with ADMIN role
Optimistic UI — Toast notifications provide instant feedback before server confirms
📱 Responsive Design
The application is fully responsive across all screen sizes:

Breakpoint	Behavior
Mobile	Single-column layout, slide-in drawer navigation
Tablet	2-column grids, expanded layout
Desktop	Full navigation bar, multi-column grids, side-by-side layouts
🎨 Brand & Design
Primary Color: Deep Red (#AD343E) — used for buttons, headings, links, and accents
Typography: Playfair Display (headings, brand name) + Roboto (body text)
Micro-animations: Hover scale effects, fade-in-up on scroll, staggered children animations
Loading States: Skeleton screens instead of spinners for perceived performance
Toast Notifications: Non-intrusive corner notifications for all user actions
📈 Summary of Key Capabilities
Capability	✅
Customer registration & login (email + Google)	✅
Browse & filter menu by category	✅
Customize orders with size & extras	✅
Shopping cart with quantity control	✅
Place and save orders to database	✅
View personal order history	✅
Book restaurant tables online	✅
Manage personal profile & photo	✅
Blog for content marketing	✅
Contact form & info page	✅
Admin: manage products with CRUD	✅
Admin: manage categories with CRUD	✅
Admin: view & search all orders	✅
Admin: manage users & roles	✅
Admin: view all reservations	✅
Full mobile responsiveness	✅
Scroll animations (Framer Motion)	✅
SEO-optimized page titles & descriptions	✅
Secure password hashing	✅
Cloud image storage (Cloudinary)	✅
Report generated: March 2026 | Project: Bistro Bliss Restaurant Web Application


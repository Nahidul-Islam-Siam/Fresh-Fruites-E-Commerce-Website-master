# Fresh Fruites E-Commerce Website

## Project Overview
Fresh Fruites is a modern e-commerce platform for selling fresh fruits online. Built using **Next.js**, this project includes a fully functional **dashboard**, **user authentication**, **product management**, and a **shopping cart**, all implemented using **Redux Toolkit Query (RTK Query)** and APIs.

### 🔗 Live Website: [Fresh Fruites E-Commerce](https://fresh-fruites-e-commerce-website-master.vercel.app/)
### 📂 GitHub Repository: [Fresh Fruites E-Commerce](https://github.com/Nahidul-Islam-Siam/Fresh-Fruites-E-Commerce-Website-master.git)

## Features
✅ **User Authentication** (Signup/Login via API)  
✅ **Dashboard** (Admin & User)  
✅ **Product Management** (Add, Delete, View Products)  
✅ **Category Management**  
✅ **Shopping Cart with Redux Toolkit**  
✅ **Real-Time Data Fetching using RTK Query**  
✅ **Responsive UI with Tailwind CSS**  
✅ **Toast Notifications for Better UX**  

---
## 🏗️ Tech Stack
- **Next.js** (15.2.2) - Server-side rendering & fast frontend framework
- **React 19** - Component-based UI
- **Redux Toolkit & RTK Query** - State management & API calls
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **React Hook Form** - Form handling
- **React Toastify** - Notifications
- **Radix UI** - Accessible UI components

---
## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Nahidul-Islam-Siam/Fresh-Fruites-E-Commerce-Website-master.git
cd Fresh-Fruites-E-Commerce-Website-master
```

### 2️⃣ Install Dependencies
```sh
yarn install
# or
npm install
```

### 3️⃣ Start the Development Server
```sh
yarn dev
# or
npm run dev
```
The app will be running at `http://localhost:3000`

### 4️⃣ Build for Production
```sh
yarn build
# or
npm run build
```

---
## 📌 API Endpoints & Redux Integration

### **Authentication**
```javascript
useSignupMutation();    // Register a new user
useLoginMutation();     // User login
useGetProfileQuery();   // Fetch user profile
```

### **Products & Categories**
```javascript
useGetProductsQuery();     // Fetch all products
useGetProductByIdQuery();  // Fetch a single product
useAddProductMutation();   // Add a new product
useDeleteProductMutation(); // Delete a product
useGetCategoriesQuery();   // Fetch categories
useDeleteCategoryMutation(); // Delete a category
```

### **User Management**
```javascript
useGetAllUserQuery();  // Fetch all users
```

---
## 🛠️ Project Structure
```
📂 fresh-fruites-ecommerce
 ├── 📁 public/            # Static assets (images, icons, etc.)
 ├── 📁 src/
 │   ├── 📁 components/    # Reusable UI components
 │   ├── 📁 pages/         # Next.js pages (home, dashboard, auth, etc.)
 │   ├── 📁 store/        # Redux store & slices
 │   ├── 📁 services/     # API services (RTK Query)
 │   ├── 📁 styles/       # Global styles (Tailwind)
 │   └── 📁 utils/        # Utility functions
 ├── 📄 package.json       # Dependencies & scripts
 ├── 📄 README.md          # Project documentation
 └── 📄 next.config.js     # Next.js configuration
```

---
## 📜 License
This project is **open-source** and available under the [MIT License](LICENSE).

---
## 🙌 Contributing
We welcome contributions! If you'd like to improve this project:
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Submit a pull request

---
## 📞 Contact
For any questions, feel free to reach out!
- **GitHub:** [Nahidul-Islam-Siam](https://github.com/Nahidul-Islam-Siam)
- **Email:** siamnahidul093@gmail.com
- **Phone:** 01772593924


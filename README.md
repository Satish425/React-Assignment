# Product Table – React Assignment

## 📌 Overview

This project is a **React application built using Vite** that displays product data in a table with editable fields, row deletion, and dynamic column-based filters.
The application uses **locally stored dummy data** and a **mock API** implemented with `Promise` and `setTimeout` to simulate real backend behavior.

This project was developed as part of a **Frontend / Fullstack Engineer Intern Assignment**.

---

## 🚀 Features

* Display product data in a table
* Editable **Title** column (inline editing)
* Delete individual product rows
* Dropdown filters for **each column**:

  * Title
  * Brand
  * Category
  * Price
  * Rating
* Dynamic filter options based on currently filtered results
* Reset Filters button
* Loading state while fetching data
* Error handling for API failures
* “No results found” message when filters return no data

---

## 🛠️ Tech Stack

* **React** (Functional Components & Hooks)
* **Vite** (Build Tool)
* **JavaScript**
* **CSS (basic styling)**

No third-party table or filter libraries were used.

---

## 📂 Project Structure

```
src/
├── dummyData/
│   └── dummyAPI.js        # Mock API (Promise + setTimeout)
│   └── products.json          # Local dummy product data
├── App.jsx                # Main component (table, filters, logic)
├── main.jsx
└── index.css
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-github-repo-url>
cd <project-folder>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the application

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🔄 Data Handling Approach

* Product data was copied once from **dummyjson.com**
* Data is stored locally in `products.json`
* A mock API (`dummyAPI.js`) simulates:

  * Fetching products
  * Updating product titles
  * Deleting products
* All API functions return Promises with artificial delays using `setTimeout`

---

## 🧠 Key Implementation Details

* Filters are stored in a single state object
* All filters are applied together to generate filtered results
* Dropdown filter values are dynamically derived from the currently filtered dataset
* Inline title editing updates both local state and mock API
* UI updates instantly after edit or delete operations

---

## 🌐 Deployed Application

**Live URL:**
http://react-assignment-livid-six.vercel.app/

---

## 👤 Author

**Satish Kumar**

---

## ✅ Notes

* No third-party table or filter libraries were used
* Application follows assignment instructions strictly
* Focus was kept on logic and functionality over styling

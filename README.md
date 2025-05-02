# 💳 Secure-Bank-Application

## 📋 Project Overview

A secure banking web application designed to demonstrate secure programming practices, including account management, user authentication, secure coding, error handling, and database integration. The project combines front-end and back-end technologies to simulate core banking functionalities in a secure environment.

---

## 🛠 Technologies Used

- **Java** – backend processing
- **Node.js** – backend server logic (v20.4.0)
- **Express.js** – routing and server management
- **MySQL** – relational database system
- **HTML/CSS/JavaScript** – frontend interface
- **bcryptjs** – password hashing
- **Git & GitHub** – version control
- **Live Server** – local development & testing

---

## 💻 System Requirements

- **Operating System:** Windows 11
- **Processor:** Intel Core i5-1135G7 @ 2.40GHz
- **Installed RAM:** 16GB
- **System Type:** 64-bit operating system, x64-based processor
- **Java Version:** Java 17 or higher
- **Node.js Version:** v20.4.0
- **MySQL Server**

---

## 🧰 Node.js & Package Management

The following `npm` commands were used during project setup:

```bash
npm init
npm install express mysql2 bcryptjs
```

---

## 📄 Sample package.json

```bash
{
  "name": "secure-banking-system",
  "version": "1.0.0",
  "description": "A secure banking web application using Node.js and MySQL.",
  "main": "server.js",
  "scripts": {
	"start": "node server.js"
  },
  "dependencies": {
	"bcryptjs": "^2.4.3",
	"express": "^4.18.2",
	"mysql2": "^3.6.0"
  },
  "author": "Use Your Name",
  "license": "ISC"
}
```

---

### 🚀 Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/secure-banking-system.git
```

### 2. Navigate to the project directory:

```bash
cd secure-banking-system
```

### 3. Install the required dependencies e.g. npm install mysql2:

```bash
npm install mysql2
```

### 4. Ensure MySQL is running and create a bank_system database using the provided .sql file.

```bash
net start mysql
```

### 5. Start the server:

```bash
node server.js
```

### 6. The server runs on:

```bash
Bank System Server listening on port 3000...
Successfully connected to MySQL database bank_system
```

### 🔐 Security Features

- User Authentication

- Password hashing using bcryptjs

- Input validation and sanitisation

- Proper error handling and logging

### 🔄 User Registration & Database Insertion

When a user registers, the system captures their details securely and inserts them into the MySQL database. Example in json:

```bash
{
  "first_name": "Shells",
  "last_name": "Stewarts",
  "email": "shelly@atu.ie",
  "phone_no": "+353 657 7652",
  "username": "shell.stews",
  "password": "Happys*1187",
  "balance": 0
}
The backend logs successful insertion and request data during development for verification. The server runs on:
```

### 🧪 Testing

- Manual testing of login and registration flows
- Unit Testing

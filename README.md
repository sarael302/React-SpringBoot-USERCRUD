
# 🚀 Full-Stack User Management App

A lightweight **User CRUD system** built using **Spring Boot** (REST API) and a **React** frontend.
The application demonstrates how a modern frontend can interact seamlessly with a robust Java backend.

---

## 📌 Overview

This project provides a simple interface for managing users.
From the UI, you can **add**, **edit**, **update**, and **remove** users while the backend handles validation and database operations.

---

## 🔧 Tech Stack

### **Backend**

* Java 17
* Spring Boot 3
* Spring Web + Validation
* Maven
* MySQL (or MongoDB with minimal changes)

### **Frontend**

* React 18
* Axios for API calls
* Hooks-based components

---

## ✨ Main Features

### **Backend (API Layer)**

* RESTful endpoints for all CRUD operations
* Validation for user fields (email, age, etc.)
* Clear service & controller separation
* Configurable database connection in `application.properties`

### **Frontend (Client Layer)**

* List all existing users
* Create a new user with form validation
* Modify existing user information
* Delete a user with confirmation
* Clean and responsive interface

---

## 🖼️ Screenshot

<p align="center">
<img width="1780" height="808" alt="Capture d&#39;écran 2025-11-22 220003" src="https://github.com/user-attachments/assets/a5eab93b-03bd-46db-ac86-360fc525b2e6" />
</p>


---

## 📁 Project Structure

```
backend/
 └── src/main/java/.../controller
 └── src/main/java/.../service
 └── src/main/java/.../model
 └── resources/application.properties

frontend/
 └── src/components
 └── src/services/api.js
 └── src/App.js
```

---

## ▶️ Running the Project

### **1 — Run the backend**

```
mvn spring-boot:run
```

Runs on: **[http://localhost:8090](http://localhost:8090)**

### **2 — Run the frontend**

```
npm install
npm start
```

Runs on: **[http://localhost:3000](http://localhost:3000)**

---

## ⚙️ Configuration

To switch database type (MySQL ↔ MongoDB), simply update:

* Dependencies in `pom.xml`
* Properties in `application.properties`

---

## 🌐 API Base URL

The React app communicates with:

```
http://localhost:8090/api/users
```

---

## 📜 Notes

* Axios is used for all HTTP requests to the API.
* CORS is enabled on the backend for localhost development.
* Designed for simplicity and easy extension (authentication, pagination, roles, etc.).

---

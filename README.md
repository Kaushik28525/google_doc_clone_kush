# 📝 Google Docs Clone (Real-Time Collaborative Editor)

A real-time collaborative text editor built using **React, Socket.io, and MongoDB** — inspired by Google Docs.

---

## 🚀 Features

* ✍️ Real-time text editing
* 🔄 Live collaboration across multiple tabs/devices
* 💾 Auto-saving documents to MongoDB
* 🔗 Unique document links using UUID
* ⚡ Fast and responsive editor using Quill

---

## 🛠️ Tech Stack

### Frontend

* React
* Quill.js
* Socket.io Client

### Backend

* Node.js
* Express
* Socket.io

### Database

* MongoDB Atlas
* Mongoose

---

## 📂 Project Structure

```
kush_docs/
│
├── client/     # React frontend
├── server/     # Node.js backend
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/Kaushik28525/google_doc_clone_kush.git
cd google_doc_clone_kush
```

---

### 2️⃣ Install dependencies

#### Client

```
cd client
npm install
```

#### Server

```
cd ../server
npm install
```

---

### 3️⃣ Setup MongoDB

Create a `.env` file in `/server`:

```
MONGO_URL=your_mongodb_connection_string
```

---

### 4️⃣ Run the app

#### Start server

```
cd server
npm run devStart
```

#### Start client

```
cd client
npm start
```

---

## 🌐 Usage

* Open: `http://localhost:3000`
* A new document is created automatically
* Share the URL with others to collaborate in real-time

--

## 🧠 Learnings

* Real-time communication using WebSockets
* Handling concurrency in collaborative apps
* Full-stack project structure
* MongoDB integration with Mongoose

---

## 📌 Future Improvements

* 👤 User authentication
* 📄 Document titles
* 📚 Version history
* 🌐 Deployment (Vercel + Render)

---

## 👨‍💻 Author

**Kaushik Anand**

---

## ⭐ Give a Star

If you like this project, please ⭐ the repo!

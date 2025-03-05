🚀 A full-stack web application that allows users to:


✅ Sign up & log in using Google Authentication

✅ Create & edit a rich text letter

✅ Save letters directly to Google Drive



🛠 Tech Stack

Frontend:

⚛️ React (Vite)

📝 ReactQuill (Text Editor)

🌐 Axios (API calls)

Backend:

🟢 Node.js & Express.js

🔐 Passport.js (Google OAuth Authentication)

📂 Google Drive API

🔄 CORS, Express Sessions

Deployment:

🌍 Frontend: Vercel / Netlify

☁️ Backend: Render / Heroku

🔑 Environment Variables: .env for API keys



🚀 Features

✅ Google Sign-In (OAuth Authentication)

✅ Rich Text Editing (Bold, Italic, Lists, etc.)

✅ Save Letter as Google Docs in Google Drive

✅ Retrieve Saved Letters from Drive

✅ Secure OAuth Scopes & Permissions



🛠 Installation & Setup

1️⃣ Clone the Repository

bash

git clone (Give your Github Repo. Name in which your project is included)

cd google-oauth-text-editor


2️⃣ Backend Setup (Node.js + Express)

cd backend

npm install

🔑 Create a .env file inside backend/ and add:

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback

SESSION_SECRET=your_secret_key

Run the Backend Server:

node server.js

📌 Backend will run on: http://localhost:5000

3️⃣ Frontend Setup (React + Vite)


cd ../frontend

npm install

npm install react-quill

🔑 Create a .env file inside frontend/ and add:

VITE_BACKEND_URL=http://localhost:5000


Run the Frontend:

npm run dev


📌 Frontend will run on: http://localhost:5173



📌 How to Use

1️⃣ Open http://localhost:5173 in your browser.

2️⃣ Click "Sign in with Google" and authenticate.

3️⃣ Type a letter in the text editor.

4️⃣ Click "Save to Google Drive" to store it as a Google Docs file.

5️⃣ Check your Google Drive for the saved document! 🎉



🚀 Deployment

Frontend Deployment (Vercel / Netlify)

Push your project to GitHub.

Deploy via Vercel or Netlify.

Set environment variables in the deployment settings.

Backend Deployment (Render / Heroku)

Push your backend to GitHub.

Deploy via Render or Heroku.

Set environment variables in the hosting dashboard.

🛠 Future Enhancements

🔹 Folder Organization in Google Drive 📂

🔹 Real-time Collaboration (WebSockets) 📝

🔹 Role-based Access Control 👥

🔹 Dark Mode Support 🌙



📜 License

This project is open-source under the MIT License.

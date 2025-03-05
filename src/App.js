import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const App = () => {
  const [content, setContent] = useState("");

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handleUpload = async () => {
    await fetch("http://localhost:5000/drive/upload", { method: "POST", credentials: "include" });
  };

  return (
    <div>
      <button onClick={handleLogin}>Sign in with Google</button>
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleUpload}>Save to Google Drive</button>
    </div>
  );
};

export default App;

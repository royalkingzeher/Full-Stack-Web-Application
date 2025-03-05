const express = require("express");
const { google } = require("googleapis");
const fs = require("fs");
const router = express.Router();

router.post("/upload", async (req, res) => {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: req.user.accessToken });
  const drive = google.drive({ version: "v3", auth: oauth2Client });

  const fileMetadata = { name: "letter.docx", mimeType: "application/vnd.google-apps.document" };
  const media = { mimeType: "text/plain", body: fs.createReadStream("./letter.txt") };
  
  const response = await drive.files.create({ resource: fileMetadata, media: media, fields: "id" });
  res.json({ fileId: response.data.id });
});

module.exports = router;

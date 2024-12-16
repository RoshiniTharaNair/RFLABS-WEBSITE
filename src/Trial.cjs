require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const { OAuth2 } = require('google-auth-library');
const express = require('express');
const cors = require('cors');




// Initialize your OAuth2 client and Google Drive API
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2client
});

const app = express();
const port = 6000;
// Enable CORS
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });

async function uploadFile(file) {
  try {
    console.log("file at server ",file)
    const response = await drive.files.create({
      requestBody: {
        name: file.originalname, // Use the original name of the file
        mimeType: file.mimetype, // Use the mimeType of the file
      },
      media: {
        mimeType: file.mimetype,
        body: file.buffer, // Use the buffer of the file
      },
    });

    const fileId = response.data.id;
    console.log("id of upload", fileId);
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteFile() {
  try {
    const response = await drive.files.delete({
      fileId: FILE_ID,
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error.message);
  }
}

// deleteFile();

async function generatePublicUrl() {
  try {
    const fileId = FILE_ID;
    console.log("id of public url",fileId)

    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    /* 
    webViewLink: View the file in browser
    webContentLink: Direct download link 
    */
    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
}

// generatePublicUrl();
// uploadFile();
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }
    await uploadFile(file);
    return res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


---

## File Transfer API

This project is a Node.js-based REST API for handling file uploads and downloads. It allows users to upload files to the server and download them later by filename. The project is built using **Express** for routing, **Multer** for handling file uploads, and **Node.js**'s built-in file system to manage the file storage.

### Features

- **Upload Files**: Users can upload files to the server using a POST request.
- **Download Files**: Users can download or access files by filename using a GET request.
- **Modular Structure**: The project separates logic into **routes** and **operations** files for better scalability and maintainability.

### Technologies Used

- **Node.js**: The runtime environment for JavaScript code execution.
- **Express**: A minimal and flexible Node.js web application framework for routing and middleware.
- **Multer**: A Node.js middleware for handling multipart/form-data, used for uploading files.
- **File System (fs)**: Node.js's built-in module to interact with the file system.
- **CORS**: Middleware to allow cross-origin resource sharing.

---

### Folder Structure

```bash
.
├── operations          # Business logic for handling file upload/download
│   └── fileOperations.js
├── routes              # API routes for handling HTTP requests
│   └── fileRoutes.js
├── uploads             # Directory to store uploaded files (auto-created)
├── server.js           # Main file for running the Express server
└── package.json        # Project metadata and dependencies
```

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/file-api.git
   cd file-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node server.js
   ```
   The server will start on `http://localhost:3001`.

---

### API Endpoints

#### 1. **Upload File**

- **Endpoint**: `POST /api/files/upload`
- **Description**: Uploads an file file to the server.
- **Request Type**: `multipart/form-data`
- **Request Body**: The file file should be sent with the key `file`.
- **Response**:
  ```json
  {
    "message": "File uploaded successfully!",
    "fileUrl": "/uploads/<filename>"
  }
  ```

**Example using `curl`**:

```bash
curl -X POST -F "file=@/path/to/file.jpg" http://localhost:3000/api/files/upload
```

#### 2. **Download File**

- **Endpoint**: `GET /api/files/download/:filename`
- **Description**: Downloads the specified file by its filename.
- **Request Params**: `filename` (name of the file to download).
- **Response**: The file file is downloaded.

**Example**:

```bash
curl -O http://localhost:3001/api/files/download/file-12345.jpg
```

#### 3. **Access Files via URL**

- **URL Pattern**: `/uploads/:filename`
- **Description**: Files can be accessed directly via URL, using the filename returned during the upload process.
- **Example**: `http://localhost:3001/uploads/file-12345.jpg`

---

### Customization

You can easily extend the API by adding more features or routes, such as:

- **File Deletion**: Add a route for deleting uploaded files.
- **File Processing**: Perform additional operations on the files, such as resizing, cropping, or converting formats.
- **Authentication**: Implement user authentication for secure access to the API.

---

### Error Handling

- **Upload Error**: If no file is provided in the request, the API will return an error:
  ```json
  {
    "error": "Please upload an file"
  }
  ```
- **File Not Found**: If an file does not exist for download, a 404 response will be sent:
  ```json
  {
    "message": "File not found"
  }
  ```

---

### Author

**Your Name**  
*GitHub*: [tejas2292](https://github.com/tejas2292)

---

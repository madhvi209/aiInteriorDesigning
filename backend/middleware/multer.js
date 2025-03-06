import multer from 'multer';

const storage = multer.memoryStorage();
const singleUpload = multer({ storage }).single("file");



export { singleUpload }; // Make sure to export it this way
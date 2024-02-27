const port = 4000;
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//Database Connection with MongoDB
mongoose.connect(`mongodb+srv://nghiavadat:testingdb@cluster0.otvcumd.mongodb.net/e-commerce`);

//APT Creation
app.get("/", (req, res)=>{
    res.send("Express app is running");
})

//Image store engine
const storage = multer.diskStorage({
    destination: './uploads/images',
    filename:(req,file,cp)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage: storage});

// Creating upload endpoint for images
app.use('/images', express.static('uploads/images'));

app.post("/upload", upload.single('product'), (req, res)=>{
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port, (error)=>{
    if(!error){
        console.log(`Server is running on port ${port}`);
    }
    else{
        console.log(`Error: ${error}`);
    }
})
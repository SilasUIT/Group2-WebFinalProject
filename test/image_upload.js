const mongoose = require('mongoose');
const fs = require('fs');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  img: {
    data: Buffer,
    contentType: String
  }
});

const Image = mongoose.model('Image', ImageSchema);

// Kết nối đến MongoDB
mongoose.connect('mongodb+srv://leeinearth817:cnttvietnhatk17@cluster0.pjk9ees.mongodb.net/finalWeb', { useNewUrlParser: true, useUnifiedTopology: true });

// Lưu hình ảnh
async function saveImage() {
    const newImage = new Image();
    newImage.img.data = fs.readFileSync('./img1.jpg');
    newImage.img.contentType = 'image/jpeg';
    try {
      await newImage.save();
      console.log('Image saved successfully');
    } catch (err) {
      console.log(err);
    }
  }
  
  saveImage();

// Load hình ảnh
Image.findOne({})
  .then((image) => {
    if (image) {
      fs.writeFileSync('output_image.jpg', image.img.data);
      console.log('Image loaded successfully');
    } else {
      console.log('No image found');
    }
  })
  .catch((err) => {
    console.log(err);
  });
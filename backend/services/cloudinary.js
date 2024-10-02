const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET 
});

function uploadImage(image) {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({ 
            resource_type: 'image',
            folder: 'Events' // Adiciona a pasta de destino
        }, (error, result) => {
            if (error) {
                console.error("Cloudinary Upload Error:", error);
                return reject(error);
            }
            resolve(result);
        });

        if (image && image.buffer) {
            uploadStream.end(image.buffer);
        } else {
            reject(new Error("No image buffer provided"));
        }
    });
}

module.exports = uploadImage;

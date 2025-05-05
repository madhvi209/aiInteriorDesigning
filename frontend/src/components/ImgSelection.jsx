import React from 'react';
import PropTypes from 'prop-types';

function ImgSelection({ onImageSelect, selectedImage }) {
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageSelect(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            onImageSelect(null);
        }
    };

    return (
        <div>
            <label htmlFor="upload-image" className="block ml-3 font-semibold text-gray-700 mb-2">
                Select Image of your room:
            </label>

            <div
                className="p-8 border rounded-xl border-dotted flex justify-center items-center relative cursor-pointer hover:shadow-lg"
                onClick={() => document.getElementById('upload-image').click()}
            >
                <img
                    src={
                        selectedImage
                            ? selectedImage
                            : "https://s3.amazonaws.com/ionic-marketplace/image-upload/icon.png"
                    }
                    alt="Room Preview"
                    className="w-65 h-60 object-contain p-0 bg-white"
                />
                <input
                    type="file"
                    id="upload-image"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleImageChange}
                />
            </div>
        </div>
    );
}

ImgSelection.propTypes = {
    onImageSelect: PropTypes.func.isRequired,
    selectedImage: PropTypes.string,
};

export default ImgSelection;

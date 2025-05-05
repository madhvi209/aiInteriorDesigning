import React, { useState } from 'react';
import axios from 'axios';
import ImgSelection from './ImgSelection';
import DesignType from './DesignType';
import RoomType from './RoomType';
import { Button } from './ui/button';

function AiRoomDesign() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [roomType, setRoomType] = useState('');
    const [designType, setDesignType] = useState('');
    const [additionalRequirements, setAdditionalRequirements] = useState('');

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    const handleRoomTypeChange = (value) => {
        setRoomType(value);
    };

    const handleDesignTypeChange = (type) => {
        setDesignType(type);
    };

    const handleAdditionalRequirementsChange = (event) => {
        setAdditionalRequirements(event.target.value);
    };

    const handleGenerateImage = async () => {
        try {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('roomType', roomType);
            formData.append('designType', designType);
            formData.append('additionalRequirements', additionalRequirements);

            const response = await axios.post('/api/redesign_room', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Generated Image Result:', response.data);
            // You could update state to show the result image here
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };


    return (
        <div>
            <h2 className="font-bold text-4xl text-[#1c353f] text-center mt-6">
                Experience the Magic of AI Remodeling
            </h2>
            <p className="text-center text-[#04668D] p-5">
                Transform any Room with a click. Select a space, choose a style, and watch as AI reimagines your environment
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-10 gap-6">
                {/* Image Selection Section */}
                <ImgSelection onImageSelect={handleImageSelect} selectedImage={selectedImage} />

                {/* Form Input Section */}
                <div className="p-4">
                    <RoomType selectedRoomType={handleRoomTypeChange} />

                    <div className="mt-6">
                        <DesignType
                            onSelectDesign={handleDesignTypeChange}
                            selectedDesign={designType}
                        />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="additionalRequirements" className="block text-left font-semibold text-gray-700 mb-2">
                            Additional Requirements (Optional)
                        </label>
                        <textarea
                            id="additionalRequirements"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Specify any additional details or preferences"
                            rows="3"
                            value={additionalRequirements}
                            onChange={handleAdditionalRequirementsChange}
                        ></textarea>
                    </div>


                    <Button
                        className="bg-[#04668D] hover:bg-[#1c353f] text-white font-bold py-3 px-6 rounded-full mt-5"
                        onClick={handleGenerateImage}
                        disabled={!selectedImage || !roomType || !designType}
                    >
                        Generate Image
                    </Button>



                </div>
            </div>
        </div>
    );
}

export default AiRoomDesign;

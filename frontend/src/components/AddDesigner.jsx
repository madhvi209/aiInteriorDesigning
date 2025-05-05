import React, { useState } from 'react';
import axios from 'axios';

const AddDesigner = () => {
    const [formData, setFormData] = useState({
        name: '',
        experience: '',
        charge: '',
        location: '',
        nationality: 'Indian',
        email: '',
        phone: '',
        specialization: '',
        bio: '',
    });

    const [profileImage, setProfileImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle image change
    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('name', formData.name);
        form.append('experience', formData.experience);
        form.append('charge', formData.charge);
        form.append('location', formData.location);
        form.append('nationality', formData.nationality);
        form.append('email', formData.email);
        form.append('phone', formData.phone);
        form.append('specialization', formData.specialization);
        form.append('bio', formData.bio);
        if (profileImage) {
            form.append('file', profileImage);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/v1/designer/add', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Use the response here
            if (response.status === 200) {
                setSuccess('Designer added successfully!');
            } else {
                setError('Failed to add designer');
            }
            setError('');
            setFormData({
                name: '',
                experience: '',
                charge: '',
                location: '',
                nationality: 'Indian',
                email: '',
                phone: '',
                specialization: '',
                bio: '',
            });
            setProfileImage(null);
        } catch (err) {
            setError('Failed to add designer');
            setSuccess('');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">Add Designer</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Experience</label>
                    <input
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Charge</label>
                    <input
                        type="number"
                        name="charge"
                        value={formData.charge}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nationality</label>
                    <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Specialization</label>
                    <input
                        type="text"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Profile Image</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleImageChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        accept="image/*"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md"
                >
                    Add Designer
                </button>
            </form>
        </div>
    );
};

export default AddDesigner;

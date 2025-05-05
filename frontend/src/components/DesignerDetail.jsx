import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DESIGNER_API_END_POINT } from '../components/utils/constant.js';
import { Badge } from './ui/badge.jsx';

function DesignerDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [designer, setDesigner] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${DESIGNER_API_END_POINT}/${id}`)
            .then(response => {
                setDesigner(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching designer detail:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center mt-20 text-lg text-gray-600">Loading designer details...</div>;
    }

    if (!designer) {
        return <div className="text-center mt-20 text-red-600">Designer not found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-blue-100 shadow-2xl rounded-3xl border border-gray-200 ">
            {/* Back Button */}
            <div className="mb-6">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-[#04668D] font-semibold hover:text-[#03506b] transition"
                >
                    <span className="text-xl mr-2">&#8592;</span> Back to Home
                </button>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                <img
                    src={designer.profileImage || 'https://via.placeholder.com/200'}
                    alt={designer.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-[#04668D] shadow-md"
                />
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-[#04668D] mb-4">{designer.name}</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Badge className="bg-[#04668D] text-white px-4 py-2">📧 Email: {designer.email}</Badge>
                        <Badge className="bg-[#04668D] text-white px-4 py-2">📞 Contact: {designer.phone}</Badge>
                        <Badge className="bg-[#04668D] text-white px-4 py-2">📍 Location: {designer.location}, {designer.nationality}</Badge>
                        <Badge className="bg-[#04668D] text-white px-4 py-2">💰 Charge: ₹{designer.charge}</Badge>
                        <Badge className="bg-[#04668D] text-white px-4 py-2">⏳ Experience: {designer.experience}+ years</Badge>
                        <Badge className="bg-[#04668D] text-white px-4 py-2">🎯 Specialization: {designer.specialization}</Badge>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">📝 Bio</h2>
                        <p className="text-gray-600 leading-relaxed">{designer.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesignerDetail;

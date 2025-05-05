import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Badge } from './ui/badge.jsx';
import { useNavigate } from 'react-router-dom';
import { DESIGNER_API_END_POINT } from "../components/utils/constant.js";

function Designers() {
  const [designers, setDesigners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${DESIGNER_API_END_POINT}/`)
      .then(response => setDesigners(response.data))
      .catch(error => console.error('Error fetching designers:', error));
  }, []);

  const handleNext = () => {
    if (currentIndex + 3 < designers.length) {
      setCurrentIndex(prev => prev + 3);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-[#0e3a4c]">Our Designers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-blue-100">
        {designers.slice(currentIndex, currentIndex + 3).map((designer, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-xl bg-white border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-[1.02] flex flex-col justify-between"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={designer.profileImage || 'https://via.placeholder.com/150'}
                alt={designer.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-[#04668D]"
              />
              <h3 className="text-xl font-semibold text-[#04668D]">{designer.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{designer.specialization}</p>

              <div className="flex flex-wrap gap-2 justify-center mt-3">
                <Badge className="bg-[#04668D] text-white font-medium">{designer.location}, {designer.nationality}</Badge>
                <Badge className="bg-[#04668D] text-white font-medium">Experience: {designer.experience}+ yrs</Badge>

              </div>
            </div>

            <div className="mt-6 flex justify-end w-full">
              <button
                onClick={() => navigate(`/designer/${designer._id}`)}
                className="text-sm text-white bg-[#0e3a4c] hover:bg-[#09303f] px-4 py-2 rounded-full font-semibold transition-colors"
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {designers.length > 3 && (
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(prev - 3, 0))}
            disabled={currentIndex === 0}
            className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md text-2xl font-bold transition ${currentIndex === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#04668D] text-white hover:bg-[#03506b]'
              }`}
          >
            ←
          </button>

          <button
            onClick={() => setCurrentIndex(prev => (prev + 3 < designers.length ? prev + 3 : prev))}
            disabled={currentIndex + 3 >= designers.length}
            className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md text-2xl font-bold transition ${currentIndex + 3 >= designers.length
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#04668D] text-white hover:bg-[#03506b]'
              }`}
          >
            →
          </button>
        </div>
      )}


    </div>
  );
}

export default Designers;

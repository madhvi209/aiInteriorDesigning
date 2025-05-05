import React from 'react';
import PropTypes from 'prop-types';

const roomOptions = [
    { label: "Modern", value: "Modern", img: "https://i.ytimg.com/vi/jz2mL0ortEE/maxresdefault.jpg" },
    { label: "Traditional", value: "Traditional", img: "https://tse1.mm.bing.net/th?id=OIP.bNs2xkFILUKVT7nDf-J3JAHaFj&pid=Api&P=0&h=220" },
    { label: "Rustic", value: "Rustic", img: "https://www.stylemotivation.com/wp-content/uploads/2017/07/17-Stunning-Rustic-Living-Room-Interior-Designs-For-Your-Mountain-Cabin-11.jpg" },
    { label: "Industrial", value: "Industrial", img: "https://officebanao.com/wp-content/uploads/2023/09/Office_Cabin_u03.jpg" },
    { label: "Bohemian", value: "Bohemian", img: "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2022-1664872805-f0ijv/dr-1664874135-KTkVv/1-dining-1666175251-10VcP.jpg" },
    { label: "Scandinavian", value: "Scandinavian", img: "https://www.decoraid.com/wp-content/uploads/2018/05/Top-Scandinavian-Design-interior.jpg" },
    { label: "Minimalist", value: "Minimalist", img: "https://roohome.com/wp-content/uploads/2017/05/Ruetemple.jpg" },
];

export default function DesignType({ onSelectDesign, selectedDesign }) {
    return (
        <div>
            <label className="text-slate-400 block mb-4">Select Design Type *</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 cursor-pointer">
                {roomOptions.map((option) => (
                    <div
                        key={option.value}
                        className={`cursor-pointer border rounded-lg overflow-hidden hover:shadow-lg transition ${selectedDesign === option.value ? 'ring-4 ring-blue-500' : ''
                            }`}
                        onClick={() => onSelectDesign(option.value)}
                    >
                        <img
                            src={option.img}
                            alt={option.label}
                            className="w-full h-20 object-cover"
                        />
                        <div className="p-1 text-center font-semibold text-gray-700">
                            {option.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

DesignType.propTypes = {
    onSelectDesign: PropTypes.func.isRequired,
    selectedDesign: PropTypes.string,
};

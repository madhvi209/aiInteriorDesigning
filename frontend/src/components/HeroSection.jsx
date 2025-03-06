import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useSelector } from "react-redux";

function HeroSection() {
    const [query, setQuery] = useState("");
    const images = [
        "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-b0c0d0a/www.decorilla.com/online-decorating/wp-content/uploads/2024/10/living-room-by-top-interior-design-website-Decorilla-2048x1148.jpg",
        "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-b0c0d0a/www.decorilla.com/online-decorating/wp-content/uploads/2024/04/One-of-the-best-interior-design-sites-inspiration-for-a-contemporary-home-and-boho-decor-2048x1148.jpeg",
        "https://images.prismic.io/havenly-cms/Z320k5bqstJ99Jq3_hero-desktop-2884x1374.png?auto=format%2Ccompress&rect=55%2C0%2C2774%2C1374&w=1728&h=856&dpr=2"
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const user = useSelector((state) => state.user?.user); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <header
                className="text-white py-16 text-center bg-cover bg-center transition-all duration-1000 h-[600px] w-full"
                style={{ backgroundImage: `url(${images[currentImage]})` }}
            >
                <div className="py-16 px-4 rounded-lg">
                    <h1 className="text-4xl font-bold text-[#04668D]">
                        Welcome {user?.fullName ? user.fullName : "Guest"}!

                    </h1>
                    <p className="mt-4  text-3xl  text-[#385a5a]">
                        Stunning interior design services, now within reach.
                    </p>
                    <a
                        href="/signup"
                        className="mt-6 inline-block bg-white text-[#04668D] font-bold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
                    >
                        FIND YOUR STYLE
                    </a>
                    <div className="search-bar mt-8 flex flex-wrap justify-center gap-4">
                       
                        <Button className="search-btn bg-[#04668D] text-white px-6 py-3 rounded-lg shadow hover:bg-[#1c353f] transition duration-200">
                            Search
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeroSection;

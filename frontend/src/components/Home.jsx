import React from "react";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import FeatureSection from "./FeatureSection.jsx";
import Footer from "./Footer.jsx";
import Designers from "./DesignerCards.jsx";
import AiRoomDesign from "./AiRoomDesign.jsx";



export const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="my-20">
                <Navbar />
            </div>
            <HeroSection />
            <FeatureSection />
            <Designers/>
            <AiRoomDesign/>
            <Footer />

        </div>

    );
};



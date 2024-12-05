import React, { useState, useEffect } from 'react';
import '../App.css';
import { Instagram } from 'lucide-react'
const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    const handleFollow = () => {
        window.open('https://www.instagram.com/web.craft_studios/profilecard/?igsh=bjZlZW9iNWdieGt5', '_blank');
    };

    const handleClose = () => {
        setIsVisible(false);
        setShowButton(true);
    };

    const handleButtonClick = () => {
        setIsVisible(true);
        setShowButton(false);
    };

    return (
        <>
            {isVisible && (
                <div className="popup z-[1000]">
                    <div className="popup-content flex flex-col items-center">
                        <img src="src\assets\WhatsApp Image 2024-12-03 at 8.01.31 PM.jpeg" alt="Profile" className="profile-pic bg-cover " />
                        <h2>Follow Us on Instagram</h2>
                        <div className='mt-3'>
                            <button onClick={handleFollow}>Follow</button>
                            <button onClick={handleClose}>OK</button>
                        </div>
                    </div>
                </div>
            )}
            {showButton && (
                <button 
                    className="z-[1000] fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full animate-bounce"
                    onClick={handleButtonClick}
                >
                <Instagram/>
                </button>
            )}
        </>
    );
};

export default Popup;

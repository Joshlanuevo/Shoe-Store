"use client"
import { useState, useEffect } from 'react';
import 'animate.css'; // Import animate.css

const AnnouncementBar = () => {
    const announcements: string[] = [
        "30 days return 💰",
        "Free delivery around manila 🚚"
    ];

    const [announcementIndex, setAnnouncementIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [announcementIndex, announcements.length]);

    if (!announcements || announcements.length === 0) {
        return null;
    }

    const capitalizeWords = (sentence: string) => {
        return sentence.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    };

    const capitalizedAnnouncement = capitalizeWords(announcements[announcementIndex]);

    return (
        <div key={announcementIndex} className="bg-[#2a2727] font-semibold p-1 text-center text-white w-screen">
            <p className="text-sm animate__animated animate__fadeIn">
                {capitalizedAnnouncement}
            </p>
        </div>
    );
};

export default AnnouncementBar;
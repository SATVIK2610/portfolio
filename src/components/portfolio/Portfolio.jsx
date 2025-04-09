import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './portfolio.scss'

// Project data with image collections in the new folder structure
const items = [
    {
        id: 1,
        title: "Study Notion",
        images: [
            "/projects/StudyNotion/1.png"
        ],
        desc: "Study Notion offers affordable online courses with recorded lectures, allowing students to learn at their own pace. The platform provides a wide range of subjects, making quality education accessible to everyone.",
        link: "https://my-study-notion.vercel.app/"
    },
    {
        id: 2,
        title: "Chessmate",
        images: [
            "/projects/ChessMate/1.png",
            "/projects/ChessMate/2.png",
            "/projects/ChessMate/3.png"
        ],
        desc: "ChessMate is a real-time chess platform built with React.js and Socket.IO, featuring private multiplayer rooms, AI bot gameplay with three difficulty levels, advanced chess mechanics, an in-game timer, and a move history tracker for strategic analysis.",
        link: ""
    },
    {
        id: 3,
        title: "Shopper",
        images: [
            "/projects/Shopper/1.png",
            "/projects/Shopper/2.png",
            "/projects/Shopper/3.png",
            "/projects/Shopper/4.png",
        ],
        desc: "Shopper is a comprehensive e-commerce platform offering a wide range of fashion products for men, women, and children. Users can browse through various categories, add items to their cart, and make secure purchases.",
        link: "https://fashion-hub-axzw.vercel.app/"
    },
    {
        id: 4,
        title: "StoreIt",
        images: [
            "/projects/storeIt/3.png",
            "/projects/storeIt/1.png",
            "/projects/storeIt/2.png",
        ],
        desc: "StoreIt is a cloud storage platform for uploading, downloading, and sharing media files. It features secure file handling, a responsive UI, and real-time tracking of storage usage for a smooth user experience.",
        link: "https://store-it-six-pi.vercel.app/sign-in"
    }
];

// Component for the image carousel
const ImageCarousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    
    useEffect(() => {
        // Change image every 2 seconds
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        
        return () => clearInterval(interval);
    }, [images.length]);
    
    return (
        <div className="carousel-container">
            {images.map((src, index) => (
                <img 
                    key={index}
                    src={src}
                    alt=""
                    className={index === currentImage ? "active" : ""} 
                />
            ))}
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <div 
                        key={index} 
                        className={`indicator ${index === currentImage ? "active" : ""}`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
        </div>
    );
};

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <ImageCarousel images={item.images} />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.link} target="_blank" rel="noopener noreferrer">See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ 
        target: ref, 
        offset: ["end end", "start start"] 
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>

            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio

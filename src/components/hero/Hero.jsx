import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

// Color animation for the name
const nameVariants = {
    initial: {
        color: "#A66DD4", // Purple color to start
    },
    animate: {
        color: ["#A66DD4", "#44C0F3", "#6BD1BE", "#FFA500", "#A66DD4"], // Cycle through colors
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = ({ contactRef, portfolioRef }) => {
    const nameRef = useRef(null);
    
    useEffect(() => {
        // Apply the CSS animation class after component mounts
        if (nameRef.current) {
            nameRef.current.classList.add('gradient-text');
        }
    }, []);
    
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 
                        ref={nameRef}
                        variants={textVariants}
                        className="name-text"
                    >
                        SATVIK SAINI
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        Web developer and UI designer
                    </motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button
                            onClick={() => scrollToSection(portfolioRef)}
                            variants={textVariants}
                        >
                            See the Latest Works
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToSection(contactRef)}
                            variants={textVariants}
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src="/home/scroll.png"
                        alt=""
                    />
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                MERN Stack Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/home/profile.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;

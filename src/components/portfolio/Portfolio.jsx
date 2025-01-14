import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './portfolio.scss'
import { useRef } from 'react';

const items = [
    {
        id: 1,
        title: "Study Notion",
        img: "./studyNotion.png",
        desc: "Study Notion offers affordable online courses with recorded lectures, allowing students to learn at their own pace. The platform provides a wide range of subjects, making quality education accessible to everyone.",
        link: "https://my-study-notion.vercel.app/"
    },
    {
        id: 2,
        title: "Car Rental",
        img: "./car-rental.png",
        desc: "A user-friendly Car Rental Service website for seamless vehicle booking. It offers a wide range of cars, flexible rental durations, and competitive rates, ensuring a smooth and convenient experience.",
        link: "https://car-rental-eosin-six.vercel.app/"
    },
    {
        id: 3,
        title: "Globe Trekker",
        img: "./globeTrekker.png",
        desc: "GlobeTrekker is a travel assistant app powered by Google Maps and APIs, providing detailed insights on places, restaurants, hotels, and attractions. It features place searches, and filtering for an enhanced experience.",
        link: ""
    },
    {
        id: 4,
        title: "Shopper",
        img: "./shopper.png",
        desc: "Shopper is a comprehensive e-commerce platform offering a wide range of fashion products for men, women, and children. Users can browse through various categories, add items to their cart, and make secure purchases.",
        link: "https://fashion-hub-axzw.vercel.app/"
    }
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.link} target="_blank">See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

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

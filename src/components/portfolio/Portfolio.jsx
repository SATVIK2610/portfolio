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
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga rem aperiam repellendus assumenda quibusdam excepturi! Vel fuga quas inventore consectetur adipisci dolorum ullam dignissimos, repellat molestiae officiis, ut distinctio!",
        link: "https://car-rental-eosin-six.vercel.app/"
    },
    {
        id: 3,
        title: "Globe Trekker",
        img: "./globeTrekker.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga rem aperiam repellendus assumenda quibusdam excepturi! Vel fuga quas inventore consectetur adipisci dolorum ullam dignissimos, repellat molestiae officiis, ut distinctio!",
        link: ""
    },
    {
        id: 4,
        title: "Shopper",
        img: "./shopper.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga rem aperiam repellendus assumenda quibusdam excepturi! Vel fuga quas inventore consectetur adipisci dolorum ullam dignissimos, repellat molestiae officiis, ut distinctio!",
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

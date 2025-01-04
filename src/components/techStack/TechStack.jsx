// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import './techStack.css';

// const skills = [
//     {
//         number: "1",
//         title: "UI/UX Design",
//         subtitle: "Design Systems & Smart Interfaces",
//         color: "#6BD1BE",
//         lightColor: "rgba(107, 209, 190, 0.2)",
//         icon: ['./figma-logo.png']
//     },
//     {
//         number: "2",
//         title: "Frontend",
//         subtitle: "Interactive Experiences & Responsive Layouts",
//         color: "#44C0F3",
//         lightColor: "rgba(68, 192, 243, 0.2)",
//         icon: ["./html-logo.png", './css-logo.png', './tailwind-logo.png', './react-logo.png']
//     },
//     {
//         number: "3",
//         title: "Backend",
//         subtitle: "Content Management Systems & Dynamic Websites",
//         color: "#A66DD4",
//         lightColor: "rgba(166, 109, 212, 0.2)",
//         icon: ["./nodeJs-logo.png", "./js-logo.png", './express-inv-logo.png', './mongo-logo.png']
//     }
// ];

// const textVariants = {
//     initial: {
//         x: -100,
//         opacity: 0
//     },
//     animate: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             duration: 0.8,
//             staggerChildren: 0.1
//         }
//     },
//     scrollButton: {
//         opacity: 0,
//         y: 10,
//         transition: {
//             duration: 2,
//             repeat: Infinity
//         }
//     }
// };

// const SkillItem = ({ number, title, subtitle, color, lightColor, icon }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { triggerOnce: true });

//     return (
//         <motion.div
//             ref={ref}
//             className="skill-item"
//             onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = lightColor; }}
//             onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
//             initial="initial"
//             animate={isInView ? "animate" : "initial"}
//             variants={textVariants}
//         >
//             <motion.div style={{ flex: 1 }} variants={textVariants}>
//                 <motion.h2 style={{ color }} variants={textVariants}>
//                     <span style={{ fontWeight: "bold", fontSize: "50px" }}>{title}</span>
//                 </motion.h2>
//                 <motion.p style={{ color: "#999" }} variants={textVariants}>{subtitle}</motion.p>
//             </motion.div>
//             <motion.div style={{ display: "flex", gap: "20px", marginLeft: "auto" }} variants={textVariants}>
//                 {icon.map((iconPath, index) => (
//                     <motion.img
//                         key={index}
//                         src={iconPath}
//                         alt={`${title} icon ${index + 1}`}
//                         style={{ width: "80px", height: "80px" }}
//                         variants={textVariants}
//                     />
//                 ))}
//             </motion.div>
//         </motion.div>
//     );
// };

// const TechStack = () => (
//     <motion.div className='stack'>
//         {skills.map(skill => (
//             <SkillItem
//                 key={skill.number}
//                 number={skill.number}
//                 title={skill.title}
//                 subtitle={skill.subtitle}
//                 color={skill.color}
//                 lightColor={skill.lightColor}
//                 icon={skill.icon}
//             />
//         ))}
//     </motion.div>
// );

// export default TechStack;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './techStack.css';

const skills = [
    {
        number: "1",
        title: "Frontend",
        subtitle: "Building User-Centric and Responsive Web Experiences",
        color: "#44C0F3",
        lightColor: "rgba(68, 192, 243, 0.2)",
        icon: ["./html-logo.png", './css-logo.png', './tailwind-logo.png', './react-logo.png','./next.png']
    },
    {
        number: "2",
        title: "Backend",
        subtitle: "Powering Scalable Solutions and Robust Data Management",
        color: "#A66DD4",
        lightColor: "rgba(166, 109, 212, 0.2)",
        icon: ["./nodeJs-logo.png", "./js-logo.png", './express-inv-logo.png', './mongo-logo.png','./postgresql.png']
    },
    {
        number: "3",
        title: "Developer Tools",
        subtitle: "Enhancing Productivity and Streamlining Development Workflows",
        color: "#6BD1BE",
        lightColor: "rgba(107, 209, 190, 0.2)",
        icon: ['./figma-logo.png','./gitt.png','postman.png']
    }
];

const textVariants = {
    initial: {
        x: -200,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};

const SkillItem = ({ number, title, subtitle, color, lightColor, icon }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            className="skill-item"
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = lightColor; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={textVariants}
        >
            <motion.div style={{ flex: 1 }} variants={textVariants}>
                <motion.h2 style={{ color }} variants={textVariants}>
                    <span style={{ fontWeight: "bold", fontSize: "50px" }}>{title}</span>
                </motion.h2>
                <motion.p style={{ color: "#999" }} variants={textVariants}>{subtitle}</motion.p>
            </motion.div>
            <motion.div style={{ display: "flex", gap: "20px", marginLeft: "auto" }} variants={textVariants}>
                {icon.map((iconPath, index) => (
                    <motion.img
                        key={index}
                        src={iconPath}
                        alt={`${title} icon ${index + 1}`}
                        style={{ width: "80px", height: "80px" }}
                        variants={textVariants}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

const TechStack = () => (
    <motion.div className='stack'>
        {skills.map(skill => (
            <SkillItem
                key={skill.number}
                number={skill.number}
                title={skill.title}
                subtitle={skill.subtitle}
                color={skill.color}
                lightColor={skill.lightColor}
                icon={skill.icon}
            />
        ))}
    </motion.div>
);

export default TechStack;
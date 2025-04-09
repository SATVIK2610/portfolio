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
        icon: [
            { path: "/tech_stack/html-logo.png", name: "HTML" },
            { path: '/tech_stack/css-logo.png', name: "CSS" },
            { path: '/tech_stack/tailwind-logo.png', name: "Tailwind CSS" },
            { path: '/tech_stack/react-logo.png', name: "React" },
            { path: '/tech_stack/next.png', name: "Next.js" }
        ]
    },
    {
        number: "2",
        title: "Backend",
        subtitle: "Powering Scalable Solutions and Robust Data Management",
        color: "#A66DD4",
        lightColor: "rgba(166, 109, 212, 0.2)",
        icon: [
            { path: "/tech_stack/nodeJs-logo.png", name: "Node.js" },
            { path: "/tech_stack/js-logo.png", name: "JavaScript" },
            { path: '/tech_stack/express-inv-logo.png', name: "Express.js" },
            { path: '/tech_stack/mongo-logo.png', name: "MongoDB" },
            { path: '/tech_stack/postgresql.png', name: "PostgreSQL" }
        ]
    },
    {
        number: "3",
        title: "Developer Tools",
        subtitle: "Enhancing Productivity and Streamlining Development Workflows",
        color: "#6BD1BE",
        lightColor: "rgba(107, 209, 190, 0.2)",
        icon: [
            { path: '/tech_stack/figma-logo.png', name: "Figma" },
            { path: '/tech_stack/gitt.png', name: "Git" },
            { path: '/tech_stack/postman.png', name: "Postman" }
        ]
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
            <motion.div className="skill-content" variants={textVariants}>
                <motion.h2 style={{ color }} variants={textVariants}>
                    {title}
                </motion.h2>
                <motion.p variants={textVariants}>{subtitle}</motion.p>
            </motion.div>
            <motion.div 
                style={{ 
                    display: "flex", 
                    gap: "clamp(0.25rem, 0.8vw, 0.75rem)", 
                    flexWrap: "wrap",
                    justifyContent: "center"
                }} 
                variants={textVariants}
            >
                {icon.map((iconItem, index) => (
                    <motion.div 
                        key={index} 
                        className="tech-icon-container"
                        variants={textVariants}
                    >
                        <motion.img
                            src={iconItem.path}
                            alt={iconItem.name}
                            className="tech-icon"
                        />
                        <div className="tech-tooltip">{iconItem.name}</div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

const TechStack = () => (
    <motion.div className='stack'>
        <h2 className="responsive-title">My Tech Stack</h2>
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
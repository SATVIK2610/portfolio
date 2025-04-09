// import "./navbar.scss"
// import { motion } from "framer-motion"

// import React from 'react'
// import Sidebar from "../sidebar/Sidebar"

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <Sidebar/>
//             <div className="wrapper">
//                 <motion.span
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                 </motion.span>
//                 <div className="social">
//                     <a href="https://www.linkedin.com/in/satvik-saini-5a9515254/" target="_blank" id="linkedin"><img src="/icons8-linkedin-96.png" alt="" /></a>
//                     <a href="https://www.instagram.com/satvik_saini26?igsh=MTVtdHF4aWJiZGgwZA%3D%3D&utm_source=qr" target="_blank" id="insta"><img src="/instagram.png" alt="" /></a>
//                     <a href="https://github.com/SATVIK2610/" id="git"><img src="/git.png" alt="" /></a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import "./navbar.scss";
import { motion } from "framer-motion";
import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    const socialVariants = {
        initial: { opacity: 0, x: 100 }, // Start 100px to the right
        animate: {
            opacity: 1,
            x: 0, // Move to original position
            transition: {
                duration: 0.9, // Animation duration
                ease: "easeOut", // Smoother easing
                delayChildren: 0.2, // Delay for child animations
                staggerChildren: 0.1, // Stagger the animations of icons
            },
        },
    };

    const iconVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    };

    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                </motion.span>
                <motion.div
                    className="social"
                    variants={socialVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.a
                        href="https://www.linkedin.com/in/satvik-saini-5a9515254/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon linkedin"
                        variants={iconVariants}
                    >
                        <img src="/social/icons8-linkedin-96.png" alt="LinkedIn" />
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/satvik_saini26/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon instagram"
                        variants={iconVariants}
                    >
                        <img src="/social/instagram.png" alt="Instagram" />
                    </motion.a>
                    <motion.a
                        href="https://github.com/SATVIK2610/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon github"
                        variants={iconVariants}
                    >
                        <img src="/social/github.png" alt="GitHub" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;
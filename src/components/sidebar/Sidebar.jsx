import "./sidebar.scss"

import React, { useState, useRef, useEffect } from 'react'
import Links from "./links/Links"
import ToggleButton from "./toggleButton/ToggleButton"
import { motion } from "framer-motion"

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    },
    closed: {
        clipPath: "circle(25px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside the sidebar
        const handleClickOutside = (event) => {
            // If sidebar is open and the click is outside sidebar and toggle button
            if (open && 
                sidebarRef.current && 
                !sidebarRef.current.contains(event.target) && 
                toggleButtonRef.current && 
                !toggleButtonRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        // Add event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
        
        // Clean up the event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants} ref={sidebarRef}>
                
                <Links setOpen={setOpen} />
            </motion.div>
            <div ref={toggleButtonRef}>
                <ToggleButton setOpen={setOpen} />
            </div>
        </motion.div>
    )
}

export default Sidebar
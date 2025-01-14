import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { FiExternalLink } from 'react-icons/fi';
import './contact.scss'

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
};

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const isInView = useInView(ref, { magin: "-100px" });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setName("");
        setEmail("");
        setMessage("");

        emailjs
            .sendForm('service_dbnji48', 'template_lnq710q', formRef.current, {
                publicKey: 'A2VMAHA_svxqueuyY',
            })
            .then(
                () => {
                    toast.success('Email sent successfully!');
                },
                () => {
                    toast.error('Failed to send email. Please try again.');
                },
            );
    };

    return (
        <motion.div ref={ref} className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div variants={variants} className="item mail">
                    <h2>Mail</h2>
                    <span>satviksaini2610@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <span>Noida</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone</h2>
                    <span>+91 8076112523</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <button 
                        className="resume"
                        onClick={() => window.open("https://drive.google.com/file/d/1bhAEzmklkhgBgUqc3oaq9jl289X9fWuS/view?usp=sharing", "_blank")}
                    >
                        <FiExternalLink className="icon" />
                        View Resume
                    </button>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 2, duration: 0.5 }}>
                    <svg viewBox="0 0 32.666 32.666" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853"
                            stroke="#FFA500"
                            strokeWidth={0.3}
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                        />
                        <motion.path
                            d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                            stroke="#FFA500"
                            strokeWidth={0.3}
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                        />
                        <motion.path
                            d="M3 6.5C3 14.5081 9.49187 21 17.5 21C18.166 21 18.8216 20.9551 19.4637 20.8682C20.3747 20.7448 21 19.9292 21 19.01V16.4415C21 15.5807 20.4491 14.8164 19.6325 14.5442L16.4841 13.4947C15.6836 13.2279 14.8252 13.699 14.6206 14.5177C14.3475 15.6102 12.987 15.987 12.1907 15.1907L8.80926 11.8093C8.01301 11.013 8.38984 9.65254 9.48229 9.37943C10.301 9.17476 10.7721 8.31644 10.5053 7.51586L9.45585 4.36754C9.18362 3.55086 8.41934 3 7.55848 3H4.99004C4.0708 3 3.25518 3.62533 3.13185 4.53627C3.0449 5.17845 3 5.83398 3 6.5Z"
                            stroke="#FFA500"
                            strokeWidth={0.3}
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1.05 }}
                            transition={{ duration: 3 }}
                        />
                    </svg>

                </motion.div>
                <motion.form ref={formRef} onSubmit={sendEmail}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.5 }}>
                    <input type="text" required placeholder='Name' name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" required placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <textarea rows="8" placeholder='Message' name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button className='submit-btn'>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact

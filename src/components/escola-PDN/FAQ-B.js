// src/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of FAQ items
    const faqData = [
        { question: "What is the driving school about?", answer: "Our driving school provides top-quality training for new drivers." },
        { question: "What types of licenses can I get?", answer: "We offer training for categories A, B, C, D, and E licenses." },
        { question: "How do I sign up for classes?", answer: "You can sign up online or visit our location to register." },
        { question: "What are the school hours?", answer: "Our school is open Monday to Saturday, from 10 AM to 6 PM." },
        { question: "Do you offer refresher courses?", answer: "Yes, we offer refresher courses for those who want to regain confidence on the road." }
    ];

    // Function to handle next question
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % faqData.length);
    };

    // Function to handle previous question
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + faqData.length) % faqData.length);
    };

    return (
        <div className="faq-container">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="carousel">
                <button onClick={handlePrev} className="carousel-button prev-button">Previous</button>
                
                <div className="faq-item">
                    <h2>{faqData[currentIndex].question}</h2>
                    <p>{faqData[currentIndex].answer}</p>
                </div>

                <button onClick={handleNext} className="carousel-button next-button">Next</button>
            </div>
        </div>
    );
};

export default FAQ;

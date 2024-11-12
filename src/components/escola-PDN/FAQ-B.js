import React, { useState } from "react";
import "./FAQ.css"; // Import the CSS file for styling
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active accordion panel

  const faqData = [
    {
      question: "1",
      answer: "dragos is gay",
    },
    {
      question: "2",
      answer: "dragos is gay",
    },
    {
      question: "3",
      answer: "dragos is gay",
    },
    {
      question: "4",
      answer: "dragos is gay",
    },
    {
      question: "5",
      answer: "yes he is gay stop asking if dragos is gay",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active state
  };

  return (
    <div className="wrapper">
      <h1>Frequently Asked Questions</h1>

      {faqData.map((faq, index) => (
        <div key={index} className={`faq ${activeIndex === index ? "active" : ""}`}>
          <button className="accordion" onClick={() => handleToggle(index)}>
            {faq.question}
            <FaChevronDown
              className={`accordion-icon ${activeIndex === index ? "active" : ""}`}
            />
          </button>
          <div className={`pannel ${activeIndex === index ? "active" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

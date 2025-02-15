import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "How do I track my referrals?",
    answer: "You can track your referrals in the 'My Referrals' section of your account dashboard."
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer: "No! You can refer as many people as you like and earn rewards for each successful referral."
  },
  {
    question: "When do I receive my referral rewards?",
    answer: "Rewards are credited once the referred user completes their first successful transaction."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-[#FFF4E0] rounded-lg shadow-md mt-10">
      <div className="flex items-center gap-3 text-[#FF6B6B] mb-6">
        <FaQuestionCircle className="w-8 h-8" />
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      </div>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => handleToggle(index)}
            className={`w-full text-left px-4 py-3 rounded-md font-semibold text-lg transition-all duration-300 ${
              openIndex === index
                ? "bg-[#FF6B6B] text-white"
                : "bg-[#FFD93D] text-[#FF6B6B] hover:bg-[#FF8E8E] hover:text-white"
            }`}
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="bg-white px-4 py-3 text-gray-700 rounded-md shadow-md mt-2 transition-all duration-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;

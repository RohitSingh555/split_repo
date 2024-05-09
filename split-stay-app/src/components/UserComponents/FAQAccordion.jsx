import React, { useState } from "react";

const FAQAccordion = () => {
  const faqsData = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions to reset your password.",
    },
    {
      id: 2,
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer refunds for eligible products within 30 days of purchase. Please review our refund policy for more details.",
    },
    {
      id: 3,
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team by phone at 1-800-123-4567 or by email at support@example.com. Our support team is available 24/7 to assist you.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, including Visa, Mastercard, and American Express. We also accept PayPal and Apple Pay for online transactions.",
    },
    {
      id: 5,
      question: "Can I change my subscription plan?",
      answer:
        "Yes, you can change your subscription plan at any time. Simply log in to your account and navigate to the subscription settings page to make changes.",
    },
  ];

  const [faqs, setFaqs] = useState(faqsData);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (faqId) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === faqId ? null : faqId));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <ul className="space-y-4">
        {faqs.map((faq) => (
          <li key={faq.id} className="mb-4 p-4">
            <input
              type="checkbox"
              id={`faq-${faq.id}`}
              className="hidden"
              checked={activeFaq === faq.id}
              onChange={() => toggleFaq(faq.id)}
            />
            <label
              htmlFor={`faq-${faq.id}`}
              className="flex items-center justify-between gap-2 cursor-pointer p-4 border-b-2 text-xl border-gray-400 rounded-lg bg-white duration-100 "
            >
              {faq.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-6 h-6 inline-block float-right transform transition-transform duration-100 ${
                  activeFaq === faq.id ? "rotate-45" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12h12m-6-6v12"
                />
              </svg>
            </label>
            <div
              className={`transition-max-height duration-200 ease-in-out overflow-hidden max-h-0 ${
                activeFaq === faq.id ? "max-h-screen" : ""
              }`}
            >
              <div className="p-4  border-gray-400 bg-gray-100 text-gray-700">
                {faq.answer}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQAccordion;

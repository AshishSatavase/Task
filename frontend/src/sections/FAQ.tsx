import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-20 px-6 md:px-8 ">
      <div className="max-w-7xl mx-auto text-white">
        {faqs.map((faq, index) => (
          <div key={index} className="py-8">
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => handleItemClick(index)}
            >
              <span className="text-xl md:text-3xl font-light pr-4">{faq.question}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{ maxHeight: openIndex === index ? '1000px' : '0px' }} // Approximate max height for transition
            >
              <div className="pt-2 text-white text-lg md:text-xl font-light pr-4">
                {faq.answer}
              </div>
            </div>
            {index < faqs.length - 1 && <div className="border-t border-gray-700 mt-4" />}
          </div>
        ))}
        {faqs.length > 0 && <div className="border-t border-gray-700 mt-4" />}
      </div>
    </section>
  );
};

export default FAQ; 
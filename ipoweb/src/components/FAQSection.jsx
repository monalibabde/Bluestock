import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How to Subscribe to an IPO?",
      a: (
        <ul className="list-disc pl-5">
          <li>Step 1: Login to your respective service provider.</li>
          <li>Step 2: Click on the IPO button.</li>
          <li>Step 3: Select the IPO you want to bid and enter the relevant details.</li>
          <li>Step 4: Your subscription will be completed once you make the payment or give permission.</li>
        </ul>
      )
    },
    { q: "Should I buy an IPO first day?", a: "Buying on the first day depends on the company fundamentals and market sentiment." },
    { q: "How do you know if an IPO is good?", a: "Check the company’s financials, growth prospects, and expert analysis." },
    { q: "How to check IPO start date?", a: "You can check it on official stock exchange websites or your broker’s IPO section." },
    { q: "What is issue size?", a: "Issue size is the total value of shares offered in the IPO." },
    { q: "How many shares in a lot?", a: "It varies per IPO. The lot size is specified in the IPO details." },
    { q: "How is the lot size calculated?", a: "Lot size is decided based on the IPO price band and minimum investment required." },
    { q: "Who decides the IPO price band?", a: "The company and its book-running lead managers decide the price band." },
    { q: "What is IPO GMP?", a: "GMP (Grey Market Premium) is the premium at which IPO shares trade unofficially before listing." },
    { q: "How many lots should I apply for IPO?", a: "Apply based on your budget and IPO allotment strategy. Applying for 1 lot ensures eligibility." }
  ];

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Frequently Asked Questions?
        </h2>
        <p className="text-gray-600 mb-6">
          Find answers to common questions that come in your mind related to IPO.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-sm">
              <button
                className="flex justify-between items-center w-full px-4 py-4 text-left font-medium text-gray-800"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.q}</span>
                <span className="text-blue-500">
                  {openIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

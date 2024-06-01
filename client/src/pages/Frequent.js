import React, { useState } from 'react';
import NewNav from './NewNav';
import Footer from './Footer';

function Frequent() {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "How do I open an account?",
      answer: "To open an account, visit our nearest branch with a valid ID, proof of address, and a minimum deposit of Ksh 1000. You can also start the process online by filling out our application form on the 'Open Account' page."
    },
    {
      question: "How do I open an account online?",
      answer: "To open an account online, visit the 'Open Account' page, fill out the required information, and submit the form. Our team will review your application and contact you with the next steps."
    },
    {
      question: "What are the current interest rates?",
      answer: "Our current interest rates vary based on the type of account and the balance. For the most up-to-date rates, please visit our Rates page or contact our customer service."
    },
    {
      question: "How can I apply for a loan?",
      answer: "To apply for a loan, you need to provide your personal information, employment details, and financial history. You can apply online or visit any of our branches for assistance."
    },
    {
      question: "How do I reset my online banking password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page, enter your registered email, and follow the instructions sent to your email."
    },
    {
      question: "What fees do you charge for account maintenance?",
      answer: "We offer various account types with different fee structures. For detailed information on fees, please refer to our Fee Schedule page or contact customer service."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support via phone at 1-800-123-4567, email at support@evergreenbank.com, or by visiting any of our branches."
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NewNav />
      {/* Hero Section */}
      <section className="relative mt-4 bg-gray-100 py-16">
        <div className="relative mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 sm:mt-8 text-lg sm:text-xl text-gray-600">
              Here are some of the most common questions we get from our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 text-xl shadow-sm"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* FAQ Items */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border p-6 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow duration-200">
                <h2 className="text-xl font-bold text-blue-600 mb-4">{faq.question}</h2>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Frequent;

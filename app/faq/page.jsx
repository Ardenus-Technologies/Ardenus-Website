'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How does AI automation work?",
      answer: "Our AI automation works by analyzing your current business processes, identifying repetitive tasks, and building intelligent agents that can handle these tasks automatically. These agents can process data, make decisions based on your rules, communicate with other systems, and even learn from patterns to improve over time."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve businesses across all industries, including healthcare, finance, e-commerce, manufacturing, real estate, legal services, and more. Our solutions are customized to fit the specific needs and compliance requirements of each industry."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary based on the complexity of your automation needs. Simple workflows can be set up within a few days, while more complex enterprise solutions may take 2-4 weeks. We'll provide you with a detailed timeline during your initial consultation."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We maintain SOC 2 Type II compliance and implement industry-standard security measures including encryption at rest and in transit, strict access controls, and regular security audits. Your data privacy and security are our top priorities."
    },
    {
      question: "What integrations do you support?",
      answer: "We integrate with hundreds of popular tools including CRMs (Salesforce, HubSpot), communication platforms (Slack, Teams, Email), databases, accounting software, project management tools, and more. If you use a tool we don't currently support, we can often build custom integrations."
    },
    {
      question: "Do I need technical expertise to use your platform?",
      answer: "No technical expertise is required. Our team handles all the technical setup and implementation. We also provide comprehensive training and ongoing support to ensure your team can effectively use and manage your automated workflows."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer multiple tiers of support depending on your plan. All customers receive access to our documentation and email support. Premium and Enterprise plans include priority support with faster response times, dedicated account managers, and 24/7 emergency support."
    },
    {
      question: "How do you price your services?",
      answer: "We offer flexible pricing based on your needs. Our plans range from Starter packages for small businesses to Enterprise solutions for large organizations. Visit our Pricing section or contact us for a custom quote tailored to your specific requirements."
    },
    {
      question: "What's the ROI on AI automation?",
      answer: "Most of our clients see significant ROI within the first 3-6 months. On average, small businesses save 15-30 hours per week on automated tasks, reduce errors by up to 90%, and see cost savings of 40-60% on processes that previously required manual work. Larger businesses can see workforce reductions of 25% on average, saving hundreds of hours."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply click the 'Get Started' button or reach out through our Contact form. We'll schedule a free consultation to understand your needs, demonstrate our capabilities, and create a customized automation plan for your business."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        <h1 
          className="text-4xl md:text-5xl font-medium text-[#1a2332] mb-8"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Frequently Asked Questions
        </h1>

        <p 
          className="text-lg text-gray-600 mb-12 font-light"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Find answers to common questions about Backend Flows and our AI automation services.
        </p>

        <div 
          className="space-y-4"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-[#1a2332] pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 p-8 bg-gray-50 rounded-2xl text-center"
          style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          <h2 className="text-2xl font-medium text-[#1a2332] mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 font-light mb-6">
            You can talk to Flow, our AI assistant at the bottom right, or schedule a call.
          </p>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/#contact'
              }
            }}
            className="inline-block px-8 py-3 bg-[#1a2332] text-white rounded-full font-medium hover:bg-[#2a3342] transition-colors"
          >
            Schedule a Call
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}


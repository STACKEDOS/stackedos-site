'use client'

import { useState } from 'react'

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-dark-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left"
      >
        <h3 className="text-lg font-semibold text-dark-900 pr-4">
          {question}
        </h3>
        <svg
          className={`w-5 h-5 text-dark-400 shrink-0 mt-1 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-dark-500 leading-relaxed max-w-3xl">{answer}</p>
        </div>
      )}
    </div>
  )
}

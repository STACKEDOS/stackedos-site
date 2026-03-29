'use client'

import { useState } from 'react'

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.06)] mb-3 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left cursor-pointer hover:bg-dark-50 transition-colors"
      >
        <h3 className="text-base font-medium text-dark-950 pr-4">
          {question}
        </h3>
        <svg
          className={`w-4 h-4 text-dark-400 shrink-0 mt-1 transition-transform duration-200 ${
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
        <div className="px-6 pb-5 pt-4 border-t border-[rgba(0,0,0,0.06)]">
          <p className="text-[0.9375rem] text-dark-600 leading-relaxed max-w-3xl">{answer}</p>
        </div>
      )}
    </div>
  )
}

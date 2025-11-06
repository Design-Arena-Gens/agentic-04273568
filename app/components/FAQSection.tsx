'use client';

import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'Why is civics education important?',
    answer:
      'Strong civics education equips people to evaluate information, defend democratic values, and participate in decisions that affect their daily lives.'
  },
  {
    question: 'Is civics only about voting?',
    answer:
      'Voting is vital, but civics also includes community organizing, volunteering, public deliberation, and holding institutions accountable.'
  },
  {
    question: 'How can young people practice civics?',
    answer:
      'Students can join youth councils, participate in service-learning projects, engage in school governance, and advocate for issues they care about.'
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="section" aria-labelledby="faq-heading">
      <header className="section__header">
        <span className="section__eyebrow">Questions</span>
        <h2 className="section__title" id="faq-heading">
          Civics FAQ
        </h2>
      </header>
      <div className="faq" role="list">
        {faqs.map((faq, index) => {
          const isActive = index === activeIndex;
          return (
            <article className="faq__item" key={faq.question} role="listitem">
              <button
                className="faq__button"
                type="button"
                aria-expanded={isActive}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <span>{faq.question}</span>
                <span aria-hidden>{isActive ? '−' : '+'}</span>
              </button>
              {isActive ? (
                <div className="faq__answer" id={`faq-panel-${index}`}>
                  {faq.answer}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

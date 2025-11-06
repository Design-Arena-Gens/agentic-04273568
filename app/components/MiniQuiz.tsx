'use client';

import { useMemo, useState } from 'react';

const question = {
  prompt: 'Which action best demonstrates civic engagement?',
  options: [
    {
      label: 'Posting on a personal social media account without fact-checking',
      explanation: 'Sharing unchecked information can spread misinformation and harm public trust.'
    },
    {
      label: 'Meeting with neighbors to plan a community garden and contacting the city for support',
      explanation: 'Collaboration plus engaging local government is a strong example of hands-on civic participation.'
    },
    {
      label: 'Ignoring local news because national politics feels more important',
      explanation: 'Tuning out local issues keeps residents from influencing decisions closest to home.'
    },
    {
      label: 'Waiting for others to vote so you do not have to manage registration',
      explanation: 'Withdrawing from elections erodes representation, especially in local races.'
    }
  ],
  correctIndex: 1
};

export function MiniQuiz() {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const feedback = useMemo(() => {
    if (selected === null) return null;

    const isCorrect = selected === question.correctIndex;
    const selectedOption = question.options[selected];

    return {
      isCorrect,
      text: isCorrect
        ? 'Exactly right! Civic engagement thrives when people collaborate and work with institutions to improve their communities.'
        : selectedOption.explanation
    };
  }, [selected]);

  return (
    <section className="section" id="quiz" aria-labelledby="quiz-heading">
      <header className="section__header">
        <span className="section__eyebrow">Quick Check</span>
        <h2 className="section__title" id="quiz-heading">
          Test Your Civic Sense
        </h2>
      </header>
      <div className="quiz">
        <p>{question.prompt}</p>
        <div className="quiz__options" role="group" aria-label="Quiz options">
          {question.options.map((option, index) => {
            const state = (() => {
              if (!submitted) return selected === index ? 'selected' : undefined;
              if (index === question.correctIndex) return 'correct';
              if (selected === index && index !== question.correctIndex) return 'incorrect';
              return undefined;
            })();

            return (
              <button
                key={option.label}
                className="quiz__option"
                data-state={state}
                type="button"
                onClick={() => {
                  setSelected(index);
                  setSubmitted(false);
                }}
                aria-pressed={selected === index}
              >
                <span>{String.fromCharCode(65 + index)}.</span>
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
        <div className="hero__cta">
          <button
            className="button button--primary"
            type="button"
            onClick={() => selected !== null && setSubmitted(true)}
            disabled={selected === null}
          >
            Check answer
          </button>
          <button
            className="button button--secondary"
            type="button"
            onClick={() => {
              setSelected(null);
              setSubmitted(false);
            }}
          >
            Reset
          </button>
        </div>
        {submitted && feedback ? (
          <p
            className="quiz__feedback"
            role={feedback.isCorrect ? 'status' : 'alert'}
          >
            {feedback.text}
          </p>
        ) : null}
      </div>
    </section>
  );
}

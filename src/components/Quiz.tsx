import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '@/hooks/useProgress';

export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type QuizProps = {
  id: string;
  title?: string;
  questions: QuizQuestion[];
};

export function Quiz({ id, title = 'Knowledge Check', questions }: QuizProps) {
  const { state, recordQuizResult } = useProgress();
  const prior = state.quizzes[id];

  const [answers, setAnswers] = useState<(number | null)[]>(
    prior?.answers ? prior.answers.map((a) => a) : Array(questions.length).fill(null),
  );
  const [revealed, setRevealed] = useState<boolean[]>(
    prior ? Array(questions.length).fill(true) : Array(questions.length).fill(false),
  );

  const handleAnswer = (qIdx: number, oIdx: number) => {
    if (revealed[qIdx]) return;
    const newAnswers = [...answers];
    newAnswers[qIdx] = oIdx;
    const newRevealed = [...revealed];
    newRevealed[qIdx] = true;
    setAnswers(newAnswers);
    setRevealed(newRevealed);

    // If all revealed, record result
    if (newRevealed.every(Boolean)) {
      const correctCount = newAnswers.reduce<number>(
        (acc, ans, i) => (ans === questions[i].correctIndex ? acc + 1 : acc),
        0,
      );
      recordQuizResult(
        id,
        newAnswers.map((a) => a ?? -1),
        correctCount,
        questions.length,
      );
    }
  };

  const allDone = revealed.every(Boolean);
  const correctCount = answers.reduce<number>(
    (acc, ans, i) => (ans === questions[i].correctIndex ? acc + 1 : acc),
    0,
  );

  return (
    <div className="diagram-frame !bg-limestone-dark border-2">
      <div className="flex items-center justify-between mb-4">
        <h4 className="serif text-display-sm text-ink m-0">{title}</h4>
        {allDone && (
          <div className="text-body-sm text-ink">
            <span className="font-bold text-gold">
              {correctCount}/{questions.length}
            </span>{' '}
            correct
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const isRevealed = revealed[qIdx];
          const userAnswer = answers[qIdx];
          return (
            <div key={qIdx} className="border-l-2 border-gold pl-4">
              <p className="font-medium text-ink mb-3">
                <span className="text-gold mr-2">Q{qIdx + 1}.</span>
                {q.question}
              </p>
              <div className="space-y-1.5">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === q.correctIndex;
                  const isSelected = userAnswer === oIdx;
                  let cls = 'quiz-option';
                  if (isRevealed) {
                    if (isCorrect) cls += ' correct';
                    else if (isSelected) cls += ' incorrect';
                  }
                  return (
                    <button
                      key={oIdx}
                      className={cls}
                      onClick={() => handleAnswer(qIdx, oIdx)}
                      disabled={isRevealed}
                    >
                      <span className="font-medium text-gold mr-2">
                        {String.fromCharCode(65 + oIdx)}.
                      </span>
                      {opt}
                      {isRevealed && isCorrect && <span className="ml-2">✓</span>}
                      {isRevealed && isSelected && !isCorrect && <span className="ml-2">✗</span>}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence>
                {isRevealed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 p-3 bg-white border-l-2 border-gold text-body-sm text-ink/85 italic"
                  >
                    {q.explanation}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {allDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 pt-4 border-t border-gold-light/50 text-center"
        >
          <p className="serif text-display-sm text-ink mb-0">
            {correctCount === questions.length
              ? 'Perfect.'
              : correctCount >= questions.length * 0.7
                ? 'Solid grasp of the material.'
                : 'Worth a re-read.'}
          </p>
        </motion.div>
      )}
    </div>
  );
}

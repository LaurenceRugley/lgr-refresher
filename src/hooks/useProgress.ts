import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'lgr-refresher:progress:v1';

export type ProgressState = {
  // section ID → completion (0–1)
  sections: Record<string, number>;
  // quiz ID → { correct, total, answers: number[] }
  quizzes: Record<string, { correct: number; total: number; answers: number[] }>;
  // citation IDs viewed
  citationsViewed: string[];
  lastVisited?: string;
};

const initialState: ProgressState = {
  sections: {},
  quizzes: {},
  citationsViewed: [],
};

function loadState(): ProgressState {
  if (typeof window === 'undefined') return initialState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    return { ...initialState, ...JSON.parse(raw) };
  } catch {
    return initialState;
  }
}

function saveState(state: ProgressState) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or disabled — fail silently
  }
}

let listeners: Array<(s: ProgressState) => void> = [];
let currentState = loadState();

function setState(updater: (s: ProgressState) => ProgressState) {
  currentState = updater(currentState);
  saveState(currentState);
  listeners.forEach((l) => l(currentState));
}

export function useProgress() {
  const [state, setLocalState] = useState(currentState);

  useEffect(() => {
    listeners.push(setLocalState);
    return () => {
      listeners = listeners.filter((l) => l !== setLocalState);
    };
  }, []);

  const markSectionRead = useCallback((sectionId: string, completion: number) => {
    setState((s) => ({
      ...s,
      sections: {
        ...s.sections,
        [sectionId]: Math.max(s.sections[sectionId] || 0, Math.min(1, completion)),
      },
      lastVisited: sectionId,
    }));
  }, []);

  const recordQuizResult = useCallback(
    (quizId: string, answers: number[], correctCount: number, total: number) => {
      setState((s) => ({
        ...s,
        quizzes: {
          ...s.quizzes,
          [quizId]: { correct: correctCount, total, answers },
        },
      }));
    },
    [],
  );

  const recordCitationView = useCallback((id: string) => {
    setState((s) =>
      s.citationsViewed.includes(id)
        ? s
        : { ...s, citationsViewed: [...s.citationsViewed, id] },
    );
  }, []);

  const reset = useCallback(() => {
    setState(() => ({ ...initialState }));
  }, []);

  return { state, markSectionRead, recordQuizResult, recordCitationView, reset };
}

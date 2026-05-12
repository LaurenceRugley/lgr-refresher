import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { ReadingProgress } from '@/components/ReadingProgress';
import { CitationProvider } from '@/components/CitationSystem';
import { Home } from '@/pages/Home';
import { PartOne } from '@/pages/PartOne';
import { PartTwo, Glossary, PrefacePage } from '@/pages/Stubs';
import { ScotusPage } from '@/pages/ScotusPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <BrowserRouter basename="/lgr-refresher">
      <CitationProvider>
        <ScrollToTop />
        <ReadingProgress />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preface" element={<PrefacePage />} />
          <Route path="/part-one" element={<PartOne />} />
          <Route path="/part-two" element={<PartTwo />} />
          <Route path="/scotus" element={<ScotusPage />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
        <footer className="border-t border-gold-light/40 mt-24 py-8 text-center">
          <p className="sans text-xs uppercase tracking-widest text-gold">
            LGR Capital Investments · Pasadena, CA
          </p>
        </footer>
      </CitationProvider>
    </BrowserRouter>
  );
}

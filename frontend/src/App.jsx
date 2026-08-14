import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Sources from './pages/Sources';
import translations from './data/translations';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('en');

  const t = translations[lang];

  function handleNavigate(page) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  function handleLangChange(newLang) {
    setLang(newLang);
  }

  return (
    <>
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onLangChange={handleLangChange}
        t={t}
      />
      {currentPage === 'home' && <Home t={t} />}
      {currentPage === 'about' && <About t={t} />}
      {currentPage === 'sources' && <Sources t={t} />}
    </>
  );
}

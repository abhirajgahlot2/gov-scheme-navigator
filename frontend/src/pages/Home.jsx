import { useState } from 'react';
import SearchBox from '../components/SearchBox';
import LoadingState from '../components/LoadingState';
import SchemeCard from '../components/SchemeCard';
import { mockSearchSchemes as searchSchemes } from '../data/mockData';
// When backend is ready, replace the above import with:
// import { searchSchemes } from '../services/api';
import './Home.css';

const STATE = {
    INPUT: 'input',
    LOADING: 'loading',
    RESULTS: 'results',
    EMPTY: 'empty',
    ERROR: 'error',
};

export default function Home({ t }) {
    const [appState, setAppState] = useState(STATE.INPUT);
    const [schemes, setSchemes] = useState([]);
    const [lastQuery, setLastQuery] = useState('');

    async function handleSearch(query) {
        setLastQuery(query);
        setAppState(STATE.LOADING);
        setSchemes([]);

        try {
            const data = await searchSchemes(query);
            if (data.schemes && data.schemes.length > 0) {
                setSchemes(data.schemes);
                setAppState(STATE.RESULTS);
            } else {
                setAppState(STATE.EMPTY);
            }
        } catch (err) {
            console.error('Search failed:', err);
            setAppState(STATE.ERROR);
        }
    }

    function handleSearchAgain() {
        setAppState(STATE.INPUT);
        setSchemes([]);
    }

    return (
        <main className="home">
            {appState === STATE.INPUT && (
                <section className="home__hero container">
                    <div className="home__hero-text">
                        <h1 className="home__heading">
                            {t.heroHeading1}<br />
                            <span className="home__heading-accent">{t.heroHeading2}</span>
                        </h1>
                        <p className="home__subheading">{t.heroSubheading}</p>
                    </div>
                    <SearchBox onSearch={handleSearch} isLoading={false} t={t} />
                </section>
            )}

            {appState === STATE.LOADING && <LoadingState t={t} />}

            {appState === STATE.RESULTS && (
                <section className="home__results container">
                    <div className="home__results-header">
                        <div>
                            <h2 className="home__results-title">{t.resultsTitle}</h2>
                            <p className="home__results-subtitle">{t.resultsSubtitle}</p>
                        </div>
                        <button className="home__search-again-btn" onClick={handleSearchAgain}>
                            {t.searchAgain}
                        </button>
                    </div>

                    <div className="home__query-echo">
                        <span className="home__query-label">{t.yourQuery}</span>
                        <span className="home__query-text">"{lastQuery}"</span>
                    </div>

                    <div className="home__cards">
                        {schemes.map((scheme, idx) => (
                            <SchemeCard key={scheme.name ?? idx} scheme={scheme} t={t} />
                        ))}
                    </div>

                    <div className="home__results-footer">
                        <button className="home__search-again-btn home__search-again-btn--full" onClick={handleSearchAgain}>
                            {t.searchAnother}
                        </button>
                    </div>
                </section>
            )}

            {appState === STATE.EMPTY && (
                <section className="home__state-screen container">
                    <div className="home__state-icon" aria-hidden="true">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <circle cx="24" cy="24" r="22" stroke="#94a3b8" strokeWidth="2" />
                            <path d="M16 24h16M24 16v16" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h2 className="home__state-title">{t.emptyTitle}</h2>
                    <p className="home__state-body">{t.emptyBody}</p>
                    <button className="home__search-again-btn home__search-again-btn--primary" onClick={handleSearchAgain}>
                        {t.tryAgainP}
                    </button>
                </section>
            )}

            {appState === STATE.ERROR && (
                <section className="home__state-screen container">
                    <div className="home__state-icon" aria-hidden="true">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <circle cx="24" cy="24" r="22" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.6" />
                            <path d="M24 16v12" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="24" cy="33" r="1.5" fill="#ef4444" />
                        </svg>
                    </div>
                    <h2 className="home__state-title">{t.errorTitle}</h2>
                    <p className="home__state-body">{t.errorBody}</p>
                    <button className="home__search-again-btn home__search-again-btn--primary" onClick={handleSearchAgain}>
                        {t.tryAgain}
                    </button>
                </section>
            )}
        </main>
    );
}

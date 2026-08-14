import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({ onSearch, isLoading, t }) {
    const [query, setQuery] = useState('');

    const EXAMPLE_PROMPTS = [
        { label: t.exampleFarmer, text: t.exampleFarmerText },
        { label: t.exampleStudent, text: t.exampleStudentText },
        { label: t.exampleWoman, text: t.exampleWomanText },
        { label: t.exampleSenior, text: t.exampleSeniorText },
    ];

    function handleSubmit(e) {
        e.preventDefault();
        if (query.trim() && !isLoading) {
            onSearch(query.trim());
        }
    }

    function handleExampleClick(text) {
        setQuery(text);
    }

    return (
        <div className="searchbox">
            <form className="searchbox__form" onSubmit={handleSubmit}>
                <label className="visually-hidden" htmlFor="situation-input">
                    Describe your situation
                </label>
                <textarea
                    id="situation-input"
                    className="searchbox__textarea"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    rows={5}
                    disabled={isLoading}
                />
                <p className="searchbox__hint">{t.searchHint}</p>
                <button
                    type="submit"
                    className="searchbox__button"
                    disabled={!query.trim() || isLoading}
                >
                    {isLoading ? t.searchButtonLoading : t.searchButton}
                    {!isLoading && (
                        <svg className="searchbox__button-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
            </form>

            <div className="searchbox__examples">
                <span className="searchbox__examples-label">{t.tryAnExample}</span>
                <div className="searchbox__chips">
                    {EXAMPLE_PROMPTS.map((prompt) => (
                        <button
                            key={prompt.label}
                            type="button"
                            className="searchbox__chip"
                            onClick={() => handleExampleClick(prompt.text)}
                            disabled={isLoading}
                        >
                            {prompt.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

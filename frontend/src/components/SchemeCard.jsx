import { useState } from 'react';
import './SchemeCard.css';

export default function SchemeCard({ scheme, t }) {
    const [expanded, setExpanded] = useState(false);
    const { name, reason, eligibility, benefits, application, source } = scheme;

    return (
        <article className={`scheme-card ${expanded ? 'scheme-card--expanded' : ''}`}>
            <button
                className="scheme-card__header"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                type="button"
            >
                <h2 className="scheme-card__name">{name}</h2>
                <span className={`scheme-card__chevron ${expanded ? 'scheme-card__chevron--open' : ''}`} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>

            {expanded && (
                <div className="scheme-card__body">
                    <Section title={t.sectionEligibility}>
                        {Array.isArray(eligibility) ? (
                            <ul className="scheme-card__list">
                                {eligibility.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{eligibility}</p>
                        )}
                    </Section>

                    <Section title={t.sectionBenefits}>
                        <p>{benefits}</p>
                    </Section>

                    <Section title={t.sectionApplication}>
                        <p>{application}</p>
                    </Section>

                    <div className="scheme-card__footer">
                        <a
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="scheme-card__source-btn"
                        >
                            {t.viewSource}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </article>
    );
}

function Section({ title, children }) {
    return (
        <div className="scheme-card__section">
            <h3 className="scheme-card__section-title">{title}</h3>
            <div className="scheme-card__section-body">{children}</div>
        </div>
    );
}

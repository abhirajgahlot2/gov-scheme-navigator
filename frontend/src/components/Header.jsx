import './Header.css';

export default function Header({ currentPage, onNavigate, lang, onLangChange, t }) {
    return (
        <header className="header">
            <div className="container header__inner">
                <div className="header__brand" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
                    <div className="header__logo" aria-hidden="true">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="6" fill="#1a3a6b" />
                            <path d="M14 5L23 10V18L14 23L5 18V10L14 5Z" stroke="white" strokeWidth="1.5" fill="none" />
                            <circle cx="14" cy="14" r="3" fill="#0d9488" />
                            <circle cx="14" cy="8" r="1.5" fill="white" />
                            <circle cx="20" cy="11.5" r="1.5" fill="white" />
                            <circle cx="20" cy="16.5" r="1.5" fill="white" />
                            <circle cx="14" cy="20" r="1.5" fill="white" />
                            <circle cx="8" cy="16.5" r="1.5" fill="white" />
                            <circle cx="8" cy="11.5" r="1.5" fill="white" />
                        </svg>
                    </div>
                    <span className="header__product-name">{t.productName}</span>
                </div>
                <div className="header__right">
                    <nav className="header__nav">
                        <button
                            className={`header__nav-link ${currentPage === 'home' ? 'header__nav-link--active' : ''}`}
                            onClick={() => onNavigate('home')}
                        >
                            {t.navHome}
                        </button>
                        <button
                            className={`header__nav-link ${currentPage === 'about' ? 'header__nav-link--active' : ''}`}
                            onClick={() => onNavigate('about')}
                        >
                            {t.navAbout}
                        </button>
                        <button
                            className={`header__nav-link ${currentPage === 'sources' ? 'header__nav-link--active' : ''}`}
                            onClick={() => onNavigate('sources')}
                        >
                            {t.navSources}
                        </button>
                    </nav>
                    <div className="header__lang">
                        <button
                            className={`header__lang-btn ${lang === 'en' ? 'header__lang-btn--active' : ''}`}
                            onClick={() => onLangChange('en')}
                        >
                            EN
                        </button>
                        <span className="header__lang-divider">|</span>
                        <button
                            className={`header__lang-btn ${lang === 'hi' ? 'header__lang-btn--active' : ''}`}
                            onClick={() => onLangChange('hi')}
                        >
                            HI
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

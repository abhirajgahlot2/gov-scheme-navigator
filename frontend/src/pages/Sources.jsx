import './Sources.css';

const SOURCES = [
    {
        name: "PM-KISAN",
        description: "Direct income support for small and marginal farmers.",
        url: "https://pmkisan.gov.in",
        department: "Ministry of Agriculture and Farmers Welfare",
    },
    {
        name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        description: "Crop insurance scheme for farmers against crop loss and damage.",
        url: "https://pmfby.gov.in",
        department: "Ministry of Agriculture and Farmers Welfare",
    },
    {
        name: "Pradhan Mantri Awas Yojana (PMAY)",
        description: "Affordable housing for rural and urban areas.",
        url: "https://pmaymis.gov.in",
        department: "Ministry of Housing and Urban Affairs",
    },
    {
        name: "PM Awas Yojana - Gramin (PMAY-G)",
        description: "Housing assistance for rural families.",
        url: "https://pmayg.nic.in",
        department: "Ministry of Rural Development",
    },
    {
        name: "National Scholarship Portal",
        description: "Scholarships for students from various categories.",
        url: "https://scholarships.gov.in",
        department: "Ministry of Electronics and Information Technology",
    },
    {
        name: "PM Mudra Yojana (PMMY)",
        description: "Loans for micro and small enterprises.",
        url: "https://www.mudra.org.in",
        department: "Ministry of Finance",
    },
    {
        name: "Kisan Credit Card (KCC)",
        description: "Short-term credit for farmers at subsidised interest rates.",
        url: "https://www.nabard.org",
        department: "NABARD / Reserve Bank of India",
    },
    {
        name: "Ayushman Bharat (PMJAY)",
        description: "Health insurance for economically vulnerable families.",
        url: "https://pmjay.gov.in",
        department: "Ministry of Health and Family Welfare",
    },
    {
        name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
        description: "Maternity benefit programme for pregnant and lactating women.",
        url: "https://pmmvy.wcd.gov.in",
        department: "Ministry of Women and Child Development",
    },
    {
        name: "MGNREGA",
        description: "Rural employment guarantee scheme providing 100 days of wage employment.",
        url: "https://nrega.nic.in",
        department: "Ministry of Rural Development",
    },
    {
        name: "MyScheme Portal",
        description: "Government of India portal listing all central and state schemes.",
        url: "https://www.myscheme.gov.in",
        department: "Government of India",
    },
];

export default function Sources({ t }) {
    return (
        <main className="sources container">
            <div className="sources__header">
                <h1 className="sources__title">{t.sourcesTitle}</h1>
                <p className="sources__subtitle">{t.sourcesSubtitle}</p>
            </div>

            <div className="sources__list">
                {SOURCES.map((source) => (
                    <div key={source.url} className="sources__item">
                        <div className="sources__item-info">
                            <h2 className="sources__item-name">{source.name}</h2>
                            <p className="sources__item-desc">{source.description}</p>
                            <p className="sources__item-dept">{source.department}</p>
                        </div>
                        <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sources__item-link"
                        >
                            {t.visitWebsite}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}

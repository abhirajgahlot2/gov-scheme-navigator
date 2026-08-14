import './LoadingState.css';

export default function LoadingState({ t }) {
    return (
        <div className="loading" role="status" aria-live="polite">
            <div className="loading__spinner" aria-hidden="true">
                <div className="loading__ring"></div>
                <div className="loading__ring loading__ring--accent"></div>
            </div>
            <p className="loading__text">{t.loadingText}</p>
            <p className="loading__subtext">{t.loadingSubtext}</p>
        </div>
    );
}

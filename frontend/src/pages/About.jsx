import farmerImg from '../img/farmer.jpg';
import studentsImg from '../img/college students.jpg';
import womenImg from '../img/women empowerment.png';
import healthImg from '../img/health care.jpg';
import entrepreneurImg from '../img/entrepreneurship.jpg';
import './About.css';

const WHO_WE_HELP = [
    { img: farmerImg, alt: "Farmers", labelEn: "Farmers", labelHi: "किसान" },
    { img: studentsImg, alt: "Students", labelEn: "Students", labelHi: "छात्र" },
    { img: womenImg, alt: "Women", labelEn: "Women", labelHi: "महिलाएं" },
    { img: healthImg, alt: "Healthcare seekers", labelEn: "Healthcare", labelHi: "स्वास्थ्य" },
    { img: entrepreneurImg, alt: "Entrepreneurs", labelEn: "Entrepreneurs", labelHi: "उद्यमी" },
];

export default function About({ t }) {
    const isHindi = t.aboutTitle === "हमारे बारे में";

    return (
        <main className="about container">
            <div className="about__header">
                <h1 className="about__title">{t.aboutTitle}</h1>
                <p className="about__subtitle">{t.aboutSubtitle}</p>
            </div>

            <section className="about__section">
                <h2 className="about__section-title">{t.aboutMissionTitle}</h2>
                <p className="about__text">{t.aboutMission1}</p>
                <p className="about__text">{t.aboutMission2}</p>
            </section>

            <section className="about__section">
                <h2 className="about__section-title">{t.aboutHowTitle}</h2>
                <div className="about__steps">
                    <div className="about__step">
                        <div className="about__step-number">1</div>
                        <div>
                            <h3 className="about__step-title">{t.aboutStep1Title}</h3>
                            <p className="about__step-text">{t.aboutStep1Text}</p>
                        </div>
                    </div>
                    <div className="about__step">
                        <div className="about__step-number">2</div>
                        <div>
                            <h3 className="about__step-title">{t.aboutStep2Title}</h3>
                            <p className="about__step-text">{t.aboutStep2Text}</p>
                        </div>
                    </div>
                    <div className="about__step">
                        <div className="about__step-number">3</div>
                        <div>
                            <h3 className="about__step-title">{t.aboutStep3Title}</h3>
                            <p className="about__step-text">{t.aboutStep3Text}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about__section">
                <h2 className="about__section-title">{t.aboutWhoTitle}</h2>
                <div className="about__gallery">
                    {WHO_WE_HELP.map((item) => (
                        <div className="about__gallery-card" key={item.alt}>
                            <img
                                className="about__gallery-img"
                                src={item.img}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <span className="about__gallery-label">
                                {isHindi ? item.labelHi : item.labelEn}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about__section">
                <h2 className="about__section-title">{t.aboutTeamTitle}</h2>
                <p className="about__text">{t.aboutTeamText}</p>
            </section>

            <section className="about__section about__disclaimer">
                <h2 className="about__section-title">{t.aboutDisclaimerTitle}</h2>
                <p className="about__text">{t.aboutDisclaimerText}</p>
            </section>
        </main>
    );
}

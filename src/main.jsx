import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  FaTimes, FaDownload, FaCode, FaBriefcase, FaGraduationCap, FaUsers, FaHeart,
  FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaRocket, FaVolumeUp,
  FaWheelchair, FaHandPaper, FaBraille, FaAdjust, FaUniversalAccess
} from "react-icons/fa";
import "./styles.css";

const contacts = {
  phoneDisplay: "06 06 69 63 07",
  phone: "0606696307",
  email: "kcharni@gmail.com",
  linkedin: "https://fr.linkedin.com/in/khouloud-charni-137090404",
  github: "https://github.com/Khouloud-CHARNI",
  whatsapp: "https://wa.me/33606696307",
};

const getLang = () => new URLSearchParams(window.location.search).get("lang") || "fr";

const T = {
  fr: {
    dir: "ltr",
    nav: ["Accueil", "À propos", "Compétences", "Parcours", "Bénévolat", "Actualités 2026", "Contact", "Documents"],
    cv: "Télécharger CV",
    thoughtTitle: "Ma pensée du jour :",
    thought: ["Je suis fière d'être autodidacte !", "Et vous ?", "Quelle est votre fierté du moment ?"],
    poly: "Polyglotte :",
    inclusion: "Chaque personne mérite un accès égal au savoir et à la technologie. Construisons ensemble un avenir inclusif.",
    access: "Accessibilité",
    aboutTitle: "À propos de moi",
    aboutText: ["AESH actuellement, je suis en reconversion professionnelle vers le développement web et web mobile.","Curieuse, rigoureuse et déterminée, mon objectif est de transformer ma passion pour le numérique en un métier porteur de sens et d'innovation.","Je suis admise à 2i Academy à Lyon pour un titre RNCP 5 Développeuse Web et Web Mobile, et je recherche une alternance d'une durée d'un an à partir de septembre."],
    skillsTitle: "Compétences",
    skillsLevel: "Niveau : Débutante – en apprentissage continu",
    skillsIntro: "Je suis novice, en reconversion professionnelle, mais je sais utiliser et pratiquer :",
    techs: ["HTML5", "CSS3", "JavaScript", "Node.js", "Python", "API", "React (en cours d'apprentissage)"],
    journeyTitle: "Parcours",
    aeshTitle: "AESH – Accompagnante d'élèves en situation de handicap",
    aeshText: "Le métier d'AESH consiste à accompagner les élèves en situation de handicap dans leur autonomie, leur apprentissage, leur confiance et leur inclusion à l'école.",
    volunteerTitle: "Bénévolat",
    newsTitle: "Coupe du Monde 2026 – Pronostic",
    voteQuestion: "Quel pays va gagner ?",
    voteBtn: "Voter",
    resultsBtn: "Voir les résultats",
    contactTitle: "Me contacter",
    docsTitle: "Documents & Projets",
    downloadCv: "Télécharger mon CV",
    downloadLetter: "Télécharger ma lettre de motivation",
    projectSoon: "Projets à venir",
    speak: "Bienvenue sur le portfolio de Khouloud CHARNI. Je suis AESH et en reconversion vers le développement web et mobile.",
    countries: ["France", "Brésil", "Argentine", "Allemagne", "Portugal", "Angleterre", "Espagne", "Autre"]
  },
  en: {
    dir: "ltr",
    nav: ["Home", "About", "Skills", "Journey", "Volunteering", "2026 News", "Contact", "Documents"],
    cv: "Download CV",
    thoughtTitle: "Thought of the day:",
    thought: ["I am proud to be self-taught!", "And you?", "What are you proud of right now?"],
    poly: "Polyglot:",
    inclusion: "Everyone deserves equal access to knowledge and technology. Let us build a more inclusive future together.",
    access: "Accessibility",
    aboutTitle: "About me",
    aboutText: ["I currently work as an AESH, supporting pupils with disabilities, and I am changing careers toward web and mobile development.","Curious, rigorous and determined, my goal is to turn my passion for digital technology into a meaningful and innovative career.","I have been admitted to 2i Academy in Lyon for an RNCP Level 5 Web and Mobile Developer program, and I am looking for a one-year work-study position starting in September."],
    skillsTitle: "Skills",
    skillsLevel: "Level: Beginner – continuously learning",
    skillsIntro: "I am a beginner, currently changing careers, but I can use and practice:",
    techs: ["HTML5", "CSS3", "JavaScript", "Node.js", "Python", "API", "React (currently learning)"],
    journeyTitle: "Journey",
    aeshTitle: "AESH – School support assistant for pupils with disabilities",
    aeshText: "The AESH role consists of supporting pupils with disabilities in their autonomy, learning, confidence and inclusion at school.",
    volunteerTitle: "Volunteering",
    newsTitle: "World Cup 2026 – Prediction",
    voteQuestion: "Which country will win?",
    voteBtn: "Vote",
    resultsBtn: "See results",
    contactTitle: "Contact me",
    docsTitle: "Documents & Projects",
    downloadCv: "Download my CV",
    downloadLetter: "Download my cover letter",
    projectSoon: "Projects coming soon",
    speak: "Welcome to Khouloud CHARNI's portfolio. I work as an AESH and I am changing careers toward web and mobile development.",
    countries: ["France", "Brazil", "Argentina", "Germany", "Portugal", "England", "Spain", "Other"]
  },
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "من أنا", "المهارات", "المسار", "التطوع", "أخبار 2026", "التواصل", "الوثائق"],
    cv: "تحميل السيرة الذاتية",
    thoughtTitle: "فكرة اليوم:",
    thought: ["أنا فخورة بكوني تعلمت بنفسي!", "وأنتم؟", "ما هو الشيء الذي تفتخرون به الآن؟"],
    poly: "متعددة اللغات:",
    inclusion: "كل شخص يستحق وصولاً متساوياً إلى المعرفة والتكنولوجيا. لنبنِ معاً مستقبلاً أكثر شمولاً.",
    access: "إمكانية الوصول",
    aboutTitle: "من أنا",
    aboutText: ["أعمل حالياً كمرافقة مدرسية للتلاميذ في وضعية إعاقة، وأنا في مرحلة إعادة توجيه مهني نحو تطوير الويب وتطبيقات الهاتف.","أنا فضولية، دقيقة ومصممة، وهدفي أن أحوّل شغفي بالتقنية الرقمية إلى مهنة ذات معنى وابتكار.","تم قبولي في أكاديمية 2i في ليون للحصول على شهادة RNCP مستوى 5 كمطورة ويب وموبايل، وأبحث عن تدريب مهني لمدة سنة ابتداءً من سبتمبر."],
    skillsTitle: "المهارات",
    skillsLevel: "المستوى: مبتدئة – في تعلم مستمر",
    skillsIntro: "أنا مبتدئة وفي إعادة توجيه مهني، لكنني أعرف استخدام وممارسة:",
    techs: ["HTML5", "CSS3", "JavaScript", "Node.js", "Python", "API", "React (قيد التعلم)"],
    journeyTitle: "المسار",
    aeshTitle: "مرافقة مدرسية للتلاميذ في وضعية إعاقة",
    aeshText: "دور AESH هو مرافقة التلاميذ في وضعية إعاقة من أجل تعزيز استقلاليتهم وثقتهم وتعلمهم واندماجهم داخل المدرسة.",
    volunteerTitle: "التطوع",
    newsTitle: "كأس العالم 2026 – التوقعات",
    voteQuestion: "أي بلد سيفوز؟",
    voteBtn: "تصويت",
    resultsBtn: "عرض النتائج",
    contactTitle: "تواصلوا معي",
    docsTitle: "الوثائق والمشاريع",
    downloadCv: "تحميل السيرة الذاتية",
    downloadLetter: "تحميل رسالة التحفيز",
    projectSoon: "مشاريع قادمة",
    speak: "مرحباً بكم في بورتفوليو خلود الشرني. أعمل كمرافقة مدرسية وأنا في إعادة توجيه نحو تطوير الويب والموبايل.",
    countries: ["فرنسا", "البرازيل", "الأرجنتين", "ألمانيا", "البرتغال", "إنجلترا", "إسبانيا", "أخرى"]
  }
};

function App() {
  const lang = ["fr", "en", "ar"].includes(getLang()) ? getLang() : "fr";
  const t = T[lang];
  const [slide, setSlide] = useState(null);
  const [accessOpen, setAccessOpen] = useState(false);
  const [vote, setVote] = useState("");
  const [showResults, setShowResults] = useState(false);
  const braille = useMemo(() => "⠏⠕⠗⠞⠋⠕⠇⠊⠕ ⠁⠉⠉⠑⠎⠎⠊⠃⠇⠑", []);

  const openLang = (target) => window.open(`${window.location.origin}${window.location.pathname}?lang=${target}`, "_blank", "noopener,noreferrer");

  function speak(text = t.speak) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "ar" ? "ar-SA" : lang === "en" ? "en-GB" : "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  return (
    <div className="site" dir={t.dir}>
      <header className="navBar">
        <button className="logoBtn" onClick={() => setSlide(null)}>
          <img src="/assets/logo-eikyuu.png" alt="Eikyûu" />
        </button>
        <nav>
          {t.nav.map((label, i) => (
            <button key={label} onClick={() => i === 0 ? setSlide(null) : setSlide(["about","skills","journey","volunteer","news","contact","docs"][i-1])}>
              {label}
            </button>
          ))}
        </nav>
        <a className="cvBtn" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download>
          <FaDownload /> {t.cv}
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="thoughtTitle">{t.thoughtTitle}</div>
          <div className="thoughtBubble">
            {t.thought.map((line) => <p key={line}>{line}</p>)}
            <b>♡</b>
          </div>

          <button className="accessFloating" onClick={() => setAccessOpen(!accessOpen)} aria-label={t.access}>
            <FaWheelchair />
          </button>

          {accessOpen && (
            <section className="accessPanel">
              <h2>{t.access}</h2>
              <button onClick={() => speak()}><FaVolumeUp /> Sonore</button>
              <a href="https://dico.elix-lsf.fr/" target="_blank" rel="noreferrer"><FaHandPaper /> LSF</a>
              <button><FaBraille /> Braille <small>{braille}</small></button>
              <button onClick={() => document.body.classList.toggle("contrast")}><FaAdjust /> Contrastes élevés</button>
              <button onClick={() => document.documentElement.classList.toggle("largeText")}><FaUniversalAccess /> Texte +</button>
            </section>
          )}
        </section>

        <section className="poly">
          <strong>{t.poly}</strong>
          <button onClick={() => openLang("fr")}>🇫🇷 Français</button>
          <button onClick={() => openLang("en")}>🇬🇧 English</button>
          <button onClick={() => openLang("ar")}>🇸🇦 العربية</button>
        </section>

        <section className="inclusion">{t.inclusion}</section>
      </main>

      {slide && (
        <div className="overlay">
          <aside className="slide">
            <button className="close" onClick={() => setSlide(null)}><FaTimes /></button>
            <button className="readSlide" onClick={() => speak(document.querySelector(".slideContent")?.innerText || t.speak)}>
              <FaVolumeUp /> Audio
            </button>
            <div className="slideContent">
              <Slide name={slide} t={t} vote={vote} setVote={setVote} showResults={showResults} setShowResults={setShowResults} />
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function Slide({ name, t, vote, setVote, showResults, setShowResults }) {
  if (name === "about") return (
    <>
      <h1>{t.aboutTitle}</h1>
      <img className="photo" src="/assets/photo-khouloud-originale.jpg" alt="Khouloud CHARNI" />
      {t.aboutText.map((p) => <p key={p}>{p}</p>)}
      <ul>
        <li>AESH depuis septembre 2024</li>
        <li>Bac Littéraire</li>
        <li>Bac Pro ARCU</li>
        <li>2i Academy Lyon – RNCP 5</li>
      </ul>
    </>
  );
  if (name === "skills") return <><h1>{t.skillsTitle}</h1><h3>{t.skillsLevel}</h3><p>{t.skillsIntro}</p><div className="grid">{t.techs.map((x) => <div className="item" key={x}><FaCode /> {x}</div>)}</div></>;
  if (name === "journey") return <><h1>{t.journeyTitle}</h1><div className="aesh">👩‍🏫 👦 📘</div><p><FaBriefcase /> <b>{t.aeshTitle}</b></p><p>{t.aeshText}</p><p><FaGraduationCap /> Depuis septembre 2024</p><p><FaGraduationCap /> Formation à venir – 2i Academy Lyon</p><p><FaGraduationCap /> RNCP 5 Développeuse Web et Web Mobile</p><p><FaGraduationCap /> Bac Pro ARCU</p><p><FaGraduationCap /> Bac Littéraire</p></>;
  if (name === "volunteer") return <><h1>{t.volunteerTitle}</h1><div className="item"><FaUsers /> <p><b>Bénévole avec Ensemble pour un Repas</b><br />Aide à la préparation et à la distribution de repas pour les personnes dans le besoin.</p></div><div className="item"><FaHeart /> <p><b>Donatrice pour Ummanitaire Concept</b><br />Participation à des collectes et dons pour aider les populations en difficulté.</p></div></>;
  if (name === "news") {
    const results = [["France","32%"],["Brésil","20%"],["Argentine","15%"],["Allemagne","12%"],["Portugal","8%"],["Espagne","7%"],["Autre","6%"]];
    return <><h1>{t.newsTitle}</h1><p>{t.voteQuestion}</p>{t.countries.map((c) => <label className="vote" key={c}><input type="radio" name="vote" checked={vote === c} onChange={() => setVote(c)} /> {c}</label>)}<button className="mainBtn" onClick={() => alert(vote ? `${t.voteBtn} : ${vote}` : "Choisis une équipe.")}>{t.voteBtn}</button><button className="ghostBtn" onClick={() => setShowResults(true)}>{t.resultsBtn}</button>{showResults && <div className="results">{results.map(([a,b]) => <p key={a}><span>{a}</span><b>{b}</b></p>)}</div>}</>;
  }
  if (name === "contact") return <><h1>{t.contactTitle}</h1><a className="line" href={contacts.whatsapp}><FaWhatsapp /> WhatsApp</a><a className="line" href={`tel:+33${contacts.phone.slice(1)}`}><FaPhone /> {contacts.phoneDisplay}</a><a className="line" href={`mailto:${contacts.email}`}><FaEnvelope /> {contacts.email}</a><a className="line" href={contacts.linkedin}><FaLinkedin /> LinkedIn</a><a className="line" href={contacts.github}><FaGithub /> GitHub</a></>;
  return <><h1>{t.docsTitle}</h1><a className="line" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> {t.downloadCv}</a><a className="line" href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download><FaDownload /> {t.downloadLetter}</a><div className="coming"><FaRocket /><h2>{t.projectSoon}</h2></div></>;
}

createRoot(document.getElementById("root")).render(<App />);

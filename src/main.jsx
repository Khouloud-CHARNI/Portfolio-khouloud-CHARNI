import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  FaTimes, FaDownload, FaCode, FaBriefcase, FaGraduationCap, FaUsers, FaHeart,
  FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaRocket, FaVolumeUp,
  FaWheelchair, FaHandPaper, FaBraille, FaAdjust, FaUniversalAccess, FaStar,
  FaFolderOpen, FaGlobe, FaLanguage, FaHeadphones, FaEye, FaTextHeight
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
const getPage = () => window.location.pathname.replace("/", "") || "pro";

const T = {
  fr: {
    dir: "ltr",
    nav: ["Accueil", "À propos", "Compétences", "Parcours", "Bénévolat", "Actualités 2026", "Contact", "Documents"],
    cv: "Télécharger CV",
    thoughtTitle: "Ma pensée du jour :",
    thought: ["Je gère comme je peux cette canicule cette semaine et vous ?"],
    poly: "Polyglotte :",
    notions: "Notions : Allemand, Coréen, Japonais et Mandarin",
    inclusion: "Chaque personne mérite un accès égal au savoir et à la technologie. Construisons ensemble un avenir inclusif.",
    access: "Accessibilité",
    starText: "Cliquez et découvrez-moi autrement",
    proTitleSmall: "Développeuse Web & Mobile en reconversion",
    proTitle: "Construisons ensemble un numérique accessible et inclusif.",
    proIntro: "Passionnée par le code, la créativité et l’humain, je conçois des expériences digitales utiles, performantes et accessibles à tous.",
    proLearn: "En savoir plus sur moi",
    proProjects: "Voir mes projets",
    proCards: [
      ["Recherche d’alternance", "En reconversion vers le développement web et mobile, je recherche une alternance pour mettre mes compétences au service de vos projets."],
      ["Parcours & expérience", "AESH, relation client, gestion administrative, missions associatives et bénévolat."],
      ["Compétences techniques", "HTML5, CSS3, JavaScript, React, UI/UX, accessibilité, SEO…"],
      ["Mes projets", "Des projets pour allier créativité, performance et accessibilité."],
      ["Document", "Téléchargez mon CV et découvrez mon profil complet."]
    ],
    screenTitle: "ACCESSIBILITÉ",
    screenText: "Concevoir pour inclure, développer pour tous.",
    aboutTitle: "À propos de moi",
    aboutText: [
      "AESH actuellement, je suis en reconversion professionnelle vers le développement web et web mobile.",
      "Curieuse, rigoureuse et déterminée, mon objectif est de transformer ma passion pour le numérique en un métier porteur de sens et d'innovation.",
      "Je suis admise à 2i Academy à Lyon pour un titre RNCP 5 Développeuse Web et Web Mobile, et je recherche une alternance d'une durée d'un an."
    ],
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
    speak: "Bienvenue sur le portfolio de Khouloud CHARNI. Je suis AESH et en reconversion vers le développement web et mobile. Mon objectif est un numérique accessible et inclusif.",
    countries: ["France", "Brésil", "Argentine", "Allemagne", "Portugal", "Angleterre", "Espagne", "Autre"],
    accessItems: ["Lecture audio", "Contrastes élevés", "Taille du texte", "LSF", "Braille"]
  },
  en: {
    dir: "ltr",
    nav: ["Home", "About", "Skills", "Journey", "Volunteering", "2026 News", "Contact", "Documents"],
    cv: "Download CV",
    thoughtTitle: "Thought of the day:",
    thought: ["I’m managing this heatwave as best I can this week — how about you?"],
    poly: "Polyglot:",
    notions: "Notions: German, Korean, Japanese and Mandarin",
    inclusion: "Everyone deserves equal access to knowledge and technology. Let us build an inclusive future together.",
    access: "Accessibility",
    starText: "Click and discover me differently",
    proTitleSmall: "Web & Mobile Developer in career transition",
    proTitle: "Let’s build accessible and inclusive digital experiences together.",
    proIntro: "Passionate about code, creativity and people, I design useful, high-performing and accessible digital experiences for everyone.",
    proLearn: "Learn more about me",
    proProjects: "See my projects",
    proCards: [
      ["Work-study search", "I am changing careers toward web and mobile development and looking for a work-study position to serve your projects."],
      ["Journey & experience", "AESH, customer relations, administrative management, associative missions and volunteering."],
      ["Technical skills", "HTML5, CSS3, JavaScript, React, UI/UX, accessibility, SEO…"],
      ["My projects", "Projects combining creativity, performance and accessibility."],
      ["Document", "Download my CV and discover my full profile."]
    ],
    screenTitle: "ACCESSIBILITY",
    screenText: "Design to include, develop for everyone.",
    aboutTitle: "About me",
    aboutText: [
      "I currently work as an AESH, supporting pupils with disabilities, and I am changing careers toward web and mobile development.",
      "Curious, rigorous and determined, my goal is to turn my passion for digital technology into a meaningful and innovative career.",
      "I have been admitted to 2i Academy in Lyon for an RNCP Level 5 Web and Mobile Developer program, and I am looking for a one-year work-study position."
    ],
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
    speak: "Welcome to Khouloud CHARNI's portfolio. I work as an AESH and I am changing careers toward web and mobile development. My goal is accessible and inclusive digital technology.",
    countries: ["France", "Brazil", "Argentina", "Germany", "Portugal", "England", "Spain", "Other"],
    accessItems: ["Audio reading", "High contrast", "Text size", "French Sign Language", "Braille"]
  },
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "من أنا", "المهارات", "المسار", "التطوع", "أخبار 2026", "التواصل", "الوثائق"],
    cv: "تحميل السيرة الذاتية",
    thoughtTitle: "فكرة اليوم:",
    thought: ["أتعامل مع موجة الحر هذا الأسبوع قدر استطاعتي، وأنتم؟"],
    poly: "متعددة اللغات:",
    notions: "معلومات أولية: الألمانية، الكورية، اليابانية، والماندرين",
    inclusion: "كل شخص يستحق وصولاً متساوياً إلى المعرفة والتكنولوجيا. لنبنِ معاً مستقبلاً أكثر شمولاً.",
    access: "إمكانية الوصول",
    starText: "اضغطوا واكتشفوني بطريقة مختلفة",
    proTitleSmall: "مطورة ويب وموبايل في إعادة توجيه مهني",
    proTitle: "لنبنِ معاً عالماً رقمياً متاحاً وشاملاً.",
    proIntro: "شغوفة بالبرمجة والإبداع والإنسان، أصمم تجارب رقمية مفيدة وفعالة ومتاحة للجميع.",
    proLearn: "اعرفوا المزيد عني",
    proProjects: "مشاريعي",
    proCards: [
      ["البحث عن alternance", "أنا في إعادة توجيه مهني نحو تطوير الويب والموبايل وأبحث عن alternance لخدمة مشاريعكم."],
      ["المسار والخبرة", "AESH، علاقة العملاء، الإدارة، المهام الجمعوية والتطوع."],
      ["المهارات التقنية", "HTML5, CSS3, JavaScript, React, UI/UX, accessibilité, SEO…"],
      ["مشاريعي", "مشاريع تجمع بين الإبداع والأداء وإمكانية الوصول."],
      ["الوثائق", "حمّلوا سيرتي الذاتية واكتشفوا ملفي الكامل."]
    ],
    screenTitle: "إمكانية الوصول",
    screenText: "نصمم لنشمل، ونطور للجميع.",
    aboutTitle: "من أنا",
    aboutText: [
      "أعمل حالياً كمرافقة مدرسية للتلاميذ في وضعية إعاقة، وأنا في مرحلة إعادة توجيه مهني نحو تطوير الويب وتطبيقات الهاتف.",
      "أنا فضولية، دقيقة ومصممة، وهدفي أن أحوّل شغفي بالتقنية الرقمية إلى مهنة ذات معنى وابتكار.",
      "تم قبولي في أكاديمية 2i في ليون للحصول على شهادة RNCP مستوى 5 كمطورة ويب وموبايل، وأبحث عن تدريب مهني لمدة سنة."
    ],
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
    speak: "مرحباً بكم في بورتفوليو خلود الشرني. أعمل كمرافقة مدرسية وأنا في إعادة توجيه نحو تطوير الويب والموبايل. هدفي هو رقمية متاحة وشاملة.",
    countries: ["فرنسا", "البرازيل", "الأرجنتين", "ألمانيا", "البرتغال", "إنجلترا", "إسبانيا", "أخرى"],
    accessItems: ["قراءة صوتية", "تباين عالٍ", "تكبير النص", "لغة الإشارة الفرنسية", "برايل"]
  }
};

function App() {
  const lang = ["fr", "en", "ar"].includes(getLang()) ? getLang() : "fr";
  const page = getPage();
  const t = T[lang];

  return page === "perso" ? <PersonalPortfolio t={t} lang={lang} /> : <ProfessionalPortfolio t={t} lang={lang} />;
}

function LanguageLine({ t, currentPath }) {
  const openLang = (target) => {
    window.location.href = `${currentPath}?lang=${target}`;
  };
  return (
    <section className="poly">
      <strong>{t.poly}</strong>
      <button onClick={() => openLang("fr")}>🇫🇷 Français</button>
      <button onClick={() => openLang("en")}>🇬🇧 English</button>
      <button onClick={() => openLang("ar")}>🇸🇦 العربية</button>
      <span className="notions">{t.notions}</span>
    </section>
  );
}

function AccessibilityPanel({ t, lang, floating = true, compact = false }) {
  const [open, setOpen] = useState(false);
  const braille = useMemo(() => "⠏⠕⠗⠞⠋⠕⠇⠊⠕ ⠁⠉⠉⠑⠎⠎⠊⠃⠇⠑", []);

  function speak(text = t.speak) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "ar" ? "ar-SA" : lang === "en" ? "en-GB" : "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  return (
    <div className={floating ? "accessWrap floating" : "accessWrap"}>
      <button className={compact ? "accessRound compact" : "accessRound"} onClick={() => setOpen(!open)} aria-label={t.access}>
        <FaWheelchair />
      </button>

      {open && (
        <section className="accessPanel">
          <h2>{t.access}</h2>
          <button onClick={() => speak()}><FaVolumeUp /> {t.accessItems[0]}</button>
          <button onClick={() => document.body.classList.toggle("contrast")}><FaAdjust /> {t.accessItems[1]}</button>
          <button onClick={() => document.documentElement.classList.toggle("largeText")}><FaUniversalAccess /> {t.accessItems[2]}</button>
          <a href="https://dico.elix-lsf.fr/" target="_blank" rel="noreferrer"><FaHandPaper /> {t.accessItems[3]}</a>
          <button><FaBraille /> {t.accessItems[4]} <small>{braille}</small></button>
        </section>
      )}
    </div>
  );
}

function StarPortal({ to, text, variant = "pro" }) {
  const go = () => { window.location.href = to; };
  return (
    <button className={`starPortal ${variant}`} onClick={go} aria-label={text}>
      <FaStar />
      <span>{text}</span>
    </button>
  );
}

function ProfessionalPortfolio({ t, lang }) {
  const [slide, setSlide] = useState(null);
  const currentPath = "/";
  const starTarget = `/perso?lang=${lang}`;

  return (
    <div className="proSite" dir={t.dir}>
      <header className="proNav">
        <button className="proBrand" onClick={() => setSlide(null)}>
          <img src="/assets/logo-eikyuu.png" alt="Eikyûu" />
          <span><b>Khouloud CHARNI</b><small>Développeuse Web & Mobile</small></span>
        </button>
        <nav>
          {t.nav.map((label, i) => (
            <button key={label} onClick={() => i === 0 ? setSlide(null) : setSlide(["about","skills","journey","volunteer","news","contact","docs"][i-1])}>
              {label}
            </button>
          ))}
        </nav>
        <AccessibilityPanel t={t} lang={lang} floating={false} compact />
        <select className="langSelect" value={lang} onChange={(e) => window.location.href = `/?lang=${e.target.value}`}>
          <option value="fr">FR</option><option value="en">EN</option><option value="ar">AR</option>
        </select>
        <a className="proCv" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> {t.cv}</a>
      </header>

      <main className="proHero">
        <section className="proIntro">
          <p className="eyebrow">{t.proTitleSmall}</p>
          <h1>{t.proTitle}</h1>
          <p>{t.proIntro}</p>
          <div className="proActions">
            <button onClick={() => setSlide("about")}>{t.proLearn}</button>
            <button onClick={() => setSlide("docs")}>{t.proProjects}</button>
          </div>
        </section>

        <section className="proPhotoArea">
          <img src="/assets/photo-khouloud-originale.jpg" alt="Khouloud CHARNI" className="proPhoto" />
        </section>

        <aside className="proValues">
          <div><FaWheelchair /><b>Accessible</b><small>Conçu pour tous</small></div>
          <div><FaHeart /><b>Éthique</b><small>Respect & bienveillance</small></div>
          <div><FaRocket /><b>Performant</b><small>Solutions efficaces</small></div>
          <div><FaUsers /><b>Inclusif</b><small>Personne laissé de côté</small></div>
        </aside>

        <section className="proCards">
          {t.proCards.map(([title, body], i) => (
            <button key={title} onClick={() => setSlide(["about","journey","skills","docs","docs"][i])}>
              {[<FaBriefcase />, <FaGraduationCap />, <FaCode />, <FaFolderOpen />, <FaDownload />][i]}
              <b>{title}</b>
              <span>{body}</span>
            </button>
          ))}
        </section>

        <section className="proAccessBar">
          <b>Un site conçu pour tous</b>
          <span><FaVolumeUp /> {t.accessItems[0]}</span>
          <span><FaAdjust /> {t.accessItems[1]}</span>
          <span><FaUniversalAccess /> {t.accessItems[2]}</span>
          <span><FaHandPaper /> {t.accessItems[3]}</span>
          <span><FaBraille /> {t.accessItems[4]}</span>
        </section>

        <div className="proStarZone">
          <StarPortal to={starTarget} text={t.starText} variant="pro" />
        </div>
      </main>

      <LanguageLine t={t} currentPath={currentPath} />

      {slide && <SlideOverlay slide={slide} setSlide={setSlide} t={t} lang={lang} />}
    </div>
  );
}

function PersonalPortfolio({ t, lang }) {
  const [slide, setSlide] = useState(null);
  const [accessOpen, setAccessOpen] = useState(false);
  const [vote, setVote] = useState("");
  const [showResults, setShowResults] = useState(false);
  const currentPath = "/perso";
  const starTarget = `/?lang=${lang}`;
  const braille = "⠏⠕⠗⠞⠋⠕⠇⠊⠕";

  function speak(text = t.speak) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "ar" ? "ar-SA" : lang === "en" ? "en-GB" : "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  return (
    <div className="site personal" dir={t.dir}>
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
          </div>

          <button className="accessFloating" onClick={() => setAccessOpen(!accessOpen)} aria-label={t.access}>
            <FaWheelchair />
          </button>

          {accessOpen && (
            <section className="accessPanel">
              <h2>{t.access}</h2>
              <button onClick={() => speak()}><FaVolumeUp /> {t.accessItems[0]}</button>
              <button onClick={() => document.body.classList.toggle("contrast")}><FaAdjust /> {t.accessItems[1]}</button>
              <button onClick={() => document.documentElement.classList.toggle("largeText")}><FaUniversalAccess /> {t.accessItems[2]}</button>
              <a href="https://dico.elix-lsf.fr/" target="_blank" rel="noreferrer"><FaHandPaper /> {t.accessItems[3]}</a>
              <button><FaBraille /> {t.accessItems[4]} <small>{braille}</small></button>
            </section>
          )}

          <div className="personalStarZone">
            <StarPortal to={starTarget} text={t.starText} variant="personal" />
          </div>
        </section>

        <LanguageLine t={t} currentPath={currentPath} />
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

function SlideOverlay({ slide, setSlide, t, lang }) {
  const [vote, setVote] = useState("");
  const [showResults, setShowResults] = useState(false);

  function speak(text = t.speak) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "ar" ? "ar-SA" : lang === "en" ? "en-GB" : "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  return (
    <div className="overlay">
      <aside className="slide proSlide">
        <button className="close" onClick={() => setSlide(null)}><FaTimes /></button>
        <button className="readSlide" onClick={() => speak(document.querySelector(".slideContent")?.innerText || t.speak)}>
          <FaVolumeUp /> Audio
        </button>
        <AccessibilityPanel t={t} lang={lang} floating={false} compact />
        <div className="slideContent">
          <Slide name={slide} t={t} vote={vote} setVote={setVote} showResults={showResults} setShowResults={setShowResults} />
        </div>
      </aside>
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
        <li>2i Academy Lyon – RNCP 5</li>
        <li>AESH depuis septembre 2024</li>
        <li>Bac Littéraire</li>
        <li>Bac Pro ARCU</li>
      </ul>
    </>
  );

  if (name === "skills") return (
    <>
      <h1>{t.skillsTitle}</h1>
      <h3>{t.skillsLevel}</h3>
      <p>{t.skillsIntro}</p>
      <div className="grid">{t.techs.map((x) => <div className="item" key={x}><FaCode /> {x}</div>)}</div>
    </>
  );

  if (name === "journey") return (
    <>
      <h1>{t.journeyTitle}</h1>
      <div className="aeshImageCard">
        <FaWheelchair /><FaGraduationCap /><FaHeart />
      </div>
      <p><FaBriefcase /> <b>{t.aeshTitle}</b></p>
      <p>{t.aeshText}</p>
      <p><FaGraduationCap /> Depuis septembre 2024</p>
      <p><FaGraduationCap /> Formation à venir – 2i Academy Lyon</p>
      <p><FaGraduationCap /> RNCP 5 Développeuse Web et Web Mobile</p>
      <p><FaGraduationCap /> Bac Pro ARCU</p>
      <p><FaGraduationCap /> Bac Littéraire</p>
    </>
  );

  if (name === "volunteer") return (
    <>
      <h1>{t.volunteerTitle}</h1>
      <div className="item"><FaUsers /> <p><b>Bénévole avec Ensemble pour un Repas</b><br />Aide à la préparation et à la distribution de repas pour les personnes dans le besoin.</p></div>
      <div className="item"><FaHeart /> <p><b>Donatrice pour Ummanitaire Concept</b><br />Participation à des collectes et dons pour aider les populations en difficulté.</p></div>
    </>
  );

  if (name === "news") {
    const results = [["France","32%"],["Brésil","20%"],["Argentine","15%"],["Allemagne","12%"],["Portugal","8%"],["Espagne","7%"],["Autre","6%"]];
    return (
      <>
        <h1>{t.newsTitle}</h1>
        <p>{t.voteQuestion}</p>
        {t.countries.map((c) => <label className="vote" key={c}><input type="radio" name="vote" checked={vote === c} onChange={() => setVote(c)} /> {c}</label>)}
        <button className="mainBtn" onClick={() => alert(vote ? `${t.voteBtn} : ${vote}` : "Choisis une équipe.")}>{t.voteBtn}</button>
        <button className="ghostBtn" onClick={() => setShowResults(true)}>{t.resultsBtn}</button>
        {showResults && <div className="results">{results.map(([a,b]) => <p key={a}><span>{a}</span><b>{b}</b></p>)}</div>}
      </>
    );
  }

  if (name === "contact") return (
    <>
      <h1>{t.contactTitle}</h1>
      <a className="line" href={contacts.whatsapp}><FaWhatsapp /> WhatsApp</a>
      <a className="line" href={`tel:+33${contacts.phone.slice(1)}`}><FaPhone /> {contacts.phoneDisplay}</a>
      <a className="line" href={`mailto:${contacts.email}`}><FaEnvelope /> {contacts.email}</a>
      <a className="line" href={contacts.linkedin}><FaLinkedin /> LinkedIn</a>
      <a className="line" href={contacts.github}><FaGithub /> GitHub</a>
    </>
  );

  return (
    <>
      <h1>{t.docsTitle}</h1>
      <a className="line" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> {t.downloadCv}</a>
      <a className="line" href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download><FaDownload /> {t.downloadLetter}</a>
      <div className="coming"><FaRocket /><h2>{t.projectSoon}</h2></div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);



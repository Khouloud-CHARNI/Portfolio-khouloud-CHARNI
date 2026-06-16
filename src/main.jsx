import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaPhone, FaDownload,
  FaVolumeUp, FaBraille, FaHandPaper, FaAdjust, FaUniversalAccess,
  FaCode, FaHeart, FaGraduationCap, FaBriefcase, FaUsers, FaRocket, FaTimes
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

const langFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "fr";
};

const translations = {
  fr: {
    dir: "ltr",
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      journey: "Parcours",
      volunteer: "Bénévolat",
      news: "Actualités 2026",
      contact: "Contact",
      docs: "Documents",
    },
    cv: "Télécharger CV",
    accessTitle: "Accessibilités",
    accessItems: {
      audio: "Sonore",
      audioSmall: "Écoutez le contenu du site",
      lsf: "LSF",
      lsfSmall: "Accéder à un dictionnaire LSF",
      braille: "Braille",
      brailleSmall: "Afficher une version braille",
      contrast: "Contrastes élevés",
      contrastSmall: "Améliorer la lisibilité",
      text: "Texte +",
      textSmall: "Agrandir la taille du texte",
    },
    thought: ["Ma pensée du jour :", "Je suis fière d'être autodidacte !", "Et vous ?", "Quelle est votre fierté du moment ? 💜"],
    polyglotte: "Polyglotte :",
    inclusion: "Chaque personne mérite un accès égal au savoir et à la technologie. Construisons ensemble un avenir inclusif. 💜",
    aboutTitle: "À propos de moi",
    aboutText: [
      "AESH actuellement, je suis en reconversion professionnelle vers le développement web et web mobile.",
      "Curieuse, rigoureuse et déterminée, mon objectif est de transformer ma passion pour le numérique en un métier porteur de sens et d'innovation.",
      "Je suis admise à 2i Academy à Lyon pour un titre RNCP 5 Développeuse Web et Web Mobile, et je recherche une alternance d'une durée d'un an à partir de septembre."
    ],
    aboutList: ["AESH depuis septembre 2024", "Bac Littéraire", "Bac Pro ARCU", "2i Academy Lyon – RNCP 5"],
    skillsTitle: "Compétences",
    skillsLevel: "Niveau : Débutante – en apprentissage continu",
    skillsIntro: "Je suis novice, en reconversion professionnelle, mais je sais utiliser et pratiquer :",
    techs: ["HTML5", "CSS3", "JavaScript", "Node.js", "Python", "API", "React (en cours d'apprentissage)"],
    journeyTitle: "Parcours",
    aeshTitle: "AESH – Accompagnante d'élèves en situation de handicap",
    aeshText: "Le métier d'AESH consiste à accompagner les élèves en situation de handicap dans leur autonomie, leur apprentissage, leur confiance et leur inclusion à l'école.",
    journeyItems: ["Depuis septembre 2024", "Formation à venir – 2i Academy Lyon", "RNCP 5 Développeuse Web et Web Mobile", "Bac Pro ARCU", "Bac Littéraire"],
    volunteerTitle: "Bénévolat",
    volunteerItems: [
      ["Bénévole avec Ensemble pour un Repas", "Aide à la préparation et à la distribution de repas pour les personnes dans le besoin."],
      ["Donatrice pour Ummanitaire Concept", "Participation à des collectes et dons pour aider les populations en difficulté."]
    ],
    newsTitle: "Coupe du Monde 2026 – Pronostic",
    voteQuestion: "Quel pays va gagner ?",
    voteBtn: "Voter",
    resultsBtn: "Voir les résultats",
    voteMessage: "Vote enregistré",
    chooseTeam: "Choisis une équipe avant de voter.",
    countries: ["France", "Brésil", "Argentine", "Allemagne", "Portugal", "Angleterre", "Espagne", "Autre"],
    contactTitle: "Me contacter",
    docsTitle: "Documents",
    downloadCv: "Télécharger mon CV",
    downloadLetter: "Télécharger ma lettre de motivation",
    projectTitle: "Mes projets",
    comingSoon: "À venir",
    comingText: "De nouveaux projets verront bientôt le jour.",
    close: "Fermer",
    speak: "Bienvenue sur le portfolio de Khouloud CHARNI. Portfolio accessible avec lecture sonore, LSF, braille, contraste élevé et texte agrandi."
  },
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      journey: "Journey",
      volunteer: "Volunteering",
      news: "2026 News",
      contact: "Contact",
      docs: "Documents",
    },
    cv: "Download CV",
    accessTitle: "Accessibility",
    accessItems: {
      audio: "Audio",
      audioSmall: "Listen to the website content",
      lsf: "French Sign Language",
      lsfSmall: "Open a sign language dictionary",
      braille: "Braille",
      brailleSmall: "Show a braille version",
      contrast: "High contrast",
      contrastSmall: "Improve readability",
      text: "Text +",
      textSmall: "Increase text size",
    },
    thought: ["Thought of the day:", "I am proud to be self-taught!", "And you?", "What are you proud of right now? 💜"],
    polyglotte: "Polyglot:",
    inclusion: "Everyone deserves equal access to knowledge and technology. Let us build a more inclusive future together. 💜",
    aboutTitle: "About me",
    aboutText: [
      "I currently work as an AESH, supporting pupils with disabilities, and I am changing careers toward web and mobile development.",
      "Curious, rigorous and determined, my goal is to turn my passion for digital technology into a meaningful and innovative career.",
      "I have been admitted to 2i Academy in Lyon for an RNCP Level 5 Web and Mobile Developer program, and I am looking for a one-year work-study position starting in September."
    ],
    aboutList: ["AESH since September 2024", "Literary Baccalaureate", "Professional Baccalaureate ARCU", "2i Academy Lyon – RNCP Level 5"],
    skillsTitle: "Skills",
    skillsLevel: "Level: Beginner – continuously learning",
    skillsIntro: "I am a beginner, currently changing careers, but I can use and practice:",
    techs: ["HTML5", "CSS3", "JavaScript", "Node.js", "Python", "API", "React (currently learning)"],
    journeyTitle: "Journey",
    aeshTitle: "AESH – School support assistant for pupils with disabilities",
    aeshText: "The AESH role consists of supporting pupils with disabilities in their autonomy, learning, confidence and inclusion at school.",
    journeyItems: ["Since September 2024", "Upcoming training – 2i Academy Lyon", "RNCP Level 5 Web and Mobile Developer", "Professional Baccalaureate ARCU", "Literary Baccalaureate"],
    volunteerTitle: "Volunteering",
    volunteerItems: [
      ["Volunteer with Ensemble pour un Repas", "Helping prepare and distribute meals for people in need."],
      ["Donor for Ummanitaire Concept", "Supporting charity collections and donations for people in difficulty."]
    ],
    newsTitle: "World Cup 2026 – Prediction",
    voteQuestion: "Which country will win?",
    voteBtn: "Vote",
    resultsBtn: "See results",
    voteMessage: "Vote saved",
    chooseTeam: "Choose a team before voting.",
    countries: ["France", "Brazil", "Argentina", "Germany", "Portugal", "England", "Spain", "Other"],
    contactTitle: "Contact me",
    docsTitle: "Documents",
    downloadCv: "Download my CV",
    downloadLetter: "Download my cover letter",
    projectTitle: "Projects",
    comingSoon: "Coming soon",
    comingText: "New projects will be added soon.",
    close: "Close",
    speak: "Welcome to Khouloud CHARNI's portfolio. Accessible portfolio with audio reading, French Sign Language, braille, high contrast and larger text."
  },
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      skills: "المهارات",
      journey: "المسار",
      volunteer: "التطوع",
      news: "أخبار 2026",
      contact: "التواصل",
      docs: "الوثائق",
    },
    cv: "تحميل السيرة الذاتية",
    accessTitle: "إمكانية الوصول",
    accessItems: {
      audio: "صوتي",
      audioSmall: "الاستماع إلى محتوى الموقع",
      lsf: "لغة الإشارة الفرنسية",
      lsfSmall: "فتح قاموس لغة الإشارة",
      braille: "برايل",
      brailleSmall: "عرض نسخة برايل",
      contrast: "تباين عالٍ",
      contrastSmall: "تحسين قابلية القراءة",
      text: "تكبير النص",
      textSmall: "زيادة حجم الكتابة",
    },
    thought: ["فكرة اليوم:", "أنا فخورة بكوني تعلمت بنفسي!", "وأنتم؟", "ما هو الشيء الذي تفتخرون به الآن؟ 💜"],
    polyglotte: "متعددة اللغات:",
    inclusion: "كل شخص يستحق وصولاً متساوياً إلى المعرفة والتكنولوجيا. لنبنِ معاً مستقبلاً أكثر شمولاً. 💜",
    aboutTitle: "من أنا",
    aboutText: [
      "أعمل حالياً كمرافقة مدرسية للتلاميذ في وضعية إعاقة، وأنا في مرحلة إعادة توجيه مهني نحو تطوير الويب وتطبيقات الهاتف.",
      "أنا فضولية، دقيقة ومصممة، وهدفي أن أحوّل شغفي بالتقنية الرقمية إلى مهنة ذات معنى وابتكار.",
      "تم قبولي في أكاديمية 2i في ليون للحصول على شهادة RNCP مستوى 5 كمطورة ويب وموبايل، وأبحث عن تدريب مهني لمدة سنة ابتداءً من سبتمبر."
    ],
    aboutList: ["AESH منذ سبتمبر 2024", "بكالوريا أدبية", "بكالوريا مهنية ARCU", "2i Academy Lyon – RNCP مستوى 5"],
    skillsTitle: "المهارات",
    skillsLevel: "المستوى: مبتدئة – في تعلم مستمر",
    skillsIntro: "أنا مبتدئة وفي إعادة توجيه مهني، لكنني أعرف استخدام وممارسة:",
    techs: ["HTML5", "CSS3", "JavaScript", "Node.js", "Python", "API", "React (قيد التعلم)"],
    journeyTitle: "المسار",
    aeshTitle: "مرافقة مدرسية للتلاميذ في وضعية إعاقة",
    aeshText: "دور AESH هو مرافقة التلاميذ في وضعية إعاقة من أجل تعزيز استقلاليتهم وثقتهم وتعلمهم واندماجهم داخل المدرسة.",
    journeyItems: ["منذ سبتمبر 2024", "تكوين قادم – 2i Academy Lyon", "RNCP مستوى 5 مطورة ويب وموبايل", "بكالوريا مهنية ARCU", "بكالوريا أدبية"],
    volunteerTitle: "التطوع",
    volunteerItems: [
      ["متطوعة مع Ensemble pour un Repas", "المساعدة في تحضير وتوزيع الوجبات للأشخاص المحتاجين."],
      ["متبرعة مع Ummanitaire Concept", "دعم حملات التضامن والتبرعات لفائدة الأشخاص في صعوبات."]
    ],
    newsTitle: "كأس العالم 2026 – التوقعات",
    voteQuestion: "أي بلد سيفوز؟",
    voteBtn: "تصويت",
    resultsBtn: "عرض النتائج",
    voteMessage: "تم تسجيل التصويت",
    chooseTeam: "اختاري فريقاً قبل التصويت.",
    countries: ["فرنسا", "البرازيل", "الأرجنتين", "ألمانيا", "البرتغال", "إنجلترا", "إسبانيا", "أخرى"],
    contactTitle: "تواصلوا معي",
    docsTitle: "الوثائق",
    downloadCv: "تحميل السيرة الذاتية",
    downloadLetter: "تحميل رسالة التحفيز",
    projectTitle: "مشاريعي",
    comingSoon: "قريباً",
    comingText: "ستتم إضافة مشاريع جديدة قريباً.",
    close: "إغلاق",
    speak: "مرحباً بكم في بورتفوليو خلود الشرني. هذا الموقع يدعم القراءة الصوتية، لغة الإشارة الفرنسية، برايل، التباين العالي وتكبير النص."
  }
};

function App() {
  const initialLang = langFromUrl();
  const [lang, setLang] = useState(["fr", "en", "ar"].includes(initialLang) ? initialLang : "fr");
  const [slide, setSlide] = useState(null);
  const [vote, setVote] = useState("");
  const [showResults, setShowResults] = useState(false);
  const t = translations[lang];
  const braille = useMemo(() => "⠏⠕⠗⠞⠋⠕⠇⠊⠕ ⠁⠉⠉⠑⠎⠎⠊⠃⠇⠑", []);

  function changeLangNewTab(newLang) {
    window.open(`${window.location.origin}${window.location.pathname}?lang=${newLang}`, "_blank", "noopener,noreferrer");
  }

  function speakSite() {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(t.speak);
    utterance.lang = lang === "ar" ? "ar-SA" : lang === "en" ? "en-GB" : "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function openSlide(name) {
    setSlide(name);
    setShowResults(false);
  }

  return (
    <div className="page" dir={t.dir}>
      <header className="nav">
        <button className="brandBtn" onClick={() => setSlide(null)}><img src="/assets/logo-eikyuu.png" alt="Eikyûu" /></button>
        <nav>
          <button onClick={() => setSlide(null)}>{t.nav.home}</button>
          <button onClick={() => openSlide("about")}>{t.nav.about}</button>
          <button onClick={() => openSlide("skills")}>{t.nav.skills}</button>
          <button onClick={() => openSlide("journey")}>{t.nav.journey}</button>
          <button onClick={() => openSlide("volunteer")}>{t.nav.volunteer}</button>
          <button onClick={() => openSlide("worldcup")}>{t.nav.news}</button>
          <button onClick={() => openSlide("contact")}>{t.nav.contact}</button>
          <button onClick={() => openSlide("docs")}>{t.nav.docs}</button>
        </nav>
        <a className="cvBtn" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> {t.cv}</a>
      </header>

      <main className="home">
        <section className="heroOnly">
          <div className="city"></div>

          <div className="developerGirl">
            <div className="hair"></div>
            <div className="face"></div>
            <div className="hoodie">Code.<br />Create.<br />Inspire.</div>
          </div>

          <div className="laptop">&lt;/&gt;</div>
          <div className="cup">FOCUS<br />SOURIRE<br />CONFIANCE</div>

          <div className="thoughtCloud">
            {t.thought.map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}
            <span>♡</span>
          </div>

          <aside className="accessBox">
            <h2>{t.accessTitle}</h2>
            <button onClick={speakSite}><FaVolumeUp /><span>{t.accessItems.audio}<small>{t.accessItems.audioSmall}</small></span></button>
            <a href="https://dico.elix-lsf.fr/" target="_blank" rel="noreferrer"><FaHandPaper /><span>{t.accessItems.lsf}<small>{t.accessItems.lsfSmall}</small></span></a>
            <button><FaBraille /><span>{t.accessItems.braille}<small>{t.accessItems.brailleSmall}<br />{braille}</small></span></button>
            <button onClick={() => document.body.classList.toggle("contrast")}><FaAdjust /><span>{t.accessItems.contrast}<small>{t.accessItems.contrastSmall}</small></span></button>
            <button onClick={() => document.documentElement.classList.toggle("largeText")}><FaUniversalAccess /><span>{t.accessItems.text}<small>{t.accessItems.textSmall}</small></span></button>
          </aside>
        </section>

        <section className="languageLine">
          <strong>{t.polyglotte}</strong>
          <button onClick={() => changeLangNewTab("fr")}>🇫🇷 Français</button>
          <button onClick={() => changeLangNewTab("en")}>🇬🇧 English</button>
          <button onClick={() => changeLangNewTab("ar")}>🇸🇦 العربية</button>
        </section>

        <section className="inclusion">{t.inclusion}</section>
      </main>

      {slide && (
        <div className="overlay">
          <aside className="slide">
            <button className="close" onClick={() => setSlide(null)}><FaTimes /></button>
            <Slide name={slide} t={t} lang={lang} vote={vote} setVote={setVote} showResults={showResults} setShowResults={setShowResults} />
          </aside>
        </div>
      )}
    </div>
  );
}

function Slide({ name, t, lang, vote, setVote, showResults, setShowResults }) {
  if (name === "about") return (
    <>
      <h1>{t.aboutTitle}</h1>
      <img className="photo" src="/assets/photo-khouloud-originale.jpg" alt="Khouloud CHARNI" />
      {t.aboutText.map((p) => <p key={p}>{p}</p>)}
      <ul>{t.aboutList.map((item) => <li key={item}>{item}</li>)}</ul>
    </>
  );

  if (name === "skills") return (
    <>
      <h1>{t.skillsTitle}</h1>
      <h3>{t.skillsLevel}</h3>
      <p>{t.skillsIntro}</p>
      <div className="skillsGrid">{t.techs.map((x) => <div className="skill" key={x}><FaCode /> {x}</div>)}</div>
    </>
  );

  if (name === "journey") return (
    <>
      <h1>{t.journeyTitle}</h1>
      <div className="aeshVisual">👩‍🏫 👦 📘</div>
      <p><FaBriefcase /> <b>{t.aeshTitle}</b></p>
      <p>{t.aeshText}</p>
      {t.journeyItems.map((item) => <p key={item}><FaGraduationCap /> {item}</p>)}
    </>
  );

  if (name === "volunteer") return (
    <>
      <h1>{t.volunteerTitle}</h1>
      {t.volunteerItems.map(([title, body]) => (
        <div className="mission" key={title}><FaUsers /><p><b>{title}</b><br />{body}</p></div>
      ))}
    </>
  );

  if (name === "worldcup") {
    const results = [["France", "32%"], ["Brésil", "20%"], ["Argentine", "15%"], ["Allemagne", "12%"], ["Portugal", "8%"], ["Espagne", "7%"], ["Autre", "6%"]];
    return (
      <>
        <h1>{t.newsTitle}</h1>
        <p>{t.voteQuestion}</p>
        {t.countries.map((country) => (
          <label className="vote" key={country}>
            <input type="radio" name="vote" checked={vote === country} onChange={() => setVote(country)} /> {country}
          </label>
        ))}
        <button className="mainBtn" onClick={() => alert(vote ? `${t.voteMessage} : ${vote}` : t.chooseTeam)}>{t.voteBtn}</button>
        <button className="ghostBtn" onClick={() => setShowResults(true)}>{t.resultsBtn}</button>
        {showResults && <div className="results">{results.map(([team, score]) => <p key={team}><span>{team}</span><b>{score}</b></p>)}</div>}
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

  if (name === "docs") return (
    <>
      <h1>{t.docsTitle}</h1>
      <a className="line" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> {t.downloadCv}</a>
      <a className="line" href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download><FaDownload /> {t.downloadLetter}</a>
      <div className="coming"><FaRocket /><h2>{t.projectTitle}</h2><h3>{t.comingSoon}</h3><p>{t.comingText}</p></div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

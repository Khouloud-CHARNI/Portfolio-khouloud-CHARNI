import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  FaTimes, FaDownload, FaCode, FaBriefcase, FaGraduationCap, FaUsers, FaHeart,
  FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaRocket, FaVolumeUp,
  FaWheelchair, FaHandPaper, FaBraille, FaAdjust, FaUniversalAccess, FaStar,
  FaFolderOpen, FaLaptopCode, FaGlobeEurope, FaUserFriends, FaLanguage,
  FaRegLightbulb, FaArrowRight, FaHome
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

const LANGS = ["fr", "en", "ar"];
const getLang = () => {
  const lang = new URLSearchParams(window.location.search).get("lang") || "fr";
  return LANGS.includes(lang) ? lang : "fr";
};
const withLang = (path, lang) => `${path}?lang=${lang}`;

const personalText = {
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
    speak: "Bienvenue sur le portfolio personnel de Khouloud CHARNI. Je partage ici ma créativité, mes passions et mon univers personnel.",
    countries: ["France", "Brésil", "Argentine", "Allemagne", "Portugal", "Angleterre", "Espagne", "Autre"],
    starText: "Cliquez sur l’étoile scintillante et plongez dans mon univers professionnel."
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
    speak: "Welcome to Khouloud CHARNI's personal portfolio. Here I share my creativity, passions and personal universe.",
    countries: ["France", "Brazil", "Argentina", "Germany", "Portugal", "England", "Spain", "Other"],
    starText: "Click the sparkling star and dive into my professional universe."
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
    speak: "مرحباً بكم في بورتفوليو خلود الشرني الشخصي. أشارك هنا إبداعي وشغفي وعالمي الشخصي.",
    countries: ["فرنسا", "البرازيل", "الأرجنتين", "ألمانيا", "البرتغال", "إنجلترا", "إسبانيا", "أخرى"],
    starText: "اضغطي على النجمة المضيئة واكتشفي عالمي المهني."
  }
};

const proText = {
  fr: {
    dir: "ltr",
    nav: ["Accueil", "À propos", "Compétences", "Parcours", "Projets", "Documents", "Bénévolat", "Contact"],
    heroLabel: "Développeuse Web & Mobile en reconversion",
    heroTitle: "Construisons ensemble un numérique accessible et inclusif.",
    heroIntro: "Passionnée par le code, la créativité et l'humain, je recherche une alternance pour mettre mes compétences au service de projets utiles, performants et accessibles à tous.",
    learn: "En savoir plus sur moi",
    projects: "Voir mes projets",
    cv: "Télécharger mon CV",
    access: "Accessibilité",
    proValues: [
      ["Accessible", "Conçu pour tous"],
      ["Éthique", "Respect & bienveillance"],
      ["Performant", "Des solutions efficaces"],
      ["Inclusif", "Personne laissé de côté"]
    ],
    screenTitle: "ACCESSIBILITÉ",
    screenText: "Concevoir pour inclure, développer pour tous.",
    cards: [
      ["Recherche d’alternance", "En reconversion vers le développement web et mobile, je recherche une alternance pour mettre mes compétences au service de vos projets.", "En savoir plus"],
      ["Parcours & expérience", "AESH, relation client, gestion administrative, missions associatives et bénévolat.", "Découvrir mon parcours"],
      ["Compétences techniques", "HTML5, CSS3, JavaScript, React, UI/UX, accessibilité, SEO…", "Voir mes compétences"],
      ["Mes projets", "Des projets pour allier créativité, performance et accessibilité.", "Voir mes projets"],
      ["Document", "Téléchargez mon CV et découvrez mon profil complet.", "Télécharger le CV"]
    ],
    accessLine: ["Un site conçu pour tous", "Lecture audio", "Contrastes élevés", "Taille du texte", "Langue des signes (LSF)", "Braille", "Toutes les options d’accessibilité"],
    star: "Cliquez sur l’étoile scintillante et découvrez-moi à travers ma vie personnelle et ce qui me passionne.",
    footerQuote: "Construisons ensemble un avenir inclusif.",
    aboutTitle: "À propos de moi",
    aboutText: ["En reconversion vers le développement web et mobile, motivée pour intégrer une équipe tech.", "Expérience entrepreneuriale, associative, éducative et commerciale qui me permet d’être mature, réaliste, ambitieuse et créative.", "J’ai une forte curiosité intellectuelle et un sens des responsabilités."],
    skillsTitle: "Compétences",
    skills: ["HTML5", "CSS3", "Pack Office", "VS Code", "Premiere Adobe Pro", "Accessibilité numérique", "UI/UX", "SEO"],
    journeyTitle: "Parcours",
    journey: ["AESH – Éducation Nationale depuis septembre 2024", "Relation clients polyvalente – Auchan", "Gestion administrative – Co-Adhérence & auto-entrepreneur", "Développeuse Web et Mobile en cours", "Bac Pro ARCU", "Bac Littéraire"],
    volunteerTitle: "Bénévolat & engagement",
    volunteer: ["Missions associatives", "S’engager pour les autres", "Agir à son échelle", "Créer du lien", "Faire la différence"],
    docsTitle: "Documents",
    contactTitle: "Contact",
    speak: "Bienvenue sur le portfolio professionnel de Khouloud CHARNI. Développeuse web et mobile en reconversion, elle conçoit des expériences digitales utiles, performantes et accessibles à tous."
  },
  en: {
    dir: "ltr",
    nav: ["Home", "About", "Skills", "Journey", "Projects", "Documents", "Volunteering", "Contact"],
    heroLabel: "Web & Mobile Developer in career transition",
    heroTitle: "Let us build an accessible and inclusive digital world together.",
    heroIntro: "Passionate about code, creativity and people, I am looking for a work-study position to put my skills at the service of useful, efficient and accessible projects.",
    learn: "Learn more about me",
    projects: "See my projects",
    cv: "Download CV",
    access: "Accessibility",
    proValues: [["Accessible", "Designed for everyone"],["Ethical", "Respect & kindness"],["Efficient", "Effective solutions"],["Inclusive", "No one left aside"]],
    screenTitle: "ACCESSIBILITY",
    screenText: "Design to include, develop for everyone.",
    cards: [["Work-study search", "I am changing careers toward web and mobile development and looking for a work-study role.", "Learn more"],["Journey & experience", "AESH, customer relations, administration, volunteering and associative missions.", "Discover my journey"],["Technical skills", "HTML5, CSS3, JavaScript, React, UI/UX, accessibility, SEO…", "See my skills"],["Projects", "Projects combining creativity, performance and accessibility.", "See projects"],["Document", "Download my CV and discover my full profile.", "Download CV"]],
    accessLine: ["A website for everyone", "Audio reading", "High contrast", "Text size", "Sign language", "Braille", "All accessibility options"],
    star: "Click the sparkling star and discover my personal life and what inspires me.",
    footerQuote: "Let us build an inclusive future together.",
    aboutTitle: "About me",
    aboutText: ["I am changing careers toward web and mobile development and motivated to join a tech team.", "My entrepreneurial, associative, educational and commercial experience helps me be mature, realistic, ambitious and creative.", "I have strong intellectual curiosity and a strong sense of responsibility."],
    skillsTitle: "Skills",
    skills: ["HTML5", "CSS3", "Office Pack", "VS Code", "Premiere Adobe Pro", "Digital accessibility", "UI/UX", "SEO"],
    journeyTitle: "Journey",
    journey: ["AESH – National Education since September 2024", "Customer relations – Auchan", "Administrative management – Co-Adhérence & self-employed", "Web and Mobile Developer training", "Professional Baccalaureate ARCU", "Literary Baccalaureate"],
    volunteerTitle: "Volunteering & commitment",
    volunteer: ["Associative missions", "Helping others", "Acting at my own level", "Creating connection", "Making a difference"],
    docsTitle: "Documents",
    contactTitle: "Contact",
    speak: "Welcome to Khouloud CHARNI's professional portfolio. Web and mobile developer in career transition, she designs useful, efficient and accessible digital experiences."
  },
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "من أنا", "المهارات", "المسار", "المشاريع", "الوثائق", "التطوع", "التواصل"],
    heroLabel: "مطورة ويب وموبايل في إعادة توجيه مهني",
    heroTitle: "لنبنِ معاً عالماً رقمياً متاحاً وشاملاً.",
    heroIntro: "شغوفة بالبرمجة والإبداع والجانب الإنساني، أبحث عن تدريب مهني لأضع مهاراتي في خدمة مشاريع مفيدة، فعالة ومتاحة للجميع.",
    learn: "اعرفوا المزيد عني",
    projects: "مشاريعي",
    cv: "تحميل السيرة الذاتية",
    access: "إمكانية الوصول",
    proValues: [["متاح", "مصمم للجميع"],["أخلاقي", "احترام ولطف"],["فعال", "حلول عملية"],["شامل", "لا أحد يُترك جانباً"]],
    screenTitle: "إمكانية الوصول",
    screenText: "نصمم للإدماج ونطور للجميع.",
    cards: [["أبحث عن تدريب مهني", "أنا في إعادة توجيه نحو تطوير الويب والموبايل وأبحث عن تدريب مهني.", "المزيد"],["المسار والخبرة", "AESH، علاقات العملاء، الإدارة، العمل الجمعوي والتطوع.", "اكتشفوا مساري"],["المهارات التقنية", "HTML5, CSS3, JavaScript, React, UI/UX, accessibilité, SEO…", "المهارات"],["مشاريعي", "مشاريع تجمع بين الإبداع والأداء وإمكانية الوصول.", "مشاريعي"],["الوثائق", "حمّلوا سيرتي الذاتية واكتشفوا ملفي الكامل.", "تحميل السيرة"]],
    accessLine: ["موقع للجميع", "قراءة صوتية", "تباين عالٍ", "حجم النص", "لغة الإشارة", "برايل", "كل خيارات الوصول"],
    star: "اضغطي على النجمة المضيئة واكتشفي حياتي الشخصية وما يلهمني.",
    footerQuote: "لنبنِ معاً مستقبلاً شاملاً.",
    aboutTitle: "من أنا",
    aboutText: ["أنا في إعادة توجيه مهني نحو تطوير الويب والموبايل ومتحمسة للانضمام إلى فريق تقني.", "خبرتي في العمل المقاولاتي والجمعوي والتربوي والتجاري تساعدني على أن أكون ناضجة وواقعية وطموحة ومبدعة.", "لدي فضول فكري قوي وإحساس كبير بالمسؤولية."],
    skillsTitle: "المهارات",
    skills: ["HTML5", "CSS3", "Pack Office", "VS Code", "Premiere Adobe Pro", "إمكانية الوصول الرقمية", "UI/UX", "SEO"],
    journeyTitle: "المسار",
    journey: ["AESH – التعليم الوطني منذ سبتمبر 2024", "علاقات العملاء – Auchan", "تدبير إداري – Co-Adhérence وعمل مستقل", "تكوين مطورة ويب وموبايل", "Bac Pro ARCU", "بكالوريا أدبية"],
    volunteerTitle: "التطوع والالتزام",
    volunteer: ["مهام جمعوية", "مساعدة الآخرين", "العمل على قدر الإمكان", "خلق الروابط", "صنع الفرق"],
    docsTitle: "الوثائق",
    contactTitle: "التواصل",
    speak: "مرحباً بكم في بورتفوليو خلود الشرني المهني. مطورة ويب وموبايل في إعادة توجيه مهني، تصمم تجارب رقمية مفيدة وفعالة ومتاحة للجميع."
  }
};

function useSpeech(lang) {
  return (text) => {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "ar" ? "ar-SA" : lang === "en" ? "en-GB" : "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };
}

function AccessibilityWidget({ lang, text, theme = "pro" }) {
  const [open, setOpen] = useState(false);
  const speak = useSpeech(lang);
  const label = lang === "ar" ? "إمكانية الوصول" : lang === "en" ? "Accessibility" : "Accessibilité";
  return (
    <div className={`accessWidget ${theme}`}>
      <button className="accessFloating" onClick={() => setOpen(!open)} aria-label={label}><FaWheelchair /></button>
      {open && (
        <section className="accessPanel">
          <h2>{label}</h2>
          <button onClick={() => speak(text)}><FaVolumeUp /> {lang === "ar" ? "صوتي" : "Sonore"}</button>
          <a href="https://dico.elix-lsf.fr/" target="_blank" rel="noreferrer"><FaHandPaper /> LSF</a>
          <button><FaBraille /> Braille <small>⠏⠕⠗⠞⠋⠕⠇⠊⠕</small></button>
          <button onClick={() => document.body.classList.toggle("contrast")}><FaAdjust /> {lang === "ar" ? "تباين" : "Contrastes"}</button>
          <button onClick={() => document.documentElement.classList.toggle("largeText")}><FaUniversalAccess /> Texte +</button>
        </section>
      )}
    </div>
  );
}

function ProPortfolio({ lang }) {
  const t = proText[lang];
  const [slide, setSlide] = useState(null);
  const speak = useSpeech(lang);
  const langPath = (target) => withLang("/", target);
  const slideText = slide ? document.querySelector(".proSlideContent")?.innerText || t.speak : t.speak;
  return (
    <div className="proPage" dir={t.dir}>
      <header className="proNav">
        <a className="proLogo" href={withLang("/", lang)}><FaStar /><span><b>Khouloud CHARNI</b><small>Développeuse Web & Mobile</small></span></a>
        <nav>{t.nav.map((item, i) => <button key={item} onClick={() => i === 0 ? setSlide(null) : setSlide(["about","skills","journey","projects","docs","volunteer","contact"][i-1])}>{item}</button>)}</nav>
        <button className="proAccessMini" onClick={() => speak(t.speak)}><FaWheelchair /></button>
        <select className="langSelect" value={lang} onChange={(e) => { window.location.href = langPath(e.target.value); }}>
          <option value="fr">FR</option><option value="en">EN</option><option value="ar">AR</option>
        </select>
        <a className="proCv" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> {t.cv}</a>
      </header>

      <main>
        <section className="proHero">
          <div className="proHeroText">
            <p className="eyebrow">{t.heroLabel}</p>
            <h1>{t.heroTitle}</h1>
            <p className="intro">{t.heroIntro}</p>
            <div className="proActions"><button onClick={() => setSlide("about")}>{t.learn}</button><button onClick={() => setSlide("projects")}>{t.projects} <FaArrowRight /></button></div>
          </div>
          <div className="proPortraitZone">
            <div className="deskShape"></div>
            <img className="proPhoto" src="/assets/photo-khouloud-originale.jpg" alt="Khouloud CHARNI" />
            <div className="screenCard"><h3>{t.screenTitle}</h3><p>{t.screenText}</p><div><span>◐</span><span>Aa</span><span>👁</span><span>♿</span></div></div>
            <div className="valuesBox">{t.proValues.map(([a,b]) => <div key={a}><b>{a}</b><small>{b}</small></div>)}</div>
          </div>
          <a className="starPortal proStar" href={withLang("/perso", lang)} aria-label={t.star}><FaStar /><span>{t.star}</span></a>
        </section>

        <section className="proCards">{t.cards.map(([title, body, link], i) => <button key={title} onClick={() => setSlide(["about","journey","skills","projects","docs"][i])}><span className="cardIcon">{i===0?<FaBriefcase/>:i===1?<FaGraduationCap/>:i===2?<FaCode/>:i===3?<FaFolderOpen/>:<FaDownload/>}</span><b>{title}</b><p>{body}</p><small>{link} →</small></button>)}</section>

        <section className="proAccessLine"><b>{t.accessLine[0]}</b>{t.accessLine.slice(1).map((x,i)=><button key={x} onClick={() => i===0 ? speak(t.speak) : null}>{i===0?<FaVolumeUp/>:i===1?<FaAdjust/>:i===2?<FaUniversalAccess/>:i===3?<FaHandPaper/>:i===4?<FaBraille/>:<FaWheelchair/>}{x}</button>)}</section>

        <footer className="proFooter"><div className="socials"><a href={contacts.linkedin}><FaLinkedin/></a><a href={contacts.github}><FaGithub/></a><a href={`mailto:${contacts.email}`}><FaEnvelope/></a></div><p>{t.footerQuote}</p></footer>
      </main>
      <AccessibilityWidget lang={lang} text={slide ? slideText : t.speak} theme="pro" />
      {slide && <ProSlide name={slide} t={t} lang={lang} close={() => setSlide(null)} speak={speak} />}
    </div>
  );
}

function ProSlide({ name, t, lang, close, speak }) {
  const titles = {about:t.aboutTitle, skills:t.skillsTitle, journey:t.journeyTitle, projects:t.projects, docs:t.docsTitle, volunteer:t.volunteerTitle, contact:t.contactTitle};
  return <div className="proOverlay"><aside className="proSlide"><button className="close" onClick={close}><FaTimes /></button><button className="readSlide" onClick={() => speak(document.querySelector(".proSlideContent")?.innerText || t.speak)}><FaVolumeUp /> Audio</button><div className="proSlideContent"><h1>{titles[name]}</h1>{name==="about" && <><img className="photo" src="/assets/photo-khouloud-originale.jpg" alt="Khouloud CHARNI" />{t.aboutText.map(p=><p key={p}>{p}</p>)}</>}{name==="skills" && <div className="grid">{t.skills.map(s=><div className="proItem" key={s}><FaCode /> {s}</div>)}</div>}{name==="journey" && t.journey.map(j=><p className="proItem" key={j}><FaGraduationCap /> {j}</p>)}{name==="volunteer" && t.volunteer.map(v=><p className="proItem" key={v}><FaHeart /> {v}</p>)}{name==="projects" && <div className="coming"><FaRocket /><h2>{t.projects}</h2><p>{lang==="fr"?"De nouveaux projets verront bientôt le jour.":lang==="en"?"New projects will be added soon.":"ستتم إضافة مشاريع جديدة قريباً."}</p></div>}{name==="docs" && <><a className="line proLine" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> {t.cv}</a><a className="line proLine" href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download><FaDownload /> Lettre de motivation</a></>}{name==="contact" && <><a className="line proLine" href={contacts.whatsapp}><FaWhatsapp /> WhatsApp</a><a className="line proLine" href={`tel:+33${contacts.phone.slice(1)}`}><FaPhone /> {contacts.phoneDisplay}</a><a className="line proLine" href={`mailto:${contacts.email}`}><FaEnvelope /> {contacts.email}</a><a className="line proLine" href={contacts.linkedin}><FaLinkedin /> LinkedIn</a><a className="line proLine" href={contacts.github}><FaGithub /> GitHub</a></>}</div></aside></div>;
}

function PersonalPortfolio({ lang }) {
  const t = personalText[lang];
  const [slide, setSlide] = useState(null);
  const [vote, setVote] = useState("");
  const [showResults, setShowResults] = useState(false);
  const langPath = (target) => withLang("/perso", target);
  return (
    <div className="site personalPage" dir={t.dir}>
      <header className="navBar">
        <button className="logoBtn" onClick={() => setSlide(null)}><img src="/assets/logo-eikyuu.png" alt="Eikyûu" /></button>
        <nav>{t.nav.map((label, i) => <button key={label} onClick={() => i === 0 ? setSlide(null) : setSlide(["about","skills","journey","volunteer","news","contact","docs"][i-1])}>{label}</button>)}</nav>
        <a className="cvBtn" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> {t.cv}</a>
      </header>
      <main>
        <section className="hero">
          <a className="starPortal personalStar" href={withLang("/", lang)}><FaStar /><span>{t.starText}</span></a>
          <div className="thoughtTitle">{t.thoughtTitle}</div>
          <div className="thoughtBubble">{t.thought.map((line) => <p key={line}>{line}</p>)}<b>♡</b></div>
        </section>
        <section className="poly"><strong>{t.poly}</strong><button onClick={() => {window.location.href=langPath("fr")}}>🇫🇷 Français</button><button onClick={() => {window.location.href=langPath("en")}}>🇬🇧 English</button><button onClick={() => {window.location.href=langPath("ar")}}>🇸🇦 العربية</button></section>
        <section className="inclusion">{t.inclusion}</section>
      </main>
      <AccessibilityWidget lang={lang} text={slide ? document.querySelector(".slideContent")?.innerText || t.speak : t.speak} theme="personal" />
      {slide && <PersonalSlide name={slide} t={t} vote={vote} setVote={setVote} showResults={showResults} setShowResults={setShowResults} close={() => setSlide(null)} lang={lang} />}
    </div>
  );
}

function PersonalSlide({ name, t, vote, setVote, showResults, setShowResults, close, lang }) {
  const speak = useSpeech(lang);
  return <div className="overlay"><aside className="slide"><button className="close" onClick={close}><FaTimes /></button><button className="readSlide" onClick={() => speak(document.querySelector(".slideContent")?.innerText || t.speak)}><FaVolumeUp /> Audio</button><div className="slideContent"><Slide name={name} t={t} vote={vote} setVote={setVote} showResults={showResults} setShowResults={setShowResults} /></div></aside></div>;
}

function Slide({ name, t, vote, setVote, showResults, setShowResults }) {
  if (name === "about") return <><h1>{t.aboutTitle}</h1><img className="photo" src="/assets/photo-khouloud-originale.jpg" alt="Khouloud CHARNI" />{t.aboutText.map((p) => <p key={p}>{p}</p>)}<ul><li>AESH depuis septembre 2024</li><li>Bac Littéraire</li><li>Bac Pro ARCU</li><li>2i Academy Lyon – RNCP 5</li></ul></>;
  if (name === "skills") return <><h1>{t.skillsTitle}</h1><h3>{t.skillsLevel}</h3><p>{t.skillsIntro}</p><div className="grid">{t.techs.map((x) => <div className="item" key={x}><FaCode /> {x}</div>)}</div></>;
  if (name === "journey") return <><h1>{t.journeyTitle}</h1><div className="aesh">👩‍🏫 👦 📘</div><p><FaBriefcase /> <b>{t.aeshTitle}</b></p><p>{t.aeshText}</p><p><FaGraduationCap /> Depuis septembre 2024</p><p><FaGraduationCap /> Formation à venir – 2i Academy Lyon</p><p><FaGraduationCap /> RNCP 5 Développeuse Web et Web Mobile</p><p><FaGraduationCap /> Bac Pro ARCU</p><p><FaGraduationCap /> Bac Littéraire</p></>;
  if (name === "volunteer") return <><h1>{t.volunteerTitle}</h1><div className="item"><FaUsers /> <p><b>Bénévole avec Ensemble pour un Repas</b><br />Aide à la préparation et à la distribution de repas pour les personnes dans le besoin.</p></div><div className="item"><FaHeart /> <p><b>Donatrice pour Ummanitaire Concept</b><br />Participation à des collectes et dons pour aider les populations en difficulté.</p></div></>;
  if (name === "news") { const results = [["France","32%"],["Brésil","20%"],["Argentine","15%"],["Allemagne","12%"],["Portugal","8%"],["Espagne","7%"],["Autre","6%"]]; return <><h1>{t.newsTitle}</h1><p>{t.voteQuestion}</p>{t.countries.map((c) => <label className="vote" key={c}><input type="radio" name="vote" checked={vote === c} onChange={() => setVote(c)} /> {c}</label>)}<button className="mainBtn" onClick={() => alert(vote ? `${t.voteBtn} : ${vote}` : "Choisis une équipe.")}>{t.voteBtn}</button><button className="ghostBtn" onClick={() => setShowResults(true)}>{t.resultsBtn}</button>{showResults && <div className="results">{results.map(([a,b]) => <p key={a}><span>{a}</span><b>{b}</b></p>)}</div>}</>; }
  if (name === "contact") return <><h1>{t.contactTitle}</h1><a className="line" href={contacts.whatsapp}><FaWhatsapp /> WhatsApp</a><a className="line" href={`tel:+33${contacts.phone.slice(1)}`}><FaPhone /> {contacts.phoneDisplay}</a><a className="line" href={`mailto:${contacts.email}`}><FaEnvelope /> {contacts.email}</a><a className="line" href={contacts.linkedin}><FaLinkedin /> LinkedIn</a><a className="line" href={contacts.github}><FaGithub /> GitHub</a></>;
  return <><h1>{t.docsTitle}</h1><a className="line" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> {t.downloadCv}</a><a className="line" href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download><FaDownload /> {t.downloadLetter}</a><div className="coming"><FaRocket /><h2>{t.projectSoon}</h2></div></>;
}

function App() {
  const lang = getLang();
  const isPersonal = window.location.pathname.toLowerCase().startsWith("/perso");
  return isPersonal ? <PersonalPortfolio lang={lang} /> : <ProPortfolio lang={lang} />;
}

createRoot(document.getElementById("root")).render(<App />);

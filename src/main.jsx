import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const LANGS = ['fr', 'en', 'ar'];
const getLang = () => {
  const value = new URLSearchParams(window.location.search).get('lang') || 'fr';
  return LANGS.includes(value) ? value : 'fr';
};
const getPath = () => window.location.pathname.replace(/^\//, '').replace(/\/$/, '') || 'pro';

const dict = {
  fr: {
    dir: 'ltr',
    nav: ['Accueil', 'À propos', 'Compétences', 'Parcours', 'Bénévolat', 'Actualités 2026', 'Contact', 'Documents'],
    brandSub: 'Développeuse Web et Web Mobile',
    proKicker: 'Développeuse Web et Web Mobile en reconversion',
    proTitle: 'Construisons ensemble un numérique accessible et inclusif.',
    proText: "Passionnée par le code, la créativité et l’humain, je conçois des expériences digitales utiles, performantes et accessibles à tous.",
    learn: 'En savoir plus sur moi',
    projects: 'Voir mes projets',
    cv: 'Télécharger CV',
    star: 'Cliquez et découvrez-moi autrement',
    thoughtTitle: 'Ma pensée du jour :',
    thought: 'Je gère comme je peux cette canicule cette semaine et vous ?',
    poly: 'Polyglotte :',
    notions: 'Notions : Allemand, Coréen, Japonais et Mandarin',
    aboutTitle: 'À propos de moi',
    aboutParagraphs: [
      'AESH actuellement, je suis en reconversion professionnelle vers le développement web et web mobile.',
      "Curieuse, rigoureuse et déterminée, mon objectif est de transformer ma passion pour le numérique en un métier porteur de sens et d’innovation.",
      "Je suis admise à 2i Academy à Lyon pour un titre RNCP 5 Développeuse Web et Web Mobile, et je recherche une alternance d’une durée d’un an."
    ],
    aboutList: ['2i Academy Lyon – RNCP 5', 'AESH depuis septembre 2024', 'Bac Littéraire', 'Bac Pro ARCU'],
    skillsTitle: 'Compétences',
    skillsText: 'Niveau débutante, en apprentissage continu. Je sais utiliser et pratiquer HTML5, CSS3, JavaScript, Node.js, Python, API et React en cours d’apprentissage.',
    journeyTitle: 'Parcours',
    journeyText: 'Le métier d’AESH consiste à accompagner les élèves en situation de handicap dans leur autonomie, leur apprentissage, leur confiance et leur inclusion à l’école.',
    volunteerTitle: 'Bénévolat',
    volunteerText: 'Bénévolat, entraide, distribution de repas et actions solidaires pour soutenir les personnes dans le besoin.',
    newsTitle: 'Actualités 2026',
    newsText: 'Coupe du Monde 2026 – pronostic et actualités à venir.',
    contactTitle: 'Contact',
    docsTitle: 'Documents',
    docCv: 'Télécharger mon CV',
    docLm: 'Télécharger ma lettre de motivation',
    accessibility: 'Accessibilité',
    accessOptions: ['Lecture audio', 'Contrastes élevés', 'Agrandir le texte', 'LSF', 'Braille'],
    speak: 'Bienvenue sur le portfolio de Khouloud CHARNI. Développeuse Web et Web Mobile en reconversion vers un numérique accessible et inclusif.'
  },
  en: {
    dir: 'ltr',
    nav: ['Home', 'About', 'Skills', 'Journey', 'Volunteering', '2026 News', 'Contact', 'Documents'],
    brandSub: 'Web and Mobile Web Developer',
    proKicker: 'Web and Mobile Web Developer in career transition',
    proTitle: 'Let’s build accessible and inclusive digital experiences together.',
    proText: 'Passionate about code, creativity and people, I design useful, high-performing and accessible digital experiences for everyone.',
    learn: 'Learn more about me',
    projects: 'See my projects',
    cv: 'Download CV',
    star: 'Click and discover me differently',
    thoughtTitle: 'Thought of the day:',
    thought: 'I’m managing this heatwave as best I can this week — how about you?',
    poly: 'Polyglot:',
    notions: 'Notions: German, Korean, Japanese and Mandarin',
    aboutTitle: 'About me',
    aboutParagraphs: [
      'I currently work as an AESH and I am changing careers toward web and mobile web development.',
      'Curious, rigorous and determined, my goal is to turn my passion for digital technology into a meaningful and innovative career.',
      'I have been admitted to 2i Academy in Lyon for an RNCP Level 5 Web and Mobile Web Developer program, and I am looking for a one-year work-study position.'
    ],
    aboutList: ['2i Academy Lyon – RNCP 5', 'AESH since September 2024', 'Literary Baccalaureate', 'Bac Pro ARCU'],
    skillsTitle: 'Skills',
    skillsText: 'Beginner level, continuously learning. I can use and practice HTML5, CSS3, JavaScript, Node.js, Python, API and React while learning.',
    journeyTitle: 'Journey',
    journeyText: 'The AESH role supports pupils with disabilities in autonomy, learning, confidence and inclusion at school.',
    volunteerTitle: 'Volunteering',
    volunteerText: 'Volunteering, mutual aid, meal distribution and solidarity actions to support people in need.',
    newsTitle: '2026 News',
    newsText: 'World Cup 2026 – prediction and future updates.',
    contactTitle: 'Contact',
    docsTitle: 'Documents',
    docCv: 'Download my CV',
    docLm: 'Download my cover letter',
    accessibility: 'Accessibility',
    accessOptions: ['Audio reading', 'High contrast', 'Larger text', 'French Sign Language', 'Braille'],
    speak: 'Welcome to Khouloud CHARNI portfolio. Web and Mobile Web Developer in career transition toward accessible and inclusive digital technology.'
  },
  ar: {
    dir: 'rtl',
    nav: ['الرئيسية', 'من أنا', 'المهارات', 'المسار', 'التطوع', 'أخبار 2026', 'التواصل', 'الوثائق'],
    brandSub: 'مطورة ويب وويب موبايل',
    proKicker: 'مطورة ويب وويب موبايل في إعادة توجيه مهني',
    proTitle: 'لنبنِ معاً عالماً رقمياً متاحاً وشاملاً.',
    proText: 'شغوفة بالبرمجة والإبداع والإنسان، أصمم تجارب رقمية مفيدة وفعالة ومتاحة للجميع.',
    learn: 'اعرفوا المزيد عني',
    projects: 'مشاريعي',
    cv: 'تحميل السيرة الذاتية',
    star: 'اضغطوا واكتشفوني بطريقة مختلفة',
    thoughtTitle: 'فكرة اليوم:',
    thought: 'أتعامل مع موجة الحر هذا الأسبوع قدر استطاعتي، وأنتم؟',
    poly: 'متعددة اللغات:',
    notions: 'معلومات أولية: الألمانية، الكورية، اليابانية، والماندرين',
    aboutTitle: 'من أنا',
    aboutParagraphs: [
      'أعمل حالياً كمرافقة مدرسية للتلاميذ في وضعية إعاقة، وأنا في مرحلة إعادة توجيه مهني نحو تطوير الويب وويب موبايل.',
      'أنا فضولية، دقيقة ومصممة، وهدفي أن أحوّل شغفي بالتقنية الرقمية إلى مهنة ذات معنى وابتكار.',
      'تم قبولي في أكاديمية 2i في ليون للحصول على شهادة RNCP مستوى 5 كمطورة ويب وويب موبايل، وأبحث عن تدريب مهني لمدة سنة.'
    ],
    aboutList: ['2i Academy Lyon – RNCP 5', 'AESH منذ سبتمبر 2024', 'Bac Littéraire', 'Bac Pro ARCU'],
    skillsTitle: 'المهارات',
    skillsText: 'مستوى مبتدئة وفي تعلم مستمر. أعرف استخدام HTML5 وCSS3 وJavaScript وNode.js وPython وAPI وReact قيد التعلم.',
    journeyTitle: 'المسار',
    journeyText: 'دور AESH هو مرافقة التلاميذ في وضعية إعاقة من أجل تعزيز استقلاليتهم وثقتهم وتعلمهم واندماجهم داخل المدرسة.',
    volunteerTitle: 'التطوع',
    volunteerText: 'تطوع ومساعدة وتوزيع وجبات وأعمال تضامنية لدعم الأشخاص المحتاجين.',
    newsTitle: 'أخبار 2026',
    newsText: 'كأس العالم 2026 – توقعات وأخبار قادمة.',
    contactTitle: 'التواصل',
    docsTitle: 'الوثائق',
    docCv: 'تحميل السيرة الذاتية',
    docLm: 'تحميل رسالة التحفيز',
    accessibility: 'إمكانية الوصول',
    accessOptions: ['قراءة صوتية', 'تباين عالٍ', 'تكبير النص', 'لغة الإشارة الفرنسية', 'برايل'],
    speak: 'مرحباً بكم في بورتفوليو خلود الشرني. مطورة ويب وويب موبايل في إعادة توجيه مهني نحو رقمية متاحة وشاملة.'
  }
};

function App(){
  const lang = getLang();
  const page = getPath();
  const t = dict[lang];
  return page === 'perso' ? <Personal t={t} lang={lang}/> : <Professional t={t} lang={lang}/>;
}

function langUrl(path, lang){ return `${path}?lang=${lang}`; }

function Header({t, lang, personal=false, open}){
  const path = personal ? '/perso' : '/';
  return <header className={personal ? 'nav v1nav' : 'nav proNav'}>
    <button className="brand" onClick={() => window.location.href = langUrl(path, lang)}>
      <img src="/assets/logo-eikyuu.png" alt="Eikyuu"/>
      <span><strong>Khouloud CHARNI</strong><small>{t.brandSub}</small></span>
    </button>
    <nav className="navLinks">
      {t.nav.map((n,i)=><button key={n} onClick={()=> i===0 ? window.location.href=langUrl(path, lang) : open?.(['about','skills','journey','volunteer','news','contact','docs'][i-1])}>{n}</button>)}
    </nav>
    {!personal && <Accessibility t={t} lang={lang}/>} 
    <select className="langSelect" value={lang} onChange={(e)=> window.location.href = langUrl(path, e.target.value)}>
      <option value="fr">FR</option><option value="en">EN</option><option value="ar">AR</option>
    </select>
    <a className="cv" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download>⬇ {t.cv}</a>
  </header>
}

function Accessibility({t, lang}){
  const [open,setOpen]=useState(false);
  const speak=()=>{
    if(!window.speechSynthesis) return;
    const u=new SpeechSynthesisUtterance(t.speak);
    u.lang=lang==='ar'?'ar-SA':lang==='en'?'en-GB':'fr-FR';
    window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
  };
  return <div className="access">
    <button className="accessBtn" onClick={()=>setOpen(!open)}>♿</button>
    {open && <div className="accessPanel">
      <h3>{t.accessibility}</h3>
      <button onClick={speak}>🔊 {t.accessOptions[0]}</button>
      <button onClick={()=>document.body.classList.toggle('contrast')}>◐ {t.accessOptions[1]}</button>
      <button onClick={()=>document.documentElement.classList.toggle('large')}>A+ {t.accessOptions[2]}</button>
      <a href="https://dico.elix-lsf.fr/" target="_blank" rel="noreferrer">🖐 {t.accessOptions[3]}</a>
      <button>⠃ {t.accessOptions[4]}</button>
    </div>}
  </div>
}

function LangLine({t, path}){
  return <section className="poly">
    <strong>{t.poly}</strong>
    <a href={langUrl(path,'fr')}>🇫🇷 Français</a>
    <a href={langUrl(path,'en')}>🇬🇧 English</a>
    <a href={langUrl(path,'ar')}>🇸🇦 العربية</a>
    <span>{t.notions}</span>
  </section>
}

function Star({t, target}){
  return <button className="star" onClick={()=>window.location.href=target}><span>{t.star}</span></button>
}

function Professional({t, lang}){
  const [slide,setSlide]=useState(null);
  return <div className="pro" dir={t.dir}>
    <Header t={t} lang={lang} open={setSlide}/>
    <main className="proHero">
      <section className="proText">
        <p className="kicker">{t.proKicker}</p>
        <h1>{t.proTitle}</h1>
        <p>{t.proText}</p>
        <div className="actions"><button onClick={()=>setSlide('about')}>{t.learn}</button><button onClick={()=>setSlide('docs')}>{t.projects}</button></div>
      </section>
      <section className="portrait"><img src="/assets/photo-khouloud-originale.jpg" alt="Khouloud CHARNI"/></section>
      <section className="values"><Value icon="♿" title="Accessible" body="Conçu pour tous"/><Value icon="♥" title="Éthique" body="Respect & bienveillance"/><Value icon="⚡" title="Performant" body="Solutions efficaces"/><Value icon="●" title="Inclusif" body="Personne laissé de côté"/></section>
      <section className="cards">{[
        ['Recherche d’alternance','En reconversion vers le développement web et web mobile.'],
        ['Parcours & expérience','AESH, relation client, administratif et bénévolat.'],
        ['Compétences techniques','HTML5, CSS3, JavaScript, React, accessibilité.'],
        ['Documents','CV et lettre de motivation.']
      ].map((c,i)=><button key={c[0]} onClick={()=>setSlide(['about','journey','skills','docs'][i])}><b>{c[0]}</b><span>{c[1]}</span></button>)}</section>
      <div className="proStar"><Star t={t} target={langUrl('/perso', lang)}/></div>
    </main>
    <LangLine t={t} path="/" />
    {slide && <Slide t={t} lang={lang} name={slide} close={()=>setSlide(null)}/>}  
  </div>
}

function Value({icon,title,body}){return <div><b>{icon}</b><p><strong>{title}</strong><small>{body}</small></p></div>}

function Personal({t, lang}){
  const [slide,setSlide]=useState(null);
  return <div className="personal" dir={t.dir}>
    <Header t={t} lang={lang} personal open={setSlide}/>
    <section className="v1Hero">
      <img src="/assets/fond-personnage-ville-chopper.png" alt="Univers personnel néon" />
      <div className="thoughtTitle">{t.thoughtTitle}</div>
      <div className="thoughtBubble"><p>{t.thought}</p></div>
      <div className="v1Access"><Accessibility t={t} lang={lang}/></div>
      <div className="v1Star"><Star t={t} target={langUrl('/', lang)}/></div>
    </section>
    <LangLine t={t} path="/perso" />
    {slide && <Slide t={t} lang={lang} name={slide} close={()=>setSlide(null)}/>}  
  </div>
}

function Slide({t, lang, name, close}){
  const speak=()=>{
    if(!window.speechSynthesis) return;
    const txt=document.querySelector('.modal')?.innerText || t.speak;
    const u=new SpeechSynthesisUtterance(txt); u.lang=lang==='ar'?'ar-SA':lang==='en'?'en-GB':'fr-FR';
    window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
  };
  const content = {
    about:<><h2>{t.aboutTitle}</h2><img className="modalPhoto" src="/assets/photo-khouloud-originale.jpg" alt="Khouloud"/>{t.aboutParagraphs.map(p=><p key={p}>{p}</p>)}<ul>{t.aboutList.map(x=><li key={x}>{x}</li>)}</ul></>,
    skills:<><h2>{t.skillsTitle}</h2><p>{t.skillsText}</p></>,
    journey:<><h2>{t.journeyTitle}</h2><p>{t.journeyText}</p></>,
    volunteer:<><h2>{t.volunteerTitle}</h2><p>{t.volunteerText}</p></>,
    news:<><h2>{t.newsTitle}</h2><p>{t.newsText}</p></>,
    contact:<><h2>{t.contactTitle}</h2><p><a href="mailto:kcharni@gmail.com">kcharni@gmail.com</a></p><p><a href="tel:+33606696307">06 06 69 63 07</a></p></>,
    docs:<><h2>{t.docsTitle}</h2><p><a href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download>{t.docCv}</a></p><p><a href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download>{t.docLm}</a></p></>
  }[name];
  return <div className="overlay"><aside className="modal"><button className="close" onClick={close}>×</button><button className="audio" onClick={speak}>🔊 Audio</button><Accessibility t={t} lang={lang}/>{content}</aside></div>
}

createRoot(document.getElementById('root')).render(<App/>);

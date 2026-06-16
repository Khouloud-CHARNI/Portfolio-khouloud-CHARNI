import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone, FaDownload,
  FaUniversalAccess, FaVolumeUp, FaBraille, FaHandPaper, FaAdjust,
  FaCode, FaHeart, FaGraduationCap, FaBriefcase, FaUsers, FaTrophy,
  FaMoon, FaRocket
} from 'react-icons/fa'
import './styles.css'

const contacts = {
  phone: '0606696307',
  phoneDisplay: '06 06 69 63 07',
  email: 'kcharni@gmail.com',
  linkedin: 'https://fr.linkedin.com/in/khouloud-charni-137090404',
  github: 'https://github.com/Khouloud-CHARNI',
  whatsapp: 'https://wa.me/33606696307'
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#accueil" aria-label="Accueil du portfolio">
        <img src="/assets/logo-eikyuu.png" alt="Logo Eikyûu" />
      </a>

      <nav aria-label="Navigation principale">
        <a href="#accueil">Accueil</a>
        <a href="#apropos">À propos</a>
        <a href="#competences">Compétences</a>
        <a href="#parcours">Parcours</a>
        <a href="#benevolat">Bénévolat</a>
        <a href="#actualites">Actualités 2026</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="topActions">
        <button className="iconPill" type="button" onClick={() => document.body.classList.toggle('lightMode')} aria-label="Changer le thème"><FaMoon /></button>
        <a className="pill" href="#accessibilite"><FaUniversalAccess /> Accessibilité</a>
        <a className="download" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> Télécharger CV</a>
      </div>
    </header>
  )
}

function AccessibilityTools() {
  const [brailleText, setBrailleText] = useState('Khouloud CHARNI')
  const [contrast, setContrast] = useState(false)
  const braille = useMemo(() => {
    const map = {a:'⠁',b:'⠃',c:'⠉',d:'⠙',e:'⠑',f:'⠋',g:'⠛',h:'⠓',i:'⠊',j:'⠚',k:'⠅',l:'⠇',m:'⠍',n:'⠝',o:'⠕',p:'⠏',q:'⠟',r:'⠗',s:'⠎',t:'⠞',u:'⠥',v:'⠧',w:'⠺',x:'⠭',y:'⠽',z:'⠵',' ':' '}
    return brailleText.toLowerCase().split('').map(c => map[c] || c).join('')
  }, [brailleText])

  function speakSite() {
    if (!window.speechSynthesis) return alert("La lecture sonore n'est pas disponible dans ce navigateur.")
    const text = "Bienvenue sur le portfolio de Khouloud CHARNI. AESH depuis septembre 2024, en reconversion professionnelle vers le développement web et web mobile, admise à 2i Academy Lyon pour un RNCP 5. Ceci est son tout premier portfolio pour vous montrer ses compétences informatiques et elle espère trouver une entreprise pour son alternance qui débute en Septembre 2026"
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text))
  }

  function setHighContrast() {
    const next = !contrast
    setContrast(next)
    document.body.classList.toggle('contrastMode', next)
  }

  function enlargeText() {
    document.documentElement.classList.toggle('largeText')
  }

  return (
    <aside id="accessibilite" className="sidePanel">
      <section className="searchCard">
        <h3>Recherche Alternance</h3>
        <strong>1 an</strong>
        <p>Partout en France</p>
        <div className="miniTags">
          <span>À partir de septembre</span>
          <span>3 semaines Entreprise / 1 semaine école</span>
        </div>
      </section>

      <section className="accessCard">
        <h3>Numérique Inclusif<br />& Accessible</h3>
        <p>Construire des solutions qui donnent de l'autonomie à chacun.</p>

        <button className="toolBtn" onClick={speakSite}>
          <FaVolumeUp /><span><b>Sonore</b><small>Écoutez le contenu du site</small></span>
        </button>

        <a className="toolBtn" href="https://dico.elix-lsf.fr/" target="_blank" rel="noreferrer">
          <FaHandPaper /><span><b>LSF</b><small>Accéder à un dictionnaire LSF</small></span>
        </a>

        <button className="toolBtn" onClick={() => setBrailleText('Portfolio accessible')}>
          <FaBraille /><span><b>Braille</b><small>Afficher une version braille</small></span>
        </button>

        <button className="toolBtn" onClick={setHighContrast}>
          <FaAdjust /><span><b>Contrastes élevés</b><small>Améliorer la lisibilité</small></span>
        </button>

        <button className="toolBtn" onClick={enlargeText}>
          <FaUniversalAccess /><span><b>Texte +</b><small>Agrandir la taille du texte</small></span>
        </button>

        <div className="brailleOutput" aria-live="polite">{braille}</div>
      </section>

      <section className="stickyNote">
        Chaque personne mérite un accès égal au savoir et à la technologie. Construisons ensemble un avenir inclusif.
      </section>
    </aside>
  )
}

function Hero() {
  return (
    <section id="accueil" className="hero cardSurface">
      <div className="heroText">
        <p className="quoteSmall">In this life we don't need to be sorry,<br />just need to be better. ♡</p>
        <h1>Développeuse<br /><span>Web & Mobile</span></h1>
        <p>Je code aujourd'hui les solutions de demain avec passion, rigueur et créativité. ✨</p>
        <div className="heroButtons">
          <a href="#competences">Voir mes compétences</a>
          <a href="#contact" className="ghost">Me contacter</a>
        </div>
        <div className="socials">
          <a href={contacts.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={contacts.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={`mailto:${contacts.email}`} aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>

      <div className="heroVisual" aria-hidden="true">
        <div className="city"></div>
        <div className="coder">
          <div className="hair"></div>
          <div className="face"></div>
          <div className="hoodie">Code.<br/>Create.<br/>Inspire.</div>
        </div>
        <div className="laptop"><span>&lt;/&gt;</span></div>
        <div className="mug">FOCUS<br/>SOURIRE<br/>CONFIANCE</div>
        <motion.div className="thought" initial={{scale:.8, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:.7}}>
          Ma pensée du jour :<br /> Je suis fière d'être autodidacte et vous ? Quel est votre fierté du moment ?
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="apropos" className="about cardSurface">
      <h2>À propos de moi</h2>
      <div className="aboutInner">
        <img className="realPhoto" src="/assets/photo-khouloud-originale.jpg" alt="Photo originale de Khouloud CHARNI" />
        <div>
          <p>AESH actuellement, je suis en reconversion professionnelle vers le développement web et web mobile.</p>
          <p>Curieuse, rigoureuse et déterminée, mon objectif est de transformer ma passion pour le numérique en un métier porteur de sens et d'innovation.</p>
          <p>Je suis admise à 2i Academy à Lyon pour un titre RNCP 5 Développeuse Web et Web Mobile, et je recherche une alternance d'une durée d'un an à partir de septembre.</p>
          <ul className="cleanList">
            <li><FaHeart /> AESH – Accompagnante d'élèves en situation de handicap</li>
            <li><FaGraduationCap /> Bac Littéraire</li>
            <li><FaGraduationCap /> Bac Pro ARCU (Accueil Relation Clients et Usagers)</li>
            <li><FaHeart /> Passion : Code, design, innovation</li>
          </ul>
          <a className="letterBtn" href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download>Lire ma lettre de motivation</a>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const tech = ['HTML 5','CSS3','Node.js','Python','JavaScript','API','React']
  const levels = [
    ['HTML / CSS',90],['JavaScript',80],['React',70],['Node.js',65],['Python',60],['API',60]
  ]
  return (
    <>
      <section className="tech cardSurface">
        <h2>Technologies</h2>
        <ul>{tech.map(t => <li key={t}><FaCode /> {t}</li>)}</ul>
      </section>

      <section id="competences" className="skills cardSurface">
        <h2>Mes compétences</h2>
        {levels.map(([name, level]) => (
          <div className="bar" key={name}>
            <span>{name}</span><em>{level}%</em><i style={{width:`${level}%`}} />
          </div>
        ))}
      </section>

      <section className="soft cardSurface">
        <h2>Soft skills</h2>
        <ul><li>Créativité</li><li>Rigueur</li><li>Communication</li><li>Travail en équipe</li><li>Adaptabilité</li></ul>
      </section>
    </>
  )
}

function Interests() {
  return (
    <>
      <section className="miniCard anime"><h2>Fan d'animes & Kpop ♡</h2><p>Des univers qui inspirent ma passion et ma créativité.</p></section>
      <section className="miniCard sport"><h2>Sportive ♡</h2><ul><li>Musculation</li><li>Cardio</li><li>Danse</li><li>Bien-être mental</li><li>Dépassement de soi</li></ul></section>
      <section className="miniCard aesh"><h2>AESH ♡</h2><p>Un métier qui a du sens, chaque jour.</p><p>Accompagner, soutenir, encourager, valoriser chaque potentiel.</p><div className="aeshIllustration">👩‍🏫 👦 📘</div></section>
    </>
  )
}

function Volunteer() {
  return (
    <section id="benevolat" className="volunteer cardSurface">
      <h2>Bénévolat ♡</h2>
      <div className="volRow"><FaUsers /><p><strong>Bénévole avec Ensemble pour un Repas</strong><br/>Aide à la préparation et à la distribution de repas pour les personnes dans le besoin.</p></div>
      <div className="volRow"><FaHeart /><p><strong>Donatrice pour Ummanitaire Concept</strong><br/>Participation à des collectes et dons pour aider les populations en difficulté.</p></div>
    </section>
  )
}

function Journey() {
  return (
    <section id="parcours" className="journey cardSurface">
      <h2>Parcours</h2>
      <ul className="timeline">
        <li><FaBriefcase /><strong>AESH – Accompagnante d'élèves en situation de handicap</strong><span>Depuis septembre 2024</span></li>
        <li><FaGraduationCap /><strong>Formation à venir – 2i Academy Lyon</strong><span>RNCP 5 Développeuse Web et Web Mobile</span></li>
        <li><FaGraduationCap /><strong>Bac Pro ARCU</strong><span>Accueil Relation Clients et Usagers</span></li>
        <li><FaGraduationCap /><strong>Bac Littéraire</strong></li>
      </ul>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects cardSurface">
      <h2>Mes projets</h2>
      <div className="coming"><FaRocket /><strong>À venir</strong><p>De nouveaux projets verront bientôt le jour. Restez connectés !</p></div>
    </section>
  )
}

function WorldCupPoll() {
  const teams = ['France','Brésil','Argentine','Allemagne','Portugal','Angleterre','Espagne','Autre']
  const [vote, setVote] = useState('')
  const [message, setMessage] = useState('')
  return (
    <section id="actualites" className="poll cardSurface">
      <h2>Coupe du Monde 2026 – Pronostic ⚽</h2>
      <p>Quel pays va gagner la Coupe du Monde 2026 ?</p>
      {teams.map(team => <label key={team}><input type="radio" name="vote" checked={vote===team} onChange={()=>setVote(team)} /> {team}</label>)}
      <button onClick={() => setMessage(vote ? `Vote enregistré : ${vote}` : 'Choisis une équipe avant de voter.')}>Voter</button>
      <a href="#actualites">Voir les résultats →</a>
      {message && <small className="voteMessage">{message}</small>}
      <FaTrophy className="cupIcon" />
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact cardSurface">
      <h2>Me contacter</h2>
      <p>Je suis disponible pour échanger sur vos projets ou opportunités.</p>
      <a href={contacts.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp <span>Envoyer un message</span></a>
      <a href={`tel:+33${contacts.phone.slice(1)}`}><FaPhone /> Téléphone <span>{contacts.phoneDisplay}</span></a>
      <a href={`mailto:${contacts.email}`}><FaEnvelope /> Email <span>{contacts.email}</span></a>
      <a href={contacts.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn <span>Voir mon profil</span></a>
    </section>
  )
}

function Downloads() {
  return (
    <section className="downloads cardSurface">
      <h2>Télécharger mes documents</h2>
      <a href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> Mon CV <span>Format PDF</span></a>
      <a href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download><FaDownload /> Lettre de motivation <span>Format PDF</span></a>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="languages">
        <strong>NOTIONS :</strong> 🇫🇷 Français &nbsp; 🇬🇧 English &nbsp; العربية &nbsp; 🇩🇪 Deutsch<br/>
        <span>Japonais, Mandarin, LSF et Braille</span>
      </div>
      <p>Plus qu'un métier, une vocation. ♡<br/>Construire un monde digital plus inclusif, humain et inspirant. ☆</p>
      <small>© Eikyûu – Portfolio de Khouloud CHARNI – 2026</small>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main className="layout">
        <AccessibilityTools />
        <div className="mainGrid">
          <Hero />
          <About />
          <Skills />
          <Interests />
          <Volunteer />
          <Journey />
          <Projects />
          <WorldCupPoll />
          <Contact />
          <Downloads />
        </div>
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)

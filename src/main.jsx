import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaPhone, FaDownload,
  FaVolumeUp, FaBraille, FaHandPaper, FaAdjust, FaUniversalAccess,
  FaCode, FaHeart, FaGraduationCap, FaBriefcase, FaUsers, FaRocket
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

const sections = {
  competences: "Compétences",
  parcours: "Parcours",
  benevolat: "Bénévolat",
  actualites: "Actualités 2026",
  contact: "Contact",
  documents: "Documents"
};

function speakSite() {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(
    new SpeechSynthesisUtterance(
      "Bienvenue sur le portfolio de Khouloud CHARNI. Portfolio accessible avec outils sonores, braille, langue des signes et contraste."
    )
  );
}

function App() {
  const [slide, setSlide] = useState(null);
  const [vote, setVote] = useState("");
  const [showResults, setShowResults] = useState(false);
  const braille = useMemo(() => "⠏⠕⠗⠞⠋⠕⠇⠊⠕ ⠁⠉⠉⠑⠎⠎⠊⠃⠇⠑", []);

  return (
    <div className="page">
      <header className="nav">
        <a className="brand" href="#accueil"><img src="/assets/logo-eikyuu.png" alt="Eikyûu" /></a>
        <nav>
          <button onClick={() => setSlide(null)}>Accueil</button>
          {Object.entries(sections).map(([key, label]) => (
            <button key={key} onClick={() => setSlide(key)}>{label}</button>
          ))}
        </nav>
        <a className="cvBtn" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> Télécharger CV</a>
      </header>

      <main className="homeOnly" id="accueil">
        <section className="heroFull">
          <div className="skillsCard">
            <h2>Mes compétences</h2>
            <p>Niveau : <b>Novice</b></p>
            <p>J'apprends chaque jour et je progresse avec passion. ✨</p>
            {["HTML5", "CSS3", "Node.js", "Python", "JavaScript (JS)", "API", "JavaScript"].map((t) => (
              <div className="techLine" key={t}><FaCode /> {t}</div>
            ))}
          </div>

          <div className="cityScene">
            <div className="girl"><div className="bun"></div><div className="head"></div><div className="body">Code.<br />Create.<br />Inspire.</div></div>
            <div className="screen">&lt;/&gt;</div>
            <div className="cup">FOCUS<br />SOURIRE<br />CONFIANCE</div>
            <div className="cloud">
              Ma pensée du jour :<br />
              Je suis fière d'être autodidacte !<br />
              Et vous ?<br />
              Quelle est votre fierté du moment ?
            </div>
          </div>

          <div className="statusCard">
            <p>🟢 Disponible pour alternance</p>
            <p>✈️ Mobilité internationale</p>
            <p>🚗 Permis B</p>
            <p>📍 Basée en France</p>
          </div>
        </section>

        <section className="accessHome">
          <div className="accessPanel">
            <h2>Accessibilités handicap</h2>
            <button onClick={speakSite}><FaVolumeUp /> Sonore <small>Lecture du contenu</small></button>
            <a href="https://dico.elix-lsf.fr/" target="_blank" rel="noreferrer"><FaHandPaper /> LSF <small>Dictionnaire LSF</small></a>
            <button><FaBraille /> Braille <small>{braille}</small></button>
            <button onClick={() => document.body.classList.toggle("contrast")}><FaAdjust /> Contrastes élevés</button>
            <button onClick={() => document.documentElement.classList.toggle("largeText")}><FaUniversalAccess /> Texte +</button>
          </div>

          <div className="alternanceBox">
            <h2>Recherche Alternance</h2>
            <strong>1 an</strong>
            <p>Partout en France</p>
            <span>À partir de septembre 2026</span>
            <span>3 semaines Entreprise / 1 semaine école</span>
          </div>

          <div className="aeshPreview">
            <h2>AESH ♡</h2>
            <div className="kid">👩‍🏫 👦 📘</div>
            <p>Un métier qui a du sens : accompagner, soutenir, encourager et valoriser chaque potentiel.</p>
            <button onClick={() => setSlide("parcours")}>Voir mon parcours AESH</button>
          </div>
        </section>
      </main>

      {slide && (
        <div className="overlay">
          <aside className="slidePanel">
            <button className="close" onClick={() => setSlide(null)}>×</button>
            <SlideContent slide={slide} vote={vote} setVote={setVote} showResults={showResults} setShowResults={setShowResults} />
          </aside>
        </div>
      )}

      <footer>
        <p><b>NOTIONS :</b> 🇫🇷 Français · 🇬🇧 English · 🇸🇦 العربية · 🇩🇪 Deutsch</p>
        <p>Plus qu'un métier, une vocation. ♡ Construire un monde digital plus inclusif, humain et inspirant.</p>
      </footer>
    </div>
  );
}

function SlideContent({ slide, vote, setVote, showResults, setShowResults }) {
  if (slide === "competences") return (
    <>
      <h1>Compétences</h1>
      <p>Je suis novice, en reconversion professionnelle, mais je sais utiliser et pratiquer :</p>
      <div className="gridCards">
        {["HTML5", "CSS3", "Node.js", "Python", "JS", "JavaScript", "API", "React"].map((t) => <div className="smallCard" key={t}><FaCode /> {t}</div>)}
      </div>
      <p className="noteText">Mon objectif : progresser chaque jour et transformer mes apprentissages en projets concrets.</p>
    </>
  );

  if (slide === "parcours") return (
    <>
      <h1>Parcours & AESH</h1>
      <img className="aeshImage" src="/assets/banner-reference.jpg" alt="Illustration AESH et enfant" />
      <p><FaBriefcase /> <b>AESH – Accompagnante d'élèves en situation de handicap</b><br />Depuis septembre 2024</p>
      <p>Le métier d'AESH consiste à accompagner les élèves en situation de handicap dans leur autonomie, leur apprentissage, leur confiance et leur inclusion à l'école.</p>
      <p><FaGraduationCap /> <b>Formation à venir – 2i Academy Lyon</b><br />RNCP 5 Développeuse Web et Web Mobile.</p>
      <p><FaGraduationCap /> Bac Littéraire</p>
      <p><FaGraduationCap /> Bac Pro ARCU</p>
    </>
  );

  if (slide === "benevolat") return (
    <>
      <h1>Bénévolat</h1>
      <div className="mission"><FaUsers /><p><b>Ensemble pour un Repas</b><br />Aide à la préparation et à la distribution de repas pour les personnes dans le besoin.</p></div>
      <div className="mission"><FaHeart /><p><b>Ummanitaire Concept</b><br />Donatrice et soutien à des actions solidaires.</p></div>
    </>
  );

  if (slide === "actualites") {
    const results = [
      ["France", "34%"], ["Brésil", "21%"], ["Argentine", "18%"], ["Portugal", "12%"], ["Espagne", "8%"], ["Autre", "7%"]
    ];
    return (
      <>
        <h1>Coupe du Monde 2026</h1>
        <p>Pronostic : quel pays va gagner ?</p>
        {["France", "Brésil", "Argentine", "Allemagne", "Portugal", "Angleterre", "Espagne", "Autre"].map((t) => (
          <label className="voteLine" key={t}><input type="radio" name="vote" checked={vote === t} onChange={() => setVote(t)} /> {t}</label>
        ))}
        <button className="mainBtn" onClick={() => alert(vote ? `Vote enregistré : ${vote}` : "Choisis une équipe avant de voter.")}>Voter</button>
        <button className="ghostBtn" onClick={() => setShowResults(true)}>Voir les résultats</button>
        {showResults && <div className="results">{results.map(([team, score]) => <p key={team}><span>{team}</span><b>{score}</b></p>)}</div>}
      </>
    );
  }

  if (slide === "contact") return (
    <>
      <h1>Contact</h1>
      <a className="contactLine" href={contacts.whatsapp}><FaWhatsapp /> WhatsApp</a>
      <a className="contactLine" href={`tel:+33${contacts.phone.slice(1)}`}><FaPhone /> {contacts.phoneDisplay}</a>
      <a className="contactLine" href={`mailto:${contacts.email}`}><FaEnvelope /> {contacts.email}</a>
      <a className="contactLine" href={contacts.linkedin}><FaLinkedin /> LinkedIn</a>
      <a className="contactLine" href={contacts.github}><FaGithub /> GitHub</a>
    </>
  );

  if (slide === "documents") return (
    <>
      <h1>Documents</h1>
      <a className="contactLine" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> Télécharger mon CV</a>
      <a className="contactLine" href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download><FaDownload /> Télécharger ma lettre de motivation</a>
      <div className="coming"><FaRocket /><h2>Projet à venir</h2><p>De nouveaux projets verront bientôt le jour.</p></div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

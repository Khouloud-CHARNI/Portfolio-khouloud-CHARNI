import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaPhone, FaDownload, FaVolumeUp, FaBraille, FaHandPaper, FaAdjust, FaUniversalAccess, FaCode, FaHeart, FaGraduationCap, FaBriefcase, FaUsers, FaRocket } from "react-icons/fa";
import "./styles.css";

const contacts = {
  phoneDisplay: "06 06 69 63 07",
  phone: "0606696307",
  email: "kcharni@gmail.com",
  linkedin: "https://fr.linkedin.com/in/khouloud-charni-137090404",
  github: "https://github.com/Khouloud-CHARNI",
  whatsapp: "https://wa.me/33606696307",
};

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [vote, setVote] = useState("");
  const braille = useMemo(() => "⠏⠕⠗⠞⠋⠕⠇⠊⠕ ⠁⠉⠉⠑⠎⠎⠊⠃⠇⠑", []);

  function readText() {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Bienvenue sur le portfolio de Khouloud CHARNI. AESH depuis septembre 2024, en reconversion professionnelle vers le développement web et web mobile."));
  }

  return (
    <div className="page">
      <header className="nav">
        <a className="brand" href="#accueil"><img src="/assets/logo-eikyuu.png" alt="Eikyûu" /></a>
        <nav>
          <a href="#accueil">Accueil</a>
          <button onClick={() => setAboutOpen(true)}>À propos</button>
          <a href="#competences">Compétences</a>
          <a href="#parcours">Parcours</a>
          <a href="#benevolat">Bénévolat</a>
          <a href="#actualites">Actualités 2026</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cvBtn" href="/documents/CV-Khouloud-CHARNI-Alternance.pdf" download><FaDownload /> Télécharger CV</a>
      </header>

      <main className="board" id="accueil">
        <aside className="leftCol">
          <section className="panel searchBox">
            <h2>Recherche Alternance</h2>
            <strong>1 an</strong>
            <p>Partout en France</p>
            <span>À partir de septembre</span>
            <span>3 semaines Entreprise / 1 semaine école</span>
          </section>

          <section className="panel accessibility">
            <h2>Numérique Inclusif<br />& Accessible</h2>
            <p>Construire des solutions qui donnent de l'autonomie à chacun.</p>
            <button onClick={readText}><FaVolumeUp /> <b>Sonore</b><small>Écoutez le contenu du site</small></button>
            <a href="https://dico.elix-lsf.fr/" target="_blank" rel="noreferrer"><FaHandPaper /> <b>LSF</b><small>Accéder à un dictionnaire LSF</small></a>
            <button><FaBraille /> <b>Braille</b><small>Afficher une version braille</small></button>
            <button onClick={() => document.body.classList.toggle("contrast")}><FaAdjust /> <b>Contrastes élevés</b><small>Améliorer la lisibilité</small></button>
            <button onClick={() => document.documentElement.classList.toggle("largeText")}><FaUniversalAccess /> <b>Texte +</b><small>Agrandir la taille du texte</small></button>
            <div className="braille">{braille}</div>
          </section>

          <section className="note">Chaque personne mérite un accès égal au savoir et à la technologie. Construisons ensemble un avenir inclusif.</section>
        </aside>

        <section className="hero panel">
          <div className="heroText">
            <p className="quote">In this life we don't need to be sorry,<br />just need to be better. ♡</p>
            <h1>Développeuse<br /><span>Web & Mobile</span></h1>
            <p>Je code aujourd'hui les solutions de demain avec passion, rigueur et créativité. ✨</p>
            <div className="actions">
              <a href="#competences">Voir mes compétences</a>
              <button onClick={() => setAboutOpen(true)}>À propos de moi</button>
            </div>
            <div className="socials">
              <a href={contacts.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href={contacts.github} target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href={`mailto:${contacts.email}`}><FaEnvelope /></a>
            </div>
          </div>

          <div className="scene">
            <div className="girl"><div className="bun"></div><div className="head"></div><div className="body">Code.<br />Create.<br />Inspire.</div></div>
            <div className="screen">&lt;/&gt;</div>
            <div className="cup">FOCUS<br />SOURIRE<br />CONFIANCE</div>
            <div className="cloud">Ma pensée du jour :<br />je t'aime Habibii Baz ♡</div>
          </div>
        </section>

        <section id="competences" className="panel technologies"><h2>Technologies</h2>{["HTML 5","CSS3","Node.js","Python","JavaScript","API","React"].map(t => <p key={t}><FaCode /> {t}</p>)}</section>
        <section className="panel skills"><h2>Mes compétences</h2>{[["HTML / CSS",90],["JavaScript",80],["React",70],["Node.js",65],["Python",60],["API",60]].map(([n,v]) => <div className="bar" key={n}><span>{n}</span><em>{v}%</em><i style={{width:`${v}%`}} /></div>)}</section>
        <section className="panel soft"><h2>Soft skills</h2><p>Créativité</p><p>Rigueur</p><p>Communication</p><p>Travail en équipe</p><p>Adaptabilité</p></section>
        <section className="panel fan"><h2>Fan d'animes & Kpop ♡</h2><p>Des univers qui inspirent ma passion et ma créativité.</p></section>
        <section className="panel sportive"><h2>Sportive ♡</h2><p>Musculation</p><p>Cardio</p><p>Danse</p><p>Bien-être mental</p><p>Dépassement de soi</p></section>
        <section className="panel aesh"><h2>AESH ♡</h2><p>Un métier qui a du sens, chaque jour.</p><p>Accompagner, soutenir, encourager, valoriser chaque potentiel.</p><div className="kid">👩‍🏫 👦 📘</div></section>

        <section id="benevolat" className="panel volunteer"><h2>Bénévolat ♡</h2><p><FaUsers /> <b>Bénévole avec Ensemble pour un Repas</b><br />Aide à la préparation et à la distribution de repas pour les personnes dans le besoin.</p><p><FaHeart /> <b>Donatrice pour Ummanitaire Concept</b><br />Participation à des collectes et dons pour aider les populations en difficulté.</p></section>
        <section id="parcours" className="panel parcours"><h2>Parcours</h2><p><FaBriefcase /> <b>AESH – Accompagnante d'élèves en situation de handicap</b><br />Depuis septembre 2024</p><p><FaGraduationCap /> <b>Formation à venir – 2i Academy Lyon</b><br />RNCP 5 Développeuse Web et Web Mobile</p><p><FaGraduationCap /> Bac Pro ARCU</p><p><FaGraduationCap /> Bac Littéraire</p></section>
        <section className="panel projects"><h2>Mes projets</h2><FaRocket className="rocket" /><h3>À venir</h3><p>De nouveaux projets verront bientôt le jour.</p></section>
        <section id="actualites" className="panel poll"><h2>Coupe du Monde 2026 – Pronostic ⚽</h2>{["France","Brésil","Argentine","Allemagne","Portugal","Angleterre","Espagne","Autre"].map(t => <label key={t}><input type="radio" name="vote" onChange={() => setVote(t)} /> {t}</label>)}<button onClick={() => alert(vote ? `Vote enregistré : ${vote}` : "Choisis une équipe.")}>Voter</button></section>
        <section id="contact" className="panel contact"><h2>Me contacter</h2><a href={contacts.whatsapp}><FaWhatsapp /> WhatsApp</a><a href={`tel:+33${contacts.phone.slice(1)}`}><FaPhone /> {contacts.phoneDisplay}</a><a href={`mailto:${contacts.email}`}><FaEnvelope /> {contacts.email}</a><a href={contacts.linkedin}><FaLinkedin /> LinkedIn</a></section>
      </main>

      {aboutOpen && <div className="overlay" onClick={() => setAboutOpen(false)}><aside className="aboutSlide" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setAboutOpen(false)}>×</button><h2>À propos de moi</h2><img src="/assets/photo-khouloud-originale.jpg" alt="Photo originale de Khouloud CHARNI" /><p>AESH actuellement, je suis en reconversion professionnelle vers le développement web et web mobile.</p><p>Je suis admise à 2i Academy à Lyon pour un titre RNCP 5 Développeuse Web et Web Mobile, et je recherche une alternance d'une durée d'un an à partir de septembre.</p><ul><li>AESH depuis septembre 2024</li><li>Bac Littéraire</li><li>Bac Pro ARCU</li><li>Passion : code, design, innovation</li></ul><a href="/documents/Lettre-Motivation-Khouloud-CHARNI.pdf" download>Lire ma lettre de motivation</a></aside></div>}

      <footer><p><b>NOTIONS :</b> 🇫🇷 Français · 🇬🇧 English · العربية · 🇩🇪 Deutsch</p><p>Plus qu'un métier, une vocation. ♡ Construire un monde digital plus inclusif, humain et inspirant. ☆</p></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

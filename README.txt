PATCH FINAL - FOND PROPRE + VRAIS LIENS

À poser :
1. Remplacer le dossier src.
2. Copier public/assets/fond-personnage-ville-chopper.png dans public/assets.

Puis :
npm run build
git add .
git commit -m "Fond propre et vrais liens langues"
git push origin main

Ce patch :
- rétablit le logo Eikyuu réel,
- remet la navigation et Polyglotte en vrais textes/liens,
- utilise le fond uniquement pour personnage + ville + Chopper,
- supprime le rectangle modifier visible,
- garde la pensée du jour modifiable dans src/main.jsx,
- garde l'accessibilité flottante,
- garde audio dans les sections.

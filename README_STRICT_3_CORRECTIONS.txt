PATCH STRICT - UNIQUEMENT 3 CORRECTIONS

1. Visuel accueil : ajout d'un fond d'écran hero-wallpaper.png avec personnage + ville.
2. À propos : la photo originale est affichée entière, sans découpe, juste redimensionnée.
3. Arabe : l'audio utilise maintenant la langue ar-SA.

À poser :
- Remplacer le dossier src.
- Copier public/assets/hero-wallpaper.png dans public/assets.

Puis :
npm run build
git add .
git commit -m "Corrections strictes visuel photo arabe audio"
git push origin main

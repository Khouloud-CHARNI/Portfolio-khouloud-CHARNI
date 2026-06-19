PATCH TEXTE NUAGE

À faire :
1. Ouvre src/styles.css.
2. Va tout en bas du fichier.
3. Colle le contenu du fichier patch-texte-nuage.css tout à la fin.
4. Enregistre avec Ctrl+S.

Ensuite :
npm run build
git add .
git commit -m "Centre texte pensee du jour"
git push origin main

Ce patch :
- recentre le texte dans le nuage ;
- retire le cœur final ajouté par le code ;
- ne modifie pas le reste du portfolio.

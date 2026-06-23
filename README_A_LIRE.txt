RECTIFICATIF STRICT

Ce correctif ne fait que :
1. déplacer l’étoile V1 néon plus haut au-dessus de Tony Chopper ;
2. remplacer exactement "Développeuse Web & Mobile" par "Développeuse Web et Web Mobile" ;
3. remonter et réduire la pensée du jour pour la faire rentrer dans le nuage.

À faire :
1. Dézippe ce dossier.
2. Mets APPLIQUER_RECTIFICATIF.ps1 dans la racine de ton projet.
3. Dans PowerShell, lance :

powershell -ExecutionPolicy Bypass -File .\APPLIQUER_RECTIFICATIF.ps1

Puis :

npm run build
git add .
git commit -m "Rectificatif etoile texte nuage"
git push origin main

CORRECTIF FINAL STRICT À EXÉCUTER

Ce correctif fait uniquement les 4 demandes :
1. Remplace partout "Développeuse Web & Mobile" par "Développeuse web et web mobile".
2. Met "2i Academy Lyon – RNCP 5" au-dessus de "AESH depuis septembre 2024" dans À propos.
3. Retire le cadre Accessibilité qui cache la photo en V2.
4. Place l'étoile V1 néon au-dessus de Tony Chopper.

DÉMARCHE :
1. Dézippe ce dossier.
2. Copie le fichier APPLIQUER_CORRECTIONS.ps1 dans la racine de ton projet Portfolio-Khouloud-CHARNI.
3. Dans VS Code, ouvre le terminal PowerShell dans ton projet.
4. Lance :

powershell -ExecutionPolicy Bypass -File .\APPLIQUER_CORRECTIONS.ps1

Puis :

npm run build
git add .
git commit -m "Corrections finales appliquees"
git push origin main

Après redéploiement Vercel, actualise avec Ctrl + F5.

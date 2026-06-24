CORRECTION STRICTE

Ce correctif ne modifie que :
1. La pensée du jour pour la remettre dans le nuage.
2. Tous les textes "Développeuse Web & Mobile" vers "Développeuse Web et Web Mobile".
3. La barre de navigation, légèrement plus basse.

À faire :
1. Dézippe ce dossier.
2. Copie APPLIQUER_CORRECTION_STRICTE.ps1 dans la racine de ton projet :
   C:\Users\khoul\Desktop\Portfolio-Khouloud-CHARNI
3. Dans PowerShell, lance :

powershell -ExecutionPolicy Bypass -File .\APPLIQUER_CORRECTION_STRICTE.ps1

Puis :

npm run build
git add .
git commit -m "Correction nuage web mobile navigation"
git push origin main

Après Vercel : Ctrl + F5.

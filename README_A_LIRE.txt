À FAIRE

1. Dézippe ce dossier.
2. Mets le fichier CORRECTION_PORTFOLIO.ps1 dans ton dossier :
   C:\Users\khoul\Desktop\Portfolio-Khouloud-CHARNI

Il doit être au même niveau que :
- package.json
- src
- public

3. Lance dans PowerShell :

powershell -ExecutionPolicy Bypass -File .\CORRECTION_PORTFOLIO.ps1

4. Puis :

npm run build
git add .
git commit -m "Correction finale nuage nav web mobile"
git push origin main

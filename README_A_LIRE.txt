Copie REPARER_BUILD_ET_CORRIGER.ps1 dans la racine du projet puis lance :

powershell -ExecutionPolicy Bypass -File .\REPARER_BUILD_ET_CORRIGER.ps1
npm run build
git add .
git commit -m "Reparation build et corrections visuelles"
git push origin main

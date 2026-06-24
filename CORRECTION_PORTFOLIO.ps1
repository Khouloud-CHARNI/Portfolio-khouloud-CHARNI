# FICHIER CORRECTION A TRANSFERER
# A mettre dans la racine du projet Portfolio-Khouloud-CHARNI
# Puis lancer dans PowerShell :
# powershell -ExecutionPolicy Bypass -File .\CORRECTION_PORTFOLIO.ps1

$mainPath = "src\main.jsx"
$cssPath = "src\styles.css"

if (!(Test-Path $mainPath)) {
  Write-Host "ERREUR : src\main.jsx introuvable." -ForegroundColor Red
  exit
}

if (!(Test-Path $cssPath)) {
  Write-Host "ERREUR : src\styles.css introuvable." -ForegroundColor Red
  exit
}

# 1. Remplacement exact demandé
$files = Get-ChildItem -Path "src" -Recurse -Include *.jsx,*.js,*.css,*.html
foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw -Encoding UTF8
  $content = $content -replace "Développeuse Web & Mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse web & mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse Web et Mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse web et mobile", "Développeuse Web et Web Mobile"
  Set-Content $file.FullName $content -Encoding UTF8
}

# 2. CSS final strict
$css = Get-Content $cssPath -Raw -Encoding UTF8

$patch = @'

/* ===== CORRECTION FINALE STRICTE : NUAGE + NAV + WEB MOBILE ===== */

/* Pensée du jour : texte dans le nuage */
.thoughtBubble{
  top:18.8% !important;
  left:61% !important;
  width:27% !important;
  min-height:13% !important;
  transform:translateX(-50%) !important;
  font-size:clamp(.85rem,1.25vw,1.4rem) !important;
  line-height:1.18 !important;
  padding:0 !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  text-align:center !important;
  z-index:5 !important;
}

.thoughtBubble p{
  margin:.04rem 0 !important;
}

/* Titre : on le garde dans le haut du nuage */
.thoughtTitle{
  top:8.5% !important;
  left:61% !important;
  width:36% !important;
  transform:translateX(-50%) !important;
  text-align:center !important;
}

/* Barre de navigation : on baisse les liens et on masque la barre horizontale grise */
.proNav,
.navBar{
  align-items:center !important;
  min-height:96px !important;
  padding-top:20px !important;
  padding-bottom:14px !important;
  overflow:hidden !important;
}

.proNav nav,
.navBar nav{
  padding-top:14px !important;
  align-items:center !important;
  overflow-x:auto !important;
  scrollbar-width:none !important;
}

.proNav nav::-webkit-scrollbar,
.navBar nav::-webkit-scrollbar{
  display:none !important;
}

/* Mobile */
@media(max-width:900px){
  .thoughtTitle{
    top:8.6% !important;
    left:61% !important;
    width:260px !important;
    font-size:1.5rem !important;
  }

  .thoughtBubble{
    top:18.6% !important;
    left:61% !important;
    width:205px !important;
    min-height:88px !important;
    font-size:.62rem !important;
    line-height:1.14 !important;
  }

  .proNav,
  .navBar{
    min-height:90px !important;
    padding-top:16px !important;
    padding-bottom:12px !important;
  }

  .proNav nav,
  .navBar nav{
    padding-top:10px !important;
  }
}

/* ===== FIN CORRECTION FINALE STRICTE ===== */
'@

if ($css -match "CORRECTION FINALE STRICTE : NUAGE \+ NAV \+ WEB MOBILE") {
  $css = [regex]::Replace($css, '/\* ===== CORRECTION FINALE STRICTE : NUAGE \+ NAV \+ WEB MOBILE ===== \*/[\s\S]*?/\* ===== FIN CORRECTION FINALE STRICTE ===== \*/', $patch)
} else {
  $css = $css + "`n" + $patch
}

Set-Content $cssPath $css -Encoding UTF8

Write-Host "Correction appliquee." -ForegroundColor Green
Write-Host "Lance ensuite :" -ForegroundColor Cyan
Write-Host "npm run build"
Write-Host "git add ."
Write-Host "git commit -m `"Correction finale nuage nav web mobile`""
Write-Host "git push origin main"

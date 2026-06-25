# CORRECTIF SECURISE - 3 POINTS UNIQUEMENT
# 1) Repare src/styles.css si le dernier script l'a casse
# 2) Corrige la pensee du jour dans le nuage
# 3) Remplace "Developpeuse Web & Mobile" par "Developpeuse Web et Web Mobile"
# 4) Baisse la barre de navigation et masque la barre grise
#
# A lancer depuis la racine du projet Portfolio-Khouloud-CHARNI.

$cssPath = "src\styles.css"
$mainPath = "src\main.jsx"

if (!(Test-Path $cssPath)) {
  Write-Host "ERREUR : src\styles.css introuvable. Tu n'es pas dans le bon dossier." -ForegroundColor Red
  exit
}

if (!(Test-Path $mainPath)) {
  Write-Host "ERREUR : src\main.jsx introuvable. Tu n'es pas dans le bon dossier." -ForegroundColor Red
  exit
}

Copy-Item $cssPath "src\styles.css.backup-avant-correctif" -Force
Copy-Item $mainPath "src\main.jsx.backup-avant-correctif" -Force

$cssStart = (Get-Content $cssPath -Raw -Encoding UTF8).TrimStart()
if ($cssStart.StartsWith("{") -or $cssStart.StartsWith('"name"') -or $cssStart -match '"scripts"\s*:') {
  Write-Host "styles.css semble corrompu. Restauration depuis Git..." -ForegroundColor Yellow
  git restore src/styles.css
}

$files = Get-ChildItem -Path "src" -Recurse -File -Include *.jsx,*.js,*.css,*.html
foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw -Encoding UTF8

  $content = $content -replace "Développeuse Web & Mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse web & mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse Web et Mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse web et mobile", "Développeuse Web et Web Mobile"

  Set-Content $file.FullName $content -Encoding UTF8
}

$css = Get-Content $cssPath -Raw -Encoding UTF8

$patch = @'

/* ===== CORRECTIF SECURISE 3 POINTS ===== */

/* 1. Pensee du jour : centree dans le nuage */
.thoughtTitle{
  top:8.5% !important;
  left:62% !important;
  width:38% !important;
  transform:translateX(-50%) !important;
  text-align:center !important;
}

.thoughtBubble{
  top:25.2% !important;
  left:62% !important;
  width:31% !important;
  min-height:10% !important;
  transform:translateX(-50%) !important;
  padding:0 !important;
  font-size:clamp(.78rem,1.08vw,1.22rem) !important;
  line-height:1.12 !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  text-align:center !important;
  z-index:5 !important;
}

.thoughtBubble p{
  margin:0 !important;
}

/* 2. Navigation : liens plus bas, barre grise masquee */
.proNav,
.navBar{
  min-height:96px !important;
  padding-top:22px !important;
  padding-bottom:14px !important;
  align-items:center !important;
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

/* 3. Mobile */
@media(max-width:900px){
  .thoughtTitle{
    top:8.5% !important;
    left:62% !important;
    width:260px !important;
  }

  .thoughtBubble{
    top:24.2% !important;
    left:62% !important;
    width:210px !important;
    min-height:75px !important;
    font-size:.58rem !important;
    line-height:1.1 !important;
  }

  .proNav,
  .navBar{
    min-height:90px !important;
    padding-top:18px !important;
    padding-bottom:12px !important;
  }

  .proNav nav,
  .navBar nav{
    padding-top:10px !important;
  }
}

/* ===== FIN CORRECTIF SECURISE 3 POINTS ===== */
'@

if ($css -match "CORRECTIF SECURISE 3 POINTS") {
  $css = [regex]::Replace($css, '/\* ===== CORRECTIF SECURISE 3 POINTS ===== \*/[\s\S]*?/\* ===== FIN CORRECTIF SECURISE 3 POINTS ===== \*/', $patch)
} else {
  $css = $css + "`n" + $patch
}

Set-Content $cssPath $css -Encoding UTF8

Write-Host ""
Write-Host "Correctif securise applique." -ForegroundColor Green
Write-Host ""
Write-Host "Verification : si rien ne s'affiche sous cette ligne, il ne reste plus d'ancien libelle." -ForegroundColor Yellow
Get-ChildItem -Path "src" -Recurse -File -Include *.jsx,*.js,*.css,*.html |
  Select-String -Pattern "Développeuse Web & Mobile" -ErrorAction SilentlyContinue
Write-Host ""
Write-Host "Lance maintenant :" -ForegroundColor Cyan
Write-Host "npm run build"
Write-Host "git add ."
Write-Host "git commit -m `"Correctif securise nuage nav web mobile`""
Write-Host "git push origin main"

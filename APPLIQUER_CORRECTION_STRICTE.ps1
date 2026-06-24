# CORRECTION STRICTE : ne modifie que 3 choses
# 1. Replacer la pensée du jour dans le nuage
# 2. Remplacer tous les "Développeuse Web & Mobile" par "Développeuse Web et Web Mobile"
# 3. Baisser légèrement la barre de navigation des sections en haut

$mainPath = "src\main.jsx"
$cssPath = "src\styles.css"

if (!(Test-Path $mainPath)) {
  Write-Host "ERREUR : src\main.jsx introuvable. Lance ce script à la racine du projet." -ForegroundColor Red
  exit
}

if (!(Test-Path $cssPath)) {
  Write-Host "ERREUR : src\styles.css introuvable. Lance ce script à la racine du projet." -ForegroundColor Red
  exit
}

$main = Get-Content $mainPath -Raw -Encoding UTF8
$main = $main -replace "Développeuse Web & Mobile", "Développeuse Web et Web Mobile"
$main = $main -replace "Développeuse web & mobile", "Développeuse Web et Web Mobile"
$main = $main -replace "Développeuse Web et Mobile", "Développeuse Web et Web Mobile"
$main = $main -replace "Développeuse web et mobile", "Développeuse Web et Web Mobile"
Set-Content $mainPath $main -Encoding UTF8

$css = Get-Content $cssPath -Raw -Encoding UTF8

$patch = @'

/* ===== CORRECTION STRICTE NUAGE WEBMOBILE NAV ===== */

/* Pensée du jour : replacée dans le nuage visible sur ordinateur */
.thoughtTitle{
  top:9.2% !important;
  left:60.5% !important;
  width:38% !important;
  font-size:clamp(1.8rem,3.4vw,3.7rem) !important;
  text-align:center !important;
}

.thoughtBubble{
  top:30.5% !important;
  left:60.5% !important;
  width:31% !important;
  min-height:13% !important;
  font-size:clamp(.78rem,1.18vw,1.32rem) !important;
  line-height:1.18 !important;
  padding:0 !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  text-align:center !important;
}

.thoughtBubble p{
  margin:.05rem 0 !important;
}

/* Barre de navigation : un peu plus basse et lisible */
.proNav,
.navBar{
  padding-top:18px !important;
  padding-bottom:14px !important;
  min-height:92px !important;
  align-items:center !important;
}

.proNav nav,
.navBar nav{
  padding-top:8px !important;
}

/* Mobile */
@media(max-width:900px){
  .thoughtTitle{
    top:8.8% !important;
    left:59.5% !important;
    width:280px !important;
    font-size:1.55rem !important;
  }

  .thoughtBubble{
    top:28.5% !important;
    left:59.5% !important;
    width:215px !important;
    min-height:92px !important;
    font-size:.62rem !important;
    line-height:1.14 !important;
  }

  .proNav,
  .navBar{
    min-height:86px !important;
    padding-top:14px !important;
    padding-bottom:12px !important;
  }
}

/* ===== FIN CORRECTION STRICTE NUAGE WEBMOBILE NAV ===== */
'@

if ($css -match "CORRECTION STRICTE NUAGE WEBMOBILE NAV") {
  $css = [regex]::Replace($css, '/\* ===== CORRECTION STRICTE NUAGE WEBMOBILE NAV ===== \*/[\s\S]*?/\* ===== FIN CORRECTION STRICTE NUAGE WEBMOBILE NAV ===== \*/', $patch)
} else {
  $css = $css + "`n" + $patch
}

Set-Content $cssPath $css -Encoding UTF8

Write-Host "Correction appliquée : nuage, Web Mobile, navigation." -ForegroundColor Green
Write-Host "Lance maintenant :" -ForegroundColor Cyan
Write-Host "npm run build"
Write-Host "git add ."
Write-Host "git commit -m `"Correction nuage web mobile navigation`""
Write-Host "git push origin main"

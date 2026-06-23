# RECTIFICATIF STRICT
# Ne modifie que :
# 1) l'étoile V1 néon plus haut au-dessus de Tony Chopper
# 2) "Développeuse Web & Mobile" -> "Développeuse Web et Web Mobile"
# 3) la pensée du jour plus haut et plus petite dans le nuage

$mainPath = "src\main.jsx"
$cssPath = "src\styles.css"

if (!(Test-Path $mainPath)) {
  Write-Host "ERREUR : src\main.jsx introuvable. Place ce fichier à la racine du projet." -ForegroundColor Red
  exit
}

if (!(Test-Path $cssPath)) {
  Write-Host "ERREUR : src\styles.css introuvable. Place ce fichier à la racine du projet." -ForegroundColor Red
  exit
}

$main = Get-Content $mainPath -Raw -Encoding UTF8
$main = $main -replace "Développeuse Web & Mobile", "Développeuse Web et Web Mobile"
Set-Content $mainPath $main -Encoding UTF8

$css = Get-Content $cssPath -Raw -Encoding UTF8

$patch = @'

/* ===== RECTIFICATIF STRICT : ETOILE + TEXTE + NUAGE ===== */

/* 1. Étoile V1 néon : plus haut au-dessus de Tony Chopper */
.personalStarZone{
  position:absolute !important;
  right:70px !important;
  bottom:310px !important;
  z-index:9 !important;
}

/* 2. Pensée du jour : beaucoup plus haut, plus petite, dans le nuage */
.thoughtBubble{
  top:17.8% !important;
  left:54.8% !important;
  width:24% !important;
  min-height:12% !important;
  font-size:clamp(.48rem,.74vw,.82rem) !important;
  line-height:1.16 !important;
  padding:0 !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  text-align:center !important;
}

.thoughtBubble p{
  margin:.03rem 0 !important;
}

/* Mobile */
@media(max-width:900px){
  .personalStarZone{
    right:18px !important;
    bottom:235px !important;
  }

  .thoughtBubble{
    top:16.4% !important;
    left:55.5% !important;
    width:190px !important;
    min-height:88px !important;
    font-size:.48rem !important;
    line-height:1.14 !important;
  }
}

/* ===== FIN RECTIFICATIF STRICT ===== */
'@

if ($css -match "RECTIFICATIF STRICT : ETOILE \+ TEXTE \+ NUAGE") {
  $css = [regex]::Replace($css, '/\* ===== RECTIFICATIF STRICT : ETOILE \+ TEXTE \+ NUAGE ===== \*/[\s\S]*?/\* ===== FIN RECTIFICATIF STRICT ===== \*/', $patch)
} else {
  $css = $css + "`n" + $patch
}

Set-Content $cssPath $css -Encoding UTF8

Write-Host "Rectificatif appliqué." -ForegroundColor Green
Write-Host "Lance maintenant :" -ForegroundColor Cyan
Write-Host "npm run build"
Write-Host "git add ."
Write-Host "git commit -m `"Rectificatif etoile texte nuage`""
Write-Host "git push origin main"

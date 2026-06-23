# CORRECTIF STRICT : pensée du jour + étoile uniquement
# Ne touche à rien d'autre.

$cssPath = "src\styles.css"

if (!(Test-Path $cssPath)) {
  Write-Host "ERREUR : src\styles.css introuvable. Place ce fichier à la racine du projet." -ForegroundColor Red
  exit
}

$css = Get-Content $cssPath -Raw -Encoding UTF8

$patch = @'

/* ===== CORRECTIF FINAL PENSEE + ETOILE UNIQUEMENT ===== */

/* Pensée du jour : texte réellement dans le nuage, plus grand */
.thoughtBubble{
  top:12.4% !important;
  left:34.8% !important;
  width:31% !important;
  min-height:16% !important;
  font-size:clamp(.82rem,1.25vw,1.35rem) !important;
  line-height:1.18 !important;
  padding:0 !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  text-align:center !important;
}

.thoughtBubble p{
  margin:.08rem 0 !important;
}

/* Étoile : encore plus haut au-dessus du personnage renne */
.personalStarZone{
  position:absolute !important;
  right:58px !important;
  bottom:385px !important;
  z-index:9 !important;
}

/* Mobile */
@media(max-width:900px){
  .thoughtBubble{
    top:12.8% !important;
    left:35% !important;
    width:245px !important;
    min-height:110px !important;
    font-size:.72rem !important;
    line-height:1.14 !important;
  }

  .personalStarZone{
    right:18px !important;
    bottom:285px !important;
  }
}

/* ===== FIN CORRECTIF FINAL PENSEE + ETOILE UNIQUEMENT ===== */
'@

if ($css -match "CORRECTIF FINAL PENSEE \+ ETOILE UNIQUEMENT") {
  $css = [regex]::Replace($css, '/\* ===== CORRECTIF FINAL PENSEE \+ ETOILE UNIQUEMENT ===== \*/[\s\S]*?/\* ===== FIN CORRECTIF FINAL PENSEE \+ ETOILE UNIQUEMENT ===== \*/', $patch)
} else {
  $css = $css + "`n" + $patch
}

Set-Content $cssPath $css -Encoding UTF8

Write-Host "Correction pensée du jour + étoile appliquée." -ForegroundColor Green
Write-Host "Lance maintenant :" -ForegroundColor Cyan
Write-Host "npm run build"
Write-Host "git add ."
Write-Host "git commit -m `"Correction pensee du jour et etoile`""
Write-Host "git push origin main"

# CORRECTIF FINAL STRICT - Portfolio Khouloud
# A lancer dans PowerShell depuis la racine du projet Portfolio-Khouloud-CHARNI

$mainPath = "src\main.jsx"
$cssPath = "src\styles.css"

if (!(Test-Path $mainPath)) {
  Write-Host "ERREUR : src\main.jsx introuvable. Ouvre PowerShell dans le dossier du portfolio." -ForegroundColor Red
  exit
}

if (!(Test-Path $cssPath)) {
  Write-Host "ERREUR : src\styles.css introuvable. Ouvre PowerShell dans le dossier du portfolio." -ForegroundColor Red
  exit
}

$main = Get-Content $mainPath -Raw -Encoding UTF8

# 1) Remplacer partout "Développeuse Web & Mobile" par "Développeuse web et web mobile"
$main = $main -replace "Développeuse Web & Mobile", "Développeuse web et web mobile"
$main = $main -replace "Développeuse web & mobile", "Développeuse web et web mobile"
$main = $main -replace "Développeuse Web et Mobile", "Développeuse web et web mobile"
$main = $main -replace "Développeuse web et mobile", "Développeuse web et web mobile"
$main = $main -replace "développement web et mobile", "développement web et web mobile"
$main = $main -replace "Développement web et mobile", "Développement web et web mobile"

# 2) Dans À propos : RNCP avant AESH
$main = $main -replace '<li>AESH depuis septembre 2024</li>\s*<li>Bac Littéraire</li>\s*<li>Bac Pro ARCU</li>\s*<li>2i Academy Lyon – RNCP 5</li>', '<li>2i Academy Lyon – RNCP 5</li>
        <li>AESH depuis septembre 2024</li>
        <li>Bac Littéraire</li>
        <li>Bac Pro ARCU</li>'

# 3) Retirer le cadre screenCard dans le JSX s'il existe
$main = [regex]::Replace($main, '\s*<div className="screenCard">[\s\S]*?<div className="screenIcons">[\s\S]*?</div>\s*</div>', '')

Set-Content $mainPath $main -Encoding UTF8

$css = Get-Content $cssPath -Raw -Encoding UTF8

# 4) Ajouter les corrections CSS en dernier pour forcer le navigateur
$patch = @'

/* ===== CORRECTIF FINAL STRICT KHOULOUD ===== */

/* Retire le cadre Accessibilité qui cache la photo en V2 */
.screenCard{
  display:none !important;
  visibility:hidden !important;
  opacity:0 !important;
  pointer-events:none !important;
}

/* Étoile V1 néon placée au-dessus de Tony Chopper */
.personalStarZone{
  position:absolute !important;
  right:64px !important;
  bottom:235px !important;
  z-index:9 !important;
}

.personalStarZone .starPortal{
  width:145px !important;
  height:145px !important;
}

.personalStarZone .starPortal span{
  max-width:100px !important;
  font-size:.72rem !important;
  line-height:1.15 !important;
}

/* Pensée du jour dans le nuage */
.thoughtBubble{
  top:23.8% !important;
  left:55.2% !important;
  width:23% !important;
  min-height:13% !important;
  font-size:clamp(.56rem,.88vw,.95rem) !important;
  line-height:1.2 !important;
  padding:0 !important;
}

@media(max-width:900px){
  .personalStarZone{
    right:18px !important;
    bottom:170px !important;
  }

  .personalStarZone .starPortal{
    width:120px !important;
    height:120px !important;
  }

  .personalStarZone .starPortal span{
    max-width:86px !important;
    font-size:.62rem !important;
  }

  .thoughtBubble{
    top:21.8% !important;
    left:56% !important;
    width:205px !important;
    min-height:105px !important;
    font-size:.56rem !important;
  }
}

/* ===== FIN CORRECTIF FINAL STRICT KHOULOUD ===== */
'@

if ($css -notmatch "CORRECTIF FINAL STRICT KHOULOUD") {
  $css = $css + "`n" + $patch
} else {
  $css = [regex]::Replace($css, '/\* ===== CORRECTIF FINAL STRICT KHOULOUD ===== \*/[\s\S]*?/\* ===== FIN CORRECTIF FINAL STRICT KHOULOUD ===== \*/', $patch)
}

Set-Content $cssPath $css -Encoding UTF8

Write-Host "Corrections appliquées." -ForegroundColor Green
Write-Host "Vérification :" -ForegroundColor Yellow
Select-String -Path $mainPath -Pattern "Développeuse web et web mobile"
Select-String -Path $mainPath -Pattern "2i Academy Lyon – RNCP 5"
Write-Host "Maintenant lance :" -ForegroundColor Cyan
Write-Host "npm run build"
Write-Host "git add ."
Write-Host "git commit -m `"Corrections finales appliquees`""
Write-Host "git push origin main"

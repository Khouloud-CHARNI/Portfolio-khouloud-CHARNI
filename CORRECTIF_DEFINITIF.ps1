# CORRECTIF DEFINITIF 3 POINTS UNIQUEMENT
# 1) Recentrer la pensée du jour dans le nuage
# 2) Remplacer partout "Développeuse Web & Mobile" par "Développeuse Web et Web Mobile"
# 3) Baisser la navigation et masquer la barre grise
#
# À lancer depuis la racine du projet Portfolio-Khouloud-CHARNI :
# powershell -ExecutionPolicy Bypass -File .\CORRECTIF_DEFINITIF.ps1

$cssPath = "src\styles.css"

if (!(Test-Path $cssPath)) {
  Write-Host "ERREUR : src\styles.css introuvable. Tu dois lancer ce fichier dans le dossier racine du portfolio." -ForegroundColor Red
  exit
}

# 1) Remplacer le texte partout dans le projet, pas seulement dans src
$extensions = @("*.jsx", "*.js", "*.css", "*.html", "*.json", "*.md")
$files = Get-ChildItem -Path "." -Recurse -File -Include $extensions |
  Where-Object {
    $_.FullName -notmatch "\\node_modules\\" -and
    $_.FullName -notmatch "\\dist\\" -and
    $_.FullName -notmatch "\\.git\\"
  }

foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw -Encoding UTF8

  $content = $content -replace "Développeuse Web & Mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse web & mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse Web et Mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse web et mobile", "Développeuse Web et Web Mobile"

  Set-Content $file.FullName $content -Encoding UTF8
}

# 2) CSS : uniquement nuage + navigation
$css = Get-Content $cssPath -Raw -Encoding UTF8

$patch = @'

/* ===== CORRECTIF DEFINITIF 3 POINTS ===== */

/* 1) Pensée du jour : texte DANS le nuage */
.thoughtTitle{
  top:8.6% !important;
  left:61.8% !important;
  width:38% !important;
  transform:translateX(-50%) !important;
  text-align:center !important;
}

.thoughtBubble{
  top:20.6% !important;
  left:61.8% !important;
  width:29% !important;
  min-height:10% !important;
  transform:translateX(-50%) !important;
  padding:0 !important;
  font-size:clamp(.68rem,1.02vw,1.12rem) !important;
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

/* 2) Navigation : liens plus bas + plus de barre grise visible */
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
  padding-top:16px !important;
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
    top:8.5% !important;
    left:61.5% !important;
    width:260px !important;
  }

  .thoughtBubble{
    top:19.8% !important;
    left:61.5% !important;
    width:205px !important;
    min-height:78px !important;
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
    padding-top:12px !important;
  }
}

/* ===== FIN CORRECTIF DEFINITIF 3 POINTS ===== */
'@

if ($css -match "CORRECTIF DEFINITIF 3 POINTS") {
  $css = [regex]::Replace($css, '/\* ===== CORRECTIF DEFINITIF 3 POINTS ===== \*/[\s\S]*?/\* ===== FIN CORRECTIF DEFINITIF 3 POINTS ===== \*/', $patch)
} else {
  $css = $css + "`n" + $patch
}

Set-Content $cssPath $css -Encoding UTF8

Write-Host ""
Write-Host "Correctif appliqué." -ForegroundColor Green
Write-Host ""
Write-Host "Vérification des restes éventuels :" -ForegroundColor Yellow
Select-String -Path ".\*" -Recurse -Pattern "Développeuse Web & Mobile" -ErrorAction SilentlyContinue | Where-Object { $_.Path -notmatch "node_modules|dist|\.git" }
Write-Host ""
Write-Host "Lance maintenant :" -ForegroundColor Cyan
Write-Host "npm run build"
Write-Host "git add ."
Write-Host "git commit -m `"Correctif definitif nuage nav web mobile`""
Write-Host "git push origin main"

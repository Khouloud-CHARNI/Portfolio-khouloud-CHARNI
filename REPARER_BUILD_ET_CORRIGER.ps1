# REPARATION BUILD POSTCSS / VITE
# A lancer a la racine du projet Portfolio-Khouloud-CHARNI

$cssPath = "src\styles.css"
$pkgPath = "package.json"

if (!(Test-Path $cssPath)) {
  Write-Host "ERREUR : src\styles.css introuvable." -ForegroundColor Red
  exit
}

if (!(Test-Path $pkgPath)) {
  Write-Host "ERREUR : package.json introuvable." -ForegroundColor Red
  exit
}

Copy-Item $cssPath "src\styles.css.sauvegarde-erreur" -Force
Copy-Item $pkgPath "package.json.sauvegarde-erreur" -Force

# 1) Si package.json contient un champ postcss qui pointe vers styles.css, on le retire.
try {
  $pkg = Get-Content $pkgPath -Raw -Encoding UTF8 | ConvertFrom-Json
  if ($pkg.PSObject.Properties.Name -contains "postcss") {
    Write-Host "Champ postcss trouve dans package.json : suppression." -ForegroundColor Yellow
    $pkg.PSObject.Properties.Remove("postcss")
    $pkg | ConvertTo-Json -Depth 20 | Set-Content $pkgPath -Encoding UTF8
  }
} catch {
  Write-Host "package.json est invalide. Restauration depuis Git." -ForegroundColor Yellow
  git restore package.json
}

# 2) On restaure styles.css depuis Git, car Vite le lit comme JSON actuellement.
Write-Host "Restauration de src/styles.css depuis Git..." -ForegroundColor Yellow
git restore src/styles.css

# 3) On ajoute seulement les corrections CSS, sans toucher au JSON.
$css = Get-Content $cssPath -Raw -Encoding UTF8

$patch = @'

/* ===== CORRECTION VISUELLE STRICTE ===== */

/* Pensée du jour : dans le nuage */
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

/* Navigation : liens plus bas et barre grise masquee */
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

/* Mobile */
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

/* ===== FIN CORRECTION VISUELLE STRICTE ===== */
'@

if ($css -notmatch "CORRECTION VISUELLE STRICTE") {
  $css = $css + "`n" + $patch
}

Set-Content $cssPath $css -Encoding UTF8

# 4) Remplacement texte exact dans src uniquement.
$files = Get-ChildItem -Path "src" -Recurse -File -Include *.jsx,*.js,*.css,*.html
foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw -Encoding UTF8
  $content = $content -replace "Développeuse Web & Mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse web & mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse Web et Mobile", "Développeuse Web et Web Mobile"
  $content = $content -replace "Développeuse web et mobile", "Développeuse Web et Web Mobile"
  Set-Content $file.FullName $content -Encoding UTF8
}

Write-Host ""
Write-Host "Reparation appliquee." -ForegroundColor Green
Write-Host "Lance maintenant :" -ForegroundColor Cyan
Write-Host "npm run build"
Write-Host "git add ."
Write-Host "git commit -m `"Reparation build et corrections visuelles`""
Write-Host "git push origin main"

# REPARATION BUILD VITE
# Répare uniquement l'erreur actuelle : styles.css contient du JSON.

$css = "src\styles.css"

if (!(Test-Path $css)) {
    Write-Host "ERREUR : src\styles.css introuvable." -ForegroundColor Red
    exit
}

$content = Get-Content $css -Raw -Encoding UTF8

# Si styles.css commence par du JSON, on le restaure depuis Git
if ($content.TrimStart().StartsWith("{") -or $content -match '"name"\s*:') {
    Write-Host "styles.css est corrompu par du JSON. Restauration..." -ForegroundColor Yellow
    git restore src/styles.css
    Write-Host "styles.css restauré." -ForegroundColor Green
}
else {
    Write-Host "styles.css semble déjà être du CSS valide." -ForegroundColor Green
}

Write-Host ""
Write-Host "Ensuite exécute :" -ForegroundColor Cyan
Write-Host "npm run build"

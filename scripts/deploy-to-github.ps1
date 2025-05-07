# PowerShell script to deploy to GitHub Pages

# Build the project
Write-Host "Building the project..." -ForegroundColor Green
npm run build

# Fix paths
Write-Host "Fixing paths..." -ForegroundColor Green
npm run fix-paths

# Copy assets
Write-Host "Copying assets..." -ForegroundColor Green
npm run copy-assets

# Create .nojekyll file
Write-Host "Creating .nojekyll file..." -ForegroundColor Green
New-Item -Path "out/.nojekyll" -ItemType File -Force | Out-Null

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Green
git add out/.nojekyll
git add -f out/

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
Write-Host "Pushing to gh-pages branch..." -ForegroundColor Green
git subtree push --prefix out origin gh-pages

Write-Host "Successfully deployed to GitHub Pages!" -ForegroundColor Green

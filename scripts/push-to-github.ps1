# PowerShell script to push to GitHub

# Add all files
git add .

# Commit changes
git commit -m "Fix styling and prepare for Vercel deployment"

# Push to GitHub
git push origin main

Write-Host "Successfully pushed to GitHub!"

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Main function
async function main() {
  try {
    console.log('Starting fallback deployment process...');
    
    // Create a temporary directory
    const tempDir = path.join(__dirname, '../temp-deploy');
    await fs.ensureDir(tempDir);
    console.log('Created temporary directory');
    
    // Copy the fallback HTML file
    await fs.copy(
      path.join(__dirname, '../public/fallback.html'),
      path.join(tempDir, 'index.html')
    );
    console.log('Copied fallback.html to index.html');
    
    // Copy the .nojekyll file
    await fs.writeFile(path.join(tempDir, '.nojekyll'), '');
    console.log('Created .nojekyll file');
    
    // Copy images directory
    await fs.copy(
      path.join(__dirname, '../public/images'),
      path.join(tempDir, 'images')
    );
    console.log('Copied images directory');
    
    // Deploy to GitHub Pages
    console.log('Deploying to GitHub Pages...');
    execSync('npx gh-pages -d temp-deploy', { stdio: 'inherit' });
    
    // Clean up
    await fs.remove(tempDir);
    console.log('Cleaned up temporary directory');
    
    console.log('Fallback deployment completed successfully!');
  } catch (err) {
    console.error('Error during fallback deployment:', err);
    process.exit(1);
  }
}

main();

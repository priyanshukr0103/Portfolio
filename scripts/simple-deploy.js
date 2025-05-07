const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Repository name
const repoName = 'Portfolio';

// Function to copy CSS files to the out directory
async function copyCssFiles() {
  try {
    console.log('Copying CSS files...');

    // Create the destination directory
    await fs.ensureDir(path.join(__dirname, '../out'));

    // Copy globals.css
    await fs.copy(
      path.join(__dirname, '../app/globals.css'),
      path.join(__dirname, '../out/globals.css')
    );
    console.log('Copied globals.css');

    // Copy styles.css
    await fs.copy(
      path.join(__dirname, '../app/styles.css'),
      path.join(__dirname, '../out/styles.css')
    );
    console.log('Copied styles.css');

    // Create .nojekyll file
    await fs.writeFile(path.join(__dirname, '../out/.nojekyll'), '');
    console.log('Created .nojekyll file');

    // Copy resume file
    if (fs.existsSync(path.join(__dirname, '../public/TarangBhargava_resume.pdf'))) {
      await fs.copy(
        path.join(__dirname, '../public/TarangBhargava_resume.pdf'),
        path.join(__dirname, '../out/TarangBhargava_resume.pdf')
      );
      console.log('Copied resume file');
    }

    // Copy public directory
    await fs.copy(
      path.join(__dirname, '../public'),
      path.join(__dirname, '../out')
    );
    console.log('Copied public directory');

  } catch (err) {
    console.error('Error copying files:', err);
  }
}

// Function to modify HTML files to include CSS links
async function modifyHtmlFiles() {
  try {
    console.log('Modifying HTML files...');

    const indexPath = path.join(__dirname, '../out/index.html');

    if (fs.existsSync(indexPath)) {
      let content = await fs.readFile(indexPath, 'utf8');

      // Add CSS links
      const cssLinks = `
<link rel="stylesheet" href="globals.css" />
<link rel="stylesheet" href="styles.css" />
`;

      // Add to head
      content = content.replace('</head>', `${cssLinks}</head>`);

      await fs.writeFile(indexPath, content);
      console.log('Modified index.html');
    }

  } catch (err) {
    console.error('Error modifying HTML files:', err);
  }
}

// Main function
async function main() {
  try {
    // Deploy to GitHub Pages
    console.log('Deploying to GitHub Pages...');
    execSync('npx gh-pages -d out', { stdio: 'inherit' });

    console.log('Deployment completed successfully!');
  } catch (err) {
    console.error('Error during deployment:', err);
    process.exit(1);
  }
}

// Run the script
copyCssFiles()
  .then(() => modifyHtmlFiles())
  .then(() => main())
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });

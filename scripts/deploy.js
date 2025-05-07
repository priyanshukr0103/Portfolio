const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Repository name - change this to your GitHub repository name
const repoName = 'Portfolio';

// Function to copy CSS files
async function copyCssFiles() {
  try {
    console.log('Copying CSS files...');
    
    // Ensure the destination directory exists
    await fs.ensureDir(path.join(__dirname, '../out/Portfolio'));
    
    // Copy globals.css
    await fs.copy(
      path.join(__dirname, '../app/globals.css'),
      path.join(__dirname, '../out/Portfolio/globals.css')
    );
    console.log('Copied globals.css');
    
    // Copy styles.css if it exists
    if (fs.existsSync(path.join(__dirname, '../app/styles.css'))) {
      await fs.copy(
        path.join(__dirname, '../app/styles.css'),
        path.join(__dirname, '../out/Portfolio/styles.css')
      );
      console.log('Copied styles.css');
    }
    
    // Copy all CSS files from app directory
    const cssFiles = await findCssFiles(path.join(__dirname, '../app'));
    for (const cssFile of cssFiles) {
      const relativePath = path.relative(path.join(__dirname, '../app'), cssFile);
      const destPath = path.join(__dirname, '../out/Portfolio', relativePath);
      await fs.ensureDir(path.dirname(destPath));
      await fs.copy(cssFile, destPath);
      console.log(`Copied ${relativePath}`);
    }
    
    // Copy public directory
    await fs.copy(
      path.join(__dirname, '../public'),
      path.join(__dirname, '../out/Portfolio')
    );
    console.log('Copied public directory');
  } catch (err) {
    console.error('Error copying assets:', err);
  }
}

// Function to find all CSS files
async function findCssFiles(dir, fileList = []) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory()) {
      await findCssFiles(filePath, fileList);
    } else if (path.extname(file) === '.css') {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Function to create a .nojekyll file
async function createNojekyllFile() {
  try {
    console.log('Creating .nojekyll file...');
    await fs.writeFile(path.join(__dirname, '../out/.nojekyll'), '');
    console.log('Created .nojekyll file');
  } catch (err) {
    console.error('Error creating .nojekyll file:', err);
  }
}

// Function to create a custom 404.html file
async function create404File() {
  try {
    console.log('Creating 404.html file...');
    const content = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      // Single Page Apps for GitHub Pages
      // https://github.com/rafgraph/spa-github-pages
      // This script takes the current URL and converts the path and query
      // string into just a query string, and then redirects the browser
      // to the new URL with only a query string and hash fragment.
      var pathSegmentsToKeep = 1; // Keeps the repository name
      
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?p=/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    <h1>Redirecting...</h1>
    <a href="/${repoName}/">Click here if you are not redirected automatically</a>
  </body>
</html>
    `;
    
    await fs.writeFile(path.join(__dirname, '../out/404.html'), content);
    console.log('Created 404.html file');
  } catch (err) {
    console.error('Error creating 404.html file:', err);
  }
}

// Function to add inline styles to HTML files
async function addInlineStyles() {
  try {
    console.log('Adding inline styles to HTML files...');
    const htmlFiles = await findHtmlFiles(path.join(__dirname, '../out'));
    
    for (const htmlFile of htmlFiles) {
      let content = await fs.readFile(htmlFile, 'utf8');
      
      // Add inline styles
      const inlineStyles = `
<style>
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }
  a { color: #0070f3; text-decoration: none; }
  a:hover { text-decoration: underline; }
</style>
      `;
      
      // Add CSS links
      const cssLinks = `
<link rel="stylesheet" href="/${repoName}/globals.css" />
<link rel="stylesheet" href="/${repoName}/styles.css" />
      `;
      
      // Add base tag
      const baseTag = `<base href="/${repoName}/" />`;
      
      // Add to head
      if (!content.includes('<base')) {
        content = content.replace('</head>', `${baseTag}</head>`);
      }
      
      content = content.replace('</head>', `${inlineStyles}</head>`);
      content = content.replace('</head>', `${cssLinks}</head>`);
      
      await fs.writeFile(htmlFile, content);
      console.log(`Added inline styles to ${path.relative(path.join(__dirname, '../out'), htmlFile)}`);
    }
  } catch (err) {
    console.error('Error adding inline styles:', err);
  }
}

// Function to find all HTML files
async function findHtmlFiles(dir, fileList = []) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory()) {
      await findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === '.html') {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Main function
async function main() {
  try {
    console.log('Starting deployment process...');
    
    // Build the project
    console.log('Building the project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Create .nojekyll file
    await createNojekyllFile();
    
    // Create 404.html file
    await create404File();
    
    // Copy CSS files
    await copyCssFiles();
    
    // Add inline styles
    await addInlineStyles();
    
    // Deploy to GitHub Pages
    console.log('Deploying to GitHub Pages...');
    execSync('npx gh-pages -d out', { stdio: 'inherit' });
    
    console.log('Deployment completed successfully!');
  } catch (err) {
    console.error('Error during deployment:', err);
    process.exit(1);
  }
}

main();

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Function to copy CSS files to the out directory
async function copyCssFiles() {
  try {
    console.log('Copying CSS files...');
    
    // Create the destination directory
    await fs.ensureDir(path.join(__dirname, '../out'));
    
    // Copy globals.css
    if (fs.existsSync(path.join(__dirname, '../app/globals.css'))) {
      await fs.copy(
        path.join(__dirname, '../app/globals.css'),
        path.join(__dirname, '../out/globals.css')
      );
      console.log('Copied globals.css');
    }
    
    // Copy styles.css
    if (fs.existsSync(path.join(__dirname, '../app/styles.css'))) {
      await fs.copy(
        path.join(__dirname, '../app/styles.css'),
        path.join(__dirname, '../out/styles.css')
      );
      console.log('Copied styles.css');
    }
    
    // Copy all CSS files from .next/static/css to out/_next/static/css
    if (fs.existsSync(path.join(__dirname, '../.next/static/css'))) {
      await fs.copy(
        path.join(__dirname, '../.next/static/css'),
        path.join(__dirname, '../out/_next/static/css')
      );
      console.log('Copied CSS files from .next/static/css to out/_next/static/css');
    }
  } catch (err) {
    console.error('Error copying CSS files:', err);
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

// Function to create a vercel.json file
async function createVercelConfig() {
  try {
    console.log('Creating vercel.json...');
    
    const vercelConfig = {
      "version": 2,
      "builds": [
        {
          "src": "package.json",
          "use": "@vercel/next"
        }
      ],
      "routes": [
        {
          "src": "/styles.css",
          "dest": "/styles.css"
        },
        {
          "src": "/globals.css",
          "dest": "/globals.css"
        },
        {
          "src": "/_next/static/(.*)",
          "dest": "/_next/static/$1"
        },
        {
          "src": "/images/(.*)",
          "dest": "/images/$1"
        },
        {
          "src": "/(.*)",
          "dest": "/$1"
        }
      ]
    };
    
    await fs.writeFile(
      path.join(__dirname, '../vercel.json'),
      JSON.stringify(vercelConfig, null, 2)
    );
    console.log('Created vercel.json');
  } catch (err) {
    console.error('Error creating vercel.json:', err);
  }
}

// Main function
async function main() {
  try {
    console.log('Starting Vercel deployment preparation...');
    
    // Build the project
    console.log('Building the project...');
    execSync('next build', { stdio: 'inherit' });
    
    // Copy CSS files
    await copyCssFiles();
    
    // Modify HTML files
    await modifyHtmlFiles();
    
    // Create vercel.json
    await createVercelConfig();
    
    console.log('Vercel deployment preparation completed successfully!');
  } catch (err) {
    console.error('Error during Vercel deployment preparation:', err);
    process.exit(1);
  }
}

main();

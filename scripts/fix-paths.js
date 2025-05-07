const fs = require('fs');
const path = require('path');

// Repository name - change this to your GitHub repository name
const repoName = 'Portfolio';

// Function to recursively find all HTML and CSS files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findFiles(filePath, fileList);
    } else if (path.extname(file) === '.html' || path.extname(file) === '.css' || path.extname(file) === '.js') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to fix paths in files
function fixPaths(files) {
  files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(filePath);

    // Fix paths in HTML files
    if (ext === '.html') {
      // Fix Next.js asset paths
      content = content.replace(/"\/_next\//g, `"/${repoName}/_next/`);
      content = content.replace(/'\/_next\//g, `'/${repoName}/_next/`);

      // Fix image and other asset paths
      content = content.replace(/"\/(images|fonts|assets|icons|favicon\.ico)/g, `"/${repoName}/$1`);
      content = content.replace(/'\/(images|fonts|assets|icons|favicon\.ico)/g, `'/${repoName}/$1`);

      // Fix CSS paths
      content = content.replace(/<link rel="stylesheet" href="\//g, `<link rel="stylesheet" href="/${repoName}/`);
      content = content.replace(/<link rel="stylesheet" href="_next/g, `<link rel="stylesheet" href="/${repoName}/_next`);

      // Fix script paths
      content = content.replace(/<script src="\//g, `<script src="/${repoName}/`);
      content = content.replace(/<script src="_next/g, `<script src="/${repoName}/_next`);

      // Add base tag if not present
      if (!content.includes('<base')) {
        content = content.replace('</head>', `<base href="/${repoName}/" /></head>`);
      }

      // Add inline CSS for basic styling
      const inlineStyles = `
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
          color: #333;
        }
        a { color: #0070f3; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        .card { background: white; border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
      </style>
      `;

      content = content.replace('</head>', `${inlineStyles}</head>`);

      // Add direct link to CSS files
      const cssLinks = `
      <link rel="stylesheet" href="${repoName}/globals.css" />
      <link rel="stylesheet" href="${repoName}/styles.css" />
      `;

      content = content.replace('</head>', `${cssLinks}</head>`);
    }

    // Fix paths in CSS files
    if (ext === '.css') {
      content = content.replace(/url\(\//g, `url(/${repoName}/`);
      content = content.replace(/url\("\//g, `url("/${repoName}/`);
      content = content.replace(/url\('\//g, `url('/${repoName}/`);
    }

    // Fix paths in JS files
    if (ext === '.js') {
      content = content.replace(/"\/_next\//g, `"/${repoName}/_next/`);
      content = content.replace(/'\/_next\//g, `'/${repoName}/_next/`);
      content = content.replace(/"\/(images|fonts|assets|icons|favicon\.ico)/g, `"/${repoName}/$1`);
      content = content.replace(/'\/(images|fonts|assets|icons|favicon\.ico)/g, `'/${repoName}/$1`);

      // Fix image paths in JS
      content = content.replace(/"\/images\//g, `"/${repoName}/images/`);
      content = content.replace(/'\/images\//g, `'/${repoName}/images/`);
    }

    fs.writeFileSync(filePath, content);
    console.log(`Fixed paths in ${filePath}`);
  });
}

// Create a 404.html file that redirects to index.html
function create404Redirect(outDir) {
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

  fs.writeFileSync(path.join(outDir, '404.html'), content);
  console.log('Created 404.html redirect file');
}

// Add a script to handle SPA routing
function addSpaRouting(outDir) {
  const indexPath = path.join(outDir, 'index.html');
  let content = fs.readFileSync(indexPath, 'utf8');

  const routingScript = `
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) {
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
  `;

  // Add the routing script before the closing head tag
  content = content.replace('</head>', routingScript + '</head>');
  fs.writeFileSync(indexPath, content);
  console.log('Added SPA routing script to index.html');
}

// Main function
function main() {
  const outDir = path.join(__dirname, '..', 'out');

  if (!fs.existsSync(outDir)) {
    console.error('The "out" directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }

  const files = findFiles(outDir);
  fixPaths(files);
  create404Redirect(outDir);
  addSpaRouting(outDir);

  console.log(`\nFixed paths in ${files.length} files.`);
}

main();

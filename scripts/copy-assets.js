const fs = require('fs-extra');
const path = require('path');

// Copy CSS files
async function copyCssFiles() {
  try {
    // Ensure the destination directory exists
    await fs.ensureDir(path.join(__dirname, '../out/Portfolio'));

    // Copy globals.css
    await fs.copy(
      path.join(__dirname, '../app/globals.css'),
      path.join(__dirname, '../out/Portfolio/globals.css')
    );
    console.log('Copied globals.css');

    // Copy styles.css
    await fs.copy(
      path.join(__dirname, '../app/styles.css'),
      path.join(__dirname, '../out/Portfolio/styles.css')
    );
    console.log('Copied styles.css');

    // Copy public directory
    await fs.copy(
      path.join(__dirname, '../public'),
      path.join(__dirname, '../out/Portfolio')
    );
    console.log('Copied public directory');

    // Copy images directory
    if (fs.existsSync(path.join(__dirname, '../public/images'))) {
      await fs.copy(
        path.join(__dirname, '../public/images'),
        path.join(__dirname, '../out/Portfolio/images')
      );
      console.log('Copied images directory');
    }

    // Copy resume file
    if (fs.existsSync(path.join(__dirname, '../public/TarangBhargava_resume.pdf'))) {
      await fs.copy(
        path.join(__dirname, '../public/TarangBhargava_resume.pdf'),
        path.join(__dirname, '../out/Portfolio/TarangBhargava_resume.pdf')
      );
      console.log('Copied resume file');
    }
  } catch (err) {
    console.error('Error copying assets:', err);
  }
}

copyCssFiles();

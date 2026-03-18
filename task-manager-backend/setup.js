const fs = require('fs');
const path = require('path');

// Create directories
const dirs = [
  'src',
  'src/controllers',
  'src/routes'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created: ${dir}`);
  }
});

// Create files
const files = [
  'src/server.js',
  'src/controllers/userController.js',
  'src/routes/userRoutes.js'
];

files.forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '');
    console.log(`✅ Created: ${file}`);
  }
});

console.log('\n🎉 Project structure created successfully!');
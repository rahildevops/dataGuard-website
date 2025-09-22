const fs = require('fs');
const path = require('path');

const workspace = process.cwd();
const candidates = [
  path.join(workspace, '.next', 'output', 'export'),
  path.join(workspace, '.next', 'output', 'static'),
  path.join(workspace, '.next', 'export'),
];

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return false;
  if (fs.existsSync(dest)) {
    // remove existing out folder
    fs.rmSync(dest, { recursive: true, force: true });
  }
  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  return true;
}

let found = false;
for (const candidate of candidates) {
  if (fs.existsSync(candidate)) {
    const ok = copyDir(candidate, path.join(workspace, 'out'));
    if (ok) {
      console.log('Copied', candidate, '-> out/');
      found = true;
      break;
    }
  }
}

if (!found) {
  console.error('No export output found under .next/output. Looked for:', candidates);
  process.exit(1);
}

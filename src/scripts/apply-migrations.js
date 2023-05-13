const tsImport = require('ts-import');

async function main() {
  const { applyMigrations } = await tsImport.load('src/db/db.ts');

  console.log('Applying migrations...');

  applyMigrations();
}

void main();

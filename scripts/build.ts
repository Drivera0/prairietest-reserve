// scripts/build.ts - bundles src/ into dist/
import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const SRC = 'src';
const DIST = 'dist';

async function buildOnce(): Promise<void> {
  const start = performance.now();

  //clean wipe of dist/
  if (existsSync(DIST)) {
    await rm(DIST, { recursive: true, force: true });
  }
  //recreate dist/
  await mkdir(DIST, { recursive: true });

  //copy static assests - manifest, icons and popup HTML
  await cp(`${SRC}/manifest.json`, `${DIST}/manifest.json`);
  await cp(`${SRC}/icons`, `${DIST}/icons`, { recursive: true });
  await cp(`${SRC}/popup.html`, `${DIST}/popup.html`);

  //Entry points TS files into JS get added here as project grows

  const elapsed = (performance.now() - start).toFixed(0);
  console.log(`Built ${DIST}/ in ${elapsed}ms`);
}

await buildOnce();

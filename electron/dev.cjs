const { spawn } = require('node:child_process');

const isWindows = process.platform === 'win32';
const npmCommand = isWindows ? 'npm.cmd' : 'npm';

const vite = spawn(npmCommand, ['run', 'dev', '--', '--host', '127.0.0.1'], {
  cwd: process.cwd(),
  stdio: 'inherit',
  shell: true,
});

const waitForServer = async (url, attempts = 60) => {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Vite server did not start at ${url}`);
};

const stopChildren = () => {
  if (!vite.killed) vite.kill();
};

(async () => {
  try {
    await waitForServer('http://127.0.0.1:5173/lenape-word-game/');

const path = require('node:path');

const electronExecutable = isWindows
  ? path.resolve(
      process.cwd(),
      'node_modules',
      'electron',
      'dist',
      'electron.exe'
    )
  : path.resolve(
      process.cwd(),
      'node_modules',
      'electron',
      'dist',
      'electron'
    );

const electron = spawn(electronExecutable, ['.'], {
  cwd: process.cwd(),
  stdio: 'inherit',
  shell: false,
  env: {
    ...process.env,
    VITE_DEV_SERVER_URL: 'http://127.0.0.1:5173/lenape-word-game/',
  },
});

electron.on('error', (error) => {
  console.error(`Could not start Electron: ${error.message}`);
  stopChildren();
  process.exitCode = 1;
});
    electron.on('exit', () => stopChildren());
  } catch (error) {
    console.error(error.message);
    stopChildren();
    process.exitCode = 1;
  }
})();

process.on('SIGINT', stopChildren);
process.on('SIGTERM', stopChildren);

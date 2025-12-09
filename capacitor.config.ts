import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.moore.lenapewordgame.app',
  appName: 'lenape-word-game',
  webDir: 'dist',  // must match Vite outDir,
  bundledWebRuntime: false
};

export default config;

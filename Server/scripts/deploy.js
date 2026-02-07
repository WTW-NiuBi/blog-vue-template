#!/usr/bin/env node
/**
 * 将 Server 部署到远程服务器
 * 使用方式：在 Server 目录下执行 pnpm run deploy
 */
const { execSync } = require('child_process');
const path = require('path');

const serverDir = path.join(__dirname, '..');
const server = 'root@47.94.39.20';
const remotePath = '/home/www/vue-template/server';
const appName = '33-dessert-api';

console.log('构建 Server...');
execSync('pnpm run build', { stdio: 'inherit', cwd: serverDir });

console.log('上传到服务器...');
execSync(`ssh ${server} "mkdir -p ${remotePath}"`, {
  stdio: 'inherit',
  shell: true,
  cwd: serverDir,
});
execSync(
  `scp -r dist package.json pnpm-lock.yaml ${server}:${remotePath}/`,
  { stdio: 'inherit', shell: true, cwd: serverDir },
);

console.log('在服务器上安装依赖并重启进程...');
execSync(
  `ssh ${server} "cd ${remotePath} && pnpm install --prod && pm2 restart ${appName} || pm2 start dist/main.js --name ${appName}"`,
  { stdio: 'inherit', shell: true, cwd: serverDir },
);

console.log('Server 部署完成！');

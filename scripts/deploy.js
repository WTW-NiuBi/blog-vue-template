#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const server = 'root@47.94.39.20';
const remotePath = '/home/www/vue-template/dist/';

console.log('开始构建...');
execSync('pnpm run build', { stdio: 'inherit', cwd: rootDir });

console.log('上传到服务器...');
execSync(`scp -r ./dist/* ${server}:${remotePath}`, {
  stdio: 'inherit',
  shell: true,
  cwd: rootDir,
});

console.log('重启服务器Nginx...');
execSync(`ssh ${server} "sudo systemctl reload nginx"`, {
  stdio: 'inherit',
  shell: true,
  cwd: rootDir,
});

console.log('部署完成！');

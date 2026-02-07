#!/usr/bin/env node
/**
 * 委托到 Server 目录下的部署脚本
 * 在项目根目录执行：node scripts/deploy-server.js
 * 或进入 Server 目录执行：pnpm run deploy
 */
const { execSync } = require('child_process');
const path = require('path');

const serverDir = path.join(__dirname, '..', 'Server');
execSync('pnpm run deploy', { stdio: 'inherit', cwd: serverDir });

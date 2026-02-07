#!/bin/bash
echo "开始构建..."
pnpm run build
echo "上传到服务器..."
scp -r ./dist/* root@47.94.39.20:/home/www/vue-template/dist/
echo "重启服务器Nginx..."
ssh root@47.94.39.20 "sudo systemctl reload nginx"
echo "部署完成！"
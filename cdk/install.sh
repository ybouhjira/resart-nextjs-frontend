#!/bin/bash
set -e

repoName="resart-nextjs-frontend"

main() {
  sudo apt-get update -y
  sudo apt-get install -y npm git
  sudo npm install -g yarn n typescript pm2
  sudo n lts
  hash -r

  cd ~
  git clone "https://github.com/ybouhjira/$repoName.git"
  cd "/home/ubuntu/$repoName"
  yarn install --production
  rm cdk -rf
  yarn build
  sudo pm2 start
  sudo env PATH=$PATH:/usr/local/bin \
    /usr/local/lib/node_modules/pm2/bin/pm2 \
    startup systemd -u root --hp "/home/ubuntu/$repoName"
}

# send to syslog for easy debugging
main | logger

module.exports = {
  apps: [
    {
      name: 'next',
      cwd: '.',
      script: 'yarn',
      args: 'start --port 80',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

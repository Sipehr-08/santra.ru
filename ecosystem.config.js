module.exports = {
    apps: [
      {
        name: 'cantra',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        env_production: {
          PORT: 3005,
          NODE_ENV: 'production',
        },
      },
    ],
  }
  
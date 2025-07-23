module.exports = {
  apps: [
    {
      name: "sudo-bot-prod",
      script: "./src/index.ts",
      interpreter: "bun",
      env: {
        NODE_ENV: "production"
      }
    }, {
      name: "sudo-bot-dev",
      script: "./src/index.ts",
      interpreter: "bun",
      env: {
        NODE_ENV: "development"
      }
    }
  ]
}
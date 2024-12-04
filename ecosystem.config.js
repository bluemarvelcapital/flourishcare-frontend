module.exports = {
  apps: [
    {
      name: "nextjs-app-dev", // Name your app
      script: "npm", // Use npm as the script runner
      args: "run dev", // Specify the dev script
      env: {
        NODE_ENV: "development", // Environment variable
        PORT: 3000, // Change the port if needed
      },
    },
  ],
};

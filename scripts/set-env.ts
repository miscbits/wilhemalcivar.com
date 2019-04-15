const writeFile = require('fs');
const argv = require('yargs');

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.argv.environment;

const targetPath = `./src/environments/environment.ts`;
const envConfigFile = `
export const environment = {
  production: ${process.env.PRODUCTION},
  apiUrl: "${process.env.API_URL}",
  scryfallUrl: "${process.env.SCRYFALL_URL}"
};
`
writeFile.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});

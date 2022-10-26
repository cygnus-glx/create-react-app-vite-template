
const {exacSync, execSync}  = require('child_process');


const runCommand = command =>{
    try {
        execSync(`${command}, {stdio: 'inherit}`)
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return false;

}


const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/cygnus-glx/create-react-app-vite-template ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository for CRA Template created by Sagar Mitkari with repo name:  ${repoName}` );
const checkOut = runCommand(gitCheckoutCommand);
if(!checkOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

console.log("Congratulations! You are ready to use CRVA (Create React App with Vite) special Webpack Build. Please follow below commands to get Started.")

console.log(`cd ${repoName} && npm start`)



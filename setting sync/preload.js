const fs = require('fs')
const path = require('path')

function getStoragePath() {
    const vscPath = `${utools.getPath("appData")}\\Code`;
    const vscInsidersPath = `${utools.getPath("appData")}\\Code - Insiders`;
    console.log(fs.existsSync(vscPath));
    console.log(fs.existsSync(vscInsidersPath));
}

utools.onPluginReady(() => {
    getStoragePath();
})

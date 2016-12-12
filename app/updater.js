//jshint esversion: 6
const os = require('os');
const { autoUpdater, app, ipc } = require('electron');

if(process.platform !== 'linux') {
    autoUpdater.on('error', (error) => console.error(error));
    autoUpdater.on('update-available', () => console.log("Actualizacion disponible"));
    autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName, releaseDate, updateURL) => {
        console.log(event);
        console.log(releaseNotes);
        console.log(releaseName);
        console.log(releaseDate);
        console.log(updateURl);
    });

    autoUpdater.setFeedURL(`https://chromecaster-update-service.herokuapp.com/update/${os.platform()}_${os.arch()}/${app.getVersion()}`);
    autoUpdater.checkForUpdates();
}

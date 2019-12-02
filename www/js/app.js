document.addEventListener("deviceready", onDeviceReady, false);
//
//
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
    window.plugins.PushbotsPlugin.initialize("5da21382b794125fbf358895", {"android":{"sender_id":"243092811711"}});
    console.log('Device is ready');
    stopwatch.init();
    vib.init();
};
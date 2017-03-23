cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-infologs-echo.EchoJS",
        "file": "plugins/cordova-infologs-echo/src/js/Echo.js",
        "pluginId": "cordova-infologs-echo",
        "clobbers": [
            "window.plugin.echojs"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-infologs-echo": "1.0"
};
// BOTTOM OF METADATA
});
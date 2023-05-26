const hostName = "com.example.phishingdetector";
const portName = "phishing_detector";

var port = chrome.runtime.connectNative(hostName + '.' + portName);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = new URL(details.url);
        var message = {
            url: url.href
        };
        port.postMessage(message);
        return {cancel: false};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);

ort.onMessage.addListener(function(message) {
    if (message.hasOwnProperty('prediction')) {
        console.log(message.prediction);
    }
});

port.onDisconnect.addListener(function() {
    console.log("Disconnected");
});

chrome.extension.onRequest.addListener(function(prediction){
    if (prediction == 1){
        alert("Warning: Phishing detected!!");
    }
    else if (prediction == -1){
        alert("No phishing detected");
    }
});
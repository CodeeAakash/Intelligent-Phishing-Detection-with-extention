chrome.extension.onRequest.addListener(function(prediction){
    if (prediction == 1){
        alert("WARNING: PHISHING DETECTED. SUSPICIOUS ACITIVITY FOUND....DO NOT PROCEED FURTHER");
    }
    else if (prediction == -1){
        alert("NO PHISHING DETECTED.SAFE TO USE");
    }
});
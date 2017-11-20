// Run on page load
function onload() {
    setCameraToBkgd();
}


// Set user camera feed to background
function setCameraToBkgd() {

    // Set preferred device access
    let constraints = {
        audio: false,
        video: {
            width: 1280,
            height: 720,
            facingMode: ( false ? "user" : "environment")
        }
    };

    // Get access to the user's camera and apply the stream to the site background
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(mediaStream) {
            let video = document.querySelector('video');
            video.srcObject = mediaStream;
            video.onloadedmetadata = function(e) {
                video.play();
            };
        })
        .catch(function(err) {
            console.log(err.name + ": " + err.message);
        });
}

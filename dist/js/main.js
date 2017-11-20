//
function onload() {
    console.log("yo");

    navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
        function(stream) {
            var video = document.querySelector('video');
            video.src = window.URL.createObjectURL(stream);
            video.onloadedmetadata = function(e) {
            video.play();
            };
        },
        function(err) {
            console.log("The following error occured: " + err.name);
        }
    );
}

document.addEventListener('DOMContentLoaded', function () {
    var image = new Image(853,480);

    image.onload = function() {
        requestFaceAnalysis(image, handleFaceAnalysisResponse);
    };
    // load image object
    image.src = 'images/7.png';
});

function requestFaceAnalysis(image, callback) {
    var formData = new FormData();
    var xhr = new XMLHttpRequest();
    var url = '/api/face-analysis';
    
    // Prepare form data
    formData.append("api_key", faceplusplus_api_key());
    formData.append("api_secret", faceplusplus_api_secret());
    formData.append("return_attributes", 'eyestatus,gender,age,ethnicity,eyestatus,beauty,skinstatus');
    formData.append("image_base64", getBase64Image(image));

    // Register callback for response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.response);
        }
    }
    
    // Send request
    xhr.open('POST', url);
    xhr.send(formData);
    console.log('Request send');
}

function handleFaceAnalysisResponse(response) {
    console.log(response);
}

// Helper function to get base64 encoded image data
// source: https://stackoverflow.com/a/934925/298479
function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to guess the
    // original format, but be aware the using "image/jpg" will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
document.addEventListener('DOMContentLoaded', function () {
    var formData = new FormData();
    var xhr = new XMLHttpRequest();
    
    formData.append("api_key", faceplusplus_api_key());
    formData.append("api_secret", faceplusplus_api_secret());
    formData.append("return_attributes", 'eyestatus,gender,age,ethnicity,eyestatus,beauty,skinstatus');
    formData.append("image_file", file);
    
    xhr.open('post', url, true);
    xhr.setRequestHeader("Content-Type","multipart/form-data");
    xhr.send(formData);
});
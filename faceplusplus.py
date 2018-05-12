#!/usr/bin/env python

import requests
import secrets

files = {
    #'image_file': open('images/7.jpg', 'rb') 
}

payload = {
    'api_key': secrets.faceplusplus_api_key(), 
    'api_secret': secrets.faceplusplus_api_secret(), 
    'image_url': 'https://cdn.pixabay.com/photo/2018/05/11/16/18/young-man-3390927_960_720.jpg',
    'return_attributes': 'eyestatus,gender,age,ethnicity,eyestatus,beauty,skinstatus'
}

url = "https://api-us.faceplusplus.com/facepp/v3/detect"

# make request
r = requests.post(url, files=files, data=payload)
print(r.content)


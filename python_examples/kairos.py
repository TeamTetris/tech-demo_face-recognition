#!/usr/bin/env python

import requests
import secrets

# put your keys in the header
headers = {
    "app_id": secrets.kairos_app_id(),
    "app_key": secrets.kairos_app_key()
}

payload = '{"image":"https://cdn.pixabay.com/photo/2018/05/11/16/18/young-man-3390927_960_720.jpg"}'

url = "http://api.kairos.com/detect"

# make request
r = requests.post(url, data=payload, headers=headers)
print(r.content)
#!/usr/bin/env python

import requests
import secrets

files = open('images/7.jpg', 'rb')

payload = {
    'output': 'json',
    'apikey': secrets.haystack_api_key()
}

url = "https://api.haystack.ai/api/image/analyze"

# make request
r = requests.post(url, data=files, params=payload)
print(r.text)


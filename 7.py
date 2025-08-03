import hashlib
import json
import time
import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import binascii

headers = {
    "cookie": "sessionid=ujb90uxi0132jydmceljxiu2emt7hdpp",
    "referer": "https://mashangpa.com/problem-detail/7/",
}

kkkk = b"xxxxxxxxoooooooo"
iiii = b"0123456789ABCDEF"


def decrypt(data: str):
    encrypted_bytes = binascii.unhexlify(data)
    cipher = AES.new(kkkk, AES.MODE_CBC, iiii)
    decrypted = cipher.decrypt(encrypted_bytes)
    decrypted_unpadded = unpad(decrypted, AES.block_size)
    return decrypted_unpadded.decode()


result = []
for i in range(1, 21):
    url = f"https://mashangpa.com/api/problem-detail/7/data/"

    tmp = int(time.time() * 1000)
    token = "xialuo" + str(tmp)
    sign = hashlib.md5(token.encode()).hexdigest()
    token_x=sign+"xxoo"
    x=hashlib.sha256(token_x.encode()).hexdigest()

    headers["ts"] = str(tmp)
    headers['m'] = sign
    params = {"page": i, "x":x}
    # print(headers)
    # print(params)
    res = requests.get(url, headers=headers, params=params).json()
    r=res['r']

    current_array= json.loads(decrypt(r))["current_array"]

    result+= current_array

print(sum(result))
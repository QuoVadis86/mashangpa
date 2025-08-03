import hashlib
import json
import time
import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import binascii

headers = {
    "cookie": "sessionid=ujb90uxi0132jydmceljxiu2emt7hdpp",
    "referer": "https://mashangpa.com/problem-detail/6/",
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
for i in range(1,21):
    url=f"https://mashangpa.com/api/problem-detail/6/data/?page={i}"

    tmp=int(time.time()*1000)
    token="sssssbbbbb"+str(tmp)

    sign=hashlib.md5(token.encode("utf-8")).hexdigest()
    headers["s"]=sign
    headers["tt"]=str(tmp)

    # print(headers)
    res=requests.get(url,headers=headers).json()
    t=res["t"]

    data=json.loads(decrypt(t))
    
    result+=data["current_array"]
print(sum(result))

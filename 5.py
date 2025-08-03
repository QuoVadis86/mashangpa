import binascii
import json
import requests
import execjs
import time
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad

headers = {
    "cookie": "sessionid=ujb90uxi0132jydmceljxiu2emt7hdpp",
    "referer": "https://mashangpa.com/problem-detail/5/",
}


def method1():
    with open("5.js", "r", encoding="utf-8") as f:
        js_code = f.read()
    ctx = execjs.compile(js_code)
    result = []
    for i in range(1, 21):
        url = f"https://mashangpa.com/api/problem-detail/5/data/"
        params = {"xl": ctx.call("loadPage", i)}
        print(params)
        res = requests.post(url, headers=headers, json=params).json()
        print(res)
        result += res["current_array"]
    print(sum(result))
    return sum(result)


def method2():
    result = []
    key = "jo8j9wGw%6HbxfFn".encode()
    iv = "0123456789ABCDEF".encode()

    def load_page(page_number):
        cipher = AES.new(key, AES.MODE_CBC, iv)
        timestamp = int(time.time() * 1000)
        strify = '{"page":' + str(page_number) + ',"_ts":' + str(timestamp) + "}"
        data = pad(strify.encode(), AES.block_size, style="pkcs7")
        return cipher.encrypt(data).hex()

    for i in range(1, 21):
        url = f"https://mashangpa.com/api/problem-detail/5/data/"
        json_data = {"xl": load_page(i)}
        print(json_data)
        res = requests.get(url, headers=headers, json=json_data).json()
        print(res)
        result += res["current_array"]
    print(sum(result))

# method1()
method2()

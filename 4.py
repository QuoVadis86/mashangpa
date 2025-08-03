import requests
import execjs
import time
import hashlib


headers = {
    # "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
    "cookie": "sessionid=ujb90uxi0132jydmceljxiu2emt7hdpp",
    "referer": "https://mashangpa.com/problem-detail/4/",
}
def method1():
    with open("4.js", "r", encoding="utf-8") as f:
        js_code = f.read()
    ctx = execjs.compile(js_code)
    result = []
    for i in range(1, 21):
        url = f"https://mashangpa.com/api/problem-detail/4/data/"
        params = ctx.call("loadPage", i)
        res = requests.get(url, headers=headers, params=params).json()
        result += res["current_array"]
    print(sum(result))
    return sum(result)

def method2():
    result=[]
    def loadPage(i):
        tmp = int(time.time() * 1000)
        token = "tuling" + str(tmp) + str(i)
        return {
            "page": i,
            "sign": hashlib.md5(token.encode("utf-8")).hexdigest(),
            "_ts": tmp,
        }

    for i in range(1,21):
        url=f"https://mashangpa.com/api/problem-detail/4/data/"
        params = loadPage(i)
        res=requests.get(url,headers=headers,params=params).json()
        # print(res)
        result+= res['current_array']
    print(sum(result))
    # return sum(result)
# method1()
method2()
import requests

headers={
    # "Content-Type": "application/json",
    "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
    "cookie":"sessionid=ujb90uxi0132jydmceljxiu2emt7hdpp",
    "referer":"https://mashangpa.com/problem-detail/2/"
}

result=[]
for i in range(1,21):
    url=f"https://mashangpa.com/api/problem-detail/2/data/?page={i}"
    res=requests.get(url,headers=headers)
    # print(res.json())
    result+= res.json()['current_array']
print(sum(result))
import requests
url="https://mashangpa.com/api/problem-detail/1/data/
# headers={}  "cookie":"sessionid=ujb90uxi0132jydmceljxiu2emt7hdpp"
# }
cookie ={ "sessionid":"ujb90uxi0132jydmceljxiu2emt7hdpp"
}

result=[]
for i in range(1,21):
    params = {"page":i}
              res=requests.get(url,params=params,cookies=cookie)
    # print(res.json())
    result+= res.json()['current_array']
print(sum(result))
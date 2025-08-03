import requests

# headers={
#     # "Content-Type": "application/json",
#     "cookie":"sessionid=ujb90uxi0132jydmceljxiu2emt7hdpp"
# }
cookie ={
    "sessionid":"ujb90uxi0132jydmceljxiu2emt7hdpp"
}

result=[]
for i in range(1,21):
    url=f"https://mashangpa.com/api/problem-detail/1/data/?page={i}"
    res=requests.get(url,cookies=cookie)
    # print(res.json())
    result+= res.json()['current_array']
print(sum(result))
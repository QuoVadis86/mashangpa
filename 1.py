import time
import requests

baseurl = "https://mashangpa.com/api/problem-detail/{}/{}"
cookie = {"sessionid": "ujb90uxi0132jydmceljxiu2emt7hdpp"}
headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
}


def problem_1():
    array = []
    for pn in range(1, 21):
        params = {"page": pn}
        res = requests.get(
            baseurl.format(1, "data"), params=params, cookies=cookie, headers=headers
        )
        print(res.json())
        array += res.json()["current_array"]
        time.sleep(0.1)
    result = sum(array)
    print(result)
    return result


# problem_1()


def problem_2():
    array = []
    headers["referer"] = baseurl.format(2, "")

    for pn in range(1, 21):
        params = {"page": pn}
        res = requests.get(
            baseurl.format(2, "data"), params=params, cookies=cookie, headers=headers
        )
        print(res.json())
        array += res.json()["current_array"]
        time.sleep(0.1)
    result = sum(array)
    print(result)
    return result


# problem_2()

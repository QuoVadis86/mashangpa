import time
import requests
import base64

headers = {
    "referer": "https://mashangpa.com/problem-detail/8/",
}
cookies = {"sessionid": "ujb90uxi0132jydmceljxiu2emt7hdpp"}


def group_message(s, size):
    return [s[i : i + size] for i in range(0, len(s), size)]

def s_crypt(input_str):
    def encrypt_char(c):
        code = ord(c)
        # 循环左移3位
        code = code << 3 | code >> 5
        # 异或运算
        code ^= 0x5A
        # 循环左移2位
        code = code << 2 | code >> 6
        # 二次异或
        code ^= 0x3F
        # 取模
        code = code % 0x100

        return code

    groups = [input_str[i : i + 4] for i in range(0, len(input_str), 4)]
    encrypted = []

    for group in groups:
        # 对每组字符加密
        encrypted_group = [encrypt_char(c) for c in group]
        encrypted.extend(encrypted_group)

    # 转为16进制字符串
    hex_str = "".join(f"{b:02x}" for b in encrypted)
    return hex_str


def m_crypt(data: str, key: str):
    key_len = len(key)
    encrypted = []

    # 分组处理
    for i in range(0, len(data), 4):
        group = data[i : i + 4]
        encrypted_group = []

        for j in range(len(group)):
            # 字符相加取模
            code = (ord(group[j]) + ord(key[j % key_len])) % 256
            encrypted_group.append(code)

        encrypted.extend(encrypted_group)

    # 转为16进制字符串
    hex_str = "".join(f"{b:02x}" for b in encrypted)
    return hex_str


result = []
for i in range(1, 21):
    url = f"https://mashangpa.com/api/problem-detail/8/data/"

    m_sault = "oooooo"
    s_sault = "xoxoxoxoxo"
    tmp = int(time.time() * 1000)

    s_token = s_sault + str(tmp)
    m_token = m_sault + str(tmp) + str(i)

    s = s_crypt(s_token)
    m = m_crypt(m_token, m_sault)
    t = base64.b64encode(str(tmp).encode()).decode("utf-8")

    cookies["s"] = s
    headers["m"] = m
    headers["t"] = t
    payload = {"page": i}
    print(headers)
    print(cookies)
    print(payload)
    # print(s, m, t)
    # break
    res = requests.get(url, headers=headers, cookies=cookies, json=payload).json()
    print(res)
    result += res["current_array"]
    # print(res["current_array"])


print(sum(result))

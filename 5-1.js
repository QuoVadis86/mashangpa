dd = {
  'a': CryptoJS
};
let key = dd.a.enc.Utf8.parse("jo8j9wGw%6HbxfFn");
let iv = dd.a.enc.Utf8.parse('0123456789ABCDEF');
function encrypt(_0x277028) {
  let _0x2703a2 = dd.a.enc.Utf8.parse(_0x277028);
  let _0x50fcf0 = dd.a.AES.encrypt(_0x2703a2, key, {
    'mode': dd.a.mode.CBC,
    'padding': dd.a.pad.Pkcs7,
    'iv': iv
  });
  return _0x50fcf0.ciphertext.toString(CryptoJS.enc.Hex);
}
function loadPage(pageNumber) {
  const timestamp = new Date().getTime();
  const params = {
    page: pageNumber,
    _ts: timestamp
  };
  const jsonString = JSON.stringify(params);
  return encrypt(jsonString);
}
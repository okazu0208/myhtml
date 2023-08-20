var ws = new WebSocket('wss://cloud.achex.ca/sand');
var n = document.cookie.split(';').length//くっきーの長さ取得
const xhr = new XMLHttpRequest();
console.log(n)
if (n !== 1){//データが残っていたらその列を表示
 for (var i = 0; i<n;  ++i) {
  var text = document.getElementById('test').innerHTML;
  document.getElementById('test').innerHTML = text + '</br>' + decodeURI(document.cookie.split(';')[i]);
 }
 n++;
}
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var msg = JSON.parse(xhr.responseText);
        n++;
        var text = document.getElementById('test').innerHTML;
        document.getElementById('test').innerHTML = text + '</br>' + n + '=' + msg.txt;
        document.cookie = n + '=' + encodeURI(msg.txt);
        console.log(n);
    }
}
let elem = document.getElementById('bt');
elem.onclick = function() {//送信
 const data = {'key2': 'txt.value'};
 xhr.open('POST', 'https://okazu0208.github.io/myhtml/', true);
 xhr.send(JSON.stringify(data));
 txt.value = '';
};
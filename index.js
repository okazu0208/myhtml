var ws = new WebSocket('wss://cloud.achex.ca/sand');
var n = document.cookie.split(';').length//くっきーの長さ取得
console.log(n)
if (n !== 1){//データが残っていたらその列を表示
 for (var i = 0; i<n;  ++i) {
  var text = document.getElementById('test').innerHTML;
  document.getElementById('test').innerHTML = text + '</br>' + decodeURI(document.cookie.split(';')[i]);
 }
 n++;
}
ws.onopen = function(evt){//websoclet通信
 ws.send('{"auth":"server@1471", "password":"Koneko2514"}');
};
ws.onmessage = function(evt){//イベント
 var msg = JSON.parse(evt.data);
 if (msg.auth !== "OK"){
 n++;
 var text = document.getElementById('test').innerHTML;
 document.getElementById('test').innerHTML = text + '</br>' + n + '=' + msg.sID + '=' + msg.msg;
 document.cookie = n + '=' +  msg.sID + '=' + encodeURI(msg.msg);
 console.log(n);
 }
};
let elem = document.getElementById('bt');
elem.onclick = function() {//送信
 ws.send(JSON.stringify({"to":"server@1471", "msg": txt.value}));
 txt.value = '';
};
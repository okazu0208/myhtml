var ws = new WebSocket('wss://cloud.achex.ca/sand');
var n = document.cookie;
ws.onopen = function(evt){
 ws.send('{"auth":"server@1471", "password":"Koneko2514"}');
};
ws.onmessage = function(evt){
 var msg = JSON.parse(evt.data);
 let text = document.getElementById('test').innerHTML;
 console.log(msg)
 document.getElementById('test').innerHTML = msg.sID + '=' + msg.msg;
 document.cookie = msg.sID + '=' + msg.msg;
 console.log(document.cookie.split('='))
};
let elem = document.getElementById('bt');
elem.onclick = function() {
 ws.send(JSON.stringify({"to":"server@1471", "msg": txt.value}));
};
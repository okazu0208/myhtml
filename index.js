var ws = new WebSocket('wss://cloud.achex.ca/sand');
ws.onopen = function(evt){
 ws.send('{"auth":"server@1471", "password":"Koneko2514"}');
};
ws.onmessage = function(evt){
 var msg = JSON.parse(evt.data);
 let text = document.getElementById('test').innerHTML;
 document.getElementById('test').innerHTML = JSON.stringify(msg.msg);
};
let elem = document.getElementById('bt');
elem.onclick = function() {
 ws.onopen = function(evt){
  ws.send(JSON.stringify({"to":"server@1471", "msg": txt.value}));
 };
}
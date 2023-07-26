// index.js
function linkWebSocket(){
 var ws = new WebSocket('wss://cloud.achex.ca/comment');
 ws.send("{"auth":"saber@1471","passwd":"Koneko2514"}");
 ws.onmessage = function(evt){
    var str = evt.data;
 };
}
document.getElementById('comment').innerHTML = str;

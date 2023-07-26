var ws = new WebSocket('wss://cloud.achex.ca/comment');
ws.onopen = function(evt){
 ws.send('{"auth":"saber@1471","passwd":"Koneko2514"}'); 
};
ws.onmessage = function(evt){
 var commentdata = JSON.parse(evt.data);
 if (commentdata.auth == 'OK') {
  return //OK jsonが来るのでここで関数を抜けます
 };
 console.log(commentdata)
 document.getElementById('comment').innerHTML = commentdata;
};
function click(){
 txt = document.getElementById(box).value;
 ws.onopen = function(evt){
 ws.send('{"to":"saber@1471", "msg":"test"}'); 
 console.log("iiiiiiiii")
 };
};

var ws = new WebSocket('wss://cloud.achex.ca/comment');
ws.onopen = function(evt){
 ws.send('{"auth":"saber@1471","passwd":"Koneko2514"}'); 
};
ws.onmessage = function(evt){
 var commentdata = JSON.parse(evt.data);
 if (commentdata.auth == 'OK') {
  return //OK jsonが来るのでここで関数を抜けます
 };
 document.getElementById('comment').innerHTML = commentdata;
};

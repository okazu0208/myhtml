var ws = new WebSocket('wss://cloud.achex.ca/comment');
ws.onopen = function(evt){
 ws.send((JSON.stringify({"auth":"saber@1471","passwd":"Koneko2514"}))); 
};
ws.onmessage = function(evt){
 var str = JSON.parse(evt.data);
 if (json.auth == 'OK') {
  return
 };
 document.getElementById('comment').innerHTML = str;
};

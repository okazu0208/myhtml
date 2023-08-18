Pusher.logToConsole = true;
var pusher = new Pusher('5c79a538be329c027f05', {
 cluster: 'ap3'
});
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
 let text = document.getElementById('test').innerHTML;
 document.getElementById('test').innerHTML = JSON.stringify(data);
});
function click() {
    cosole.log("OK")
    xhr.open( 'POST', 'http://{送信先URL}/post.php', false );
    // POST 送信の場合は Content-Type は固定.
    xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    // 
    xhr.send( 'hoge=piyo&moge=fuga' );
    xhr.abort(); // 再利用する際にも abort() しないと再利用できないらしい.
    
}
Pusher.logToConsole = true;
var pusher = new Pusher('5c79a538be329c027f05', {
 cluster: 'ap3'
});
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
 let text = document.getElementById('test').innerHTML;
 document.getElementById('test').innerHTML = JSON.stringify(data);
});
let elem = document.getElementById('bt');
elem.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/okazu0208/myhtml/main/index.php", true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        // PHPスクリプトの実行結果を処理する
        console.log(response);
    }
    };
    xhr.send();
}
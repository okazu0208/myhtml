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
 var xhr = new XMLHttpRequest();
 xhr.open("GET", "https://raw.githubusercontent.com/okazu0208/myhtml/main/index.py?value=" + encodeURIComponent(txt.value), true);
 xhr.send();
}
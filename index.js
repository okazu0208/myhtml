Pusher.logToConsole = true;
var pusher = new Pusher('5c79a538be329c027f05', {
 cluster: 'ap3'
});
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
 let text = document.getElementById('test').innerHTML;
 document.getElementById('test').innerHTML = JSON.stringify(data);
});
var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '1651847',
  key: '5c79a538be329c027f05',
  secret: '0936b6ce791c9beb060f',
  cluster: 'ap3',
  useTLS: true,
});
pusher.trigger('my-channel', 'my-event', {
  message: 'hello world'
});
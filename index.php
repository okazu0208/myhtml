<?php
phpinfo();
if (isset($_POST['posh'])) {
 $txt = $_GET["text"];
 require __DIR__ . '/vendor/autoload.php';
 $options = array(
  'cluster' => 'ap3',
  'useTLS' => true
 );
 $pusher = new Pusher\Pusher(
  '5c79a538be329c027f05',
  '0936b6ce791c9beb060f',
  '1651847',
  $options
 );
 $data['message'] = $txt;
 $pusher->trigger('my-channel', 'my-event', $data);
};
?>
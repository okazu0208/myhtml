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

    // ハンドラの登録.
    // onreadystatechange はどんなブラウザでも実装されている.
    xhr.onreadystatechange = function() {
        switch ( xhr.readyState ) {
            case 0:
                // 未初期化状態.
                console.log( 'uninitialized!' );
                break;
            case 1: // データ送信中.
                console.log( 'loading...' );
                break;
            case 2: // 応答待ち.
                console.log( 'loaded.' );
                break;
            case 3: // データ受信中.
                console.log( 'interactive... '+xhr.responseText.length+' bytes.' );
                break;
            case 4: // データ受信完了.
                if( xhr.status == 200 || xhr.status == 304 ) {
                    var data = xhr.responseText; // responseXML もあり
                    console.log( 'COMPLETE! :'+data );
                } else {
                    console.log( 'Failed. HttpStatus: '+xhr.statusText );
                }
                break;
        }
    };    
}
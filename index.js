axios({
  method: 'post',
  url: 'https://content.dropboxapi.com/2/files/upload',
  data: 'このテキストがアップロードされます',  //アップロードするテキスト
  headers: {
    'Authorization': 'Bearer メモしたアクセストークン',
    'Content-Type': 'application/octet-stream',
    'Dropbox-API-Arg': JSON.stringify({
      "path": "/Upload.txt", //アップロード時のファイルパス
      "mode": "overwrite"}) //モード(下記参照)
  }
})
.then(response => {
  //接続に成功した場合の処理
})
.catch(error => {
  //接続に失敗した場合の処理
})
.then(() => {
  // 成功or失敗にかかわらず最後に実行するコード
})
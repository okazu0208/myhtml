function click() {
  axios({
    method: 'post',
    url: 'https://api.dropboxapi.com/2/files/create_folder_v2',
    data: JSON.stringify({
      "path": "作成するフォルダのパス",
      "autorename": false}), //autorenameについて：下記参照
    headers: {
      'Authorization': 'Bearer メモしたアクセストークン',
      'Content-Type': 'application/json'
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
};

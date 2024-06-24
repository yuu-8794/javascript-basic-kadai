// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const messsage = document.getElementById('text');

// ボタンをクリックしてから2秒(2000ミリ秒)に処理を実行する
setTimeout(() => {

  // テキストを「ボタンをックリックしました」に書き換える
  messsage.textContent='ボタンをクリックしました';
},2000);
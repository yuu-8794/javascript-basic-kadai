// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定位数に代入する
const messsage = document.getElementById('text');

// HTML要素がクリックされた時にイベント処理を実行する
clickBtn.addEventListener('click', () =>{
  
    // テキストを「ボタンをクリックしました」に書き換える
    messsage.textContent = 'ボタンをクリックしました。';
  
  
})
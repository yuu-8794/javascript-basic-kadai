//現在の日付
var today = new Date();

//今年が何年か出力する(確認用)
console.log(today.getFullYear());

//年、月、日を定義
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();

//今日の日付を出力
console.log(year + '年' + month + '月' + day + '日');
//変数numに0～30までのランダムな整数を代入する
let num = Math.floor(Math.random()*31);

//変数numの値を出力する(確認用)
console.log(num);

//変数numの値から0を除外する
if(num !==0){

  //変数numの値が3の倍数かつ5の倍数であれば、「3と5の倍数です」と出力する
  if(num % 3 === 0 && num % 5 ===0){
    console.log('3と5の倍数です');
  }

  //変数の値が3の倍数であれば、「3の倍数です」と出力する
  else if(num % 3 === 0){
    console.log('3の倍数です');
  }

  //変数の値が5の倍数であれば、「5の倍数です」と出力する
  else if(num % 5 === 0){
    console.log('5の倍数です');
  }

  //上記のいずれにも当て嵌まらなかった場合はただ結果を出力する
  else{
    console.log(num);
  }

}
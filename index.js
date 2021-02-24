let apple = 'Hello World!';

// test = 'Hello World2!!';

//定数
const testest = 'He..Hell...Hello World!! '

//配列
const inoki = ['いーち','にーい','さーん','ダーー！！'];

//ループ文
// let index = 0;
// while(index < inoki.length){
//   //繰り返したい命令
//   console.log(inoki[index]);
//   index++;
// }

//if /else
// if(inoki.length > 5){
//   console.log('ボンバイエ！')
// } else {
//   console.log('ボンバ...!')
// }

//関数
const test = (arg) => {
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...!');
  }
};

test(3);
test(5);
test(3);
test(6);
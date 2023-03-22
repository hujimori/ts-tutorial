console.log('hoge');

// 変数宣言の型注釈
const num: number = 123;
console.log(num);

// varは使わない
// varの問題点
// 同名の変数宣言をした場合、後に書いた方が優先される
var x = 1;
var x = 2;

// letで↑を書くとエラーになるようになっている
// let y = 1;
let y = 2;

// グローバル変数の上書き
// varはグローバル変数として定義されたときに、windowオブジェクトのプロパティとして意義されるため、既存の
// プロパティを上書きする可能性がある
// var innerWidth = 10;
// console.log(window.innerWidth);

// 変数の巻き上げ
// JSで宣言された変数はスコープの先頭で変数が生成される
// varで宣言した変数はスコープの先頭で変数が生成されてundefinedで初期化される
// console.log(greeting);
// var greeting = 'こんにちは';

// let,constで宣言した変数はスコープの先頭で変数が生成される
// 下記はReference errorになる
// 変数が評価されるまで初期化される
// console.log(z);
// let z = 1;

// JSではvarで宣言された変数のスコープは関数となる
// ifブロック内で宣言したxで上書きされる
function print() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}
print();

// letとconstはブロックスコープ
function print2() {
  const x = 1;
  if (true) {
    const x = 3;
    console.log(x);
  }
  console.log(x);
}
print2();

// JSには型推論があるので型注釈は省略可能
let a = 1;
// 以下はエラー
// a = 'Hello';

// 型推論はコンパイルのタイミングで型が決定される
// 次の例では変数xが型推論によりnumber型として決定される
let b = 1;
// b = 'hello';
// JSは動的型付けなので↑は通る

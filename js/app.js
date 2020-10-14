// This is a JavaScript file
console.log('hello world');

function clickBtn1(){

  var d = new Audio("people-shout-oo1.mp3");   
  d.play();

	const hours = document.form1.hours;

	// 値(数値)を取得
	const num = hours.selectedIndex;
	//const num = document.form1.hours.selectedIndex;

	// 値(数値)から値(value値)を取得
	const str = hours.options[num].value;
	//const str = document.form1.hours.options[num].value;

	document.getElementById("span1").innerText = str; 
}

function clickBtn2(){

	const minutes = document.form2.minutes;

	// 値(数値)を取得
	const num = minutes.selectedIndex;
	//const num = document.form2.minutes.selectedIndex;

	// 値(数値)から値(value値)を取得
	const str = minutes.options[num].value;
	//const str = document.form2.minutes.options[num].value;

	document.getElementById("span2").innerText = str; 
}

function clickBtn3(){

	const seconds = document.form3.seconds;

	// 値(数値)を取得
	const num = seconds.selectedIndex;
	//const num = document.form3.seconds.selectedIndex;

	// 値(数値)から値(value値)を取得
	const str = seconds.options[num].value;
	//const str = document.form3.seconds.options[num].value;

	document.getElementById("span3").innerText = str; 
}

var timer1; //タイマーを格納する変数（タイマーID）の宣言


//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function cntStart()
{
  var a = new Audio("youi2.mp3");   
  var b = new Audio("don1.mp3");
  a.play();
  a.addEventListener("ended", function(e) {
  b.play();
  });
    
  document.timer.elements[0].disabled=true;
  a.addEventListener("ended", function(e) {
  timer1=setInterval("countDown()",1000);
  });
}


//作業終了時コマンド
function  cntfinish()
{
  document.timer.elements[0].disabled=true;
  document.timer.elements[1].disabled=true;
  clearInterval(timer1);
  var res = confirm("作業は完了しましたか?");
  if( res == true ) {
    //okならカウントダウン終了＆褒めボイス
  var g = new Audio("yokudekimashita1.mp3");    
  var h = new Audio("trumpet1.mp3");
  g.play();
  g.addEventListener("ended", function(e) {
  h.play();
  }); 
  }
  else {
    //キャンセルならカウントダウン再開
  var c = new Audio("ganbatte1.mp3");
   c.play();
  document.timer.elements[0].disabled=false;
  document.timer.elements[1].disabled=false;
  timer1=setInterval("countDown()",1000);
  }
}

//タイマー停止関数
function cntStop()
{
  document.timer.elements[0].disabled=false;
  clearInterval(timer1);
}

//カウントダウン関数
function countDown()
{
  var hr =  document.getElementById("span1").innerText;
  var min = document.getElementById("span2").innerText;
  var sec = document.getElementById("span3").innerText;
  console.log(hr);
  console.log(min);
  console.log(sec);
        
  if( (hr == "0") && (min == "0") && (sec == "0") )
  {
    alert("その時間は無効です。");
    reSet();
  }

  else if( (hr == "") && (min == "") && (sec == "") )
  {
    alert("時間を設定し”ready!”を押してください。");
    reSet();
  } 
  else
  {

    if (hr == "") hr = 0;
    hr = parseInt(hr);

    if (min == "") min = 0;
    min = parseInt(min);
    
    if (sec == "") sec = 0;
    sec = parseInt(sec);
    
     tmWrite(hr * 60 * 60 + min * 60 + sec - 1);
  }
}


//残り時間を書き出す関数
function tmWrite(int)
{
  int=parseInt(int);
  console.log(int);
    if (int<=0)
  {
    reSet();
  var e = new Audio("zikangire2.mp3");   
  var f = new Audio("fate2.mp3");
  e.play();
  e.addEventListener("ended", function(e) {
  f.play();
  }); 
    alert("時間です！");
       
  }
  else
  {
    //残り時数はintを60で割って切り捨てる
    document.getElementById("span1").innerText=Math.floor(int/60/60);
    //残り分数はintを60で割って切り捨てる
    document.getElementById("span2").innerText=Math.floor(int/60) % 60;
    //残り秒数はintを60で割った余り
    document.getElementById("span3").innerText=int % 60;
  }
}

//フォームを初期状態に戻す（リセット）関数
function reSet()
{
  document.getElementById("span1").innerText="0";
  document.getElementById("span2").innerText="0";
  document.getElementById("span3").innerText="0";
  document.timer.elements[0].disabled=false;
  clearInterval(timer1);
}  


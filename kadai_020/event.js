// btnというidを持つHTML要素を取得 定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//クリックされたらイベント処理
btn.addEventListener('click' ,() => {

    text.textContent = 'ボタンをクリックしました。';

    console.log(text);
})


// btnというidを持つHTML要素を取得 定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

function handleclick() {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    },2000);
}

btn.addEventListener('click', handleclick);


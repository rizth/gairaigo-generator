let katas = ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヲ","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ","ヴ"];
let katasExtend = ["キャ","キュ","キョ","シャ","シュ","ショ","チャ","チュ","チョ","ニャ","ニュ","ニョ","ヒャ","ヒュ","ヒョ","ミャ","ミュ","ミョ","リャ","リュ","リョ","ギャ","ギュ","ギョ","ジャ","ジュ","ジョ","ビャ","ビュ","ビョ","ピャ","ピュ","ピョ","イェ","ウィ","ウェ","ウォ","ヴァ","ヴィ","ヴェ","ヴォ","スィ","ズィ","シェ","ジェ","チェ","ティ","トゥ","ディ","ドゥ","ツァ","ツィ","ツェ","ツォ","ファ","フィ","フェ","フォ","スュ","ズュ","テュ","デュ","フュ","フョ"];
let btnGen = document.getElementById('gen');
let optLen = document.getElementById('optlen');
let optAmount = document.getElementById('optamount');
let textOut = document.getElementById('output');

let amount = 10;
let len = 8;

optLen.addEventListener('input', function(){
    len = optLen.value;
})

btnGen.addEventListener('click', function(){
    let str = '';
    for(let c = 0; c < optAmount.value; c++) {
        let substr = '';
        let currLen = 0;
        while(currLen < len) {
            if (Math.random() < 0.7 || len - substr.length == 1) {
                substr += katas[Math.round(Math.random()*(katas.length - 1))]
                currLen++;
            } else {
                substr += katasExtend[Math.round(Math.random()*(katasExtend.length - 1))]
                currLen += 2;
            }

            if (Math.random() < 0.2 && len - substr.length > 0) {
                substr += 'ー';
                currLen++;
            } else if (Math.random() < 0.2 && len - substr.length > 0) {
                substr += 'ン';
                currLen++;
            }
        }
        str += substr + '\n';
    }
    textOut.textContent = str;
})
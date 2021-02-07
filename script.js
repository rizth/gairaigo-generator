let katas = ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヲ","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ","ヴ"];
let katasExtend = ["キャ","キュ","キョ","シャ","シュ","ショ","チャ","チュ","チョ","ニャ","ニュ","ニョ","ヒャ","ヒュ","ヒョ","ミャ","ミュ","ミョ","リャ","リュ","リョ","ギャ","ギュ","ギョ","ジャ","ジュ","ジョ","ビャ","ビュ","ビョ","ピャ","ピュ","ピョ","イェ","ウィ","ウェ","ウォ","ヴァ","ヴィ","ヴェ","ヴォ","スィ","ズィ","シェ","ジェ","チェ","ティ","トゥ","ディ","ドゥ","ツァ","ツィ","ツェ","ツォ","ファ","フィ","フェ","フォ","スュ","ズュ","テュ","デュ","フュ","フョ"];

const app = new Vue({
    el: '#app',
    data: {
        amount: 20,
        len: 8,
        text: '',
        lang: 'en',
        info: {
            title: {
                en: 'Bullshit Gairaigo Generator',
                cn: '狗屁不通外来语生成器'
            },
            amount: {
                en: 'Amount: ',
                cn: '生成数量：'
            },
            length: {
                en: 'Length: ',
                cn: '长度：'
            },
            generate: {
                en: 'Generate',
                cn: '生成'
            }
        },
        langList: [
            {
                name: 'English',
                value: 'en'
            },{
                name: '中文',
                value: 'cn'
            }
        ]
    },
    methods: {
        generate: function() {
            let str = '';
            for(let c = 0; c < this.amount; c++) {
                let substr = '';
                let currLen = 0;
                while(currLen < this.len) {
                    if (Math.random() < 0.7 || this.len - substr.length == 1) {
                        substr += katas[Math.round(Math.random()*(katas.length - 1))]
                        currLen++;
                    } else {
                        substr += katasExtend[Math.round(Math.random()*(katasExtend.length - 1))]
                        currLen += 2;
                    }
        
                    if (Math.random() < 0.2 && this.len - substr.length > 0) {
                        substr += 'ー';
                        currLen++;
                    } else if (Math.random() < 0.2 && this.len - substr.length > 0) {
                        substr += 'ン';
                        currLen++;
                    }
        
                    if (Math.random() < 0.1 && this.len - substr.length > 3) {
                        substr += '・';
                        currLen++;
                    }
                }
                str += substr + '\n';
            }
            this.text = str;
        }
    }
})
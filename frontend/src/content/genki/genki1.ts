// Type Declarations
type ChapterContent = {
    chapter: string;
    title: TranslatedContent;
    vocabulary: VocabContent[];
    grammar: GrammarContent[];
};

type GrammarContent = {
    title: string;
    meanings: TranslatedContent[];
    usages: string[];
    notes: string[];
    examples: string[];
};

type TranslatedContent = {
    english: string;
    japanese: string;
};

type VocabContent = {
    english: string;
    romaji?: string;
    kana: string;
    kanji?: string;
};

let genki1_content: ChapterContent[] = [
    {
        chapter: "Chapter 1",
        title: {
            english: "New Friends",
            japanese: "あたらしいともだち",
        },
        vocabulary: [
            {
                english: "um...",
                romaji: "ano",
                kana: "あの",
            },
            {
                english: "now",
                romaji: "ima",
                kana: "いま",
            },
            {
                english: "English (language)",
                romaji: "eego",
                kana: "えいご",
            },
            {
                english: "yes",
                romaji: "ee",
                kana: "ええ",
            },
            {
                english: "student",
                romaji: "gakusee",
                kana: "がくせい",
            },
            {
                english: "...language",
                romaji: "...go",
                kana: "〜ご",
            },
            {
                english: "high school",
                romaji: "kookoo",
                kana: "こうこう",
            },
            {
                english: "P.M.",
                romaji: "gogo",
                kana: "ごご",
            },
            {
                english: "A.M.",
                romaji: "gozen",
                kana: "ごぜん",
            },
            {
                english: "...years old",
                romaji: "...sai",
                kana: "〜さい",
            },
            {
                english: "Mr./Ms. ...",
                romaji: "...san",
                kana: "〜さん",
            },
            {
                english: "o'clock",
                romaji: "...ji",
                kana: "〜じ",
            },
            {
                english: "...people",
                romaji: "...jin",
                kana: "〜じん",
            },
            {
                english: "major",
                romaji: "senkoo",
                kana: "せんこう",
            },
            {
                english: "teacher; Professor...",
                romaji: "sensee",
                kana: "せんせい",
            },
            {
                english: "That's right.",
                romaji: "soo desu",
                kana: "そうです",
            },
            {
                english: "I see.; Is that so?",
                romaji: "soo desu ka",
                kana: "そうですか",
            },
            {
                english: "college; university",
                romaji: "daigaku",
                kana: "だいがく",
            },
            {
                english: "telephone",
                romaji: "denwa",
                kana: "でんわ",
            },
            {
                english: "friend",
                romaji: "tomodachi",
                kana: "ともだち",
            },
            {
                english: "name",
                romaji: "namae",
                kana: "なまえ",
            },
            {
                english: "what",
                romaji: "nan/nani",
                kana: "なん／なに",
            },
            {
                english: "Japan",
                romaji: "Nihon",
                kana: "にほん",
            },
            {
                english: "...year student",
                romaji: "...nensee",
                kana: "〜ねんせい",
            },
            {
                english: "yes",
                romaji: "hai",
                kana: "はい",
            },
            {
                english: "half",
                romaji: "han",
                kana: "はん",
            },
            {
                english: "number",
                romaji: "bangoo",
                kana: "ばんごう",
            },
            {
                english: "international student",
                romaji: "ryuugakusee",
                kana: "りゅうがくせい",
            },
            {
                english: "I",
                romaji: "watashi",
                kana: "わたし",
            },
            {
                english: "U.S.A",
                romaji: "Amerika",
                kana: "アメリカ",
            },
            {
                english: "Britain",
                romaji: "Igirisu",
                kana: "イギリス",
            },
            {
                english: "Australia",
                romaji: "Oosutoraria",
                kana: "オーストラリア",
            },
            {
                english: "Korea",
                romaji: "Kankoku",
                kana: "かんこく",
            },
            {
                english: "Sweden",
                romaji: "Suweeden",
                kana: "スウェーデン",
            },
            {
                english: "China",
                romaji: "Chuugoku",
                kana: "ちゅうごく",
            },
            {
                english: "science",
                romaji: "kagaku",
                kana: "かがく",
            },
            {
                english: "Asian studies",
                romaji: "ajia kenkyuu",
                kana: "アジアけんきゅう",
            },
            {
                english: "economics",
                romaji: "keezai",
                kana: "けいざい",
            },
            {
                english: "international relations",
                romaji: "kokusaikankee",
                kana: "こくさいかんけい",
            },
            {
                english: "computer",
                romaji: "konpyuutaa",
                kana: "コンピューター",
            },
            {
                english: "anthropology",
                romaji: "jinruigaku",
                kana: "じんるいがく",
            },
            {
                english: "politics",
                romaji: "seeji",
                kana: "せいじ",
            },
            {
                english: "business",
                romaji: "bijinesu",
                kana: "ビジネス",
            },
            {
                english: "literature",
                romaji: "bungaku",
                kana: "ぶんがく",
            },
            {
                english: "history",
                romaji: "rekishi",
                kana: "れきし",
            },
            {
                english: "job; work; occupation",
                romaji: "shigoto",
                kana: "しごと",
            },
            {
                english: "doctor",
                romaji: "isha",
                kana: "いしゃ",
            },
            {
                english: "office worker",
                romaji: "kaishain",
                kana: "かいしゃいん",
            },
            {
                english: "high school student",
                romaji: "kookoosee",
                kana: "こうこうせい",
            },
            {
                english: "housewife",
                romaji: "shufu",
                kana: "しゅふ",
            },
            {
                english: "graduate student",
                romaji: "daigakuinsee",
                kana: "だいがくいんせい",
            },
            {
                english: "college student",
                romaji: "daigakusee",
                kana: "だいがくせい",
            },
            {
                english: "lawyer",
                romaji: "bengoshi",
                kana: "べんごし",
            },
            {
                english: "mother",
                romaji: "okaasan",
                kana: "おかあさん",
            },
            {
                english: "father",
                romaji: "otoosan",
                kana: "おとうさん",
            },
            {
                english: "older sister",
                romaji: "oneesan",
                kana: "おねえさん",
            },
            {
                english: "older brother",
                romaji: "oniisan",
                kana: "おにいさん",
            },
            {
                english: "younger sister",
                romaji: "imooto",
                kana: "いもうと",
            },
            {
                english: "younger brother",
                romaji: "otooto",
                kana: "おとうと",
            },
        ],
        grammar: [
            {
                title: "XはYです",
                meanings: [
                    { english: "X is/am/are Y.", japanese: "X は Y です." },
                    { english: "As for X, it is Y.", japanese: "X は Y です" },
                    { english: "It is ~", japanese: "~です" },
                ],
                usages: ["Subject は N/Adj です"],
                notes: [
                    "Often in Japanese, subjects are dropped. Japanese speakers tend to omit subjects whenever they think it is clear to the listener what or who they are referring to.",
                ],
                examples: ["Examples to come"],
            },
            {
                title: "Question Sentences",
                meanings: [{ english: "~?", japanese: "~か" }],
                usages: ["Sentence + か"],
                notes: ["It is not customary to write a question mark at the end of question sentence in Japanese"],
                examples: ["Examples to come"],
            },
            {
                title: "nounのnoun",
                meanings: [
                    { english: "X's Y.", japanese: "X の Y" },
                    { english: "X Y.", japanese: "X の Y" },
                ],
                usages: ["N の N", "Specific Noun の Generic N"],
                notes: [
                    "This phrase acts more or less like one big noun, and it can be put wherever a noun can be used",
                ],
                examples: ["Examples to come"],
            },
        ],
    },
    {
        chapter: "Chapter 2",
        title: {
            english: "Shopping",
            japanese: "かいもの",
        },
        vocabulary: [
            {
                english: "this one",
                romaji: "kore",
                kana: "これ",
            },
            {
                english: "that one",
                romaji: "sore",
                kana: "それ",
            },
            {
                english: "that one (over there)",
                romaji: "are",
                kana: "あれ",
            },
            {
                english: "which one",
                romaji: "dore",
                kana: "どれ",
            },
            {
                english: "this...",
                romaji: "kono",
                kana: "この",
            },
            {
                english: "that...",
                romaji: "sono",
                kana: "その",
            },
            {
                english: "that... (over there)",
                romaji: "ano",
                kana: "あの",
            },
            {
                english: "which...",
                romaji: "dono",
                kana: "どの",
            },
            {
                english: "here",
                romaji: "koko",
                kana: "ここ",
            },
            {
                english: "there",
                romaji: "soko",
                kana: "そこ",
            },
            {
                english: "over there",
                romaji: "asoko",
                kana: "あそこ",
            },
            {
                english: "where",
                romaji: "doko",
                kana: "どこ",
            },
            {
                english: "who",
                romaji: "dare",
                kana: "だれ",
            },
            {
                english: "delicious",
                romaji: "oishii",
                kana: "おいしい",
            },
            {
                english: "fish",
                romaji: "sakana",
                kana: "さかな",
            },
            {
                english: "pork cutlet",
                romaji: "tonkatsu",
                kana: "とんかつ",
            },
            {
                english: "meat",
                romaji: "niku",
                kana: "にく",
            },
            {
                english: "menu",
                romaji: "menyuu",
                kana: "メニュー",
            },
            {
                english: "vegetable",
                romaji: "yasai",
                kana: "やさい",
            },
            {
                english: "pencil",
                romaji: "enpitsu",
                kana: "えんぴつ",
            },
            {
                english: "umbrella",
                romaji: "kasa",
                kana: "かさ",
            },
            {
                english: "bag",
                romaji: "kaban",
                kana: "かばん",
            },
            {
                english: "shoes",
                romaji: "kutsu",
                kana: "くつ",
            },
            {
                english: "wallet",
                romaji: "saifu",
                kana: "さいふ",
            },
            {
                english: "jeans",
                romaji: "jiinzu",
                kana: "ジーンズ",
            },
            {
                english: "dictionary",
                romaji: "jisho",
                kana: "じしょ",
            },
            {
                english: "bicycle",
                romaji: "jitensha",
                kana: "じてんしゃ",
            },
            {
                english: "newspaper",
                romaji: "shinbun",
                kana: "しんぶん",
            },
            {
                english: "T-shirt",
                romaji: "tiishatsu",
                kana: "T シャツ",
            },
            {
                english: "watch; clock",
                romaji: "tokee",
                kana: "とけい",
            },
            {
                english: "notebook",
                romaji: "nooto",
                kana: "ノート",
            },
            {
                english: "pen",
                romaji: "pen",
                kana: "ペン",
            },
            {
                english: "hat; cap",
                romaji: "booshi",
                kana: "ぼうし",
            },
            {
                english: "book",
                romaji: "hon",
                kana: "ほん",
            },
            {
                english: "cafe",
                romaji: "kissaten",
                kana: "きっさてん",
            },
            {
                english: "bank",
                romaji: "ginkou",
                kana: "ぎんこう",
            },
            {
                english: "toilet; restroom",
                romaji: "toire",
                kana: "トイレ",
            },
            {
                english: "library",
                romaji: "toshokan",
                kana: "としょかん",
            },
            {
                english: "post office",
                romaji: "yuubinkyoku",
                kana: "ゆうびんきょく",
            },
            {
                english: "U.S.A",
                romaji: "Amerika",
                kana: "アメリカ",
            },
            {
                english: "Britain",
                romaji: "Igirisu",
                kana: "イギリス",
            },
            {
                english: "Korea",
                romaji: "Kankoku",
                kana: "かんこく",
            },
            {
                english: "China",
                romaji: "Chuugoku",
                kana: "ちゅうごく",
            },
            {
                english: "economics",
                romaji: "keezai",
                kana: "けいざい",
            },
            {
                english: "computer",
                romaji: "konpyuutaa",
                kana: "コンピューター",
            },
            {
                english: "business",
                romaji: "bijinesu",
                kana: "ビジネス",
            },

            {
                english: "history",
                romaji: "rekishi",
                kana: "れきし",
            },
            {
                english: "mother",
                romaji: "okaasan",
                kana: "おかあさん",
            },
            {
                english: "father",
                romaji: "otousan",
                kana: "おとうさん",
            },
            {
                english: "how much",
                romaji: "ikura",
                kana: "いくら",
            },
            {
                english: "...yen",
                romaji: "~en",
                kana: "〜えん",
            },
            {
                english: "expensive; high",
                romaji: "takai",
                kana: "たかい",
            },
            {
                english: "Welcome (to our store)",
                romaji: "irasshaimase",
                kana: "いらっしゃいませ",
            },
            {
                english: "..., please",
                romaji: "(~wo) onegaishimasu",
                kana: "（〜を）おねがいします",
            },
            {
                english: "Please give me ...",
                romaji: "(~wo) kudasai",
                kana: "（〜を）ください",
            },
            {
                english: "then...; if that's the case...",
                romaji: "jaa",
                kana: "じゃあ",
            },
            {
                english: "Please; Here it is",
                romaji: "doozo",
                kana: "どうぞ",
            },
            {
                english: "Thank you",
                romaji: "doomo",
                kana: "どうも",
            },
        ],
        grammar: [
            {
                title: "XはYです",
                meanings: [
                    { english: "X is/am/are Y.", japanese: "X は Y です." },
                    { english: "As for X, it is Y.", japanese: "X は Y です" },
                    { english: "It is ~", japanese: "~です" },
                ],
                usages: ["Subject は N/Adj です"],
                notes: [
                    "Often in Japanese, subjects are dropped. Japanese speakers tend to omit subjects whenever they think it is clear to the listener what or who they are referring to.",
                ],
                examples: ["Examples to come"],
            },
            {
                title: "Question Sentences",
                meanings: [{ english: "~?", japanese: "~か" }],
                usages: ["Sentence + か"],
                notes: ["It is not customary to write a question mark at the end of question sentence in Japanese"],
                examples: ["Examples to come"],
            },
            {
                title: "nounのnoun",
                meanings: [
                    { english: "X's Y.", japanese: "X の Y" },
                    { english: "X Y.", japanese: "X の Y" },
                ],
                usages: ["N の N", "Specific Noun の Generic N"],
                notes: [
                    "This phrase acts more or less like one big noun, and it can be put wherever a noun can be used",
                ],
                examples: ["Examples to come"],
            },
        ],
    },
];

export default genki1_content;

import { ChapterContent } from "../types";

const content: ChapterContent = {
    chapter: "Chapter 3",
    isEarly: false,
    title: {
        english: "Making a Date",
        japanese: { kana: "デートのやくそく", japanese: "デートの約束" },
    },
    vocabulary: [
        {
            english: "movie",
            japanese: "映画",
            kana: "えいが",
        },
        {
            english: "music",
            japanese: "音楽",
            kana: "おんがく",
        },
        {
            english: "magazine",
            japanese: "雑誌",
            kana: "ざっし",
        },
        {
            english: "sports",
            japanese: "スポーツ",
            kana: "スポーツ",
        },
        {
            english: "date (romantic, not calendar)",
            japanese: "デート",
            kana: "デート",
        },
        {
            english: "tennis",
            japanese: "テニス",
            kana: "テニス",
        },
        {
            english: "TV",
            japanese: "テレビ",
            kana: "テレビ",
        },
        {
            english: "ice cream",
            japanese: "アイスクリーム",
            kana: "アイスクリーム",
        },
        {
            english: "breakfast",
            japanese: "朝ご飯",
            kana: "あさごはん",
        },
        {
            english: "sake; alcohol",
            japanese: "お酒",
            kana: "おさけ",
        },
        {
            english: "green tea",
            japanese: "お茶",
            kana: "おちゃ",
        },
        {
            english: "coffee",
            japanese: "コーヒー",
            kana: "コーヒー",
        },
        {
            english: "dinner",
            japanese: "晩ご飯",
            kana: "ばんごはん",
        },
        {
            english: "hamburger",
            japanese: "ハンバーガー",
            kana: "ハンバーガー",
        },
        {
            english: "lunch",
            japanese: "昼ご飯",
            kana: "ひるごはん",
        },
        {
            english: "water",
            japanese: "水",
            kana: "みず",
        },
        {
            english: "home; house",
            japanese: "家",
            kana: "いえ",
        },
        {
            english: "home; house; my place",
            japanese: "うち",
            kana: "うち",
        },
        {
            english: "school",
            japanese: "学校",
            kana: "がっこう",
        },
        {
            english: "morning",
            japanese: "朝",
            kana: "あさ",
        },
        {
            english: "tomorrow",
            japanese: "明日",
            kana: "あした",
        },
        {
            english: "when",
            japanese: "いつ",
            kana: "いつ",
        },
        {
            english: "today",
            japanese: "今日",
            kana: "きょう",
        },
        {
            english: "at about...",
            japanese: "〜ごろ",
            kana: "〜ごろ",
        },
        {
            english: "tonight",
            japanese: "今晩",
            kana: "こんばん",
        },
        {
            english: "weekend",
            japanese: "週末",
            kana: "しゅうまつ",
        },
        {
            english: "Saturday",
            japanese: "土曜日",
            kana: "どようび",
        },
        {
            english: "Sunday",
            japanese: "日曜日",
            kana: "にちようび",
        },
        {
            english: "every day",
            japanese: "毎日",
            kana: "まいにち",
        },
        {
            english: "every night",
            japanese: "毎晩",
            kana: "まいばん",
        },
        {
            english: "to go (destination に/へ)",
            japanese: "行く",
            kana: "いく",
        },
        {
            english: "to go back; to return (destination に/へ)",
            japanese: "帰る",
            kana: "かえる",
        },
        {
            english: "to listen; to hear (~を)",
            japanese: "聞く",
            kana: "きく",
        },
        {
            english: "to drink (~を)",
            japanese: "飲む",
            kana: "のむ",
        },
        {
            english: "to speak; to talk (language を/で)",
            japanese: "話す",
            kana: "はなす",
        },
        {
            english: "to read (~を)",
            japanese: "読む",
            kana: "よむ",
        },
        {
            english: "to get up",
            japanese: "起きる",
            kana: "おきる",
        },
        {
            english: "to eat (~を)",
            japanese: "食べる",
            kana: "たべる",
        },
        {
            english: "to sleep; to go to sleep",
            japanese: "寝る",
            kana: "ねる",
        },
        {
            english: "to see; to look at; to watch (~を)",
            japanese: "見る",
            kana: "みる",
        },
        {
            english: "to come (destination に/へ)",
            japanese: "来る",
            kana: "くる",
        },
        {
            english: "to do (~を)",
            japanese: "する",
            kana: "する",
        },
        {
            english: "to study (~を)",
            japanese: "勉強する",
            kana: "べんきょうする",
        },
        {
            english: "good",
            japanese: "いい",
            kana: "いい",
        },
        {
            english: "early",
            japanese: "早い",
            kana: "はやい",
        },
        {
            english: "not much",
            japanese: "あまり + negative",
            kana: "あまり + negative",
        },

        {
            english: "not at all",
            japanese: "全然 + negative",
            kana: "ぜんぜん + negative",
        },
        {
            english: "usually",
            japanese: "たいてい",
            kana: "たいてい",
        },
        {
            english: "a little",
            japanese: "ちょっと",
            kana: "ちょっと",
        },
        {
            english: "sometimes",
            japanese: "時々",
            kana: "ときどき",
        },
        {
            english: "often; much",
            japanese: "よく",
            kana: "よく",
        },
        {
            english: "That's right.; Let me see.",
            japanese: "そうですね",
            kana: "そうですね",
        },
        {
            english: "but",
            japanese: "でも",
            kana: "でも",
        },
        {
            english: "How about ...?; How is ...?",
            japanese: "どうですか",
            kana: "どうですか",
        },
    ],
    grammar: [
        {
            title: "Verb Conjugation",
            conjugations: {
                columnNames: ["-ru verb", "-u verb", "irregular verb 1", "irregular verb 2"],
                rowNames: ["dictionary form", "stem", "present", "present negative"],
                rowData: [
                    ["たべる", "いく", "する", "くる"],
                    ["たべ", "いき", "し", "き"],
                    ["たべます", "いきます", "します", "きます"],
                    ["たべません", "いきません", "しません", "きません"],
                ],
            },
            meanings: [
                { english: "To eat", japanese: { kana: "たべる" } },
                { english: "Will eat", japanese: { kana: "たべます" } },
                { english: "Will not eat", japanese: { kana: "たべません" } },
                { english: "To go", japanese: { kana: "いく" } },
                { english: "Will go", japanese: { kana: "いきます" } },
                { english: "Will not go", japanese: { kana: "いきません" } },
            ],
            usages: ["Vstem + ます", "Vstem + ません"],
            notes: [
                "Ru-verbs, like 食べる and 見る, are catergorized so because the verb stem is the dictionary form minus the る.",
                "U-verbs, like 飲む and 帰る, are catergorized so because the verb stem is the dictionary form with the last character in its い form (い、き、み、し、 etc.).",
                "For Ru and U verbs that both end in る, 帰る for example, you just have to memorize which is which.",
                "する and 来る are often used in compound verbs and still conjugate the same. For example, 勉強する -> 勉強します。",
                "It is a good idea to memorize each verb as a set, dictionary form and present tense. For example, 帰る -> 帰ります、見る→見ます",
            ],
            examples: ["Examples to come"],
        },
        {
            title: 'Verb Types and the "Present Tense"',
            meanings: [
                { english: "X goes to Y", japanese: { kana: "XはYに行きます。" } },
                { english: "Tomorrow X will go to Y", japanese: { kana: "明日XはYに行きます。" } },
                { english: "X doesn't eat Y", japanese: { kana: "XはYを食べません。" } },
                { english: "Tomorrow X will not eat Y", japanese: { kana: "明日XはYを食べません。" } },
            ],
            usages: ["Vstem + ます", "Vstem + ません"],
            notes: [
                'This chapter covers a dozen verbs that describe basic human actions and are often called "action verbs". The "present tense" of these verbs either means 1) that a person habitually or regularly engages in these activities or 2) that a person will, or is not planning to, perform these activities in the future.',
                "Basically, present and future tense are the same conjugation",
            ],
            examples: ["Examples to come"],
        },
        {
            title: "Particles",
            meanings: [
                { english: "Direct object that is involved or affected by the event", japanese: { kana: "〜を" } },
                { english: "Where an event takes place", japanese: { kana: "〜で" } },
                { english: "Goal of movement", japanese: { kana: "〜に/へ" } },
                { english: "Time at which an event takes place", japanese: { kana: "〜に" } },
            ],
            usages: ["N を V", "place で", "goal に/へ V", "time に~"],
            notes: [
                "を has a very subtle w sound. It sounds like saying an English o.",
                "へ has a very subtle h sound. It sounds like saying the character え.",
                "へ may only replace に in the goal of movement sense. It is often used when に has already been previously used in the sentence.",
            ],
            examples: ["Examples to come"],
        },
        {
            title: "Time Reference",
            meanings: [{ english: "on/in/at X", japanese: { kana: "Xに" } }],
            usages: ["Day of the week + に", "Calendar month + に", "specific time + に"],
            notes: [
                "You do not use に for 1) time expressions defined relative to the present moment, such as today or tomorrow, 2) expressions describing regular intervals, such as every day, and 3) using the word when(いつ)",
                "Normally に is not used with parts of the day, such as morning and night, and the word for weekend(しゅうまつ). However, unlike tomorrow and today, they can be followed by に depending on styles, emphases, and personal preferences.",
            ],
            examples: ["Examples to come"],
        },
        {
            title: "~ませんか",
            meanings: [{ english: "Will you~? What do you say to ~?", japanese: { kana: "〜ませんか" } }],
            usages: ["Vstem + ませんか"],
            notes: [
                "Only the present negative can be used to extend an invitation. Using the present will only be construed as a question.",
            ],
            examples: ["Examples to come"],
        },
        {
            title: "Word Order",
            meanings: [],
            usages: ["Topic Time Place Object Verb", "Topic Frequency Time Goal Verb"],
            notes: [
                "Japanese sentences are fairly flexible in the arrangement of elements that appear in them and relative order is to a large extent free. The above usages are typical, but several other arrangements are also possible.",
            ],
            examples: ["Examples to come"],
        },
        {
            title: "Frequency Adverbs",
            meanings: [
                { english: "every day", japanese: { kana: "まいにち" } },
                { english: "often", japanese: { kana: "よく" } },
                { english: "sometimes", japanese: { kana: "ときどき" } },
                { english: "not very much", japanese: { kana: "あまり" } },
                { english: "not at all", japanese: { kana: "ぜんぜん" } },
            ],
            usages: ["Frequency + what is done at that frequency"],
            notes: [],
            examples: ["Examples to come"],
        },
        {
            title: "The Topic Particle は",
            meanings: [
                { english: "As for X, ~", japanese: { kana: "Xは〜" } },
                { english: "How about X?", japanese: { kana: "Xは?" } },
            ],
            usages: ["Topic phrase + は", "topic phrase + は?"],
            notes: [
                "A topic phrase need not be the the subect of a sentence.",
                "は can also be used in directing the listener's atention and thereby inviting a comment or completion of the sentence.",
            ],
            examples: ["Examples to come"],
        },
    ],
};

export default content;

// Type Declarations
export type ChapterContent = {
    chapter: string;
    title: TranslatedContent;
    vocabulary: VocabContent[];
    grammar: GrammarContent[];
};

export type GrammarContent = {
    title: string;
    meanings: TranslatedContent[];
    usages: string[];
    notes: string[];
    examples: string[];
};

export type TranslatedContent = {
    english: string;
    japanese: string;
};

export type VocabContent = {
    english: string;
    romaji?: string;
    kana: string;
    kanji?: string;
};

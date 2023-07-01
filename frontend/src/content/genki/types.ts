// Type Declarations
export type ChapterContent = {
    chapter: string;
    title: TranslatedContent;
    vocabulary: VocabContent[];
    grammar: GrammarContent[];
    isEarly: false;
};

export type EarlyChapterContent = {
    chapter: string;
    title: TranslatedContent;
    vocabulary: EarlyVocabContent[];
    grammar: GrammarContent[];
    isEarly: true;
};

export type GrammarContent = {
    title: string;
    meanings: TranslatedContent[];
    usages: string[];
    notes: string[];
    examples: string[];
    conjugations?: ConjugationContent;
};

export type JapaneseContent = {
    kana: string;
    japanese?: string;
};

export type TranslatedContent = {
    english: string;
    japanese: JapaneseContent;
};

export type VocabContent = {
    english: string;
    kana: string;
    japanese: string;
};

export type EarlyVocabContent = {
    english: string;
    kana: string;
    romaji: string;
};

export type ConjugationContent = {
    columnNames: string[];
    rowNames: string[];
    rowData: string[][];
};

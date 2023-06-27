import * as React from "react";
import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    Switch,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";
import type { ChapterContent, EarlyChapterContent, EarlyVocabContent, VocabContent } from "../../content/genki/types";
import FlipCard from "../FlipCard";

type StudyLanguage = "e2j" | "e2k" | "j2e" | "k2e";
type EarlyStudyLanguage = "e2k" | "e2r" | "k2e" | "r2e";
const getCommonCardContent = (
    // Only want to look at the intersection of these types
    studyLanguage: StudyLanguage & EarlyStudyLanguage,
    vocabContent: VocabContent | EarlyVocabContent
) => {
    // Don't need a default because TS knows that all cases are covered or not because of the intersection above
    switch (studyLanguage) {
        case "e2k":
            return <FlipCard front={vocabContent.english} back={vocabContent.kana} />;
        case "k2e":
            return <FlipCard front={vocabContent.kana} back={vocabContent.english} />;
    }
};

const getEarlyCardContent = (studyLanguage: EarlyStudyLanguage, vocabContent: EarlyVocabContent) => {
    switch (studyLanguage) {
        case "e2r":
            return <FlipCard front={vocabContent.english} back={vocabContent.romaji} />;
        case "r2e":
            return <FlipCard front={vocabContent.romaji} back={vocabContent.english} />;
        default:
            return getCommonCardContent(studyLanguage, vocabContent);
    }
};
const getCardContent = (studyLanguage: StudyLanguage, vocabContent: VocabContent) => {
    switch (studyLanguage) {
        case "e2j":
            return <FlipCard front={vocabContent.english} back={vocabContent.japanese} />;
        case "j2e":
            return <FlipCard front={vocabContent.japanese} back={vocabContent.english} />;
        default:
            return getCommonCardContent(studyLanguage, vocabContent);
    }
};

function Vocab({ chapterContent }: { chapterContent: ChapterContent | EarlyChapterContent }) {
    return chapterContent.isEarly ? (
        <EarlyVocab vocabList={chapterContent.vocabulary}></EarlyVocab>
    ) : (
        <AdvancedVocab vocabList={chapterContent.vocabulary}></AdvancedVocab>
    );
}

export default Vocab;

function EarlyVocab({ vocabList }: { vocabList: EarlyVocabContent[] }) {
    const [isStudyMode, setIsStudyMode] = React.useState(false);
    const handleStudyMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudyMode(event.target.checked);
    };

    const [studyLanguage, setStudyLanguage] = React.useState<EarlyStudyLanguage>("e2k");
    const handleStudyModeLanguage = (event: SelectChangeEvent<EarlyStudyLanguage>) => {
        setStudyLanguage(event.target.value as EarlyStudyLanguage);
    };

    return (
        <Box mt={3}>
            <Typography variant="h5" align="left" sx={{ color: "#534D8A" }}>
                Vocabulary
            </Typography>
            <div>
                <FormGroup sx={{ width: "15%" }}>
                    <FormControlLabel
                        control={<Switch color="warning" checked={isStudyMode} onChange={handleStudyMode} />}
                        label="Study Mode"
                    />
                </FormGroup>
                {isStudyMode && (
                    <FormControl variant="standard" sx={{ m: 4, minWidth: 120 }}>
                        <InputLabel
                            sx={{
                                color: "#534D8A",
                                "&.Mui-focused": {
                                    color: "#534D8A",
                                },
                            }}>
                            Front to Back Languages
                        </InputLabel>
                        <Select
                            value={studyLanguage}
                            label="Age"
                            onChange={handleStudyModeLanguage}
                            sx={{
                                "&:after": { borderBottomColor: "#534D8A" },
                                "& .MuiSvgIcon-root": { color: "#534D8A" },
                            }}>
                            <MenuItem value="e2r">English to Romaji</MenuItem>
                            <MenuItem value="e2k">English to Kana</MenuItem>
                            <MenuItem value="r2e">Romaji to English</MenuItem>
                            <MenuItem value="k2e">Kana to English</MenuItem>
                        </Select>
                    </FormControl>
                )}
            </div>

            {isStudyMode ? (
                <div>
                    <Grid container spacing={2}>
                        {vocabList.map((vocab) => (
                            <Grid item>{getEarlyCardContent(studyLanguage, vocab)}</Grid>
                        ))}
                    </Grid>
                </div>
            ) : (
                <Grid container spacing={2}>
                    {vocabList.map((vocab) => (
                        <Grid item>
                            <Card sx={{ width: 220 }}>
                                <CardContent>
                                    <Typography>{vocab.english}</Typography>
                                    <Typography>{vocab.kana}</Typography>
                                    <Typography> {vocab.romaji}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
function AdvancedVocab({ vocabList }: { vocabList: VocabContent[] }) {
    const [isStudyMode, setIsStudyMode] = React.useState(false);
    const handleStudyMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudyMode(event.target.checked);
    };

    const [studyLanguage, setStudyLanguage] = React.useState<StudyLanguage>("e2k");
    const handleStudyModeLanguage = (event: SelectChangeEvent<StudyLanguage>) => {
        setStudyLanguage(event.target.value as StudyLanguage);
    };

    return (
        <Box mt={3}>
            <Typography variant="h5" align="left" sx={{ color: "#534D8A" }}>
                Vocabulary
            </Typography>
            <div>
                <FormGroup sx={{ width: "15%" }}>
                    <FormControlLabel
                        control={<Switch color="warning" checked={isStudyMode} onChange={handleStudyMode} />}
                        label="Study Mode"
                    />
                </FormGroup>
                {isStudyMode && (
                    <FormControl variant="standard" sx={{ m: 4, minWidth: 120 }}>
                        <InputLabel
                            sx={{
                                color: "#534D8A",
                                "&.Mui-focused": {
                                    color: "#534D8A",
                                },
                            }}>
                            Front to Back Languages
                        </InputLabel>
                        <Select
                            value={studyLanguage}
                            label="Age"
                            onChange={handleStudyModeLanguage}
                            sx={{
                                "&:after": { borderBottomColor: "#534D8A" },
                                "& .MuiSvgIcon-root": { color: "#534D8A" },
                            }}>
                            <MenuItem value="e2k">English to Kana</MenuItem>
                            <MenuItem value="e2j">English to Japanese</MenuItem>
                            <MenuItem value="k2e">Kana to English</MenuItem>
                            <MenuItem value="j2e">Japanese to English</MenuItem>
                        </Select>
                    </FormControl>
                )}
            </div>

            {isStudyMode ? (
                <div>
                    <Grid container spacing={2}>
                        {vocabList.map((vocab) => (
                            <Grid item>{getCardContent(studyLanguage, vocab)}</Grid>
                        ))}
                    </Grid>
                </div>
            ) : (
                <Grid container spacing={2}>
                    {vocabList.map((vocab) => (
                        <Grid item>
                            <Card sx={{ width: 220 }}>
                                <CardContent>
                                    <Typography>{vocab.english}</Typography>
                                    <Typography>{vocab.kana}</Typography>
                                    <Typography> {vocab.japanese}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}

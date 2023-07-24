import * as React from "react";
import { useEffect } from "react";
import { Card, CardContent, Typography, ButtonBase } from "@mui/material";
import ReactCardFlip from "../ReactCardFlip";

type StudyLanguage = "e2j" | "e2k" | "j2e" | "k2e";
type EarlyStudyLanguage = "e2k" | "e2r" | "k2e" | "r2e";

function FlipCard({
    front,
    back,
    studyLanguage,
}: {
    front: string;
    back: string;
    studyLanguage: StudyLanguage | EarlyStudyLanguage;
}) {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const handleFlip = () => {
        // This requests an update to isFlipped since the setter puts it on a queue in order to be changed
        setIsFlipped((p) => !p);
    };

    useEffect(() => {
        setIsFlipped(false);
    }, [studyLanguage]);

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Card sx={{ width: 220 }}>
                <ButtonBase onClick={handleFlip} sx={{ width: 220 }}>
                    <CardContent>
                        <Typography>{front}</Typography>
                    </CardContent>
                </ButtonBase>
            </Card>

            <Card sx={{ width: 220 }}>
                <ButtonBase onClick={handleFlip} sx={{ width: 220 }}>
                    <CardContent>
                        <Typography>{back}</Typography>
                    </CardContent>
                </ButtonBase>
            </Card>
        </ReactCardFlip>
    );
}

export default FlipCard;

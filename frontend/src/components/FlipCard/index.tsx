import * as React from "react";
import { Card, CardContent, Typography, ButtonBase } from "@mui/material";
import ReactCardFlip from "../ReactCardFlip";

function FlipCard({ front, back }: { front: string; back: string }) {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const handleFlip = () => {
        // This requests an update to isFlipped since the setter puts it on a queue in order to be changed
        setIsFlipped((p) => !p);
    };

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

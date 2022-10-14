import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function changeAnswerVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={changeAnswerVisibility}>
                Reveal Answer</Button>
            {visible && 42}
        </div>

    );
}

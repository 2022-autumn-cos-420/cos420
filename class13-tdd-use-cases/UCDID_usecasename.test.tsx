import React from "react";
import { render, screen } from "@testing-library/react";
import { RevealAnswer } from "./components/RevealAnswer";
import { expectAnswerIsPresent } from "./components/RevealAnswer.test";
// these imports need to be fixed to point at the files

describe("UCDID use case name", () => {
    beforeEach(() => {
        render(<RevealAnswer />);
    });


    function expectAnswerIsPresent(bool: shouldBeThere) {
        let answerText = screen.queryByText(/42/);
        shouldBeThere ?
            expect(answerText).toBeInTheDocument()
            :
            expect(answerText).toBeNull();
    }

    test("UCDID main path", () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });

        expectAnswerIsPresent(false);
        revealButton.click();
        expectAnswerIsPresent(true);
        revealButton.click();
        expectAnswerIsPresent(false);
    });

});

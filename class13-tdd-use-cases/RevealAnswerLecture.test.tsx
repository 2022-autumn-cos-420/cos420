import React from "react";
import { render, screen } from "@testing-library/react";
import { RevealAnswer } from "./RevealAnswer";


// this came from refactoring the test after the use case
// usually the "helper functions" (that's what this is called)
//    for use case / integration tests, will end up being reused
//    so much that they go in one file somewhere to make them easier
//    to include/keep track of, e.g. useCaseHelpers.tsx
// you'd want to refactor the RevealAnswer tests to use this
export function expectAnswerIsPresent(bool: shouldBeThere): void {
    let answerText = screen.queryByText(/42/);
    shouldBeThere ?
        expect(answerText).toBeInTheDocument()
        :
        expect(answerText).toBeNull();
}

describe("RevealAnswer Component tests", () => {
    beforeEach(() => {
        render(<RevealAnswer />);
    });

    test("There is a Reveal Answer button", () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });
        expect(revealButton).toBeInTheDocument();
    });


    test("The answer '42' is not visible initially", () => {
        const answerText = screen.queryByText(/42/);
        expect(answerText).toBeNull();
    });

    test("After clicking, the answer '42' is visible", () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });
        revealButton.click();
        const answerText = screen.getByText(/42/);
        expect(answerText).toBeInTheDocument();
    });

    test("After clicking, and clicking again, answer should be not visible", () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });
        revealButton.click();
        revealButton.click();
        const answerText = screen.queryByText(/42/);
        expect(answerText).toBeNull();
        //        expect(answerText).toBeInTheDocument();
    });

});

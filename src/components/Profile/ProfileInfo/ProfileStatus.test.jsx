import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Hello! Yo!" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello! Yo!");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="Hello! Yo!" />);
        const root = component.root;
        expect(() => {
            let span = root.findByType("span");
        }).not.toThrow();
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Hello! Yo!" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should be correct status", () => {
        const component = create(<ProfileStatus status="Hello! Yo!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Hello! Yo!");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Hello! Yo!" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Hello! Yo!");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Hello! Yo!"
        updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 30},
        {id: 3, message: 'Bla bla', likesCount: 11},
        {id: 4, message: 'Da dad dadad', likesCount: 10}
    ],
};

it('length post should be incremented', () => {
    let action = addPostActionCreator("Yo LOOL");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('message should be corrected', () => {
    let action = addPostActionCreator("Yo LOOL");

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("Yo LOOL");
});

it('after deleting length of message should be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decremented if id is incorrect`, () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

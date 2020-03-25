import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
             let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMassageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs updateNewMessageBody={onNewMassageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={store.getState().dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer;
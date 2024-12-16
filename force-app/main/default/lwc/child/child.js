import { LightningElement, wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    MessageContext,
} from 'lightning/messageService';
import channelName from '@salesforce/messageChannel/MyMessageChannel__c';


export default class Child extends LightningElement {
    @wire(MessageContext)
        messageContext;

        messagefromparemt='';


        connectedCallback() {
            this.subscribeToMessageChannel();
        }
        subscription=null;
        subscribeToMessageChannel(){
        if(!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    } 
handleMessage(message) {
    this.messagefromparemt=message;
}
}
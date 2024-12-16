import { LightningElement,wire } from 'lwc';
import { createMessageContext, MessageContext, publish } from 'lightning/messageService';
import channelName from '@salesforce/messageChannel/MyMessageChannel__c';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_salesforce_modules */

export default class Parent extends LightningElement {
    message;
    @wire(MessageContext)
        messageContext;
    onchangehandler(e){
            this.message=e.target.value;
    }
    handleClick(){
        const payload = { message: this.message};

        publish(this.messageContext, channelName, payload);
    }
}
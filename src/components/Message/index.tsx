import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Toast from './Toast'
interface MsgParams {
    type: 'success' | 'warning' | 'info' | 'error',
    msg: string,
    closed?: boolean
}
export default function message (params: MsgParams | string): void {
    let option: MsgParams = {
        type: 'success',
        msg: ''
    };
    const div: HTMLDivElement = document.createElement('div');
    div.className = 'zd-message'

    const messageBox: HTMLElement = document.getElementById('zd-message-content');
    if (messageBox) {
        messageBox.appendChild(div);
        document.body.appendChild(messageBox);
    } else {
        const messageBox: HTMLDivElement = document.createElement('div');
        messageBox.id = 'zd-message-content';
        messageBox.className = 'ivu-message-notice'
        messageBox.appendChild(div);
        document.body.appendChild(messageBox);
    }

    if ( typeof params === 'string') {
        option.msg = params;
    } else {
        option = params
    }

    const msgElement: React.ReactElement = <Toast {...option} container={div}/>
    
    ReactDOM.render(msgElement, div);
}
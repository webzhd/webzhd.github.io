import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Icon from './assets'

interface ToastProps {
  type: 'success' | 'warning' | 'info' | 'error',
  msg: string,
  closed?: boolean,
  container: HTMLElement
}
export default class Toast extends React.Component<ToastProps, { visible: boolean }> {
  state = {
    visible: true
  }
  close() {
    ReactDOM.unmountComponentAtNode(this.props.container);
    const messageBox: HTMLElement = document.getElementById('zd-message-content');
    messageBox.removeChild(this.props.container);
  }
  componentDidMount() {

    let msgLength: number = document.getElementsByClassName('zd-message').length
    if(msgLength === 0){ msgLength = 1 }
    let top: number = (msgLength - 1) * 50 + 16;
    this.props.container.style.top = top + 'px';

    setTimeout(() => {
      this.close();
    }, 1500)
  }
  componentWillUnmount() {
    setTimeout(() => {
      const msgList: HTMLCollectionOf<Element> = document.getElementsByClassName('zd-message');
      Array.from(msgList).forEach((div: HTMLElement, index: number) => {
        let top: number = index * 50 + 16;
        div.style.top = top + 'px';
      }, 500)
    })
  }
  render() {
    return (
      <div className="zd-message-notice">
        <div className={`zd-message-notice-content zd-message-${this.props.type}`}>
          <div className="zd-message-notice-content-text">
            <span className="zd-message-icon">
              <img width="15" src={Icon[this.props.type]}/>
            </span>
            <span>{this.props.msg}</span>
          </div>
        </div>
      </div>
    )
  }
}

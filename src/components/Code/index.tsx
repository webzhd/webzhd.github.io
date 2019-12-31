import * as React from 'react';
import * as Prism from 'prismjs';
import "prismjs/themes/prism.css"

interface CodeProps {
  children: string
}

export default class Code extends React.Component<CodeProps, {visible: boolean}> {
  state = {
    visible: false
  }
  componentDidMount(){
    
  }
  showCode() {
    this.setState({
      visible: true
    }, () => {
      Prism.highlightAll();
    })
  }
  hideCode() {
    this.setState({
      visible: false
    })
  }
  render() {
    if (this.state.visible) {
      return (
        <div style={{backgroundColor: "#f5f2f0", padding: "5px 0 0 0"}}>
          <pre>
            <code className="language-js">
              {this.props.children}
            </code>
          </pre>
          <p style={{textAlign: "center", cursor: "pointer"}} onClick={this.hideCode.bind(this)}>
              {
                "</>"
              }
            </p>
        </div>
        
      )
    } else {
      return (
        <div style={{backgroundColor: "#f5f2f0", padding: "5px 0 0 0"}}>
            <p style={{textAlign: "center", cursor: "pointer"}} onClick={this.showCode.bind(this)}>
              {
                "</>"
              }
            </p>
        </div>
      )
    }
    
  }
}

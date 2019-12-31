import * as React from 'react'
import { Tag, Code } from '../components'

export default class TagDoc extends React.Component {
    state = {
        visible:true,
        checked:true
    }
  render() {
    return (
      <div>
        <h3>引入组件</h3>
          <pre>
            <code>
              {`import { Tag } from 'zdean-ui'`}
            </code>
          </pre>
        <h3>基础用法</h3>
          <Tag>default</Tag>
          <Tag type="primary">primary</Tag>
          <Tag type="success">success</Tag>
          <Tag type="success">error</Tag>
          <Tag type="success">warning</Tag>
          <Code>
            {`
              <Tag>default</Tag>
              <Tag type="primary">primary</Tag>
              <Tag type="success">success</Tag>
              <Tag type="success">error</Tag>
              <Tag type="success">warning</Tag>
            `}
          </Code>
          <h3>自定义主题</h3>
          <Tag theme={{color: "#fff", bgColor: "#000"}}>theme</Tag>
          <Code>
            {`
              <Tag theme={{color: "#fff", bgColor: "#000"}}>theme</Tag>
            `}
          </Code>

          <h3>可关闭</h3>
          <Tag visible={this.state.visible} closable onClose={() => {
                      this.setState({
                        visible: false
                      })
                    }}>close</Tag>
          <Code>
            {`
              class App extends React.Component {
                state = {
                  visible:true
                }
                render(){
                  return (
                    <Tag visible={this.state.visible} closable onClose={() => {
                      this.setState({
                        visible: false
                      })
                    }}>close</Tag>
                  )
                }
              }
            `}
          </Code>
          <h3>可被选中</h3>
          <Tag checked={this.state.checked} type="success" onCheck={() => {
            this.setState({
              checked: !this.state.checked
            })
          }}>check</Tag>
          <Code>
            {`
              class App extends React.Component {
                state = {
                  checked:true
                }
                render(){
                  return (
                    <Tag checked={this.state.checked} type="success" onCheck={() => {
                      this.setState({
                        checked: !this.state.checked
                      })
                    }}>check</Tag>
                  )
                }
              }
            `}
          </Code>
      </div>
    )
  }
}

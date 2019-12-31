import  * as React from 'react'
import { Message, Button, Code } from '../components'

export default class ButtonDoc extends React.Component {
  render() {
    return (
      <div>
        <h3>引入组件</h3>
          <pre>
            <code>
              {`import { Message } from 'zdean-ui'`}
            </code>
          </pre>
          <h3>基础用法</h3>
          <Button type="success" onClick={() => {
          Message({
            type: 'success',
            msg: '成功消息'
          })
        }}>success</Button>

        <Button className="ml-sm" type="info" onClick={() => {
          Message({
            type: 'info',
            msg: '一般提示消息'
          })
        }}>info</Button>

        <Button className="ml-sm" type="error" onClick={() => {
          Message({
            type: 'error',
            msg: '错误消息'
          })
        }}>error</Button>

        <Button className="ml-sm" type="warning" onClick={() => {
          Message({
            type: 'warning',
            msg: '警告消息'
          })
        }}>warning</Button>
         <Code>
        {`
          <Button type="success" onClick={() => {
            Message({
              type: 'success',
              msg: '成功消息'
            })
          }}>success</Button>
  
          <Button type="info" onClick={() => {
            Message({
              type: 'info',
              msg: '一般提示消息'
            })
          }}>info</Button>
  
          <Button type="error" onClick={() => {
            Message({
              type: 'error',
              msg: '错误消息'
            })
          }}>error</Button>
  
          <Button type="warning" onClick={() => {
            Message({
              type: 'warning',
              msg: '警告消息'
            })
          }}>warning</Button>
          
        `}
        </Code>
      </div>
     
    )
  }
}

import  * as React from 'react'
import { Button, Code } from '../components'

export default class ButtonDoc extends React.Component {
  render() {
    return (
      <div>
          <h3>引入组件</h3>
          <pre>
            <code>
              {`import { Button } from 'zdean-ui'`}
            </code>
          </pre>
          <h3>基础用法</h3>
          <div className="default-bg">
            <Button> default </Button>
            <Button className="ml-sm" type="primary"> primary </Button>
            <Button className="ml-sm" type="success"> success </Button>
            <Button className="ml-sm" type="info"> info </Button>
            <Button className="ml-sm" type="warning"> warning </Button>
            <Button className="ml-sm" type="dashed"> dashed </Button>
            <Button className="ml-sm" type="error"> error </Button>
            <Button className="ml-sm" type="text"> text </Button>
          </div>
          <Code>
            {`
              <Button> default </Button>
              <Button className="ml-sm" type="primary"> primary </Button>
              <Button className="ml-sm" type="success"> success </Button>
              <Button className="ml-sm" type="info"> info </Button>
              <Button className="ml-sm" type="warning"> warning </Button>
              <Button className="ml-sm" type="dashed"> dashed </Button>
              <Button className="ml-sm" type="error"> error </Button>
              <Button className="ml-sm" type="text"> text </Button>
            `}
          </Code>
          <h3>幽灵按钮</h3>
          <div className="ghost-bg mt-sm">
            <Button > default </Button>
            <Button className="ml-sm" type="primary" ghost> primary </Button>
            <Button className="ml-sm" type="success" ghost> success </Button>
            <Button className="ml-sm" type="info" ghost> info </Button>
            <Button className="ml-sm" type="warning" ghost> warning </Button>
            <Button className="ml-sm" type="dashed" ghost> dashed </Button>
            <Button className="ml-sm" type="error" ghost> error </Button>
            <Button className="ml-sm" type="text" ghost> text </Button>

          </div>
          <Code>
            {`
              <Button > default </Button>
              <Button className="ml-sm" type="primary" ghost> primary </Button>
              <Button className="ml-sm" type="success" ghost> success </Button>
              <Button className="ml-sm" type="info" ghost> info </Button>
              <Button className="ml-sm" type="warning" ghost> warning </Button>
              <Button className="ml-sm" type="dashed" ghost> dashed </Button>
              <Button className="ml-sm" type="error" ghost> error </Button>
              <Button className="ml-sm" type="text" ghost> text </Button>
            `}
          </Code>
          
          <h3>button 禁用状态</h3>
          <Button disabled className="ml-sm" type="primary"> disabled </Button>
          <Code>
            {`
              <Button disabled className="ml-sm" type="primary"> disabled </Button>
            `}
          </Code>
          <h3>button 尺寸</h3>
          <Button className="ml-sm" type="primary" size="large"> large </Button>
          <Button className="ml-sm" type="primary"> middle </Button>
          <Button className="ml-sm" type="primary" size="small"> small </Button>
          <Code>
            {`
              <Button className="ml-sm" type="primary" size="large"> large </Button>
              <Button className="ml-sm" type="primary"> middle </Button>
              <Button className="ml-sm" type="primary" size="small"> small </Button>
            `}
          </Code>

          <h3>button 圆角</h3>
          <Button className="ml-sm" type="primary" shape="circle">hello</Button>
          <Code>
            {`
              <Button className="ml-sm" type="primary" shape="circle">hello</Button>
            `}
          </Code>
      </div>
    )
  }
}

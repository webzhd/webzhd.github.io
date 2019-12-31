import * as React from 'react'
import * as Prism from 'prismjs';

export default class Home extends React.Component {
  componentDidMount(){
    Prism.highlightAll();
  }
  render() {
    return (
      <div>
        <h2>React开发组件</h2>
        
        <h3>如何使用？</h3>
        <h4>1.安装组件</h4>
        <pre>
          <code className="language-js">
            yarn add zdean-ui
          </code>
        </pre>
        <h4>2.引入组件样式</h4>
        <pre>
          <code className="language-js">
          {`
            import 'zdean-ui/theme/index.less';
          `}
          </code>
        </pre>

        <h4>3.使用</h4>
        <pre>
          <code className="language-js">
          {`
            import {Button} from 'zdean-ui'

            class App extends React.Component {
              render (){
                return <Button>button</Button>
              }
            }
          `}
          </code>
        </pre>

      </div>
    )
  }
}

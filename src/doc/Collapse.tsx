import * as React from 'react'
import {Collapse, CollapseItem, Code} from '../components'

export default class CollapseDoc extends React.Component {
  render() {
    return (
      <div>
         <h3>引入组件</h3>
          <pre>
            <code>
              {`import { Collapse, CollapseItem } from 'zdean-ui'`}
            </code>
          </pre>
        <h3>基础用法</h3>
        <Collapse>
            {
                [{
                    title: "1",
                    key: "1",
                    content: () => (<span>1223</span>)
                }, {
                    title: "2",
                    key: "2",
                    content: () => (<span>2222</span>)
                }].map((i: any) => {
                    return <CollapseItem title={i.title} key={i.key}>
                        <i.content />
                    </CollapseItem>
                })
            }
        </Collapse>
        <Code>
          {`
            <Collapse>
            {
                [{
                    title: "1",
                    key: "1",
                    content: () => (<span>1223</span>)
                }, {
                    title: "2",
                    key: "2",
                    content: () => (<span>2222</span>)
                }].map((i: any) => {
                    return <CollapseItem title={i.title} key={i.key}>
                        <i.content />
                    </CollapseItem>
                })
            }
            </Collapse>
          `}
        </Code>
      </div>
    )
  }
}

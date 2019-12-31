import * as React from 'react'
import { Radio, RadioGroup } from '../components/index'

export default class RadioDoc extends React.Component {
    state = {
        value: false,
        groupValue: "1"
    }
  render() {
    return (
      <div>

        <p>基础用法</p>
          <Radio>基础用法</Radio>
        <p>禁用状态</p>
        <Radio label="禁用" disabled checked/>
        <Radio label="禁用" disabled/>
          <p>分组</p>
        <RadioGroup value={this.state.groupValue} onChange={(value) => {
            this.setState({
                groupValue: value
            })
        }}>
             <Radio label="1" value={"1"}/>
             <Radio label="2" value={"2"}/>
             <Radio label="3" value={"3"}/>
             <Radio label="4" value={"4"}/>
        </RadioGroup>
      </div>
    )
  }
}

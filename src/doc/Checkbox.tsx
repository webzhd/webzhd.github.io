import * as React from 'react'
import {Checkbox, CheckboxGroup} from '../components'
export default class CheckboxDoc extends React.Component {
  state: any = {
    checked: false,
    checked1: false,
    checked2: true,
    groups: []
  }
  render() {
    return (
      <div>
          <Checkbox checked={this.state.checked} onChange={(checked: boolean) => {
            this.setState({
              checked
            })
          }}>基本用法</Checkbox>

        <Checkbox checked={this.state.checked1} disabled onChange={(checked: boolean) => {
            this.setState({
              checked1: checked
            })
          }}>禁用</Checkbox>

        <Checkbox checked={this.state.checked2} disabled onChange={(checked: boolean) => {
            this.setState({
              checked2: checked
            })
          }}>禁用</Checkbox>

      <CheckboxGroup value={this.state.groups} onChange={(values: any[]) => {
        console.log(values)
        this.setState({
          groups: values
        })
      }}>
        <Checkbox value="1">1</Checkbox>
        <Checkbox value="2">2</Checkbox>
        <Checkbox value="3">3</Checkbox>
      </CheckboxGroup>
      </div>
    )
  }
}

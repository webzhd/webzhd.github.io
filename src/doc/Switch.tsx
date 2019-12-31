import * as React from 'react'
import { Switch } from '../components'

export default class SwitchDoc extends React.Component {
    state = {
        value: false,
        value1: false,
        value2: false,
        value3: false
    }
    render() {
        const { value, value1, value2, value3 } = this.state
        return <div>
            <h3>基础用法</h3>
            <Switch value={value} onChange={v => {
                this.setState({
                    value: v
                })
            }}/>
            <h3>不同尺寸</h3>
            <Switch value={value1} size="large" onChange={v => {
                this.setState({
                    value1: v
                })
            }}/>
             <Switch value={value2} size="middle" onChange={v => {
                this.setState({
                    value2: v
                })
            }}/>
             <Switch value={value3} size="small" onChange={v => {
                this.setState({
                    value3: v
                })
            }}/>
            <h3>禁用</h3>
            <Switch disabled/>
        </div>
    } 
}
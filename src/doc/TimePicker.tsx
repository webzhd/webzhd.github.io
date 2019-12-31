import * as React from 'react'
import { TimePicker } from '../components'

export default class TimePickerDoc extends React.Component {
    state = {
        value: '00:00:00',
        value1: '00:00:00',
        value2: '00:00:00',
        value3: '00:00:00'
    }
    render() {
        const {value, value1, value2, value3} = this.state
        const {} = this.props
        return (<div>
            <h3>基础用法</h3>
            <TimePicker value={value} onChange={v => {
                this.setState({
                    value: v
                })
            }}/>
            <h3>禁用状态</h3>
            <TimePicker value={"00:00:00"} disabled/>
            <h3>不同大小</h3>
            <TimePicker size="large" value={value1} onChange={v => {
                this.setState({
                    value1: v
                })
            }}/>
            <TimePicker size="middle" value={value2} onChange={v => {
                this.setState({
                    value2: v
                })
            }}/>
            <TimePicker size="samll" value={value3} onChange={v => {
                this.setState({
                    value3: v
                })
            }}/>
        </div>)
    }
}
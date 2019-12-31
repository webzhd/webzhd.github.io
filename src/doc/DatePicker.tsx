import * as React from 'react'
import {DatePicker} from '../components'
export default class App extends React.Component {
    state = {
        value: new Date(),
        value1: new Date(),
        value2: new Date(),
        value3: new Date(),
    }
    render() {
        return (<div>
            <h3>基础用法</h3>
            <DatePicker value={this.state.value} onChange={(date: Date) => {
                this.setState({
                    value: date
                })
            }}/>
            <h3>禁用</h3>
            <DatePicker value={this.state.value} disabled/>
            <h3>不同尺寸</h3>
            <DatePicker size="large" value={this.state.value1} onChange={(date: Date) => {
                this.setState({
                    value1: date
                })
            }}/>
            <DatePicker size="middle" value={this.state.value2} onChange={(date: Date) => {
                this.setState({
                    value2: date
                })
            }}/>
            <DatePicker size="samll" value={this.state.value3} onChange={(date: Date) => {
                this.setState({
                    value3: date
                })
            }}/>
        </div>)
    }
}
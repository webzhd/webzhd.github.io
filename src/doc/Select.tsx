import * as React from 'react'
import {Select, Option} from '../components'

export default class SelectDoc extends React.Component {
    state = {
        value: "1",
        value1: "1",
        value2: "1",
        value3: "1",
    }
    render() {
        const {value, value1, value2, value3} = this.state
        return (
            <div>
                <p>1. 基础用法</p>
                    <Select value={value} onChange={(value: any) => {
                        this.setState({
                            value
                        })
                    }}>
                        <Option value="1">test1</Option>
                        <Option value="2">test2</Option>
                        <Option value="3">test3</Option>
                    </Select>
                <p>2. 不同尺寸</p>
                <Select size="small" value={value1} onChange={(value1: any) => {
                        this.setState({
                            value1
                        })
                    }}>
                        <Option value="1">test1</Option>
                        <Option value="2">test2</Option>
                        <Option value="3">test3</Option>
                    </Select>
                    <div className="mt-sm"/>
                    <Select size="middle" value={value2} onChange={(value2: any) => {
                        this.setState({
                            value2
                        })
                    }}>
                        <Option value="1">test1</Option>
                        <Option value="2">test2</Option>
                        <Option value="3">test3</Option>
                    </Select>
                    <div className="mt-sm"/>
                    <Select size="large" value={value3} onChange={(value3: any) => {
                        this.setState({
                            value3
                        })
                    }}>
                        <Option value="1">test1</Option>
                        <Option value="2">test2</Option>
                        <Option value="3">test3</Option>
                    </Select>
            </div>
        )
    }
}

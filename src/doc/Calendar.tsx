import * as React from 'react'
import { Calendar } from '../components'

export default class CalendarDoc extends React.Component {
    state = {
        value: new Date()
    }
    render() {
        const { value } = this.state
        return <div>
            <h3>基础用法</h3>
            <Calendar value={value} onChange={date => {
                this.setState({
                    value: date
                })
            }}/>
        </div>
    } 
}
import * as React from 'react'
import {Input} from '../components'

export default class InputDoc extends React.Component {
    render() {
        return (
            <div>
                <p>基础用法</p>
                <Input />
                <p>不同尺寸</p>
                <Input size="large"/>
                <br />
                <br />
                <Input/>
                <br />
                <br />
                <Input size="samll"/>
            </div>
        )
    }
}

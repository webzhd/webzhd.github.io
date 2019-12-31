import * as React from 'react'
import {Icon} from '../components'

export default class IconDoc extends React.Component {
    render() {
        return (
            <div>
                <p>基础用法</p>
                arrow_up 
                <Icon type="arrow_up" />   
                arrow_down 
                <Icon type="arrow_down" />             
            </div>
        )
    }
}

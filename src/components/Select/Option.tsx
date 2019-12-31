import * as React from 'react'

interface OptionProps {
    value?: string | number | boolean,
    label?: string,
    disabled?: boolean,
    selected?: boolean,
    children?: string,
    onOptionClick?: (value: string | number | boolean, label: string) => void,
    defaultLabel?: (label: string) => void
}
export default class Option extends React.Component<OptionProps, {}> {

    componentDidMount(){
        if(this.props.selected) {
            if(this.props.defaultLabel){
                this.props.defaultLabel(this.props.children || this.props.label)
            }
        }
    }

    selectOptionClick(){
        if(this.props.onOptionClick) {
            this.props.onOptionClick(this.props.value, this.props.children || this.props.label)
        }
    }
    render() {
        return (
           <li className={`
                zd-select-item
                ${this.props.selected ? 'zd-select-item-selected zd-select-item-focus' : ''}
           `} onClick={this.selectOptionClick.bind(this)}>
               {this.props.children || this.props.label}
           </li>
        )
    }
}

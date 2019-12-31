import * as React from 'react'

interface RadioProps {
    checked?: boolean,
    value?: string,
    label?: string,
    disabled?: boolean,
    children?: React.ReactNode,
    onChange?: (value: any)=> void
}


export default class index extends React.Component<RadioProps, { checked: boolean }> {
    constructor(props: any) {
        super(props)
        this.state = {
            checked: this.props.checked || false
        }

        this.onChange = this.onChange.bind(this)
    }
    componentDidUpdate(prevProps: RadioProps) {
        if(this.props.checked !== prevProps.checked) {
            this.setState({
                checked: this.props.checked
            })
        }
    }
    onChange(e: any){
        const { disabled } = this.props
        if( disabled ) return 
        const checked: boolean = e.target.checked
        if(checked) {
            if(this.props.onChange) {
                this.props.onChange(this.props.value)
            }
        }
        this.setState({
            checked
        })
    }
    render() {
        const { checked } = this.state
        const { disabled } = this.props
        return (
        <label className={`zd-radio-wrapper zd-radio-default 
        ${checked ? 'zd-radio-wrapper-checked':''} 
        ${disabled ? 'zd-radio-wrapper-disabled': ''}`}>
            <span className={`zd-radio 
            ${checked ? 'zd-radio-checked': ''}
            ${disabled ? 'zd-radio-disabled': ''}
            `}>
                <span className="zd-radio-inner" />
                <input className="zd-radio-input" type="radio" checked={checked} onChange={this.onChange}/>
            </span>
            {this.props.children || this.props.label || ""}
        </label>
        )
    }
}

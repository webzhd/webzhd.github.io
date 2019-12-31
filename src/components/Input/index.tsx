import * as React from 'react'

interface InputProps {
    size?: 'large' | 'samll' | 'middle'
    type?: string,
    placeholder?: string,
    defaultValue?: string,
    value?: string,
    disabled?: boolean,
    onChange?: (e: React.MouseEvent) => void,
    onFocus?: () => void,
    onBlur?: () => void
}
export default class Input extends React.Component<InputProps, {}> {
    input: React.RefObject<HTMLInputElement>
    constructor(props: InputProps) {
        super(props)
        this.input =  React.createRef()
    }
    onChange(e: React.MouseEvent){
        if(this.props.onChange) {
            this.props.onChange(e)
        }
    }
    onFocus(){
        if(this.props.onFocus){
            this.props.onFocus()
        }
    }
    onBlur(){
        if(this.props.onBlur) {
            this.props.onBlur()
        }
    }
    render() {
        const {size, type, placeholder, defaultValue, value, disabled} = this.props
        return (
            <input className={`zd-input zd-input-${size==='large' ? 'large' : size === 'samll' ? 'small' : 'default'}`} ref={this.input} 
            placeholder={placeholder}
            type={type}
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            onBlur={this.onBlur.bind(this)}
            onFocus={this.onFocus.bind(this)}
            onChange={this.onChange.bind(this)}
            />
        )
    }
}

import * as React from 'react'


interface SwitchProps {
    size?: 'large' | 'small' | 'middle',
    disabled?: boolean,
    value?: boolean,
    onChange?: (value: boolean) => void
}
export default class Switch extends React.Component<SwitchProps, {checked: boolean}> {
    constructor(props: SwitchProps){
        super(props)
        // this.state = {
        //     checked: false
        // }
        this.onChange = this.onChange.bind(this)
    }
    onChange(){
        const { disabled, value, onChange } = this.props
        if(disabled)return
        if(onChange){
            onChange(!value)
        }
        // this.setState({
        //     checked: !this.state.checked
        // })
    }
    render () {
        // const { checked } = this.state
        const { size, disabled, value } = this.props
        return <span className={`
        zd-switch
        ${ disabled ? 'zd-switch-disabled' : ''}
        zd-switch-${size === 'large' ? 'large' : size === 'small' ? 'small' : 'default'}
        ${ value ? 'zd-switch-checked': ''}
        `} onClick={this.onChange}>
            <span className="zd-switch-inner">
                {/*  */}
            </span>
        </span>
    }
}
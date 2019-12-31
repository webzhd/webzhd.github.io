import * as React from 'react'

interface CheckboxProps {
  checked?: boolean,
  onChange?: (checkbox: boolean, value: any) => void,
  disabled?: boolean,
  value?: string | number
}
export default class Checkbox extends React.Component<CheckboxProps, {}> {
  constructor(props: CheckboxProps) {
    super(props)
    this.state = {
     
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e: any){
    if(this.props.disabled) return;
    const checked: boolean = e.target.checked
    if(this.props.onChange) {
      this.props.onChange(checked, this.props.value)
    }
  }
  // componentDidUpdate(prevProps: CheckboxProps) {
  //   if(this.props.checked !== prevProps.checked) {
  //       this.setState({
  //           checked: this.props.checked
  //       })
  //   }
  // }
  render() {
    const { disabled, checked } = this.props
    return (
      <label className={`zd-checkbox-wrapper zd-checkbox-default
      ${checked ? 'zd-checkbox-wrapper-checked':''} 
        ${disabled ? 'zd-checkbox-wrapper-disabled': ''}`}>
            <span className={`zd-checkbox 
            ${checked ? 'zd-checkbox-checked': ''}
            ${disabled ? 'zd-checkbox-disabled': ''}`}>
                <span className="zd-checkbox-inner" />
                <input className="zd-checkbox-input" type="checkbox" checked={checked} onChange={this.onChange}/>
            </span>
            {" " + this.props.children}
        </label>
    )
  }
}

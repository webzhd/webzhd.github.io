import * as React from 'react'

interface CheckboxGroupProps {
  children?: React.ReactElement[],
  value: (string | number)[],
  onChange: (values: (string | number)[]) => void
}
export default class CheckboxGroup extends React.Component<CheckboxGroupProps, {}> {
  value: (string | number)[]
  constructor(props: CheckboxGroupProps) {
    super(props);
    this.value = this.props.value
  }
  onChange(checked: boolean, value: string | number){
    let findIndex = this.value.findIndex(item => item === value)
    if(checked) {
      if(findIndex === -1) {
        this.value.push(value)
      }
    }else{
      if(findIndex !== -1){
        this.value.splice(findIndex, 1)
      }
    }
    if(this.props.onChange) {
      this.props.onChange(this.value)
    }
  }
  render() {
    return (
      <div>
        {
          React.Children.map(this.props.children, (element: React.ReactElement) => {
            return React.cloneElement(element, Object.assign({}, element.props, {
                onChange: this.onChange.bind(this),
                checked: this.props.value.includes(element.props.value)
            }))
      })
        }
      </div>
    )
  }
}

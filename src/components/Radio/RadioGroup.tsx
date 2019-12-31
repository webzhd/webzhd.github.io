import * as React from 'react'

interface RadioGroupProps {
    value?: string,
    children?: React.ReactElement[],
    onChange?: (value: string) => void
}
export default class RadioGroup extends React.Component<RadioGroupProps, {}> {
    onChange(value: string) {
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }
  render() {
    return (
      <div>
          {
               React.Children.map(this.props.children, (element: React.ReactElement) => {
                    return React.cloneElement(element, Object.assign({}, element.props, {
                        onChange: this.onChange.bind(this),
                        checked: element.props.value === this.props.value
                    }))
              })
          }
      </div>
    )
  }
}

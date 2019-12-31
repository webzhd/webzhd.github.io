import * as React from 'react'

interface CollapseProps {
    defaultActive?: string[],
    active?: string[],
    onchange?: () => void,
    children?: React.ReactElement[] | React.ReactElement 
}
export default class Collapse extends React.Component<CollapseProps, {}> {
    handleItemClick(){

    }
  render() {
      const content = React.Children.map(this.props.children, (child:  React.ReactElement) => {
          let key: string = child.key.toString();
          return React.cloneElement(child, {
            title: child.props.title,
            isActive: (this.props.defaultActive && this.props.defaultActive.includes(key)) || (this.props.active && this.props.active.includes(key)),
            onClick: this.handleItemClick
          })
      })
    return (
      <div className="zd-collapse">
        {content}
      </div>
    )
  }
}

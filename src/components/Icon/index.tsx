import * as React from 'react'
import Icons from './Icon'
interface IconProps {
    type?: 'arrow_up' | 'arrow_down' | 'arrow_right' | 'arrow_left' | 'close' | 'close_circle',
    src?: string,
    bgColor?: string,
    className?: string
}
export default class Icon extends React.Component<IconProps, {}> {
  render() {
    const {className} = this.props
    let src = Icons[this.props.type] ||  this.props.src
    return (
        <span className={`zd--icon ${className ? this.props.className: ''}`} style={{backgroundColor: this.props.bgColor}}>
          <img src={src} alt=""/>
        </span>
    )
  }
}

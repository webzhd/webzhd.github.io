import * as React from 'react'
import { classname } from '../tool'

interface TagProps {
    className?: string,
    type?: 'default' | 'primary' | 'success' | 'error' | 'warning' ,
    closable?: boolean,
    checked?: boolean,
    onClose?: () => any,
    onCheck?: () => any,
    children?: React.ReactNode,
    visible?: boolean,
    theme?: {
      color: string,
      bgColor: string
    }
}
interface TagState {
  visible: boolean
}
export default class Tag extends React.Component<TagProps, TagState> {
  clickCloseHinder () {
    this.props.onClose && this.props.onClose()
  }
  clickCheckHander () {
    this.props.onCheck && this.props.onCheck()
  }
  render() {
    if( this.props.visible !== false ) {
      let style = {}
      if(this.props.theme) {
        style = {
          color: this.props.theme.color,
          backgroundColor: this.props.theme.bgColor
        }
      }
      return (
        <span style={ style } className={
          classname(
            this.props.className,
            "zd-tag",
            "zd-tag-text",
            `${this.props.checked === false ? '': 'zd-tag-checked'}`,
            `zd-tag-${this.props.type ? this.props.type : 'default'}`,
            `zd-tag-color-${this.props.type && this.props.type !=="default" && this.props.checked !== false ? 'white' : 'default'}`
          )
        } onClick={this.clickCheckHander.bind(this)}>
          {this.props.children}
          {this.props.closable && <span style={{marginLeft: 5, cursor: 'pointer'}} onClick={this.clickCloseHinder.bind(this)}>&times;</span>}
        </span>
      )
    }else{
      return null
    }
    
  }
}

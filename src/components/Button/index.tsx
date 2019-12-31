import * as React from 'react';
import { classname } from '../tool'


interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'info' | 'error' | 'dashed' | 'text',
  size?: 'small' | 'large',
  ghost?: boolean,
  shape?: 'circle',
  disabled?: boolean,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
  className?: string,
  icon?: string
}

export default class Button extends React.Component<ButtonProps, any> {
  clickHandle(e: React.MouseEvent){
    if(this.props.disabled)return;
    this.props.onClick && this.props.onClick(e);
  }
  render() {
    return (
      <button className={
        classname(
          this.props.className, 
          `zd-btn`,
          `${this.props.type ? 'zd-btn-'+this.props.type: ''}`, 
          `${this.props.disabled ? 'disabled': ''}`,
          `${this.props.ghost ? 'zd-btn-ghost': ''}`,
          `${this.props.shape ? 'zd-btn-' + this.props.shape : ''}`,
          `${this.props.size ? 'zd-btn-' + this.props.size : ''}`
        )} onClick={this.clickHandle.bind(this)}>
         {
           this.props.children
         }
      </button>
    )
  }
}

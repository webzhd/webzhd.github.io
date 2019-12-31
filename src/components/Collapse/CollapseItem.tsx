import * as React from 'react'
import Icon from '../Icon'

interface CollapseItemProps {
  isActive?: boolean,
  onClick?: () => void,
  title?: React.ReactNode
  children?: React.ReactNode
}
export default class CollapseItem extends React.Component<CollapseItemProps, any> {
  item: React.RefObject<HTMLDivElement>
  height: number
  constructor(props: any) {
    super(props);
    this.item =  React.createRef();
    this.state = {
      active: false
    }
  }

  componentDidMount(){
    const el:HTMLDivElement = this.item.current;
    this.height = el.scrollHeight; 
    this.setState({
      active: !!this.props.isActive,
      isHideContent: !!this.props.isActive
    })
  }

  handleClickItem(){
    const el:HTMLDivElement = this.item.current;  
    if(this.state.active){
       this.setState({
        active: false
      })
      setTimeout(() => {
        this.setState({
          isHideContent: false
        })
      }, 300)
    } else {
      this.setState({
        isHideContent: true
      }, () => {
        this.height = el.scrollHeight; 
        this.setState({
          active: true
        })
      })
     
    }
  
  }

  closeItem(){
    this.setState({
      active: false
    })
  }

  render() {
    return (
      <div className={`zd-collapse-item ${this.state.active ? 'zd-collapse-item-active': ''}`}>
            <div className="zd-collapse-header" onClick={this.handleClickItem.bind(this)}>
                <Icon type="arrow_right"/>
                {this.props.title}
            </div>
            <div ref={this.item} style={{height: this.state.active ? this.height : "0"}}  className={`zd-collapse-content ${this.state.active ? "":"hide"}`}>
                {this.state.isHideContent && <div className="zd-collapse-content-box">
                    {this.props.children}
                </div>}
            </div>
      </div>
    )
  }
}

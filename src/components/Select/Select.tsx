import * as React from 'react'
import Icon from '../Icon'
interface SelectProps {
    size?: 'small' | 'large' | 'middle',
    value?: string | number | boolean,
    placeholder?: string,
    onChange?: (value: string | number | boolean) => void
}
export default class Select extends React.Component<SelectProps, any> {
    divHovering: boolean
    select: React.RefObject<HTMLDivElement>
    option: React.RefObject<HTMLUListElement>
    constructor(props: SelectProps) {
        super(props)
        this.select = React.createRef()
        this.option = React.createRef()
        this.documentClick = this.documentClick.bind(this)
        this.state = {
            toogle: false,
            label: ''
        }
        this.divHovering = false
    }
    
    componentDidMount(){
       document.addEventListener('click', this.documentClick)
       this.option.current.style.width = this.select.current.clientWidth + 'px'
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.documentClick)
    }
    documentClick() {
        this.setState({
            toogle: this.divHovering
        })
    }
    onHandleClick() {
        // this.setState({
        //     toogle: !this.state.toogle
        // })
    }
    onOptionClick(value: string | number | boolean, label: string){
        this.setState({
            label
        })
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }
    defaultLabel(label: string){
        this.setState({
            label
        })
    }
    onMouseDown(event: MouseEvent) {
        // event.preventDefault();
        // this.setState({
        //     toogle: this.state.divHovering
        // })
      }
    
      onMouseEnter() {
        this.divHovering = true
        
      }
    
      onMouseLeave() {
        this.divHovering = false
      }
    render() {
        const {toogle, label} = this.state
        const {size, value, placeholder} = this.props
        return (
            <div className={`
            zd-select zd-select-single zd-select-${size === 'small' ? 'small' : size === 'large' ? 'large' : 'default'} 
            ${toogle ? 'zd-select-visible' : ''}
            `} 
            onClick={this.onHandleClick.bind(this)}
            onMouseDown={this.onMouseDown.bind(this)}
            onMouseEnter={this.onMouseEnter.bind(this)}
            onMouseLeave={this.onMouseLeave.bind(this)}
            ref={this.select}
            >
                <div className="zd-select-selection">
                    <input type="hidden"/>
                    <div>
                        {
                            !label ? 
                            <span className="zd-select-placeholder">{placeholder || '请选择'}</span> : 
                            <span className="zd-select-selected-value">{label}</span>
                        }
                        <Icon className="zd-select-arrow" type="arrow_down"/>
                    </div>
                </div>
                <div className="zd-select-dropdown">
                    <ul className="zd-select-dropdown-list" ref={this.option}>
                        {
                            React.Children.map(this.props.children, (child:  React.ReactElement) => {
                                let selected: boolean = child.props.value === value;
                                return React.cloneElement(child, {
                                    onOptionClick: this.onOptionClick.bind(this),
                                    defaultLabel: this.defaultLabel.bind(this),
                                    selected: selected
                                })
                            })
                        }
                    </ul>
                </div>
           </div>
        )
    }
}

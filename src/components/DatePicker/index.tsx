import * as React from 'react'
import Input from '../Input'
import Calendar from '../Calendar'
import * as dayjs from 'dayjs'

interface DatePickerProps {
    value?: Date,
    disabled?: boolean,
    size?: 'large' | 'samll' | 'middle'
    onChange?: (date: Date) => void
}
interface DatePickerState {
    visible: boolean
}

const calendarIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVQ4T62TsQ2DMBBF7yPRM0JGYARGYBUKDlElHeIoyCiMwAgZISPQI3GRLUDGhRMUqCz8/9P39xnkfE3T3Oq6frv//LWvgSsQkZGZsxDA16Dv+2Se58GYVDUF8AoBXE0cxzm6rsuWZUmqqhpEZGDm/EsCq2nbNo+iaLIAYyjLcgwZ/b3NZwGq2hPRdAZARAmA4poEa4HBs/vpANji9wSq+jfgVAcAEj/B40yJAKz+0hKDCfwRP8zBegvBDpj5MOI7QERSInoS0f1MB0RkEhf2NRrI1uqvEFWdTKoP9i9+RwKtUrsAAAAASUVORK5CYII='

export default class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    Input: React.RefObject<Input>
    mouseDown: boolean = false // 判断是否是由鼠标选择日期造成的input失去焦点，如果是，下拉框不隐藏
    constructor(props: DatePickerProps){
        super(props)
        this.state = {
            visible: false,
        }
        this.Input = React.createRef()
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    changeCalendar(date: Date){
        if(this.props.onChange) {
            this.props.onChange(date)
        }
    }
    onFocus() {
        this.mouseDown = false
        this.setState({
            visible: true
        })
    }
    onBlur(){
        this.setState({
            visible: this.mouseDown
        })
    }
    mouseDownCalendar(e: MouseEvent) {
        if(e.button === 0) {
            this.mouseDown = true // 点击了日历，input会失去焦点，此时拒绝隐藏日期
            setTimeout(()=> {
                this.mouseDown = false
                this.Input.current.input.current.focus()
            })
        }
    }
    render() {
        const { visible } = this.state
        const { value, size, disabled } = this.props
        return (<div className="zd-date-picker">
            <div className="zd-date-picker-rel">
                <Input ref={this.Input} size={size || 'middle'} disabled={disabled} value={ value && dayjs(value).format("YYYY-MM-DD")} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)}/>
            </div>
            <div className="zd-select-dropdown" style={{display: visible ? "block": "none"}}>
                <div>
                    <Calendar value={ value || new Date() } onChange={this.changeCalendar.bind(this)} onMouseDown={this.mouseDownCalendar.bind(this)}/>
                </div>
            </div>
        </div>)
    }
}
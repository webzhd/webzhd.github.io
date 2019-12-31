import * as React from 'react'
import Input from '../Input'
import {numberDigits} from '../tool'

interface TimePickerProps {
    value?: string,
    size?: 'large' | 'samll' | 'middle',
    disabled?: boolean,
    onChange?: ( value: string ) => void
}
interface TimePickerState {
    visible: boolean,
    h: number[],
    m: number[],
    s: number[]
}

export default class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
    input: React.RefObject<Input>
    hCell: React.RefObject<HTMLDivElement>
    mCell: React.RefObject<HTMLDivElement>
    sCell: React.RefObject<HTMLDivElement>
    mouseDown: boolean = false // 判断是否是由鼠标选择时间造成的input失去焦点，如果是，下拉框不隐藏
    constructor(props: TimePickerProps){
        super(props)
        this.state = {
            visible: false,
            h: new Array(24).fill(0),
            m: new Array(60).fill(0),
            s: new Array(60).fill(0),
        }
        this.getValue = this.getValue.bind(this)
        this.getHMS = this.getHMS.bind(this)
        this.input = React.createRef()
        this.hCell = React.createRef()
        this.mCell = React.createRef()
        this.sCell = React.createRef()
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    onFocus() {
        this.mouseDown = false
        this.setState({
            visible: true
        })
    }
    onBlur() {
        this.setState({
            visible: this.mouseDown
        })
    }
    onMouseDown(e: MouseEvent){
        if(e.button === 0) {
            this.mouseDown = true
            setTimeout(()=> {
                this.mouseDown = false
                this.input.current.input.current.focus()
            })
        }
    }
    clickH(h: string, index: number){
        const [mValue, sValue] = this.getHMS()
        if(this.props.onChange) {
            this.props.onChange(`${h}:${mValue || "00"}:${sValue || "00"}`)
            this.scrollAnimate(this.hCell, index)
        }  
    }
    clickm(h: string, index: number){
        const [hValue, sValue] = this.getHMS()
        if(this.props.onChange) {
            this.props.onChange(`${hValue || "00"}:${h}:${sValue || "00"}`)
            this.scrollAnimate(this.mCell, index)
        }  
    }
    clicks(h: string, index: number){
        const [hValue, mValue] = this.getHMS()
        if(this.props.onChange) {
            this.props.onChange(`${hValue || "00"}:${mValue || '00'}:${h}`)
            this.scrollAnimate(this.sCell, index)
        }  
    }
    scrollAnimate(ref: React.RefObject<any>, index: number){
        let top: number = ref.current.scrollTop
        const willScroppTop = index * 24
        const difference = willScroppTop - top
        const n = difference / 6;
        const timer = setInterval(() => {
            top += n
            ref.current.scrollTop = top
            if(ref.current.scrollTop >= willScroppTop){
                clearInterval(timer)
            }
        }, 20)
    }
    getValue(){
        const [hValue, mValue, sValue] = this.getHMS()
        if(hValue && mValue && sValue){
            return `${hValue}:${mValue}:${sValue}`
        }else {
            return ''
        }
    }
    getHMS(): string[]{
        const { value } = this.props
        if(!value) {
            return ['', '', '']
        } else {
            return value.split(':')
        }
    }
    render() {
        const { visible, h, m, s } = this.state
        const { size, disabled } = this.props
        const [hValue, mValue, sValue] = this.getHMS()
        return (<div className="zd-date-picker">
            <div className="zd-date-picker-rel">
                <Input size={size} disabled={disabled} ref={this.input} value={this.getValue()} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)}/>
            </div>
            <div className="zd-select-dropdown" style={{display: visible ? 'block' : 'none'}}>
                <div>
                    <div className="zd-picker-panel-body-wrapper">
                        <div className="zd-picker-panel-body">
                            <div className="zd-picker-panel-content">
                                <div className="zd-time-picker-cells zd-time-picker-cells-with-seconds">
                                    <div className="zd-time-picker-cells-list" ref={this.hCell}>
                                        <ul className="zd-time-picker-cells-ul">
                                            {
                                                h.map((item, index) => {
                                                    const result: string = numberDigits(index, 2)
                                                    return <li key={index} className={`zd-time-picker-cells-cell 
                                                    ${hValue === result ? 'zd-time-picker-cells-cell-selected': ''}`}
                                                    onMouseDown={this.onMouseDown.bind(this)}
                                                    onClick={this.clickH.bind(this, result, index)}>{result}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="zd-time-picker-cells-list" ref={this.mCell}>
                                        <ul className="zd-time-picker-cells-ul">
                                            {
                                                m.map((item, index) => {
                                                    const result: string = numberDigits(index, 2)
                                                    return <li key={index} className={`zd-time-picker-cells-cell 
                                                    ${mValue === result ? 'zd-time-picker-cells-cell-selected': ''}`}
                                                    onMouseDown={this.onMouseDown.bind(this)}
                                                    onClick={this.clickm.bind(this, result, index)}>{result}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="zd-time-picker-cells-list" ref={this.sCell}>
                                        <ul className="zd-time-picker-cells-ul">
                                            {
                                                s.map((item, index) => {
                                                    const result: string = numberDigits(index, 2)
                                                    return <li key={index} className={`zd-time-picker-cells-cell 
                                                    ${sValue === result ? 'zd-time-picker-cells-cell-selected': ''}`}
                                                    onMouseDown={this.onMouseDown.bind(this)}
                                                    onClick={this.clicks.bind(this, result, index)}>{result}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
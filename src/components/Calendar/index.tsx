import * as React from 'react'
import { left, leftLeft, right, rightRight } from './images'
import Icon from '../Icon'


interface CalendarProps {
    value: Date,
    onChange?: (date: Date) => void,
    onMouseDown?: (event: MouseEvent) => void
}
interface CaleandarState {
    value: Date,
    checkDayKey: number
}

export default class Calendar extends React.Component<CalendarProps, CaleandarState> {
    constructor(props: CalendarProps) {
        super(props)
        this.state = {
            value: new Date(),
            checkDayKey: new Date().getDate()
        }
        this.changeDate = this.changeDate.bind(this)
        this.prevYear = this.prevYear.bind(this)
        this.prevMounth = this.prevMounth.bind(this)
        this.nextYear = this.nextYear.bind(this)
        this.nextMounth = this.nextMounth.bind(this)
        this.getPrevMonthDay = this.getPrevMonthDay.bind(this)
        this.getDayNumberOfMounth = this.getDayNumberOfMounth.bind(this)
        this.getNowMounthDay = this.getNowMounthDay.bind(this)
    }
    onMouseDown(event: MouseEvent){
        if(this.props.onMouseDown) {
            this.props.onMouseDown(event)
        }
    }
    changeDate(value: Date) {
        const { onChange } = this.props
        if(onChange){
            onChange(value)
        }
    }
    prevYear() {
        const { value } = this.props
        this.changeDate(new Date(value.getFullYear() - 1, value.getMonth(), value.getDate()))
    }
    prevMounth() {
        const { value } = this.props
        this.changeDate(new Date(value.getFullYear(), value.getMonth() - 1, value.getDate()))
    }
    nextYear() {
        const { value } = this.props
        this.changeDate(new Date(value.getFullYear() + 1, value.getMonth(), value.getDate()))
    }
    nextMounth() {
        const { value } = this.props
        this.changeDate(new Date(value.getFullYear(), value.getMonth() + 1, value.getDate()))
    }
    clickPrevDay(key: number): void{
        const { value } = this.props
        this.setState({
            checkDayKey: key
        })
        this.changeDate(new Date(value.getFullYear(), value.getMonth() - 1, key))
    }
    clickNowMounthDay(key: number): void {
        const { value } = this.props
        this.setState({
            checkDayKey: key
        })
        this.changeDate(new Date(value.getFullYear(), value.getMonth(), key))
    }
    clickNextDay(key: number):void {
        const { value } = this.props
        this.setState({
            checkDayKey: key
        })
        this.changeDate(new Date(value.getFullYear(), value.getMonth() + 1, key))
    }
    getPrevMonthDay(): number[] {
        const { value } = this.props
        const mounth: number = value.getMonth()
        const dayNumber: number = value.getDate() % 7
        const weekNumber: number = value.getDay()
        let prevMonthDay: number = weekNumber - dayNumber + 1
        if (prevMonthDay < 0) prevMonthDay = prevMonthDay + 7
        let prevMonthDayNumber: number = this.getDayNumberOfMounth(mounth);
        return new Array(prevMonthDay).fill(0).map((i, k) => (prevMonthDayNumber -  k)).reverse()
    }
    getNowMounthDay(): number[] {
        const { value } = this.props
        const mounth: number = value.getMonth() + 1
        const dayNumber: number = this.getDayNumberOfMounth(mounth)
        return new Array(dayNumber).fill(0).map((i, k) => k + 1)
    }
    getNextMonthDay(): number[] {
        const { value } = this.props
        let mounth: number = value.getMonth() + 1
        const dayMaxNumber = this.getDayNumberOfMounth(mounth)
        const dayNumber: number = value.getDate()
        const weekNumber: number = value.getDay()
        let n = (dayMaxNumber - dayNumber + weekNumber) % 7
        return new Array(7 - n - 1).fill(0).map((i, k) => k + 1)
    }
    getDayNumberOfMounth(mounth: number): number {
        const { value } = this.props
        let year: number = value.getFullYear();
        if (mounth === 0) { mounth = 12; year--; }
        const isRenYear: boolean = 0 === year % 4 && (year % 100 != 0 || year % 400 === 0)
        let dayNumber: number = 30;
        if (mounth === 1 || mounth === 3 || mounth === 5 || mounth === 7 || mounth === 8 || mounth === 10 || mounth === 12) {
            dayNumber = 31
        } else if (mounth === 2) {
            dayNumber = isRenYear ? 29 : 28
        }
        return dayNumber
    }
    render() {
        const { checkDayKey } = this.state
        const { value } = this.props
        return (<div className="zd-picker-panel-body" onMouseDown={this.onMouseDown.bind(this)}>
            <div className="zd-date-picker-header">
                <span className="zd-picker-panel-icon-btn zd-date-picker-prev-btn zd-date-picker-prev-btn-arrow-double"
                    onClick={this.prevYear}>
                    <Icon src={leftLeft} />
                </span>
                <span className="zd-picker-panel-icon-btn zd-date-picker-prev-btn zd-date-picker-prev-btn-arrow"
                    onClick={this.prevMounth}>
                    <Icon src={left} />
                </span>
                <span>
                    <span className="zd-date-picker-header-label">{value.getFullYear()}年</span>
                    <span className="zd-date-picker-header-label">{value.getMonth() + 1}月</span>
                </span>

                <span className="zd-picker-panel-icon-btn zd-date-picker-next-btn zd-date-picker-next-btn-arrow-double"
                    onClick={this.nextYear}>
                    <Icon src={rightRight} />
                </span>

                <span className="zd-picker-panel-icon-btn zd-date-picker-next-btn zd-date-picker-next-btn-arrow"
                    onClick={this.nextMounth}>
                    <Icon src={right} />
                </span>

            </div>
            <div className="zd-picker-panel-content">
                <div className="zd-date-picker-cells">
                    <div className="zd-date-picker-cells-header">
                        <span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span>
                    </div>
                    {
                        this.getPrevMonthDay().map((item: number) => {
                            return <span className="zd-date-picker-cells-cell zd-date-picker-cells-cell-prev-month" 
                            onClick={this.clickPrevDay.bind(this, item)}
                            key={item}><em>{item}</em></span>
                        })
                    }
                    {
                        this.getNowMounthDay().map((item: number) => {
                            return <span className={` zd-date-picker-cells-cell 
                                        ${checkDayKey === item ?  'zd-date-picker-cells-cell-selected zd-date-picker-cells-focused' : ''} `}
                                        onClick={this.clickNowMounthDay.bind(this, item)} key={item}>
                                        <em>{item}</em>
                                    </span>
                        })
                    }
                    {
                        this.getNextMonthDay().map((item: number) => {
                            return <span className="zd-date-picker-cells-cell zd-date-picker-cells-cell-next-month" 
                            onClick={this.clickNextDay.bind(this, item)}
                            key={item}><em>{item}</em></span>
                        })
                    }
                </div>
            </div>
            <div className="zd-picker-panel-content" style={{ display: 'none' }}>

            </div>
        </div>)
    }
}
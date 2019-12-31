import * as React from 'react'
import FormItem from './FormItem'

interface FormProps {
    onSubmit?: (values: object) => void,
    children?: React.ReactElement[]
}
interface FormState {

}

export default class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render() {
        const {} = this.state
        const {} = this.props
        return (<div>

        </div>)
    }
}
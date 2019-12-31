import * as React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import {
  Home,
  Icon,
  Button,
  Tag,
  Message,
  Collapse,
  Radio,
  Checkbox,
  Input,
  Select,
  Switch as SwitchEle,
  Calendar,
  DatePicker,
  TimePicker
} from './doc'
import './index.less'
import '../theme/index.less'
import Test from './Test'

export default class App extends React.Component {
  state = {
    visible: true,
    checked: true
  }
  render() {
    return (

      <Router>
        <>
          <div className="nav">
            
            <div className="logo">
              <NavLink to="/">
                <h3>zdean UI</h3>
              </NavLink>
            </div>
            
    
            <ul>
              <li>
                <NavLink to="/icon">Icon</NavLink>
              </li>
              <li>
                <NavLink to="/button">Button</NavLink>
              </li>
              <li>
                <NavLink to="/tag">Tag</NavLink>
              </li>
              <li>
                <NavLink to="/message">Message</NavLink>
              </li>
              <li>
              <NavLink to="/collapse">Collapse</NavLink>
              </li>
              <li>
              <NavLink to="/radio">Radio</NavLink>
              </li>
              
              <li>
              <NavLink to="/checkbox">Checkbox</NavLink>
              </li>

              <li>
              <NavLink to="/input">Input</NavLink>
              </li>

              <li>
              <NavLink to="/select">Select</NavLink>
              </li>

              <li>
                <NavLink to="/switch">Switch</NavLink>
              </li>

              <li>
                <NavLink to="/datePicker">DatePicker</NavLink>
              </li>
              
              <li>
                <NavLink to="/calendar">Calendar</NavLink>
              </li>
             
              <li>
                <NavLink to="/timePicker">TimePicker</NavLink>
              </li>
            </ul>
          </div>

          <main className="main">
            <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/icon" component={Icon} />
              <Route path="/button" component={Button} />
              <Route path="/tag" component={Tag} />
              <Route path="/message" component={Message} />
              <Route path="/collapse" component={Collapse} />
              <Route path="/radio" component={Radio} />
              <Route path="/checkbox" component={Checkbox} />
              <Route path="/input" component={Input} />
              <Route path="/select" component={Select} />
              <Route path="/switch" component={SwitchEle} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/datePicker" component={DatePicker} />
              <Route path="/timePicker" component={TimePicker} />

              <Route path="/test" component={Test} />
            </Switch>
            </div>
            
          </main>
        </>
      </Router>
    )
  }
}

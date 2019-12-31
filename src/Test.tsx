import * as React from 'react'
import {Types} from './components'
 export default class Test extends React.Component {
  render() {
    return (
      <div>
          <p>{Types("")}</p>
          <p>{Types(1)}</p>
          <p>{Types(false)}</p>
          <p>{Types(undefined)}</p>
          <p>{Types(null)}</p>
          <p>{Types({})}</p>
          <p>{Types([])}</p>
      </div>
    )
  }
}

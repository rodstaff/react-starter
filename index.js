import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
  render(){
  	return <div>
  	  Hello React how are you
  	  the quick brown fox jumps over the lazy dog
  	</div>
  }
}

render(<App />, document.getElementById('content'))

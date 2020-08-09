import React from 'react'
class Input extends React.PureComponent {
	constructor (props) {
  	super(props)
  	this.state ={
    	curVal: ''
    }
  }
  handleChange = (val) => {
  	this.setState({ curVal : val})
    this.props.getChanges(val)
  }
  
  render() {
  		return (
      <React.Fragment>
        		<input type="text" value={this.state.curVal} onChange={(e)=>this.handleChange(e.target.value)} />
           
      </React.Fragment>
        )
  }
}

export default Input
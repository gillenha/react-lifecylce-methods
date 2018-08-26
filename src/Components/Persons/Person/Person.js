import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../hoc/withClass';
import Auxil from '../../hoc/Auxil';


class Person extends Component {
	constructor(props) {
    super(props);
    console.log('[Person.js] inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
    this.inputElement.focus()
  }

	render() {
		console.log('[Person.js] inside render()');
		return (
			<Auxil>
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>
					{this.props.children}
				</p>
				<input 
					ref={(inp) => { this.inputElement = inp }}
					type="text" 
					onChange={this.props.changed} 
					value={this.props.name} />		
			</Auxil>
		)
		// 	return [
		// 		<p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
		// 		<p key="2">{this.props.children}</p>,
		// 		<input key="3" type="text" onChange={this.props.changed} value={this.props.name} />	
		// ]
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default withClass(Person, classes.Person);

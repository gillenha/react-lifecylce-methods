import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

// this is a container - it should only manage the state
// and manipulate the state
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: "1", name: "Harry", age: 32 },
        { id: "2", name: "John", age: 28 },
        { id: "3", name: "Stephanie", age: 26}
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[App.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()')
  }

  editNameHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
      const person = Object.assign({}, this.state.persons[personIndex]);
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState( {persons: persons} );
    }

  deletePersonHandler = (deletePerson) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(deletePerson, 1);
    this.setState({
      persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    console.log("[App.js] Inside render()")
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.editNameHandler} />;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
  }
}

export default App;

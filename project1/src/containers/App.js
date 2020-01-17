import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
// import Person from '../components/Persons/Person/Person';
import Persons from "../components/Persons/Persons";

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red': 'green'};
    color: white;
    font: inherit;
    border: ;1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
    backgroundColor: lightgreen;
    color: black;
    // opacity: 0
`;

class App extends Component {
    state = {
        persons: [
            {id: '0', name: 'Betin', age: 28},
            {id: '1', name: 'Lobster', age: 29},
            {id: '2', name: 'Saci', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        this.setState( {
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 26 }
            ]
        } );

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render () {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    change={this.nameChangedHandler} />
                </div>
            );
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>
                    Toggle Persons
                </StyledButton>
                {persons}
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';

class SearchBar extends Component {
    /**
      * All javascript clases have a special function called constructor
      * the constructor function is the first and only fucntion called
      * automatically whenever a new instance of the class is created.
      * The cnstructor function is reserved for doing some set up inside
      * of our class, like initialising variables, initialising state and 
      * things like that.
    **/
    constructor(props){
        super(props);
        this.state = { term: '' };
    }
    /**
      * When defining a new class in react you must ALWAYS
      * include a render() method or you will get an error.
    **/
    render(){
        return(
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
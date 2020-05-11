import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../../components/Person/Person";
import AddPerson from "../../components/AddPerson/AddPerson";

import * as actionTypes from "../../store/action";
class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAdd} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.p.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch({ type: actionTypes.ADD_PERSON }),
    onDelete: (id) =>
      dispatch({ type: actionTypes.DELETE_PERSON, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../../components/Person/Person";
import AddPerson from "../../components/AddPerson/AddPerson";

import { addPerson, deletePerson } from "../../store/actions";
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
    onAdd: () => dispatch(addPerson()),
    onDelete: (id) => dispatch(deletePerson(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

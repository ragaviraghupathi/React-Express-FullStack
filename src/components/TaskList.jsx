import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../actions/requestTaskCreation";
import { Link } from "react-router-dom";
export const TaskList = ({ tasks, name, id, requestTaskCreation }) => (
  <div>
    <h3>{name}</h3>
    {tasks.map(task => (
      <Link to={`/task/${task.id}`}>
        <div key={task.id}>{task.name}</div>
      </Link>
    ))}
    <button onClick={() => requestTaskCreation(id)}>Add new task </button>
  </div>
);
const mapStateToProps = (state, ownProps) => {
  const groupID = ownProps.id;
  return {
    id: groupID,
    name: ownProps.name,
    tasks: state.tasksReducer.filter(task => task.group === groupID)
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // createNewTask(id) {
    //   console.log("creating new task");
    //   dispatch(requestTaskCreation(id));
    // }
    requestTaskCreation
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps()
)(TaskList);

import React from "react";
import { connect } from "react-redux";
export const TaskList = ({ tasks, name }) => (
  <div>
    <h3>{name}</h3>
    {tasks.map(task => (
      <div>{task.name}</div>
    ))}
  </div>
);
const mapStateToProps = (state, ownProps) => {
  const groupID = ownProps.id;
  return {
    id: groupID,
    name: ownProps.name,
    tasks: state.tasks.filter(task => task.group === groupID)
  };
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { groupsReducer } from "../reducers/groupsReducer";
import { tasksReducer } from "../reducers/tasksReducer";
import { setTaskComplete } from "../actions/setTaskComplete";
import { setTaskName } from "../actions/setTaskName";
import { setTaskGroup } from "../actions/setTaskGroup";
export const TaskDetails = ({
  id,
  comments,
  task,
  isComplete,
  groups,
  setTaskComplete,
  setTaskGroup,
  setTaskName
}) => {
  console.log(groups);
  console.log(`inside return ${task.name}`);

  return (
    <div>
      <div>
        <input
          onChange={e => {
            console.log(e.target.value);
            return setTaskName(id, e.target.value);
          }}
          value={task.name}
        />
      </div>
      <div>
        <button onClick={() => setTaskComplete(id, !isComplete)}>
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>
      <div>
        <select
          onChange={e => setTaskGroup(id, e.target.value)}
          value={task.value}
        >
          {groups.map(group => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Link to="/dashboard">
          <button>Done</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const task = state.tasksReducer.find(task => task.id === id);
  const groups = state.groupsReducer;
  return {
    task,
    id,
    groups,
    isComplete: task.isComplete
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setTaskComplete,
    setTaskGroup,
    setTaskName
  };
};
export const ConnectedTaskDetails = connect(
  mapStateToProps,
  mapDispatchToProps()
)(TaskDetails);

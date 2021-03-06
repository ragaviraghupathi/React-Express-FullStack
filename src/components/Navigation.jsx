import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export const Navigation = () => (
  <Link to="/dashboard">
    <h3>My Application</h3>
  </Link>
);

export const ConnectedNavigation = connect(state => state)(Navigation);

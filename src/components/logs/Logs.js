import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/LogAction";

// const Logs = ({ logs, loading, getLogs }) => {
const Logs = ({ log123: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Systems Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};
Logs.propTypes = {
  log123: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};
//Calling props as normal

// const mapStateToProps = (state) => ({
//   logs: state.log.logs,
//   loading: state.log.loading,
// });
//Destructurings the props
const mapStateToProps = (state) => ({
  log123: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);

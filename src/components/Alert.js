import React from "react";

export default function Alert(props) {
  return (
    <>
      {props.alert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
          style={{ marginBottom: 0 }}
        >
          <strong>Success! {props.alert}</strong>
          <button
            type="button"
            className="btn-close"
            onClick={props.closeAlert}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </>
  );
}

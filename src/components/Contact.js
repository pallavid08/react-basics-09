import React from "react";

import "./Contact.css";

const Contact = (props) => (
  <div className="Contact">
    <img className="avatar" src={props.avatar} alt="no dislay" />
    <div className="status">
      <h3 className="name">{props.name}</h3>
      <div className={props.status ? "status-online" : "status-offline"}></div>
      <div className="status-text">{props.status ? "online" : "offline"}</div>
    </div>
  </div>
);

export default Contact;

import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`text-center alert alert-${alert.type}`}>
        <i className="fa fa-info-circle"></i> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;

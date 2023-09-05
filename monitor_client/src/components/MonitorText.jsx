import React, { useContext } from "react";
import { AppContext } from "../context/context";

const MonitorText = () => {
  const { monitorData } = useContext(AppContext);

  return (
    <div className="d-flex justify-content-around" style={{ width: "45vw" }}>
      <div className="Altitude">
        <h3 className="text-decoration-underline">Altitude</h3>
        <h5 className="text-center pt-3">{monitorData?.Altitude}</h5>
      </div>
      <div className="HIS">
        <h3 className="text-decoration-underline">HIS</h3>
        <h5 className="text-center pt-3">{monitorData?.His}</h5>
      </div>
      <div className="ADI">
        <h3 className="text-decoration-underline">ADI</h3>
        <h5 className="text-center pt-3">{monitorData?.ADI}</h5>
      </div>
    </div>
  );
};

export default MonitorText;

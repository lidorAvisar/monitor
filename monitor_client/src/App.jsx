import React, { useEffect, useState } from "react";
import { AppContext } from "./context/context";
import Altitude from "./components/Altitude";
import HIS from "./components/HIS";
import ADI from "./components/ADI";
import MonitorText from "./components/MonitorText";
import { io } from "socket.io-client";
import "./App.css";

const socket = io.connect("http://localhost:3002");

const App = () => {
  const [toogleVisual, setToogleVisual] = useState(true);
  const [monitorData, setMonitorData] = useState();

  //set data
  const setdata = (data) => {
    setMonitorData(data);
  };

  useEffect(() => {
    socket.on("receive_data", (data) => {
      setdata(data);
    });
  }, [socket]);

  return (
    <div className="content d-md-flex ">
      <AppContext.Provider
        value={{
          monitorData,
        }}
      >
        <div className="text-center text-md-start">
          <button onClick={()=>{setToogleVisual(true)}} className="btn btn-success px-5 px-md-3">visual</button>
          <br />
          <button onClick={()=>{setToogleVisual(false)}} className="mt-2 btn btn-info px-5 px-md-4">text</button>
        </div>
        {toogleVisual && (
          <div className="d-flex flex-column justify-content-around flex-md-row" style={{width:'70vw',maxWidth:'900px'}}>
            <Altitude />
            <HIS />
            <ADI />
          </div>
        )}
        {!toogleVisual&&<div>
          <MonitorText />
        </div>}
      </AppContext.Provider>
    </div>
  );
};

export default App;

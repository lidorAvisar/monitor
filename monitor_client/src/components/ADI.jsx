import React, { useContext } from "react";
import { AppContext } from "../context/context";
import '../App.css'


const ADI = () => {

  const { monitorData } = useContext(AppContext);

  const ADI = monitorData?.ADI;


  return (
    <div className='m-auto m-md-0' style={{width:'300px'}}>
      <div className={`${ADI==100?'bg-primary':ADI==0?'gradient':ADI==-100?'bg-success':'gradient'}`}
        style={{ height: '250px', width: '250px', borderRadius: '100%' }}>
      </div>
    </div>
  );
};

export default ADI;

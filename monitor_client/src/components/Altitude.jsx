import React, { useContext } from 'react'
import { AppContext } from '../context/context';

const Altitude = () => {

  const { monitorData } = useContext(AppContext);

  let distance = monitorData?.Altitude / 10;

  return (
    <div className='m-auto m-md-0 mt-2 mt-md-0' style={{width:'100px',marginLeft:'10px'}}>
      <div className=' fs-5 text-center position-relative' style={{ width: '65px', height: '325px', border: '2px solid', backgroundColor: "GrayText" }}>
        <div style={{ height: '30.7%', color: 'white' }}>3000</div>
        <div style={{ height: '32%', color: 'white' }}>2000</div>
        <div style={{ height: '33%', color: 'white' }}>1000</div>
        <span style={{ color: 'white', position: 'absolute', bottom: '-3px', right: '25px' }}>0</span>
        <div style={{ position: 'absolute', bottom: `${distance}px`, right: '-12px', backgroundColor: 'black', width: '85px', height: '10px', border: '2px white solid', transition: ' bottom 3s' }}></div>
      </div>
    </div>

  )
}

export default Altitude
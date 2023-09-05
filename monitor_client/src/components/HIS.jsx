import React, { useContext } from 'react'
import { AppContext } from '../context/context';
import { CgArrowUp } from 'react-icons/cg';

const HIS = () => {

  const { monitorData } = useContext(AppContext);

  return (
    <div className='m-auto m-md-0 my-3 my-md-0' style={{width:'300px'}}>
      <div style={{ position: 'relative' }}>
        <div style={{
          rotate: `${monitorData?.His - 360}deg`,
          position: 'relative',
          backgroundColor: 'GrayText',
          height: '250px', width: '250px',
          borderRadius: '100%', border: '2px solid black',
          color: 'white'
          // display:'flex',justifyContent:'center',alignItems:'center'
        }}>
          <div className='text-center' style={{ height: '43.3%' }}><h3>0</h3></div>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='ps-2'><h3>270</h3></div>
            <div className='pe-2'><h3>180</h3></div>
          </div>
          <div className='text-center mt-5 pt-3'><h3>90</h3></div>
        </div>
        <div className="arrow" style={{ position: 'absolute', top: '80px', left: '99px', fontSize: '50px', color: 'black' }}>
          <CgArrowUp />
        </div>
      </div>
    </div>

  )
}

export default HIS
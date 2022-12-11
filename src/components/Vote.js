import React from 'react'

export default function Vote() {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h3>Was This Helpful?</h3>
        <div style={{display: 'flex'}}>
            <button className='btn btn-outline-primary btn-sm' style={{margin:'auto'}}>Helpful</button>
            <button className='btn btn-outline-primary btn-sm' style={{margin:'auto'}}>Not Helpful</button>
        </div>
      </div>
    </div>
  )
}

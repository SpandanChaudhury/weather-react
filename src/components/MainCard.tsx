// import React from 'react'
import { WiDayRain } from 'react-icons/wi';
const MainCard = () => {
  return (
<div className="card">
  <div className="card-header text-center">
    Gandhinagar
  </div>
  <div className="card-body">
    <h5 className="card-title text-center">Windy</h5>
    <div className="card-text">
        <p className="text">temp </p>
        <p className="text-end">humidity</p>

    </div>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
  )
}

export default MainCard
import React from 'react'

export default function Card(props) {
  return (
    <>
    {props.place=="outside" ?<div className='cardCollection-service'>
    <div className='card-service'>
      <div className="photo-service">
        <img className='imagehaiservice' src="/bus1.jpg" alt="" />
      </div>
      <div className="detail-service">
        <h1>ATT KINGS</h1>
        <p> our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</p>
      </div>

    </div>
    <div className='card-service'>
      <div className="photo-service">
        <img className='imagehaiservice' src="/bus2.jpg" alt="" />
      </div>
      <div className="detail-service">
        <h1>SRS TRAVEL</h1>
        <p> our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</p>
      </div>

    </div>
    <div className='card-service'>
      <div className="photo-service">
        <img className='imagehaiservice' src="/bus3.jpg" alt="" />
      </div>
      <div className="detail-service">
        <h1>SHIV SHAKTI</h1>
        <p> our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</p>
      </div>

    </div>
  </div>:
  <div className='cardCollection-service'>
  <div className='card-service'>
    <div className="photo-service">
      <img className='imagehaiservice' src="/car1.jpg" alt="" />
    </div>
    <div className="detail-service">
      <h1>ATT KINGS</h1>
      <p> our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</p>
    </div>

  </div>
  <div className='card-service'>
    <div className="photo-service">
      <img className='imagehaiservice' src="/car2.jpg" alt="" />
    </div>
    <div className="detail-service">
      <h1>SRS TRAVEL</h1>
      <p> our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</p>
    </div>

  </div>
  <div className='card-service'>
    <div className="photo-service">
      <img className='imagehaiservice' src="/car3.jpg" alt="" />
    </div>
    <div className="detail-service">
      <h1>SHIV SHAKTI</h1>
      <p> our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</p>
    </div>

  </div>
</div>
  }
  
  </>
    
  )
}

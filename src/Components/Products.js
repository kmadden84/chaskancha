import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import video from '../assets/warehouse-video.mp4';

export default function Products() {
  return (
          // <Container>
      <Row>
<div className="video-container">
    <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />

</video>
        <div className="products">
        <h1>Our Products</h1>

<p>Chaskancha sells an assortment of high quality prodcuts.  A full list of the producst we provide will be available soon.</p>
</div>
</div>

      </Row>

    // </Container>
    
  )
}

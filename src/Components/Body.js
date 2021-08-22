import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import video from '../assets/chan-home-new.mp4';

export default function Body() {
  return (
    // <Container>
    <Row>
<div className="video-container">
    <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />
</video>

<div className="home">
        <h1>wELCOME TO<br />
chaskancha</h1>
<div class="text">
<p>PROVING HIGH QUALITY, PREMIUM SOURCED PRODUCTS</p>

</div>
</div>
	</div>


    </Row>

  // </Container>
  )
}

import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import video from '../assets/mission-video.mp4';

export default function Mission() {
  return (
    // <Container>
    <Row>
<div className="video-container mission">
    <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />

</video>
      <div className="mission">
      <h1>Mission Statement</h1>

<p>Our mission statement is as follows: Provide the highest quality, best-in-class beauty products and prices that can't be beat.  Our focus is customer-first driven.  If our customers 
are not happy, then neither are we.  This is why we strive to provide 100% satisfaction, and addressing customer concerns is our top priority.</p>

</div>
</div>
    </Row>

  // </Container>
  )
}

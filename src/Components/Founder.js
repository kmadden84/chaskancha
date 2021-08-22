import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import video from '../assets/founder-video.mp4';

export default function Founder() {
  return (
    // <Container>
      <Row>
<div className="video-container">
    <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />

</video>
        <div className="founder">
        <h1>Our Founder, Angelica Guzman</h1>

<p>Angelica Guzman is the owner and Founder of Chanskancha, Inc.  Chanskancha is committed to selling on the highest quality beauty and apparel products, curated from
  top suppliers all around the world.  Angelica's primary focus, for any product Chanskancha sells, is quality.  If it's something she wouldn't buy, it's something she won't sell.</p>
          <Image src="../../img/Angie.jpg" />


     </div>
     </div>
      </Row>

    // </Container>
  )
}

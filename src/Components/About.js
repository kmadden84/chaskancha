import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import video from '../assets/kitchen-needs.mp4';

export default function About() {
  return (
    // <Container>
    <Row>

<div className="video-container">
    <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />

</video>
    <div className="about">
      <h1>About Us</h1>

<p>Chaskancha Inc. was founded in 2021 with the goal of providing the highest quality beauty and apparel products.  Our founder, Angelica Guzman, has been designing apparel for many years and has a deep understanding of the
online retail industry.  Her goal is so sell, at the best prices, only the finest quality products that she would use herself.</p>


      </div>

	</div>


    </Row>

  // </Container>
  )
}

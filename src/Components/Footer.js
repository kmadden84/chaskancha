import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Footer() {
  var date = new Date().getFullYear();
  return (
    
      <div className="footer">
      © {date} Chanskancha.  All rights reserved.
      </div>
  )

}
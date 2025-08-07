import React from "react";
import {Container, Button, Row, Col} from 'react-bootstrap';
import { Link} from "react-router-dom"; 

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="text-center">
          <Col>
            <h1>Welcome to Our Store!</h1>
            <p>Find the best products at unbeatable prices.</p>
            <Link to="/product">
              <Button variant="primary">Shop Now</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col sm={8}>It Academy</Col>
          <Col sm={4}>Contacts</Col>
        </Row>
        <Row>
          <Col sm>Ibraimova 115/1</Col>
          <Col sm>Python && JavaScript</Col>
          <Col sm>0500 000 000</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s from './Card.module.scss'

const MyCard = ({ name , id, img}) => {
  return (
    <Card style={{ width: "18rem", margin: "20px"}}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere {id}</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;

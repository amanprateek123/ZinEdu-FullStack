import React from 'react';
import './Card.scss'
import {
  Card,  CardText, CardBody,
  CardTitle
} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card className="enroll_card" style={{backgroundColor: 'rgb(255, 100, 100)',border:'1.7px solid black',borderRadius:'10px'}}>
        <CardBody>
          <h3 className="card_title">{props.title}</h3>
          <p className="card_text">{props.text}</p>
        </CardBody>
        <img width="100%" style={{height:"180px", borderRadius:"10px",border:'1.5px solid black',backgroundColor:'white'}} src={props.img} alt="Card" />
        <button className="card_btn">Enroll Now</button>
      </Card>
    </div>
  );
};

export default Example;
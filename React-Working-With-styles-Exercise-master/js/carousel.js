import React from "react";
import {Carousel ,Col, Grid, Row,ListGroup,ListGroupItem} from 'react-bootstrap';

const Slider=()=>{
    return(


        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8}>
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={900} alt="900x500" src="/img/c1.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={900} alt="900x500" src="/img/c2.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={900} alt="900x500" src="/img/c3.jpg" />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={900} alt="900x500" src="/img/c2.jpg" />

                        </Carousel.Item>
                    </Carousel>
                    <br/>
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            <ListGroup>
                                <ListGroupItem bsStyle="warning">
                                    <img height={544} width={300} alt="900x500" src="/img/w1.jpg" /></ListGroupItem>

                            </ListGroup></Col>
                        <Col xs={6} md={6}>
                            <ListGroup>
                                <ListGroupItem bsStyle="warning"><img height={544} width={300} alt="900x500" src="/img/w2.jpg" /></ListGroupItem>
                            </ListGroup>
                            </Col></Row>
                </Col>
                <Col xs={6} md={4}>
                    <ListGroup>
                        <ListGroupItem bsStyle="warning"> <img alt="900x500" src="/img/Men.jpg" /></ListGroupItem>
                        <ListGroupItem bsStyle="warning"><img alt="900x500" src="/img/Women.webp" /></ListGroupItem>

                    </ListGroup>
                </Col>
            </Row></Grid>


)
}
export default Slider;
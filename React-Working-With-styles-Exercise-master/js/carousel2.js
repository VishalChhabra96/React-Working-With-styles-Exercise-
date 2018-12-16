import React from "react";
import {Carousel} from 'react-bootstrap';

const Slider2=()=>{
    return(
       <Carousel style={{paddingLeft:"45px",paddingRight:"45px"}}>
            <Carousel.Item>
                <img alt="900x500" src="/img/foot1.webp" />
            </Carousel.Item>
            <Carousel.Item>
                <img  alt="900x500" src="/img/foot2.webp" />
            </Carousel.Item>
            <Carousel.Item>
                <img alt="900x500" src="/img/foot3.webp" />
            </Carousel.Item>
       </Carousel>
    )
}
export default Slider2;
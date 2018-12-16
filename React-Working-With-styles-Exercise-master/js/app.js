import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navigation from "./navbar";
import Slider from "./carousel";
import Slider2 from "./carousel2";
import Footer from "./footer";
class App extends Component {
render() {
return (
    <div style={{padding:"20px"}}>
        <Navigation />
        <Slider/>
        <Slider2/>
        <Footer/>
    </div>
)
}
}
export default App;
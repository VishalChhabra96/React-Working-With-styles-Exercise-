import React from "react";
import {Pager} from 'react-bootstrap';
const Footer=()=>{
    return(
        <Pager>
            <Pager.Item previous href="#">
                &larr; Previous Page
            </Pager.Item>
            <Pager.Item next href="#">
                Next Page &rarr;
            </Pager.Item>
        </Pager>
    )
}
export default Footer;
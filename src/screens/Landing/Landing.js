import React from 'react';
import Header from './Header/Header';
import Personal from './Personal/Personal';
import {Container} from "react-bootstrap";
export default function Landing(){
    return(
        <Container>
            <Header/>
            <Personal />
        </Container>
    )
}
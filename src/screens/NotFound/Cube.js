import React from "react";
import './cube.sass'
export default class Cube extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='cube'>
                <div className="container">
                    <div className="back side"></div>
                    <div className="left side"></div>
                    <div className="right side"></div>
                    <div className="top side"><span><i className="fas fa-times"></i></span></div>
                    <div className="bottom side"></div>
                    <div className="front side"></div>
                </div>
                <div className='not-found'>
                    Page not found
                </div>
            </div>



        )
    }
}
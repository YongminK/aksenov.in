import React from "react";
import Landing from "./Landing/Landing";
import MainPage from "./MainPage/MainPage";

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
        this.onResizeWindow = this.onResizeWindow.bind(this);
    }
    onResizeWindow(){
        this.setState({
            width: window.innerWidth
        })
    }
    componentDidMount() {
        window.addEventListener('resize', this.onResizeWindow)
    }
    render() {
        if(this.state.width > 767){
            return <MainPage/>
        } else {
            return <Landing/>
        }
    }
}
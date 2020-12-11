import React, { Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h1>Testing React</h1>;
    }
}


const appDiv = document.getElementById("app");
ReactDOM.render(<App />,appDiv);
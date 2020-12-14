import React, { Component} from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';
import {
    BrowserRouter as Router , 
    Link , 
    Switch, 
    Route ,
    Redirect,
} from 'react-router-dom';

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <Router>
                <Switch>
                    <Route exact path = '/'>
                        <p><h1>This Is the HomePage</h1></p>
                    </Route>
                    <Route path = '/join' component={RoomJoinPage}></Route>
                    <Route path = '/create' component={CreateRoomPage}></Route>
                    <Route path = '/room/:roomCode' component={Room}></Route>
                </Switch>
        </Router>
    }
}
import React, { Component} from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';
import {Grid, Button, ButtonGroup, Typography} from '@material-ui/core';
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
        this.state = {
            roomCode: null,
        };
    }

    async componentDidMount(){
        fetch('/api/user-in-room')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                roomCode: data.code
            });
        });
    }

        renderHomepage(){
            return(
                <Grid container spacing={3}>
                    <Grid item xs={12} align="center">
                        <Typography fontFamily="Sans-serif" variant='h3' component='h4'>
                            TeamUp Player
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                        {/* <ButtonGroup variant="contained"> */}
                            <Button variant="contained" margin="5px" padding="2px" color="primary" to="/join" component={Link}>
                                Join a Room
                            </Button>
                    </Grid>
                    <Grid item xs={12} align="center">  
                            <Button variant="contained" margin="5px" padding="2px" color="secondary" to="/create" component={Link}>
                                Create a Room
                            </Button>
                        {/* </ButtonGroup> */}
                    </Grid>
                </Grid>
            );
        }

    render(){
        return <Router>
                <Switch>
                    <Route exact path = '/' 
                        render={() =>{
                        return this.state.roomCode ? 
                        (<Redirect to={`/room/${this.state.roomCode}`}/>)
                        :(this.renderHomepage())
                        }
                        }
                    />
                    <Route path = '/join' component={RoomJoinPage}></Route>
                    <Route path = '/create' component={CreateRoomPage}></Route>
                    <Route path = '/room/:roomCode' component={Room}></Route>
                </Switch>
        </Router>
    }
}
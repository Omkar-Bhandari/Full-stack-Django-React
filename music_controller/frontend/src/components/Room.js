import React , {Component} from 'react';
import {Grid, Button,Typography} from '@material-ui/core'

export default class Root extends Component{
    constructor(props){
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false,
        };
        this.roomCode = this.props.match.params.roomCode;
        this.getRoomDetails();
        this.leaveButtonPressed = this.leaveButtonPressed.bind(this);
    }

    getRoomDetails(){
        fetch('/api/get-room'+'?code='+this.roomCode)
        .then((response) => {
            if (!response.ok){
                this.props.leaveRoomCallback();
                this.props.history.push('/');
            }
            return response.json();
        })
        .then((data) => {
            this.setState({
                votesToSkip : data.votes_to_skip,
                guestCanPause : data.guest_can_pause,
                isHost : data.is_host,
            });
        });
    }

    leaveButtonPressed(){
        const requestOptions = {
            method:"POST",
            headers:{'Content-type':'application/json'},
        }
        fetch('/api/leave-room',requestOptions)
        .then((_response) => {
            this.props.leaveRoomCallback();
            this.props.history.push('/');
        });
    }

    render(){
        return(
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} align = "center">
                    <Typography variant='h4' color="red" component='h4'>
                        Code : {this.roomCode}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component='h4'>
                        Votes : {this.state.votesToSkip}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component='h4'>
                        Guest Can Pause  : {this.state.guestCanPause.toString()}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component='h4'>
                        Host : {this.state.isHost.toString()}
                    </Typography>
                </Grid>
                <Grid item xs={12} align = "center">
                    <Button variant='contained' color='secondary' onClick={this.leaveButtonPressed}>
                        Leave Room
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

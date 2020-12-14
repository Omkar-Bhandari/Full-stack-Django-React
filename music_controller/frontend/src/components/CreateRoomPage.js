import React, { Component} from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class CreateRoomPage extends Component{
    defaultVotes = 2;
    constructor(props){
        super(props);
        this.state = {
            votesToSkip:this.defaultVotes,
            guestCanPause:true,
        };
        this.handleVotesChange = this.handleVotesChange.bind(this);
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
    }
    handleVotesChange(e){
        this.setState({
            votesToSkip : e.target.value,
        });
    }

    handleGuestCanPauseChange(e){
        this.setState({
            guestCanPause: e.target.value === 'true' ? true: false,
        });
    }

    handleRoomButtonPressed(){
       const requestOptions = {
           method:"POST",
           headers:{'content-type':"application/json"},
           body : JSON.stringify({
                votes_to_skip:this.state.votesToSkip,
                guest_can_pause:this.state.guestCanPause,
        }),
        };
        fetch('/api/create-room',requestOptions)
        .then((response) => response.json())
        .then((data) => this.props.history.push('/room/'+data.code));    
    }

    render(){
        return(
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                Create a Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center">
                            Guest Control of Playback State
                        </div>
                    </FormHelperText>
                    <RadioGroup 
                        row 
                        defaultValue="true" 
                        onChange={this.handleGuestCanPauseChange}
                    >
                        <FormControlLabel 
                            value="true" 
                            label= "Play/Pause"   
                            control={<Radio color="primary"/>}
                            labelPlacement="bottom"
                        />
                         <FormControlLabel 
                            value="False" 
                            label= "No Control"   
                            control={<Radio color="secondary"/>}
                            labelPlacement="bottom"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <FormHelperText>
                        <div align="center">
                            Votes Required to skip Song
                        </div>
                    </FormHelperText>
                    <TextField 
                        required="true" 
                        type="number"
                        onChange={this.handleVotesChange}
                        defaultValue= {this.defaultVotes}
                        inputProps = {{
                            min:1,
                            style: {textAlign:"center"},
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button 
                color="primary" 
                variant="contained"
                onClick={this.handleRoomButtonPressed}
                >
                    Create A Room
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" href="/"  component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
        );
    }
}
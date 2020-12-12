import React, { Component} from 'react';
import Button from "material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "material-ui/core/FormHelperText";
import FormControl from "material-ui/core/FormControl";
import TextField from "material-ui/core/TextField";
import {Link} from "material-ui/core/Link";
import Radio from "material-ui/core/Radio";
import RadioGroup from "material-ui/core/RadioGroup";
import FormControlLabel from "material-ui/core/FormControlLabel";
import Checkbox from "material-ui/core/Checkbox";

export default class CreateRoomPage extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Grid container spacing={1}>
            <Grid item xs={12} align="center"></Grid>
            <Typography component='h4' variant='h4'>
            Create a Room
            </Typography>
        </Grid>
        );
    }
}
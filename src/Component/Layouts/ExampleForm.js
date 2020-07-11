import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ResponsiveDrawer from './../sidebar/siebardup'


export default class ExampleForm extends React.Component {

    constructor(props) {
        super(props);

         // Setting up functions
        this.onChangeBusNumber = this.onChangeBusNumber.bind(this);
        this.onChangeBusRoute = this.onChangeBusRoute.bind(this);
        this.onChangeBusCapacity = this.onChangeBusCapacity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

         // Setting up state
        this.state= {
            busNo: '',
            busRoute: '',
            busCapacity: '',
        }
    }

    onChangeBusNumber(e) {
        this.setState({
            busNo:e.target.value
        });
    }
    onChangeBusRoute(e) {
        this.setState({
            busRoute:e.target.value
        });
    }
    onChangeBusCapacity(e) {
        this.setState({
            busCapacity:e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`form submited`);
        console.log(`Bus Number: ${this.state.busNo}`);
        console.log(`Bus Route: ${this.state.busRoute}`);
        console.log(`Bus Capacity: ${this.state.busCapacity}`);

        this.setState({
            busNo: '',
            busRoute: '',
            busCapacity: ''
        })
    }

    render() {
        return(
            <Grid container style={{marginTop: 100, 
                                    display:"flex",
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                <ResponsiveDrawer/>
                <Grid item xs={12} sm={6} >
                
                    
                    <Paper style={
                    {
                        padding: '20px 50px',
                        margin: 50,
                        textAlign: 'center',
                    }}>

                    <form onSubmit= {this.onSubmit}>
                    
                       <Typography component="h2" variant="">
                            Bus Registration
                       </Typography>

                    
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busNumber"
                            label="Bus Number"
                            name="busNumber"
                            value={this.state.busNo}
                            onChange={this.onChangeBusNumber}
                            autoFocus
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busRoute"
                            label="Bus Route"
                            name="busRoute"
                            value={this.state.busRoute}
                            onChange={this.onChangeBusRoute} 
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busCapacity"
                            label="Bus Capacity"
                            name="busCapacity"
                            value={this.state.busCapacity}
                            onChange={this.onChangeBusCapacity}      
                        />
                        
                        
                        <div>
                        <Button 
                        type="submit"
                        variant="contained">
                        {'Register'}
                        </Button>
                        </div>
                        <br></br>               
                    </form>
                </Paper>
                </Grid>
            </Grid>
        )
    }
}
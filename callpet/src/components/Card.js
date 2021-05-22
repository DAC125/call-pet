import React from 'react';
import '../assets/css/components/Card.css'
import {Grid} from '@material-ui/core';

function Card(props) {
    return(
            <div class="card border-light mb-3" >
                <div class="card-body">
                    
                    <Grid container>
                        <Grid item xs={6}>
                        <h5 class="card-title">{props.name}</h5>
                            <p class="card-text ">{props.body}</p>
                        </Grid>

                        <Grid item xs={6}>
                            <div>
                                {props.graph}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
    )
}

export default Card;
import React from 'react';
import { Grid } from '@material-ui/core';
import '../App.css';

const SixthSection = () => {
    return (
        <div>
            <Grid container justify='center'>
                <Grid item >
                    <h1 className='title-third-section'><i>The Writing Bee Timeline</i></h1>
                </Grid>
            </Grid>

            <Grid container justify='center' direction='column'
                alignItems='center'
                spacing={4}
                className='div-sixth-section'
                >
                <Grid item xs={6}
                
                >
                <img src="https://thewritingbee.org/assets/writing-4eea682091d41e9dd5ce2f2485470a1c984859a44f0177ac243b78a2f07a5a48.png" 
                
                alt=""/>
                <h2>December - March 2020 - Qualifying Sessions</h2>
                    <p>Teachers are welcome to conduct classroom-based qualifying sessions with their students in Grades 4-6.</p>
                </Grid>
                <Grid item xs={6}
              
                 >
                <img src="https://thewritingbee.org/assets/finals-24d9f2d913b2fd18f2b8e855f40f6b1ecc86fcf5471d266b6c7b6db9a9a903ba.png" alt=""/>
                <h2>April 2020 - The Finals</h2>
                    <p>Qualifying round winners and top vote-getters compete The Writing Finals. All Qualifying session participants are invited to read and cast votes to determine The Writing Bee Champion.</p>
                </Grid>




            </Grid>
        </div>
    )
}

export default SixthSection

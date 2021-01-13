import React from 'react';
import { Grid, Container } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        color: '#EFB014',
        fontSize: '60px',

    },

}
))

const FourthSection = () => {

    // material-ui const

    const matches = useMediaQuery('(max-width:800px)');
    const classes = useStyles();


    return (


        <div className='fourth-section-div' >
            <section className='section' style={{margin: matches?'10px': '20px 150px' }}>
                <h1 ><i>The Writing Bee Competition
</i></h1>
                <p>The Writing Bee kicks off in schools with students participating in district or school-based Qualifying sessions. Students who qualify move on to the Finals with a chance to be crowned The Writing Bee Champion.</p>
                <img src="https://thewritingbee.org/assets/how-it-works-diagram-8dca033074ad15625b13e6c7bed19e77ecb7b85673150be0ed24609a5da6783b.png" alt="" width='100%' />
            </section>


            <Grid container
                    justify='center'
                    direction={matches ? 'column' : 'row'}
                    alignItems='center'
                    spacing={2}>


                    <Grid item xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                      
                        <h4 className='heading4-third-section' style={{color:'white', textTransform:'capitalize', fontSize:'2rem'}}>1. Kick Off
</h4>
                        <p style={{color:'white'}}>Students read the Writing Bee’s original story start before independently writing their version of the next chapter. Teachers have the option to provide feedback and request revisions before approving each student's work.</p>
                    </Grid>
                    <Grid item xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                        
                        <h4 className='heading4-third-section'style={{color:'white', textTransform:'capitalize', fontSize:'2rem'}}>2. Qualifying Rounds</h4>
                        <p style={{color:'white'}}>Students read the anonymous submissions of their peers in small batches and vote for their favorites. A winning piece is identified to serve as the story’s middle chapter, and the process repeats to identify the final chapter.

</p>
                    </Grid>
                    <Grid item xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                       
                        <h4 className='heading4-third-section' style={{color:'white', textTransform:'capitalize', fontSize:'2rem'}}>3. Finals</h4>
                        <p style={{color:'white'}}>Class chapter winners and top vote-getters qualify to compete in The Writing Bee Finals. Plus, all classroom Qualifying round participants are eligible to read and cast votes for their favorites throughout The Finals.</p>
                    </Grid>
                    <Grid item xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                      
                        <h4 className='heading4-third-section' style={{color:'white', textTransform:'capitalize', fontSize:'2rem'}}>4. Winner</h4>
                        <p style={{color:'white'}}>Writing Bee Finalists create a new story by submitting their work for review by students around the world. Only top vote-getters move on in this ‘knockout style’ event until the 2020 Writing Bee Champion is crowned!</p>
                    </Grid>

                </Grid>

        </div>



    )
}

export default FourthSection

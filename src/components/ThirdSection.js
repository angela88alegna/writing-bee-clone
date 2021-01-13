import React from 'react';
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import '../App.css';

// material-ui styles

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


export default function ThirdSection() {


    // material-ui const

    const matches = useMediaQuery('(max-width:800px)');
    const classes = useStyles();




    const startClassButton = (

        <Grid container justify='center'>
            <Grid item  >

                <button className='but'>
                    <a  > Start your class writing bee</a>
                </button>

            </Grid>
        </Grid>
    )



    return (
        <div>
            <Container>
                <Grid container justify='center'>
                    <Grid item >
                        <h1 className='title-third-section'>The Writing Bee will improve Your Students’ Learning by Providing:</h1>
                    </Grid>
                </Grid>


                <Grid container
                    justify='center'
                    direction={matches ? 'column' : 'row'}
                    alignItems='center'
                    spacing={2}>


                    <Grid element xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                        <IconButton >
                            <CheckCircleIcon fontSize='large' className={classes.icon} />
                        </IconButton>
                        <h4 className='heading4-third-section'>Standards-based Writing Practice</h4>
                        <p>While creating their story, students will strengthen their use of effective techniques, descriptive details, and clear event sequences.</p>
                    </Grid>
                    <Grid element xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                        <IconButton>
                            <CheckCircleIcon fontSize='large' className={classes.icon} />
                        </IconButton>
                        <h4 className='heading4-third-section'>Personalized Writing Feedback</h4>
                        <p>Providing students individualized feedback on their own work is the most appropriate and effective approach to teach writing.
                        </p>
                    </Grid>
                    <Grid element xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                        <IconButton>
                            <CheckCircleIcon fontSize='large' className={classes.icon} />
                        </IconButton>
                        <h4 className='heading4-third-section'>Online Testing Preparation</h4>
                        <p>It’s never too soon to prepare students for the online testing environment where they’ll be expected to produce their best writing.</p>
                    </Grid>
                    <Grid element xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                        <IconButton>
                            <CheckCircleIcon fontSize='large' className={classes.icon} />
                        </IconButton>
                        <h4 className='heading4-third-section'>Transferable Writing Skills</h4>
                        <p>Storywriting offers a plethora of transferable writing skills that will boost their ability in both fiction and non-fiction writing assignments.</p>
                    </Grid>

                </Grid>

                {startClassButton}


                <div className='div-woman' style={{ backgroundColor: '#efefef' }}>

                    <div className='div-woman2' >

                        <img src="https://thewritingbee.org/assets/home/d_wilson-032a938aa82921ee90963b98ac3a8773b9ddd9826db0796d1d66f1baa1dae75a.jpg" alt="" width='50%' />

                    </div>

                    <p>
                        The Writing Bee was the most valuable writing experience I have had with my class in many years. My students were fully engaged - they collaborated, edited, imagined, improved, and happily worked for many hours on their chapter writing. My students improved their writing skills and also learned that they love writing. Invaluable lessons. Thank you, BoomWriter!
    </p>

                    <p>
                        <h2>D.Wilson</h2>


Camino Elementary School, Camino, California USA</p>
                </div>

                {startClassButton}


            </Container>

        </div>
    )
}



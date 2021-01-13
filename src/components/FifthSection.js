import React from 'react';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
})
)

const FifthSection = () => {

    const matches = useMediaQuery('(max-width:500px)');
    const classes = useStyles();



    return (
        <div className='div-fifth-section'>

            <h1><i>The writing bee is powered by </i></h1>

            <p>The Writing Bee employs BoomWriter’s unique content generation platform that allows students to compete and collaborate online as they:</p>



            <Grid container style={{ padding: matches ? null : '150px auto' }}
                justify='center'
                direction={matches ? 'column' : 'row'}
                alignItems='center'
                spacing={2}>


                <Grid item xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                    <img src="https://thewritingbee.org/assets/works_bullet_read-b23db1377a563e2482cbcf10dc3d23d481c8205c56a5458cacf950073f21b9fe.png" alt="" width='' />

                    <h1>Read
                    </h1>

                    <span>The prompt</span>


                </Grid>
                <Grid item xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                    <img src="https://thewritingbee.org/assets/works_bullet_write-30fe71cb5b7aed643e9ec89bd85775da99a8a26282d65e3400e3a73d9c4adc99.png" alt="" width='' />
                    <h1>Write</h1>
                    <span>An entry</span>


                </Grid>
                <Grid item xs={matches ? 12 : 2} style={{ margin: '20px' }}>
                    <img src="https://thewritingbee.org/assets/works_bullet_share-734fc49f13828da8605e5523459d69d195f95b091bb19eaa5dc01ca4f7d72059.png" alt="" width='' />
                    <h1>Share</h1>
                    <span>Whit peers</span>

                </Grid>
                <Grid item xs={matches ? 12 : 2} style={{ margin: '20px' }}>


                    <img src="https://thewritingbee.org/assets/works_bullet_vote-eed8b32e0372a14ce464f78f177d38c3cf009bda47581a5b2e203ba73d964e5e.png" alt="" width='' />
                    <h1>Vote</h1>
                    <span>For the favorite</span>

                </Grid>
                <Grid item xs={matches ? 12 : 2} style={{ margin: '20px' }}>


                    <img src="https://thewritingbee.org/assets/works_bullet_repeat-3f83dc5698886e51c18990a71d1dc1787aa1f501a4fc35cfe4eae56a9a9368ea.png" alt="" width='' />
                    <h1>Repeat</h1>
                    <span>Until complete</span>
                </Grid>

            </Grid>


        </div>

    )
}

export default FifthSection

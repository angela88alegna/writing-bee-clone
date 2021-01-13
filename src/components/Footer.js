import React from 'react';
import { Grid } from '@material-ui/core';




const Footer = () => {

  


    return (


        <Grid container direction='row' justify='space-around' style={{ marginTop: '30px' }} >

           
            <Grid item>
                <img src="https://thewritingbee.org/assets/boomwriter_logo-ada5d4d81233ed262c6a1818b35d82a488f0a58bb1b759f8294aad48f9fabb7c.png" alt="" />
            </Grid>
            <Grid item>
                <img src="https://thewritingbee.org/assets/footer_logo-efb4e14101ccab7751f6e8e15fa7447bedbbb1b9a9889965987fc5a42413ff74.png" alt="" />
            </Grid>
            <Grid item>
                <img src="https://thewritingbee.org/assets/google_partner_logo-7242443848d1047f6ed8451536abdd539bf9223a270e611eb43c8f7924d1c4fe.png" alt="" />
            </Grid>
            <Grid container justify='center'>
                <Grid item  >
                    <p> The Writing Bee is powered by BoomWriter</p>
                    <p> To find out more visit www.boomwriter.com </p>
                </Grid>
            </Grid>
        
        </Grid>

    )
}

export default Footer

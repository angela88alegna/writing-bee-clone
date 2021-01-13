import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { useTheme, makeStyles } from '@material-ui/core/styles';


import '../App.css';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    menuIcon: {
        marginLeft: 'auto',

    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}
))

export default function Appbar({ appBar, setAppBar }) {
    const matches = useMediaQuery('(max-width:600px)');
    const classes = useStyles();
    const theme = useTheme();
  



    const iconMenu = (

        <IconButton className={classes.menuIcon} >

            <MenuIcon fontSize='large'
                onClick={() => { setAppBar(!appBar) }}

            />



        </IconButton>)



    return (


        <div className=
            {matches ? ' higher-appbar' : 'App-header'}
        >
      
            <ul className={matches ? 'list2' : 'list'}>

                <li>
                    <img className={matches ? null : ' herr'} src="https://thewritingbee.org/assets/menu_logo-ff147e7a83d6f97732b11c0e127c1bb71810bb3e028c36430dd195660003b54f.png" alt="" />
                </li>

                <li className={!appBar ? 'list-items' : 'dont-show-items'}>
                    <a className='appbar-links' href='#'> Home</a>
                </li>
                <li className={!appBar ? 'list-items' : 'dont-show-items'}>
                    <a className='appbar-links' href='#'> Past Writing Bees</a>
                </li>

            </ul>

            {matches ? iconMenu : null}






        </div>

    )
}


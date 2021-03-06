import React from 'react';
import classes from './header.module.css'
import help from './Need Help.png'
import phone from './phone.png'

function Header() {
    return (
    <div>
        <div className={classes.main}>
            <div className={classes.phone}><img src={phone} alt='phone'/><img src={help} alt='help'/></div>
            <div className={classes.title}>Flowers Shop</div>
            <div><input className={classes.search} type="text" placeholder="search" /></div>
        </div>
    </div>
    );
}

export default Header;

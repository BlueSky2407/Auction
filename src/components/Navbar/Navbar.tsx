import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>  
            <img src={logo} alt='auction-logo' className={styles['logo']}/>
            <div className={styles['links-container']}>
            <Link to='/overview' className={styles['link']}>
                Overview
            </Link>
            <Link to='/bids' className={styles['link']}>
                My Bids
            </Link>
            <Link to='/products' className={styles['link']}>
                Products
            </Link>
            </div>         
        </div>

    )
}

export default Navbar;
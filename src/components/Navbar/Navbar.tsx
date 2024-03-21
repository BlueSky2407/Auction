import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>  
            <Link to='/'>
            <img src={logo} alt='auction-logo' className={styles['logo']}/>
            </Link>

            <div className={styles['links-container']}>
                <Link to='/bids' className={styles['link']}>
                    My Bids
                </Link>
                <Link to='/products' className={styles['link']}>
                    Products
                </Link>
                <Link to='/profile' className={styles['link']}>
                    My Profile
                </Link>
                <div className={styles['link']}>Login/Sign-in</div>
            </div>         
        </div>

    )
}

export default Navbar;
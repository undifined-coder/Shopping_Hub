import React from 'react';

const Navbar = (props) => {
  console.log('props', props);
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <h1>Shoppers Stop</h1>
        <img src="https://image.flaticon.com/icons/svg/1170/1170678.svg" style={styles.cartIcon} alt="cart"/>
        <span style={styles.cartCount}>{props.total}</span>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: 100,
    background:  'lightGray',
    display: 'flex',
    flexDirection: 'flex-end',
    alignItems: 'center'
  },
  cartIcon: {
    //height: 32,
    //marginRight: 20
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount:  {
    background: 'gray',
    borderRadius: '50%',
    padding:  '4px 8px',
    //position: 'absolute',
    textColor: 'white',
    right: 0,
    top: -9
  }
};

export default Navbar;
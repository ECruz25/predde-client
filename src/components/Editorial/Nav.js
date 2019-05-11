import React, { useContext } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

import Cart from '@material-ui/icons/ShoppingCart';
import { AppContext } from '../../Context';

const Nav = ({ handleOnChange }) => {
  const context = useContext(AppContext);

  const handleChange = (e, value) => {
    handleOnChange(
      value === 0
        ? 'categorias'
        : value === 1
        ? 'libros'
        : value === 2
        ? 'carrito'
        : 'login'
    );
  };
  return (
    <AppBar
      style={{
        display: 'flex',
        marginBottom: '200px',
        justifyContent: 'center',
        height: '72px'
      }}
    >
      <Tabs onChange={handleChange}>
        <Tab label="Categorias" />
        <Tab label="Libros" />
        {context.state.total > 0 && (
          <Tab label={context.state.total} icon={<Cart />} />
        )}
      </Tabs>
    </AppBar>
  );
};
export default Nav;

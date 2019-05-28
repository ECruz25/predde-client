import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { pink } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Context from './Context';
import './App.css';
import Imprenta from './components/Imprenta';
import LoginForm from './components/Editorial/Forms/UserForm';
import CategoryForm from './components/Editorial/Forms/CategoryForm';
import Categories from './components/Editorial/Categories';
import Books from './components/Editorial/Books';
import BookForm from './components/Editorial/Forms/BookForm';
import Cart from './components/Editorial/Cart';
import Containers from './components/Containers';


const StyledApp = styled.div`
  display: grid;
  margin: 0;
  height: 100vh;
  grid-template-rows: 10% 89% 1%;
  grid-column-gap: 200px;
  margin-top: 75px;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8e24aa'
    },
    secondary: pink
  }
});

const App = () => (
  <Context>
    <MuiThemeProvider theme={theme}>
      <Router>
        <StyledApp>
          <Switch>
          <Route path="/" exact component={Containers}  />
            <Route path="/editorial/login" exact component={LoginForm} />
            <Route path="/editorial/categorias" exact component={Categories} />
            <Route
              path="/editorial/categorias/crear"
              exact
              component={CategoryForm}
            />
            <Route path="/editorial/libros" exact component={Books} />
            <Route path="/editorial/libros/:category" component={Books} />
            <Route path="/editorial/libros/crear" exact component={BookForm} />
            <Route path="/editorial/carrito" exact component={Cart} />
            <Route path="/imprenta" component={Imprenta} />
          </Switch>
        </StyledApp>
      </Router>
    </MuiThemeProvider>
  </Context>
);

export default App;

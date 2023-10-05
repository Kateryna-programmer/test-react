// import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import Logo from '../../components/Logo/Logo';
import './Header.scss';
import Menu from 'components/Menu/Menu';
import CartHeader from 'components/CartHeader/CartHeader';

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <AppBar className="header" position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Logo />
            </Typography>
            <Menu />
            <CartHeader />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;

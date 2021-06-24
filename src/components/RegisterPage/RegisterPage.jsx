import { Button, Grid, ThemeProvider, Link } from '@material-ui/core';
import React from 'react';
import createMuiTheme from '../GLOBALUI/Theme'
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <ThemeProvider theme={createMuiTheme}>
      
      
      
      <RegisterForm />

      
        <Link
          variant='body1'
          component="button"
          onClick={() => {
            history.push('/login');
          }}
          color='secondary'
        >
          Login
        </Link>
      
   
    </ThemeProvider>
  );
}

export default RegisterPage;

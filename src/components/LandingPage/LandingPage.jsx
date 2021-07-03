import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { Typography, Grid, Link } from "@material-ui/core";
// CUSTOM COMPONENTS
import {useSelector} from 'react-redux';
import AdminHeader from '../Admin/AdminHeader';
import Nav from '../Nav/Nav';
import Admin from "../Admin/Admin";
import IncidentHome from "../IncidentForm/IncidentHome";
import LoginPage from "../LoginPage/LoginPage";

function LandingPage() {

  const history = useHistory();
  const user = useSelector((store) => store.user);

  const handleClick = (event) => {
    history.push("/registration");
  };

  
if(user.is_admin === true) {
  return (
    <div>
      <AdminHeader/>
      <Admin/>
    </div>
  )
} else if(user.is_admin === false) {
  return (
    <div>
      <Nav/>
      <IncidentHome/>
    </div>
  )
}
 

}

export default LandingPage;

{/* <div className="container">
  <LoginForm />
  <Grid container justify="center">
    <Typography variant="body1" component="h4">
      New User?
    </Typography>
  </Grid>
  <Grid container justify="center">
    <Link
      variant="body1"
      component="button"
      onClick={handleClick}
      color="secondary"
    >
      Register
    </Link>
  </Grid>
</div> */}
import React from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import CustomerMessaging from "../../Messaging/CustomerMessaging";
import CustomerProject from "../../Projects/CustomerProject";
/*
import BackgroundCSL from './Carousel';
import { getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import ListingItem from '../Listingitem/Listingitem.jsx';
//import Slider from "../components/Slider";
import { db } from '../../firebase';
import queries from '../../query';
import '../Style/style.css';
import arrow from "../../Assets/right-arrow.png"

*/

const CustomerDashboard = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  function onLogout() {
    auth
      .signOut()
      .then(() => {
        alert("User Signed out");
        navigate("/");
      })
      .catch(() => {
        alert("Error with signning out");
      });
  }

  return (
    <div data-testid="CustomerDashboard-1">
      <h1>Customer Dashboard</h1>
      <button type="button" className="btn btn-danger btn-m" onClick={onLogout}>
        Log Out
      </button>
      <br />
      <br />
      <br />

      <CustomerMessaging />
      <br />
      <br />
      <CustomerProject />
    </div>
  );
};

export default CustomerDashboard;

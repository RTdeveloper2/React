import { useState } from "react";
import { IMG_URLS } from "../utils/appConstants";
import { Button } from 'semantic-ui-react'
import {RatingIcon} from 'semantic-ui-react'

const HeaderComponent = () => {
  const [button, setbutton] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={IMG_URLS.SITE_LOGO} />
      </div>
      <div className="Nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <button
        onClick={() => {
         button==='login' ?  setbutton("logout") : setbutton("login") ;
        }}
      >
        {button}
      </button>
      <div>
      <RatingIcon/>
  </div>
    </div>
  );
};


export default HeaderComponent;

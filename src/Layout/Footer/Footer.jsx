import React, { Component } from "react";
import { FirstCol, SocialIcons, WrapperFooter } from "./FooterStyle";
import { FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <WrapperFooter>
        <FirstCol>
          <h2>Plant</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh
            posuere duis eu non sit integer at placerat amet.
          </p>
          <SocialIcons>
            <i>
              <FaFacebookSquare />
            </i>
            <i>
              <AiFillInstagram />
            </i>
            <i>
              <BsTwitter />
            </i>
            <i>
              <FaTelegramPlane />
            </i>
          </SocialIcons>
        </FirstCol>
        <FirstCol>
          <h2>Navigation</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Help & Support</li>
            <li>Product</li>
          </ul>
        </FirstCol>
        <FirstCol>
          <h2>Help</h2>
          <ul>
            <li>Coustomers Services</li>
            <li>FAQs</li>
            <li>We Are Hiring</li>
            <li>Returns</li>
          </ul>
        </FirstCol>
        <FirstCol>
          <h2>About Us</h2>
          <ul>
            <li>Contact</li>
            <li>Address</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </FirstCol>
      </WrapperFooter>
    );
  }
}

export default Footer;

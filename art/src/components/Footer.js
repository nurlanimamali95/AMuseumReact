import React from "react";
import "./Footer.css";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import heart from "../assets/heart.gif";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a
            href="https://www.facebook.com/harvardartmuseums"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="icons" />
          </a>
          <a
            href="https://twitter.com/harvartmuseums"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare className="icons" />
          </a>
          <a
            href="https://www.instagram.com/harvardartmuseums/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="icons" />
          </a>
          <a
            href="https://www.pinterest.com/harvardartmus/"
            target="_blank"
            rel="noreferrer"
          >
            <FaPinterestSquare className="icons" />
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="/contact">Contact us</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/exhibitions">Exhibitions</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>

        <div className="row">
          Copyright © 2023 Made with{" "}
          <img className="heart" src={heart} alt="heart" /> by Nurlan
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./logo.css";
const Logo = () => {
    return (
        <Link to="/" className="block">
            <StaticImage
                src="../../data/images/gamer_logo.png"
                className="gamer_logo"
                alt="Bonx"
            />
        </Link>
    );
};
export default Logo;

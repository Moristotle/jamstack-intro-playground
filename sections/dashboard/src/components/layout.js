import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";

import "./layout.css";
//TODO:refactor to use CSS modules instead of stylesheet.

const Layout = ({ children }) => (
	<IdentityContextProvider url="https://moristotle-cave-auth.netlify.com">
		<header>
			<Link to="/">JAMstack App</Link>
		</header>
		<main>{children}</main>
	</IdentityContextProvider>
);

export default Layout;

/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { ThemeContext } from "./themcontext"
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
} from "@mui/material";

export default function Navigation() {
    const { theme, dark, toggle } = useContext(ThemeContext)

    return (
        // <div id="nav" >
        //     <nav >
        //         <ul className="ulnav"
        //             style={{
        //                 backgroundColor: theme.backgroundColor,

        //             }}>
        //             <li>
        //                 <Link className="active" to="/" style={{ color: theme.color }} >
        //                     Home
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/idk" style={{ color: theme.color }}>News</Link>
        //             </li>
        //             <li>
        //                 <Link to="/idk" style={{ color: theme.color }}>About</Link>
        //             </li>
        //             <li>
        //                 <Link to="/contact" style={{ color: theme.color }}>Contact</Link>
        //             </li>
        //             <li>
        //                 <a
        //                     href="#"
        //                     onClick={toggle}
        //                     style={{ color: theme.color }}
        //                 >
        //                     Switch {dark ? "light" : "dark"} mode
        //                 </a>
        //             </li>
        //         </ul>
        //     </nav>
        // </div >
        <AppBar position="static" className="NavBar">
            <CssBaseline />
            <Toolbar className="ulnav"
                style={{
                    backgroundColor: theme.backgroundColor,

                }}>
                <Typography variant="h4" className="Home"  >
                    <Link to="/" style={{ color: theme.color }}>
                        Home
                    </Link>
                </Typography>
                <div className="link">
                    <Link to="/about" style={{ color: theme.color }}>
                        About
                    </Link>
                    <Link to="/contact" style={{ color: theme.color }}>
                        Contact
                    </Link>
                    <Link to="/faq" style={{ color: theme.color }}>
                        FAQ
                    </Link>

                    <Link
                        href="#"
                        onClick={toggle}
                        style={{ color: theme.color }}
                    >
                        Switch {dark ? "light" : "dark"} mode
                    </Link>



                </div>
            </Toolbar >
        </AppBar >

    );

}

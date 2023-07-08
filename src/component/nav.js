/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { ThemeContext } from "./themcontext"

export default function Navigation() {
    const { theme, dark, toggle } = useContext(ThemeContext)

    return (
        <div id="nav" >
            <nav >
                <ul className="ulnav"
                    style={{
                        backgroundColor: theme.backgroundColor,

                    }}>
                    <li>
                        <a className="active" href="#home" style={{ color: theme.color }} >
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#news" style={{ color: theme.color }}>News</a>
                    </li>
                    <li>
                        <a href="#about" style={{ color: theme.color }}>About</a>
                    </li>
                    <li>
                        <a href="#contact" style={{ color: theme.color }}>Contact</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={toggle}
                            style={{ color: theme.color }}
                        >
                            Switch {dark ? "light" : "dark"} mode
                        </a>
                    </li>
                </ul>
            </nav>

        </div >
    );

}

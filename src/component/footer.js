import { useContext } from "react";
import { ThemeContext } from "./themcontext"

export default function Footer() {
    const { theme } = useContext(ThemeContext)
    return (

        <div className="footer" style={{
            backgroundColor: `${theme.backgroundColor}`
        }}>
            <p style={{ color: theme.color }} >Copyright &#169; 2022 </p>
        </div >
    );
}


import { NavLink } from "react-router-dom";

export default function Navigation() {
    return <header>
        <ul>
            <li><NavLink to="/">Homepage</NavLink></li>
            <li><NavLink to="/gene">Gene Simmons</NavLink></li>
            <li><NavLink to="/paul">Paul Stanley</NavLink></li>
            <li><NavLink to="/ace">Ace Frehley</NavLink></li>
            <li><NavLink to="/peter">Peter Criss</NavLink></li>
        </ul>
    </header>
}
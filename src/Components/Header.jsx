import logo from "../assets/logo.png"
import '../App.css';

export const Header = () => {
    return (
        <div className="navbar bg-base-100 opacity-85 top-0 z-50 sticky items-center justify-center relative">
            <img src={logo} alt="Bilweekend logo" style={{ width: '150px', height: '150px' }} />
            <div className="navbar-border" />
        </div>
    )
}
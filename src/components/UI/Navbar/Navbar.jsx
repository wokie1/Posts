import React, {useContext} from 'react';
import {Link} from "react-router";
import cl from './Navbar.module.css';
import {AuthContext} from "../../../context/index";
import MyButton from "../button/MyButton";
const Navbar = () => {
    const { isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className="Navbar">
            <button className={'btns'} onClick={logout}>Выйти</button>
            <div className="Navbar__links">
                <Link to="/about" className={cl.link}>О сайте</Link>
                <Link to="/posts" className={cl.link}>Посты</Link>
            </div>

        </div>
    );
};

export default Navbar;
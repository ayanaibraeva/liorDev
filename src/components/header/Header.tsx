import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css"
import {NavbarList} from "../../utils/Navbar";


const Header = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="container">
                    <div className="icon">
                        <div className="icon_position">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.70997 0C4.95302 0 2.70996 2.24306 2.70996 5.00001C2.70996 5.82765 2.91688 6.64825 3.31025 7.3761L7.43654 14.8389C7.49148 14.9384 7.59615 15 7.70997 15C7.82379 15 7.92847 14.9384 7.9834 14.8389L12.1112 7.37364C12.5031 6.64825 12.71 5.82762 12.71 4.99998C12.71 2.24306 10.4669 0 7.70997 0ZM7.70997 7.5C6.33149 7.5 5.20998 6.37849 5.20998 5.00001C5.20998 3.62153 6.33149 2.50002 7.70997 2.50002C9.08845 2.50002 10.21 3.62153 10.21 5.00001C10.21 6.37849 9.08845 7.5 7.70997 7.5Z" fill="white"/>
                            </svg>
                            <p>Адрес компании здесь</p>
                        </div>
                        <div className="icon_position">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_486_3560)">
                                    <path d="M14.8016 11.0085L12.7083 8.91519C11.9607 8.16759 10.6897 8.46666 10.3907 9.43852C10.1664 10.1114 9.41882 10.4852 8.74597 10.3356C7.25076 9.96184 5.23223 8.01807 4.85843 6.4481C4.63414 5.77522 5.08271 5.02762 5.75555 4.80336C6.72744 4.50432 7.02648 3.23339 6.27888 2.48579L4.18558 0.392493C3.5875 -0.130831 2.69037 -0.130831 2.16705 0.392493L0.746597 1.81294C-0.673853 3.30815 0.896118 7.27046 4.40986 10.7842C7.92361 14.298 11.8859 15.9427 13.3811 14.4475L14.8016 13.027C15.3249 12.4289 15.3249 11.5318 14.8016 11.0085Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_486_3560">
                                        <rect width="15" height="15" fill="white" transform="translate(0.209961)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>+996 555 222 333</p>
                        </div>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="navbar">
                           <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <ellipse cx="30.975" cy="19.8211" rx="5.68917" ry="5.68917" transform="rotate(-14.7556 30.975 19.8211)" fill="#E6A14B"/>
                               <path d="M10.7465 35.8836C9.50404 38.157 6.59472 39.1095 4.24836 38.011C1.90199 36.9125 1.00711 34.179 2.24957 31.9055L17.4369 4.11636C18.6793 1.84294 21.5887 0.890492 23.935 1.989C26.2814 3.08751 27.1763 5.821 25.9338 8.09442L10.7465 35.8836Z" fill="#7BD554"/>
                               <path d="M6.91246 38.4684C4.37629 38.4775 2.18494 36.4333 2.01795 33.9027C1.85095 31.372 3.77155 29.3131 6.30772 29.304L38.2253 29.1893C40.7614 29.1802 42.9528 31.2244 43.1198 33.7551C43.2868 36.2857 41.3662 38.3446 38.83 38.3537L6.91246 38.4684Z" fill="#7BD554"/>
                           </svg>
                           <ul>
                               {
                                   NavbarList.map(item => (
                                       <li key={item.id} >
                                           <Link to={item.route}>
                                               {item.caption}
                                           </Link>
                                       </li>
                                   ))
                               }
                               <button>онлайн-запрос</button>
                           </ul>
                        </div>
                    </div>
                </header>
            </div>
            {/*<div>*/}
            {/*    <div>*/}
            {/*        <div>*/}
            {/*            <p>*/}
            {/*                /!*<NavLink to={'/'}>Главная</NavLink>*!/*/}
            {/*                <NavLink to={'/aboutUs'}> О нас </NavLink>*/}
            {/*                <NavLink to={'/ourWorks'}>Наши Работы</NavLink>*/}
            {/*                <NavLink to={'/services'}>Услуги</NavLink>*/}
            {/*                <NavLink to={'/partners'}>Партнеры</NavLink>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Header;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './styles.scss';

class DropdownCategory extends Component{
    render(){
        return(
           <>
                <div className="dropdown__category">
                    <div className="category__content">
                        <div className="category__cards">

                        </div>
                    </div>
                </div>
           </>
        )
    }
}

export default class Header extends Component{
    render(){
        return(
            <header className="header">
                <nav className="header__content">
                    <div className="header__logo">

                    </div>
                    <ul className="header__menu">
                        <li className="menu__link">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu__link menu__link--dropdown">
                            <Link to="/">Categoria</Link>
                            <DropdownCategory />
                        </li>
                        <li className="menu__link">
                            <Link to="/contato">Contato</Link>
                        </li>
                        <li className="menu__link">
                            <Link to="/login">Logar</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}


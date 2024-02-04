import { useState } from "react";

const Header = () => {
    const [ title, setTitle] = useState('Welcome Message')
    const [ hideNav, setHideNav] = useState(true)

    const changeTitle = () => {
        setTitle('Have a Good Time!')
    }

    const navTrigger = () => {
        setHideNav(false)
    }

    const navClose = () => {
        setHideNav(true)
    }

    return (
        <>
            <header>
                <nav className="nav-container">
                    <a href="./">Website Title / Logo</a>
                    <div className={ hideNav ? 'hide-nav' : 'rwd-nav'}>
                        <div onClick={navClose} className="nav-cross">X</div>
                        <a href="./">Item 1</a>
                        <a href="./">Item 2</a>
                        <a href="./">Item 3</a>
                        <a href="./">Item 4</a>
                    </div>
                </nav>
                <div onClick={navTrigger} className="nav-trigger">
                    <svg width="26" height="26">
                        <rect x="0" y="5" width="26" height="2" />
                        <rect x="0" y="12" width="26" height="2" />
                        <rect x="0" y="19" width="26" height="2" />
                    </svg>
                </div>
                <h1 onClick={changeTitle} className="title">{title}</h1>
            </header>
        </>
    )
}

export default Header;

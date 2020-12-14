import React from 'react'
import styles from './Nav.module.scss'
import classnames from 'classnames/bind'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const NavComponent = ({theme}) => {
    return (
        <nav className={cx("nav", {[`nav-theme-${theme}`]: true})}>
            <ul className={cx("nav-elems", {[`nav-elems-theme-${theme}`]: true})}>
                <Link to='/about' className={cx("link-nav-bar", {[`link-nav-bar-theme-${theme}`]: true})}>
                    <li>
                        Who created this garbage
                    </li>
                </Link>
                <Link to='/projects' className={cx("link-nav-bar", {[`link-nav-bar-theme-${theme}`]: true})}>
                    <li>
                        Your projects
                    </li>
                </Link>
                <Link to='/' className={cx("link-nav-bar", {[`link-nav-bar-theme-${theme}`]: true})}>
                    <li>
                        Home
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export const Nav = connect(mapStateToProps, null)(NavComponent);
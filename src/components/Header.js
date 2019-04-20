import React from 'react'
import Cta from './Cta'

import logo from '../assets/images/website-icon.png'



class Header extends React.Component {
    state = {
        logoAlt: '<deckerdevs/> logo'
    };

    render() {
        return (
            <header className="grid-wrapper">
                <div className="site-logo col-3">
                    <img src={logo} alt={this.state.logoAlt} />
                </div>
                <nav className="site-nav col-9">
                    <ul>
                        <li><a href="/agencies">agencies</a></li>
                        <li><a href="/marketers">marketers</a></li>
                        <li><a href="/development-overlow">development overflow</a></li>
                        <li><a href="/resources">resources</a></li>
                        <li><a href="/blog">blog</a></li>
                        <li><Cta url="/contact" text="contact" options="purple ghost" /></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header

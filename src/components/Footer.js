import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="inner grid-wrapper">
                    <div class="col-9"></div>
                    <ul className="icons col-3">
                        <li><a href="https://www.twitter.com/deckerdevs" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="/contact" className="icon alt fa-envelope"><span className="label">Contact Us</span></a></li>
                    </ul>
                    <ul className="copyright col-12">
                        <li>&copy; {new Date().getFullYear()} deckerdevs</li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer

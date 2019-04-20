import React from 'react';
import Cta from './Cta';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            maxWidth: this.props.maxWidth + 'px'
        }
    }
    render() {
        return (
            <section className="hero" id={this.props.id}>
                <div className="inner" style={this.style}>
                    {this.props.headline &&
                        <h1>{this.props.headline}</h1>
                    }
                    {this.props.subHeadline &&
                        <p>{this.props.subHeadline}</p>
                    }
                    <ul className="actions">
                        {this.props.urls.map( (url, index) =>
                            <li>
                                <Cta url={url} text={this.props.buttonText[index]} options="button scrolly" />
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Hero

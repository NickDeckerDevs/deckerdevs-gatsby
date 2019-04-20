import React from 'react';
import Cta from './Cta';

class FullCta extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section id={this.props.id} className="main style2 special">
				<div className="container">
					{this.props.headline &&
						<header className="major">
							<h2>{this.props.headline}</h2>
						</header>
					}
					{this.props.subHeadline &&
						<p>{this.props.subHeadline}</p>
					}
					<ul className="actions uniform">
						{this.props.urls.map( (url, index)  =>
							<li>
								<Cta url={url} text={this.props.buttonText[index]} options="purple ghost" />
							</li>
						)}
					</ul>

				</div>
			</section>
		)
	}
}

export default FullCta

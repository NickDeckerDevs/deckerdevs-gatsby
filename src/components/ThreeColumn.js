import React from 'react';
import Cta from './Cta';

class ThreeColumn extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);

	}

	render() {
		return (
			<section id={this.props.id && this.props.id} className="main style1 special">
				<div className="grid-wrapper">
					<div className="col-12">
						{this.props.headline &&
							<header className="major">
								<h2>{this.props.headline}</h2>
							</header>
						}
						{this.props.subHeadline &&
							<h3>{this.props.subHeadline}</h3>
						}
					</div>
					{this.props.columns.map( (column, index) =>
						<div key={index} className="col-4">
							{this.props.images[index] &&
								<span className="image fit"><img src={require(`../assets/images/${this.props.images[index]}`)} alt={this.props.titles[index]} /></span>
							}
							{this.props.titles[index] &&
								<h4>{this.props.titles[index]}</h4>
							}
							{this.props.content[index] &&
								<p>{this.props.content[index]}</p>
							}
							{this.props.ctas[index] &&
								<Cta url={this.props.ctas[index]} text="Learn More" options="purple ghost" />
							}
						</div>
					)}



				</div>
			</section>
		)
	}
}

export default ThreeColumn

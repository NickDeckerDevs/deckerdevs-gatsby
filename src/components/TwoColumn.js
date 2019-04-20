import React from 'react'

// import Cta from './Cta'


class TwoColumn extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props)
	}
	something = () => {
		return 'frank';
	}
	render () {
		return (
			<section id={this.props.id && this.props.id} className="main style1">
				<div className="grid-wrapper">
				<div className={this.props.swap ? `swap col-6` : 'col-6'}>
					 <span className="image fit"><img src={require(`../assets/images/${this.props.image}`)} alt={this.props.alt} /></span>
				</div>
					<div className="col-6">
						{this.props.headline &&
							<header className="major">
								<h2>{this.props.headline }</h2>
							</header>
						}
						{this.props.subHeadline &&
							<h3>{this.props.subHeadline}</h3>
						}
						{this.props.content &&
							<p>{this.props.content}</p>
						}
						{this.props.listItems &&
							<ul>
								{this.props.listItems.map( (item, index) =>
									<li key={index}>{item}</li>
								)}
							</ul>
						}
					</div>

				</div>
			</section>
		)
	}

}

export default TwoColumn

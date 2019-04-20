import React from 'react'

class Cta extends React.Component {


	handleClick = () => {
		//send to google tag manager/analytics
		console.log('clicked the cta');
		return true;
	};

	render() {
		return (
			<a className={'cta btn ' + this.props.options} href={this.props.url} onClick={this.handleClick}>{this.props.text}</a>
		)
	}

}

export default Cta

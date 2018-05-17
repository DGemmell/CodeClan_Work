import React from 'react';

class PiggyBank extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			total: 0
		};

		this.deposit = this.deposit.bind(this);
		this.withdraw = this.withdraw.bind(this)
	}

	deposit(){
		this.setState(prevState => {
      return {total: prevState.total + this.props.depositAmount};
    });
  }

	withdraw(){
		this.setState(prevState => {
			let newAmount = prevState.total - this.props.depositAmount;
			if(newAmount < 0){
				newAmount = 0;
			}
			return {total: newAmount};
		});
	}

	componentWillMount(){
		console.log("Component WILL mount!");
		const button = document.querySelector("button");
		console.log(button);
	}

	componentDidMount(){
		console.log("Component DID mount!");
		const button = document.querySelector("button");
		console.log(button);
	}

	componentWillUpdate(nextProps, nextState){
		console.log("componentWillUpdate");
		console.log(nextProps);
		console.log(nextState);
	}

	componentDidUpdate(prevProps, prevState){
		console.log("componentDidUpdate");
		console.log(prevProps)
		console.log(prevState)
	}



	render() {
		return (
			<div className="bank-box">
				<h1>{this.props.title}</h1>
				<p>Hello, world! I am a Piggy Bank. My owner is {this.props.owner}.</p>
        <p>I contain £{this.state.total}</p>
				<button onClick={ this.deposit }>Add</button>
				<button onClick={ this.withdraw }>Withdraw</button>
			</div>
		);
	}
}

export default PiggyBank;

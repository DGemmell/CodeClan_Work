import React from 'react';

class PiggyBank extends React.Component{

  constructor(props){
    super(props);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.state = {

      total: 100
    }
  }

  deposit(){
    this.setState(prevState => {
      return {total: prevState.total + this.props.depositAmount};
    })

  }

  withdraw(){
    this.setState(prevState => {
      return {total: prevState.total - this.props.depositAmount};
      if(newAmount < 0){
        newAmount = 0;
      }
      return {total: newAmount};
    })
  }

  render(){
    return(
      <div className="bank-box">
          <h1>{this.props.title}</h1>
          <p> I belong to{this.props.owner}</p>
          <p>I contain £{this.state.total}</p>
          <button onClick={this.deposit}>Add</button>
          <button onClick={this.withdraw}>Subtract</button>
      </div>
    );
  }



}

export default PiggyBank;

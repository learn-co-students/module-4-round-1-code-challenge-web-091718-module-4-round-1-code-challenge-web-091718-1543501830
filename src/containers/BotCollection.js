import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  setBotCards = () => {
    return this.props.robots.map(robot=> <BotCard pageHandler={this.props.pageHandler} key={robot.id} robot={robot} />)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.setBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

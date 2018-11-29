import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  enlistedRobots = () => {
    return this.props.robots.map(robot => {
      if (robot.recruited === true){
        return <BotCard pageHandler={this.props.pageHandler} key={robot.id} robot={robot} />
      }
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.enlistedRobots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

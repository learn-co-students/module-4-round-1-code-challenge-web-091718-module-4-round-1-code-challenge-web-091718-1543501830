import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBotArmy = () =>{
     return this.props.selectedBots.map(id => {
       let bot = this.props.getBotById(id)
        return <BotCard bot={bot} key={bot.id} onBotClick={this.props.onBotClick}/>
     })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {this.renderBotArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

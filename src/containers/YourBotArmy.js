import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot=>{
              if (bot.army) {
                return <BotCard
                  army={bot.army}
                  key={bot.id}
                  id={bot.id}
                  name={bot.name}
                  health={bot.health}
                  damage={bot.damage}
                  armor={bot.armor}
                  class={bot.bot_class}
                  catchphrase={bot.catchphrase}
                  url={bot.avatar_url}
                  addBotToArmy={this.props.addBotToArmy}/>
              }
            })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

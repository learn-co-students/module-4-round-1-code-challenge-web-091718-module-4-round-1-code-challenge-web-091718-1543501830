import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot=>{
            if (bot.army===false) {
              return <BotCard
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
  	);
  }

};

export default BotCollection;

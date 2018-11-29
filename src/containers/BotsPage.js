import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  handleClick = (event, id) => {
    console.log(id);
    let foundBot = this.props.bots.find(bot=> bot.id === id)
    console.log(foundBot)
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.props.bots} />
        <BotCollection bots={this.props.bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;

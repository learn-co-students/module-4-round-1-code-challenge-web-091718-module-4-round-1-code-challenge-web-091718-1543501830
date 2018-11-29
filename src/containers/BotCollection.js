import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"


class BotCollection extends React.Component{

  checkDisplay = () => {
    if (this.props.displayDetails) {
      return <BotSpecs
        bot={this.props.bots.find(bot => bot.id === this.props.selectedBotId)}
        handleEnlistClick={this.props.handleEnlistClick}
        handleGoBackClick={this.props.handleGoBackClick}
      />
    } else {
      return (
        <div className="ui four column grid">
          <div className="row">
            {this.props.bots.map(bot => <BotCard
              key={bot.id}
              bot={bot}
              handleCardClick={this.props.handleCardClick}
             />)}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
      {this.checkDisplay()}
      </React.Fragment>
    )
  }

}

export default BotCollection;

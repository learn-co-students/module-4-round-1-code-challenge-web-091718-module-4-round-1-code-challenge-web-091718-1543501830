import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  generateBotView = () => {
    const viewingBot = this.props.bots.find(bot => bot.id === this.props.viewBotId)
    return <BotSpecs bot={viewingBot} handleSelectBot={this.props.handleSelectBot} handleGoBack={this.props.handleGoBack}/>
  }

  generateCollectionView = () => {
    return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleSelectBot={this.props.handleSelectBot} handleViewBot={this.props.handleViewBot} viewBotId={this.props.viewBotId} />)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.viewBotId === null ? this.generateCollectionView() : this.generateBotView()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

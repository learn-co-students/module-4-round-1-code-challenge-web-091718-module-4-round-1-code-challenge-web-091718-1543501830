import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  state= {
    showSpecs: false,
    showId: {}
  }

  previewSpecs = (props)=>{
    this.setState({
      showSpecs: true,
      showId: {
        id: props.id,
        name: props.name,
        health: props.health,
        damage: props.damage,
        armor: props.armor,
        class: props.class,
        catchphrase: props.catchphrase,
        url: props.url,
        army: props.army
        }
    })
  }

  changeEditView = ()=>{
    console.log('hi');
    this.setState({
      showSpecs: false,
      showId: {}
    })
  }
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.state.showSpecs ? <BotSpecs
            showId={this.state.showId}
            changeEditView ={this.changeEditView}
            addBotToArmy={this.props.addBotToArmy}/> :
            (this.props.bots.map(bot=>{
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
                  previewSpecs={this.previewSpecs}
                  army={bot.army}
                  />
              }
            }))
          }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

  // if show specs is true then show the BotSpecs card, else show all of the cards

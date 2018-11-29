import React from "react";
// import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  //logic to reuse BotCard when enlisted
  //add enlisted key(boolean) to each bot
  // where to add this? parent upon fetch?
  //call function in render below


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

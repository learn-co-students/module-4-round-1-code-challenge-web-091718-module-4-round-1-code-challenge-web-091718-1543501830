import React from "react";

const BotSpecs = props => {
  let  bot  = props;

  let botType;

  switch (bot.showId.class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.showId.url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.showId.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.showId.catchphrase}
            </p>
            <strong>
              Class: {bot.showId.class} {botType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.showId.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.showId.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.showId.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={bot.changeEditView}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={()=>bot.addBotToArmy(props)}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default BotSpecs;

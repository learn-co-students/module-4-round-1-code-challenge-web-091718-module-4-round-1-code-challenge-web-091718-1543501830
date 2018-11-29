import React from "react";

class BotFilter extends React.Component {

  handleClickH = () => {
    this.props.onClick('H')
  }

  handleClickP = () => {
    this.props.onClick('P')
  }

  handleClickD = () => {
    this.props.onClick('D')
  }

  render() {
    return (
      <div className="ui segment">
        <div className="ui three column centered grid">
          <div className="row">
            <div className="column">
              <i className="icon large circular red heartbeat"
                  onClick={this.handleClickH}/>
            </div>
            <div className="column">
              <i className="icon large circular yellow lightning"
                  onClick={this.handleClickP}/>
            </div>
            <div className="column">
              <i className="icon large circular blue shield"
                  onClick={this.handleClickD}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BotFilter;

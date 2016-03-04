var React = require('react');
var Joyride = require('react-joyride');


module.exports = React.createClass({
  addSteps: function (steps) {
    let joyride = this.refs.joyride;

    if (!Array.isArray(steps)) {
        steps = [steps];
    }

    if (!steps.length) {
        return false;
    }

    this.setState(function(currentState) {
        currentState.steps = currentState.steps.concat(joyride.parseSteps(steps));
        return currentState;
    });
  },

  addTooltip: function (data) {
      this.refs.joyride.addTooltip(data);
  },
  
  render: function(){
    return(
      <Joyride ref="joyride"/>
    )
  }

});

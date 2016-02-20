var React = require('react');
var Nav = require('./nav');

App = React.createClass({
  render: function () {
    return(
      <div>
        <div>
          <Nav/>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;

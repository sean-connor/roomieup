var React = require('react');

module.exports = React.createClass({

render: function(){
  return(
    <div className="footer">
      <span>Created by&nbsp;</span>
      <a className="gitlink" href="http://www.github.com/sean-connor/roomieup" target="_blank">
          <span>Sean Connor</span>
         <div className="giticon" ></div>
      </a>
    </div>
  )
}

});

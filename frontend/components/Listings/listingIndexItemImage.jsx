var React = require('react');
var Carousel = require('nuka-carousel');



var Decorators = [{
  component: React.createClass({
    render: function () {
      return (
        <button
          onClick={this.props.previousSlide}>
          Previous Slide
        </button>
      )
    }
  }),
  position: 'Center',
  style: {
    padding: 20
  }
}];

module.exports = React.createClass({
  mixins: [Carousel.ControllerMixin],

  createImgComps: function(){
  return this.props.images.map(function(image, idx){
      return <img className="sliderimage" key={idx} src={image.url}/>
    })
  },

  render: function () {
    return(
      <Carousel ref="carousel"
        width="300px"
        >
        {this.createImgComps()}
      </Carousel>
    );
  }

})

var ApiActions = require('../actions/apiActions');

ApiUtil = {
  receiveNokoReq: function(stateObj){
    var city = 'sfbay'
    var requestStringBuild = ["http://", city, ".craigslist.org/search/apa?search_distance=", stateObj.miles,"&postal=",stateObj.zip,"&min_price=", stateObj.minprice, "&max_price=", stateObj.maxprice,"&bedrooms=", stateObj.br, "&bathrooms=", stateObj.ba, "&query=", stateObj.keyword].join("");
    var request = {requestString: requestStringBuild}
    this.nokogiriCall(request);
  },
  nokogiriCall: function(request){
    $.ajax({
      url: "api/clrequest",
      data: request,
      success: function(responseXML) {
        ApiActions.receiveNokoRes(responseXML);
      }
    })
  }

}


module.exports = ApiUtil;

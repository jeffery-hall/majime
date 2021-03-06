////////////////////////////////////////////////////////////////////////////////
// parseTime module
////////////////////////////////////////////////////////////////////////////////
var parseTime = (function(jobBuilder) {
  function getTime(msg) {
    var theTime = null;
    if ((theTime = /(\d{1,2})\/\d{1,2}c/.exec(msg)) !== null) { // Timezone format
      return theTime[1];
    } else if ((theTime = /(\d{1,2})[ap]/.exec(msg)) !== null) { // Straight time format
      return theTime[1];
    }
    return 0; // Hide time
  }

  return {
    getTime: getTime,
  }
})(jobBuilder);
////////////////////////////////////////////////////////////////////////////////
// parseTime module -- end
////////////////////////////////////////////////////////////////////////////////


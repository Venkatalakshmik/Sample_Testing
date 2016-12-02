   
context.setVariable("orderStatus", context.getVariable("ServiceCallout.response"));

var errorFlag ="false";
if (!context.getVariable("ServiceCallout.response"))
{
context.setVariable("errorFlag", "true");

}



var requestContent = context.getVariable("ServiceCallout.response");
var ptsRespObject= JSON.parse(requestContent);
var ptsCodeId;
var ptsStatusCode= context.getVariable("calloutResponse.status.code");
//var ptsResponsePhrase = context.getVariable("calloutResponse.status.message");
var ptsResponsePhrase;
context.setVariable("ptsResponsePhrase",context.getVariable("message.reason.phrase"));

//message.reason.phrase
ptsCodeId = ptsRespObject.code;
context.setVariable("ptsRespObject",ptsRespObject);
context.setVariable("ptsCodeId", ptsCodeId);
context.setVariable("ptsStatusCode", ptsStatusCode);
//context.setVariable("ptsResponsePhrase", ptsResponsePhrase);

//if ( ptsCodeId == 503 || !(ptsCodeId) ){ for PTS status code 200 ptsCodeId has no value.
if ((ptsCodeId == 503)||(ptsCodeId == 404)||(ptsCodeId == 500)) {
    context.setVariable("response.status.code",context.getVariable("ptsCodeId"));
    context.setVariable("response.header.x-target-response-code", ptsStatusCode);
    context.setVariable("ptsCodeId", "true");
    
} else
 {ptsStatusCode = 200; }
 
 //setting Response.phrse
if (ptsStatusCode == 200) {
    context.setVariable("ptsResponsePhrase","OK");
} else if (ptsStatusCode == 400) {
    context.setVariable("ptsResponsePhrase","Bad Request");
} else if (ptsStatusCode == 500) {
    context.setVariable("ptsResponsePhrase","Internal Server Error");
} else if (ptsStatusCode == 503) {
    context.setVariable("ptsResponsePhrase","Service Unavailable");
}else if (ptsStatusCode == 404) {
    context.setVariable("ptsResponsePhrase","Not Found");
}  
 

   //var ptsCodeId = context.getvariable('ptsCodeId');
  var statusCode = context.getVariable('ptsStatusCode');
  var phrase = context.getVariable('ptsResponsePhrase');
  var request_size = context.getVariable('client.received.content.length');
var ClientReceivedStartTime = context.getVariable('client.received.start.time');
var ClientReceivedEndTime = context.getVariable('client.received.end.time');
var ClientSentStartTime = context.getVariable('client.sent.start.time');
var ClientSentEndTime = context.getVariable('client.sent.end.time');
var TargetReceivedStartTime = context.getVariable('target.received.start.time');
var TargetReceivedEndTime = context.getVariable('target.received.end.time');
var TargetSentStartTime = context.getVariable('target.sent.start.time');
var TargetSentEndTime = context.getVariable('target.sent.end.time');
//testing logg for response phrase
/*var ptsResponsePhrase;
context.setVariable("ptsResponsePhrase",context.getVariable("message.reason.phrase"));
*/
var logObject = {
"organization": context.getVariable("organization.name"),
 "proxyName": context.getVariable("apiproxy.name"),
"environment": context.getVariable("environment.name"),
"request_size": request_size,
"request_uri": '' + context.getVariable("client.scheme") + '://' + context.getVariable("request.header.host") + context.getVariable("request.uri"),
"RequestVerb": context.getVariable("request.verb"),
"ClientReceivedStartTime": ClientReceivedStartTime,
"ClientReceivedEndTime": ClientReceivedEndTime,
"ClientSentStartTime": ClientSentStartTime,
"ClientSentEndTime": ClientSentEndTime,
"TargetReceivedStartTime": TargetReceivedStartTime,
"TargetReceivedEndTime": TargetReceivedEndTime,
"TargetSentStartTime": TargetSentStartTime,
"TargetSentEndTime": TargetSentEndTime,
//"responseCode": context.getVariable("message.status.code"),
"responseCode": statusCode,
"responseReason": phrase
};
var changedlogObject="{\"event\":"+JSON.stringify(logObject)+"}"; 
    var splunkReqObject;
    context.setVariable("splunkReqObject",changedlogObject);

//var responseContent = context.getVariable("ServiceCallout.response");
//context.setVariable("responseContent",responseContent);
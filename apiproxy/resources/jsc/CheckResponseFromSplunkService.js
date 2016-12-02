   var splunkResponse = context.getVariable("ServiceCallout.response");
 context.setVariable("splunkResponse",splunkResponse);
 var SplunkStatusCode = context.getVariable("message.status.code");
 
 context.setVariable("SplunkStatusCode",SplunkStatusCode);
 
 //var status ="false";
 var flag ="false";
 if(SplunkStatusCode!==200)
{
context.setVariable("flag", "true");

}

/*var ptsResponsePhrase;
context.setVariable("ptsResponsePhrase",context.getVariable("message.reason.phrase"));
*/

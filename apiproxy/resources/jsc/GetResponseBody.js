//orderStatusAPG flag is true if order exists in APG CAche , ptsCodeId is set to true as this prpohitibts rewrite of existing 
// orderStatus again in subsequent populate cache steps in APG cache

var orderStatusAPGFlag;
var subscriptionId ;
var ptsCodeId;                
var ptsStatusCode;
var ptsResponsePhrase;
//context.setVariable("ptsResponsePhrase",context.getVariable("message.reason.phrase"));
if (!context.getVariable("orderStatus"))
{
context.setVariable("orderStatusAPGFlag", "false");
} else {
context.setVariable("orderStatusAPGFlag", "true");
 context.setVariable("ptsCodeId", "true");
 context.setVariable("ptsStatusCode", "200"); 
 context.setVariable("ptsResponsePhrase", "OK"); 
}

//context.setVariable("response.content", context.getVariable("orderStatus"));
context.setVariable("orderStatusAPGFlag", context.getVariable("orderStatusAPGFlag")); 
subscriptionId = context.getVariable("subscriptions.subscriptionId");
context.setVariable("subscriptionId", subscriptionId);

//errorFlag is oppostie of orderStatusAPGFlag and  can be replaced by  opposite valuee of orderStatusAPGFlag
var errorFlag ="false";
if (!context.getVariable("orderStatus"))
{
context.setVariable("errorFlag", "true");
}
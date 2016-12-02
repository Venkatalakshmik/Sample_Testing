   
var subscriptionId ;
subscriptionId = context.getVariable("subscriptions.subscriptionId");
context.setVariable("subscriptionId", subscriptionId);

var errorFlag ="false";
if(!subscriptionId) 
{
context.setVariable("errorFlag", "true");

}


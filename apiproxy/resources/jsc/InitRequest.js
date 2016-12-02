
var subscriptionId;

var requestContent = context.getVariable("request.content");
subscriptionId = context.getVariable("orders.subscriptionId");
context.setVariable("subscriptionId", subscriptionId); 

context.setVariable("orderStatus", requestContent);
if(!subscriptionId) {
    
context.setVariable("errorFlag", "true");
}
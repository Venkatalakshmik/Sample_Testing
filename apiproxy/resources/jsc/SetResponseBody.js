var requestContent = context.getVariable("orderStatus");
context.setVariable("response.content", context.getVariable("orderStatus"));
 var ptsStatusCode;
 var ptsResponsePhrase;
 var errorFlag = context.getVariable("errorFlag");
if(errorFlag == "true")
{
  context.setVariable("ptsStatusCode","400");
  context.setVariable("ptsResponsePhrase","Invalid subscriptionId");
}else
{
   context.setVariable("ptsStatusCode","200");
  context.setVariable("ptsResponsePhrase","Order status successfully updated.");
}


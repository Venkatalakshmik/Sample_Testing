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
  context.setVariable("ptsResponsePhrase","Record Deleted successfully in Cache.");
}


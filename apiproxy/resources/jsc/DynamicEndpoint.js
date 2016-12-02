 
var env ;
var url;
env = context.getVariable("environment.name");
context.setVariable ("env" ,env);

if (env == "dev1")
{
  context.setVariable ("url" ,"ptdev1.papajohns.com");  
}
else if (env == "dev2")
{
    context.setVariable ("url" ,"papajohns-dev2.apigee.net"); 
}
else if (env == "test1")
{
//    context.setVariable ("url" ,"papajohns-test1.apigee.net");  
    context.setVariable ("url" ,"ptdev1.papajohns.com");  
}

else if (env == "qual")
{
    context.setVariable ("url" ,"12.44.212.77");  
}
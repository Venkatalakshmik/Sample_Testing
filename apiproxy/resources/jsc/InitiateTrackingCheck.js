
var initTrack;
var initTrackFlag;

initTrack = context.getVariable("initiateTracking");
context.setVariable("initTrack", initTrack);


if (!initTrack)
{
context.setVariable("initTrack", "false");

}


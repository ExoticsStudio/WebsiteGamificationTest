gdjs.MenuCode = {};
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDStartObjects4= [];
gdjs.MenuCode.GDCurrentURLObjects1= [];
gdjs.MenuCode.GDCurrentURLObjects2= [];
gdjs.MenuCode.GDCurrentURLObjects3= [];
gdjs.MenuCode.GDCurrentURLObjects4= [];
gdjs.MenuCode.GDGetParamaterObjects1= [];
gdjs.MenuCode.GDGetParamaterObjects2= [];
gdjs.MenuCode.GDGetParamaterObjects3= [];
gdjs.MenuCode.GDGetParamaterObjects4= [];
gdjs.MenuCode.GDGetParamater2Objects1= [];
gdjs.MenuCode.GDGetParamater2Objects2= [];
gdjs.MenuCode.GDGetParamater2Objects3= [];
gdjs.MenuCode.GDGetParamater2Objects4= [];
gdjs.MenuCode.GDExitObjects1= [];
gdjs.MenuCode.GDExitObjects2= [];
gdjs.MenuCode.GDExitObjects3= [];
gdjs.MenuCode.GDExitObjects4= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDBackgroundObjects4= [];
gdjs.MenuCode.GDLOGOObjects1= [];
gdjs.MenuCode.GDLOGOObjects2= [];
gdjs.MenuCode.GDLOGOObjects3= [];
gdjs.MenuCode.GDLOGOObjects4= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.MenuCode.GDStartObjects1});
gdjs.MenuCode.asyncCallback10338924 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1_Office", false);
}}
gdjs.MenuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback10338924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback10339804 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1_Construct", false);
}}
gdjs.MenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback10339804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("RandomScene")) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("RandomScene")) == 1;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.MenuCode.asyncCallback10338028 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects2[i].getBehavior("Tween").addObjectScaleTween("StartBEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MenuCode.GDStartObjects1) asyncObjectsList.addObject("Start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback10338028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.MenuCode.GDStartObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.MenuCode.GDExitObjects1});
gdjs.MenuCode.asyncCallback10342028 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}
gdjs.MenuCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback10342028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback10341796 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Exit"), gdjs.MenuCode.GDExitObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDExitObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDExitObjects2[i].getBehavior("Tween").addObjectScaleTween("ExitBEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}
{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MenuCode.GDExitObjects1) asyncObjectsList.addObject("Exit", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback10341796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("CurrentURL"), gdjs.MenuCode.GDCurrentURLObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDCurrentURLObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCurrentURLObjects1[i].setString("Current URL =  " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("CurrentURL")));
}
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.MenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("CurrentURL").setString(gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getGame().getVariables().get("Param_CustomerID").setString(gdjs.evtsExt__URLTools__URLQueryStringParameter.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("CurrentURL")), "customerID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getGame().getVariables().get("Param_UsernameID").setString(gdjs.evtsExt__URLTools__URLQueryStringParameter.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("CurrentURL")), "username", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getGame().getVariables().get("CustomerID").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Param_CustomerID")));
}{runtimeScene.getGame().getVariables().get("Username").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Param_UsernameID")));
}
{ //Subevents
gdjs.MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.MenuCode.GDExitObjects1});
gdjs.MenuCode.eventsList8 = function(runtimeScene) {

{


{
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MenuCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("LOGO"), gdjs.MenuCode.GDLOGOObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "456797__nikosardas__jazz-music-loop.mp3", true, 80, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDLOGOObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLOGOObjects1[i].getBehavior("Tween").addObjectPositionYTween("LogoTween", 143, "easeInQuad", 300, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects1[i].getBehavior("Tween").addObjectPositionYTween("StartTween", 385, "easeInQuad", 500, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExitObjects1[i].getBehavior("Tween").addObjectPositionYTween("ExitTween", 573, "easeInQuad", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10337332);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDStartObjects1 */
{runtimeScene.getVariables().get("RandomScene").setNumber(gdjs.randomInRange(0, 1));
}{for(var i = 0, len = gdjs.MenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects1[i].getBehavior("Tween").addObjectScaleTween("StartSmall", 0.9, 0.9, "easeInOutQuad", 100, false, true);
}
}
{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects1[i].getBehavior("Tween").addObjectScaleTween("StartBEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MenuCode.GDExitObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10341556);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExitObjects1[i].getBehavior("Tween").addObjectScaleTween("ExitSmall", 0.9, 0.9, "easeInOutQuad", 100, false, true);
}
}
{ //Subevents
gdjs.MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.eventsList7(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MenuCode.GDExitObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExitObjects1[i].getBehavior("Tween").addObjectScaleTween("ExitBEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDStartObjects4.length = 0;
gdjs.MenuCode.GDCurrentURLObjects1.length = 0;
gdjs.MenuCode.GDCurrentURLObjects2.length = 0;
gdjs.MenuCode.GDCurrentURLObjects3.length = 0;
gdjs.MenuCode.GDCurrentURLObjects4.length = 0;
gdjs.MenuCode.GDGetParamaterObjects1.length = 0;
gdjs.MenuCode.GDGetParamaterObjects2.length = 0;
gdjs.MenuCode.GDGetParamaterObjects3.length = 0;
gdjs.MenuCode.GDGetParamaterObjects4.length = 0;
gdjs.MenuCode.GDGetParamater2Objects1.length = 0;
gdjs.MenuCode.GDGetParamater2Objects2.length = 0;
gdjs.MenuCode.GDGetParamater2Objects3.length = 0;
gdjs.MenuCode.GDGetParamater2Objects4.length = 0;
gdjs.MenuCode.GDExitObjects1.length = 0;
gdjs.MenuCode.GDExitObjects2.length = 0;
gdjs.MenuCode.GDExitObjects3.length = 0;
gdjs.MenuCode.GDExitObjects4.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects4.length = 0;
gdjs.MenuCode.GDLOGOObjects1.length = 0;
gdjs.MenuCode.GDLOGOObjects2.length = 0;
gdjs.MenuCode.GDLOGOObjects3.length = 0;
gdjs.MenuCode.GDLOGOObjects4.length = 0;

gdjs.MenuCode.eventsList8(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;

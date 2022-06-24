gdjs.EndCode = {};
gdjs.EndCode.GDBGObjects1= [];
gdjs.EndCode.GDBGObjects2= [];
gdjs.EndCode.GDBGObjects3= [];
gdjs.EndCode.GDScoreObjects1= [];
gdjs.EndCode.GDScoreObjects2= [];
gdjs.EndCode.GDScoreObjects3= [];
gdjs.EndCode.GDHighScoreObjects1= [];
gdjs.EndCode.GDHighScoreObjects2= [];
gdjs.EndCode.GDHighScoreObjects3= [];
gdjs.EndCode.GDMENUObjects1= [];
gdjs.EndCode.GDMENUObjects2= [];
gdjs.EndCode.GDMENUObjects3= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};
gdjs.EndCode.condition3IsTrue_0 = {val:false};
gdjs.EndCode.conditionTrue_1 = {val:false};
gdjs.EndCode.condition0IsTrue_1 = {val:false};
gdjs.EndCode.condition1IsTrue_1 = {val:false};
gdjs.EndCode.condition2IsTrue_1 = {val:false};
gdjs.EndCode.condition3IsTrue_1 = {val:false};


gdjs.EndCode.asyncCallback11158156 = function (runtimeScene, asyncObjectsList) {
}
gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.EndCode.asyncCallback11158156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDMENUObjects1Objects = Hashtable.newFrom({"MENU": gdjs.EndCode.GDMENUObjects1});
gdjs.EndCode.asyncCallback11159460 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("MENU"), gdjs.EndCode.GDMENUObjects2);

{for(var i = 0, len = gdjs.EndCode.GDMENUObjects2.length ;i < len;++i) {
    gdjs.EndCode.GDMENUObjects2[i].getBehavior("Tween").addObjectScaleTween("Menu_Big", 1, 1, "easeInOutQuad", 100, false, true);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}
gdjs.EndCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.EndCode.GDMENUObjects1) asyncObjectsList.addObject("MENU", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.EndCode.asyncCallback11159460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDMENUObjects1Objects = Hashtable.newFrom({"MENU": gdjs.EndCode.GDMENUObjects1});
gdjs.EndCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
{gdjs.EndCode.conditionTrue_1 = gdjs.EndCode.condition0IsTrue_0;
gdjs.EndCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score_loaded")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.EndCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.EndCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.EndCode.GDHighScoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Score_loaded")));
}
}{for(var i = 0, len = gdjs.EndCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.EndCode.GDScoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{



}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
{gdjs.EndCode.conditionTrue_1 = gdjs.EndCode.condition0IsTrue_0;
gdjs.EndCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score_loaded")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.EndCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndCode.GDScoreObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("ScoreDB", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.EndCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDHighScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.EndCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.EndCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("ScoreDB", "HighScore"));
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.EndCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndCode.GDScoreObjects2);
{gdjs.evtTools.storage.writeNumberInJSONFile("ScoreDB", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.EndCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.EndCode.GDHighScoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.EndCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.EndCode.GDScoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{



}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("ScoreDB", "HighScore");
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("ScoreDB", "HighScore", runtimeScene, runtimeScene.getVariables().get("Score_loaded"));
}
{ //Subevents
gdjs.EndCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDMENUObjects1Objects = Hashtable.newFrom({"MENU": gdjs.EndCode.GDMENUObjects1});
gdjs.EndCode.eventsList4 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
{gdjs.EndCode.conditionTrue_1 = gdjs.EndCode.condition0IsTrue_0;
gdjs.EndCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score_loaded")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("https://localhost:44312/api/Gamification2022/Gamification/UpdateSpaceDefender", "{ \"username\": + \"TestSpaceDefender\",\n   \"score\": " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)) + ",\n   \"Highscore\": " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getVariables().get("Score_loaded")) + " \n }", "POST", "application/json", runtimeScene.getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}}

}


};gdjs.EndCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MENU"), gdjs.EndCode.GDMENUObjects1);

gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
gdjs.EndCode.condition2IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDMENUObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.EndCode.condition1IsTrue_0.val ) {
{
{gdjs.EndCode.conditionTrue_1 = gdjs.EndCode.condition2IsTrue_0;
gdjs.EndCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11169676);
}
}}
}
if (gdjs.EndCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.EndCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.EndCode.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.EndCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.EndCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDScoreObjects1[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - (gdjs.EndCode.GDScoreObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.EndCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDHighScoreObjects1[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - (gdjs.EndCode.GDHighScoreObjects1[i].getWidth()) / 2);
}
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EndCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MENU"), gdjs.EndCode.GDMENUObjects1);

gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
gdjs.EndCode.condition2IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDMENUObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.EndCode.condition1IsTrue_0.val ) {
{
{gdjs.EndCode.conditionTrue_1 = gdjs.EndCode.condition2IsTrue_0;
gdjs.EndCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11159220);
}
}}
}
if (gdjs.EndCode.condition2IsTrue_0.val) {
/* Reuse gdjs.EndCode.GDMENUObjects1 */
{for(var i = 0, len = gdjs.EndCode.GDMENUObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDMENUObjects1[i].getBehavior("Tween").addObjectScaleTween("Menu_Small", 0.8, 0.8, "easeInOutQuad", 100, false, true);
}
}
{ //Subevents
gdjs.EndCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MENU"), gdjs.EndCode.GDMENUObjects1);

gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDMENUObjects1Objects, runtimeScene, true, true);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
{gdjs.EndCode.conditionTrue_1 = gdjs.EndCode.condition1IsTrue_0;
gdjs.EndCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11159692);
}
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndCode.GDMENUObjects1 */
{for(var i = 0, len = gdjs.EndCode.GDMENUObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDMENUObjects1[i].getBehavior("Tween").addObjectScaleTween("Menu_Big", 1, 1, "easeInOutQuad", 100, false, true);
}
}}

}


{


gdjs.EndCode.eventsList3(runtimeScene);
}


{



}


{


gdjs.EndCode.eventsList5(runtimeScene);
}


{



}


{


{
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDBGObjects1.length = 0;
gdjs.EndCode.GDBGObjects2.length = 0;
gdjs.EndCode.GDBGObjects3.length = 0;
gdjs.EndCode.GDScoreObjects1.length = 0;
gdjs.EndCode.GDScoreObjects2.length = 0;
gdjs.EndCode.GDScoreObjects3.length = 0;
gdjs.EndCode.GDHighScoreObjects1.length = 0;
gdjs.EndCode.GDHighScoreObjects2.length = 0;
gdjs.EndCode.GDHighScoreObjects3.length = 0;
gdjs.EndCode.GDMENUObjects1.length = 0;
gdjs.EndCode.GDMENUObjects2.length = 0;
gdjs.EndCode.GDMENUObjects3.length = 0;

gdjs.EndCode.eventsList6(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;

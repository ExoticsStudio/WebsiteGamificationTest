gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDPauseResumeButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDPauseResumeButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDPauseResumeButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDPauseResumeButtonObjects4= [];
gdjs.Untitled_32sceneCode.GDPauseBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDPauseBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDPauseBackgroundObjects3= [];
gdjs.Untitled_32sceneCode.GDPauseBackgroundObjects4= [];
gdjs.Untitled_32sceneCode.GDHomeButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDHomeButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDHomeButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDHomeButtonObjects4= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDObstacleObjects1= [];
gdjs.Untitled_32sceneCode.GDObstacleObjects2= [];
gdjs.Untitled_32sceneCode.GDObstacleObjects3= [];
gdjs.Untitled_32sceneCode.GDObstacleObjects4= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects1= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects2= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects3= [];
gdjs.Untitled_32sceneCode.GDTutorialTextObjects4= [];
gdjs.Untitled_32sceneCode.GDGamePausedText2Objects1= [];
gdjs.Untitled_32sceneCode.GDGamePausedText2Objects2= [];
gdjs.Untitled_32sceneCode.GDGamePausedText2Objects3= [];
gdjs.Untitled_32sceneCode.GDGamePausedText2Objects4= [];
gdjs.Untitled_32sceneCode.GDStageClearedTxtObjects1= [];
gdjs.Untitled_32sceneCode.GDStageClearedTxtObjects2= [];
gdjs.Untitled_32sceneCode.GDStageClearedTxtObjects3= [];
gdjs.Untitled_32sceneCode.GDStageClearedTxtObjects4= [];
gdjs.Untitled_32sceneCode.GDStageClearedNumObjects1= [];
gdjs.Untitled_32sceneCode.GDStageClearedNumObjects2= [];
gdjs.Untitled_32sceneCode.GDStageClearedNumObjects3= [];
gdjs.Untitled_32sceneCode.GDStageClearedNumObjects4= [];
gdjs.Untitled_32sceneCode.GDHighStageClearedTxtObjects1= [];
gdjs.Untitled_32sceneCode.GDHighStageClearedTxtObjects2= [];
gdjs.Untitled_32sceneCode.GDHighStageClearedTxtObjects3= [];
gdjs.Untitled_32sceneCode.GDHighStageClearedTxtObjects4= [];
gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects1= [];
gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects2= [];
gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects3= [];
gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects4= [];
gdjs.Untitled_32sceneCode.GDGameoverObjects1= [];
gdjs.Untitled_32sceneCode.GDGameoverObjects2= [];
gdjs.Untitled_32sceneCode.GDGameoverObjects3= [];
gdjs.Untitled_32sceneCode.GDGameoverObjects4= [];
gdjs.Untitled_32sceneCode.GDNewBBTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewBBTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewBBTextObjects3= [];
gdjs.Untitled_32sceneCode.GDNewBBTextObjects4= [];
gdjs.Untitled_32sceneCode.GDNewBBText2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewBBText2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewBBText2Objects3= [];
gdjs.Untitled_32sceneCode.GDNewBBText2Objects4= [];
gdjs.Untitled_32sceneCode.GDNewHighScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDNewHighScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDNewHighScoreObjects3= [];
gdjs.Untitled_32sceneCode.GDNewHighScoreObjects4= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewHighScore"), gdjs.Untitled_32sceneCode.GDNewHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("StageClearedNum"), gdjs.Untitled_32sceneCode.GDStageClearedNumObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewHighScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewHighScoreObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDStageClearedNumObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDStageClearedNumObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHomeButtonObjects3Objects = Hashtable.newFrom({"HomeButton": gdjs.Untitled_32sceneCode.GDHomeButtonObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHomeButtonObjects3Objects = Hashtable.newFrom({"HomeButton": gdjs.Untitled_32sceneCode.GDHomeButtonObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHomeButtonObjects2Objects = Hashtable.newFrom({"HomeButton": gdjs.Untitled_32sceneCode.GDHomeButtonObjects2});
gdjs.Untitled_32sceneCode.asyncCallback13203332 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback13203332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.Untitled_32sceneCode.GDHomeButtonObjects3);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHomeButtonObjects3Objects, runtimeScene, true, false);
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDHomeButtonObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHomeButtonObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHomeButtonObjects3[i].getBehavior("Tween").addObjectScaleTween("Down", 0.11, 0.11, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.Untitled_32sceneCode.GDHomeButtonObjects3);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHomeButtonObjects3Objects, runtimeScene, true, true);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDHomeButtonObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHomeButtonObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHomeButtonObjects3[i].getBehavior("Tween").addObjectScaleTween("Up", 0.13, 0.13, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.Untitled_32sceneCode.GDHomeButtonObjects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHomeButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDHomeButtonObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHomeButtonObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHomeButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Down", 0.11, 0.11, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHomeButtonObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHomeButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Up", 0.13, 0.13, "linear", 100, false, true);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


{
}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("LoadedScore")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighStageClearedNum"), gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects3[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("LoadedScore"))));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("LoadedScore")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighStageClearedNum"), gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewHighScore"), gdjs.Untitled_32sceneCode.GDNewHighScoreObjects2);
{gdjs.evtTools.storage.writeNumberInJSONFile("ScoreDBParkir", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects2[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewHighScoreObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewHighScoreObjects2[i].hide(false);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("ScoreDBParkir", "HighScore"));
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighStageClearedNum"), gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects3);
gdjs.copyArray(runtimeScene.getObjects("NewHighScore"), gdjs.Untitled_32sceneCode.GDNewHighScoreObjects3);
{gdjs.evtTools.storage.writeNumberInJSONFile("ScoreDBParkir", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects3[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewHighScoreObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewHighScoreObjects3[i].hide(false);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("ScoreDBParkir", "HighScore");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Untitled_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition2IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13206828);
}
}}
}
if (gdjs.Untitled_32sceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("ScoreDBParkir", "HighScore", runtimeScene, runtimeScene.getVariables().get("LoadedScore"));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13213116);
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("https://localhost:44312/api/Gamification2022/Gamification/UpdateKangParkir", "{ \"username\": " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().get("Username")) + ",\n   \"score\": " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(3)) + ",\n   \"Highscore\": " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getVariables().get("LoadedScore")) + " \n }", "POST", "application/json", runtimeScene.getVariables().get("Return_Temp"), gdjs.VariablesContainer.badVariable);
}}

}


};gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{



}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition2IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Untitled_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition2IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13210500);
}
}}
}
if (gdjs.Untitled_32sceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("https://localhost:44312/api/Gamification2022/Gamification/UpdateKangParkir", "{ \"username\": " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().get("Username")) + ",\n   \"score\": " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(3)) + ",\n   \"Highscore\": " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getVariables().get("LoadedScore")) + " \n }", "POST", "application/json", runtimeScene.getVariables().get("Return_Temp"), gdjs.VariablesContainer.badVariable);
}}

}


{



}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("https://localhost:44312/api/Gamification2022/Gamification/GetKangParkir", "{ \n\"username\": " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().get("Username")) + "\n  \n }", "POST", "application/json", runtimeScene.getVariables().get("Return_Get"), gdjs.VariablesContainer.badVariable);
}}

}


{


{
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Return_Get")), runtimeScene.getGame().getVariables().get("DataConvertedtoGlobal"));
}{runtimeScene.getGame().getVariables().get("ScoreLoadedfromDatabaseSQL").setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("DataConvertedtoGlobal").getChild("data").getChild("highscore")))));
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ScoreLoadedfromDatabaseSQL")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighStageClearedNum"), gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects2);
gdjs.copyArray(runtimeScene.getObjects("StageClearedNum"), gdjs.Untitled_32sceneCode.GDStageClearedNumObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects2[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ScoreLoadedfromDatabaseSQL"))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDStageClearedNumObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDStageClearedNumObjects2[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ScoreLoadedfromDatabaseSQL")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighStageClearedNum"), gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects1);
gdjs.copyArray(runtimeScene.getObjects("StageClearedNum"), gdjs.Untitled_32sceneCode.GDStageClearedNumObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDStageClearedNumObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDStageClearedNumObjects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);
}


};gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Untitled_32sceneCode.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].setYOffset(gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getYOffset() + (1));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDObstacleObjects1[i].setXOffset(gdjs.Untitled_32sceneCode.GDObstacleObjects1[i].getXOffset() - (1));
}
}}

}


{


{
}

}


{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPauseResumeButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPauseResumeButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPauseResumeButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPauseResumeButtonObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPauseBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPauseBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPauseBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPauseBackgroundObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDObstacleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDObstacleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDObstacleObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDObstacleObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTutorialTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDGamePausedText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGamePausedText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGamePausedText2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDGamePausedText2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDStageClearedTxtObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStageClearedTxtObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStageClearedTxtObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDStageClearedTxtObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDStageClearedNumObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStageClearedNumObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStageClearedNumObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDStageClearedNumObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDHighStageClearedTxtObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHighStageClearedTxtObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHighStageClearedTxtObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHighStageClearedTxtObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHighStageClearedNumObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDGameoverObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameoverObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameoverObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGameoverObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBText2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewBBText2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewHighScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewHighScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewHighScoreObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewHighScoreObjects4.length = 0;

gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;

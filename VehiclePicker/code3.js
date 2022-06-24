gdjs.EndGameCode = {};
gdjs.EndGameCode.GDBillObjects1= [];
gdjs.EndGameCode.GDBillObjects2= [];
gdjs.EndGameCode.GDBillObjects3= [];
gdjs.EndGameCode.GDBackgroundObjects1= [];
gdjs.EndGameCode.GDBackgroundObjects2= [];
gdjs.EndGameCode.GDBackgroundObjects3= [];
gdjs.EndGameCode.GDMenuObjects1= [];
gdjs.EndGameCode.GDMenuObjects2= [];
gdjs.EndGameCode.GDMenuObjects3= [];
gdjs.EndGameCode.GDHighscoreObjects1= [];
gdjs.EndGameCode.GDHighscoreObjects2= [];
gdjs.EndGameCode.GDHighscoreObjects3= [];
gdjs.EndGameCode.GDScoreObjects1= [];
gdjs.EndGameCode.GDScoreObjects2= [];
gdjs.EndGameCode.GDScoreObjects3= [];

gdjs.EndGameCode.conditionTrue_0 = {val:false};
gdjs.EndGameCode.condition0IsTrue_0 = {val:false};
gdjs.EndGameCode.condition1IsTrue_0 = {val:false};
gdjs.EndGameCode.condition2IsTrue_0 = {val:false};
gdjs.EndGameCode.condition3IsTrue_0 = {val:false};
gdjs.EndGameCode.conditionTrue_1 = {val:false};
gdjs.EndGameCode.condition0IsTrue_1 = {val:false};
gdjs.EndGameCode.condition1IsTrue_1 = {val:false};
gdjs.EndGameCode.condition2IsTrue_1 = {val:false};
gdjs.EndGameCode.condition3IsTrue_1 = {val:false};


gdjs.EndGameCode.mapOfGDgdjs_46EndGameCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.EndGameCode.GDMenuObjects1});
gdjs.EndGameCode.asyncCallback10807988 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Menu"), gdjs.EndGameCode.GDMenuObjects2);

{for(var i = 0, len = gdjs.EndGameCode.GDMenuObjects2.length ;i < len;++i) {
    gdjs.EndGameCode.GDMenuObjects2[i].getBehavior("Tween").addObjectScaleTween("BEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}
gdjs.EndGameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.EndGameCode.GDMenuObjects1) asyncObjectsList.addObject("Menu", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.EndGameCode.asyncCallback10807988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndGameCode.mapOfGDgdjs_46EndGameCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.EndGameCode.GDMenuObjects1});
gdjs.EndGameCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.EndGameCode.condition0IsTrue_0.val = false;
{
{gdjs.EndGameCode.conditionTrue_1 = gdjs.EndGameCode.condition0IsTrue_0;
gdjs.EndGameCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Poin_loaded")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Poin")));
}
}if (gdjs.EndGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Highscore"), gdjs.EndGameCode.GDHighscoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndGameCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.EndGameCode.GDHighscoreObjects2.length ;i < len;++i) {
    gdjs.EndGameCode.GDHighscoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Poin_loaded")));
}
}{for(var i = 0, len = gdjs.EndGameCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.EndGameCode.GDScoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Poin")));
}
}}

}


{



}


{


gdjs.EndGameCode.condition0IsTrue_0.val = false;
{
{gdjs.EndGameCode.conditionTrue_1 = gdjs.EndGameCode.condition0IsTrue_0;
gdjs.EndGameCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Poin_loaded")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Poin")));
}
}if (gdjs.EndGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Highscore"), gdjs.EndGameCode.GDHighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndGameCode.GDScoreObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("ScoreDB", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}{for(var i = 0, len = gdjs.EndGameCode.GDHighscoreObjects1.length ;i < len;++i) {
    gdjs.EndGameCode.GDHighscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Poin")));
}
}{for(var i = 0, len = gdjs.EndGameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.EndGameCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Poin")));
}
}}

}


};gdjs.EndGameCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.EndGameCode.condition0IsTrue_0.val = false;
gdjs.EndGameCode.condition1IsTrue_0.val = false;
{
gdjs.EndGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.EndGameCode.condition0IsTrue_0.val ) {
{
gdjs.EndGameCode.condition1IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("ScoreDB", "HighScore"));
}}
if (gdjs.EndGameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Highscore"), gdjs.EndGameCode.GDHighscoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndGameCode.GDScoreObjects2);
{gdjs.evtTools.storage.writeNumberInJSONFile("ScoreDB", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Poin")));
}{for(var i = 0, len = gdjs.EndGameCode.GDHighscoreObjects2.length ;i < len;++i) {
    gdjs.EndGameCode.GDHighscoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Poin")));
}
}{for(var i = 0, len = gdjs.EndGameCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.EndGameCode.GDScoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Poin")));
}
}}

}


{



}


{


gdjs.EndGameCode.condition0IsTrue_0.val = false;
gdjs.EndGameCode.condition1IsTrue_0.val = false;
{
gdjs.EndGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.EndGameCode.condition0IsTrue_0.val ) {
{
gdjs.EndGameCode.condition1IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("ScoreDB", "HighScore");
}}
if (gdjs.EndGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("ScoreDB", "HighScore", runtimeScene, runtimeScene.getVariables().get("Poin_loaded"));
}
{ //Subevents
gdjs.EndGameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.EndGameCode.eventsList3 = function(runtimeScene) {

{


gdjs.EndGameCode.condition0IsTrue_0.val = false;
{
gdjs.EndGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "456797__nikosardas__jazz-music-loop.mp3", true, 80, 1);
}}

}


{


gdjs.EndGameCode.condition0IsTrue_0.val = false;
{
gdjs.EndGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bill"), gdjs.EndGameCode.GDBillObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.EndGameCode.GDMenuObjects1);
{for(var i = 0, len = gdjs.EndGameCode.GDBillObjects1.length ;i < len;++i) {
    gdjs.EndGameCode.GDBillObjects1[i].getBehavior("Tween").addObjectPositionYTween("BillTween", 64, "easeInQuad", 200, false);
}
}{for(var i = 0, len = gdjs.EndGameCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.EndGameCode.GDMenuObjects1[i].getBehavior("Tween").addObjectPositionYTween("MenuTween", 700, "easeInQuad", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.EndGameCode.GDMenuObjects1);

gdjs.EndGameCode.condition0IsTrue_0.val = false;
gdjs.EndGameCode.condition1IsTrue_0.val = false;
gdjs.EndGameCode.condition2IsTrue_0.val = false;
{
gdjs.EndGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndGameCode.mapOfGDgdjs_46EndGameCode_46GDMenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EndGameCode.condition0IsTrue_0.val ) {
{
gdjs.EndGameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.EndGameCode.condition1IsTrue_0.val ) {
{
{gdjs.EndGameCode.conditionTrue_1 = gdjs.EndGameCode.condition2IsTrue_0;
gdjs.EndGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10807348);
}
}}
}
if (gdjs.EndGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.EndGameCode.GDMenuObjects1 */
{for(var i = 0, len = gdjs.EndGameCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.EndGameCode.GDMenuObjects1[i].getBehavior("Tween").addObjectScaleTween("Small", 0.9, 0.9, "easeInOutQuad", 100, false, true);
}
}
{ //Subevents
gdjs.EndGameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.EndGameCode.GDMenuObjects1);

gdjs.EndGameCode.condition0IsTrue_0.val = false;
{
gdjs.EndGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndGameCode.mapOfGDgdjs_46EndGameCode_46GDMenuObjects1Objects, runtimeScene, true, true);
}if (gdjs.EndGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EndGameCode.GDMenuObjects1 */
{for(var i = 0, len = gdjs.EndGameCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.EndGameCode.GDMenuObjects1[i].getBehavior("Tween").addObjectScaleTween("BEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}}

}


{


gdjs.EndGameCode.eventsList2(runtimeScene);
}


{


{
}

}


};

gdjs.EndGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndGameCode.GDBillObjects1.length = 0;
gdjs.EndGameCode.GDBillObjects2.length = 0;
gdjs.EndGameCode.GDBillObjects3.length = 0;
gdjs.EndGameCode.GDBackgroundObjects1.length = 0;
gdjs.EndGameCode.GDBackgroundObjects2.length = 0;
gdjs.EndGameCode.GDBackgroundObjects3.length = 0;
gdjs.EndGameCode.GDMenuObjects1.length = 0;
gdjs.EndGameCode.GDMenuObjects2.length = 0;
gdjs.EndGameCode.GDMenuObjects3.length = 0;
gdjs.EndGameCode.GDHighscoreObjects1.length = 0;
gdjs.EndGameCode.GDHighscoreObjects2.length = 0;
gdjs.EndGameCode.GDHighscoreObjects3.length = 0;
gdjs.EndGameCode.GDScoreObjects1.length = 0;
gdjs.EndGameCode.GDScoreObjects2.length = 0;
gdjs.EndGameCode.GDScoreObjects3.length = 0;

gdjs.EndGameCode.eventsList3(runtimeScene);
return;

}

gdjs['EndGameCode'] = gdjs.EndGameCode;

gdjs.GameOverCode = {};
gdjs.GameOverCode.GDTitleObjects1= [];
gdjs.GameOverCode.GDTitleObjects2= [];
gdjs.GameOverCode.GDTitleObjects3= [];
gdjs.GameOverCode.GDBGObjects1= [];
gdjs.GameOverCode.GDBGObjects2= [];
gdjs.GameOverCode.GDBGObjects3= [];
gdjs.GameOverCode.GDPlayer_95HitboxObjects1= [];
gdjs.GameOverCode.GDPlayer_95HitboxObjects2= [];
gdjs.GameOverCode.GDPlayer_95HitboxObjects3= [];
gdjs.GameOverCode.GDTween_95CurtainObjects1= [];
gdjs.GameOverCode.GDTween_95CurtainObjects2= [];
gdjs.GameOverCode.GDTween_95CurtainObjects3= [];
gdjs.GameOverCode.GDScore_95TextObjects1= [];
gdjs.GameOverCode.GDScore_95TextObjects2= [];
gdjs.GameOverCode.GDScore_95TextObjects3= [];
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];
gdjs.GameOverCode.GDScoreObjects3= [];
gdjs.GameOverCode.GDRetryObjects1= [];
gdjs.GameOverCode.GDRetryObjects2= [];
gdjs.GameOverCode.GDRetryObjects3= [];
gdjs.GameOverCode.GDHighscore_95TextObjects1= [];
gdjs.GameOverCode.GDHighscore_95TextObjects2= [];
gdjs.GameOverCode.GDHighscore_95TextObjects3= [];
gdjs.GameOverCode.GDHighscoreObjects1= [];
gdjs.GameOverCode.GDHighscoreObjects2= [];
gdjs.GameOverCode.GDHighscoreObjects3= [];
gdjs.GameOverCode.GDNewHsObjects1= [];
gdjs.GameOverCode.GDNewHsObjects2= [];
gdjs.GameOverCode.GDNewHsObjects3= [];
gdjs.GameOverCode.GDNewTiledSpriteObjects1= [];
gdjs.GameOverCode.GDNewTiledSpriteObjects2= [];
gdjs.GameOverCode.GDNewTiledSpriteObjects3= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.condition3IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};
gdjs.GameOverCode.condition3IsTrue_1 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.GameOverCode.GDRetryObjects1});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.GameOverCode.GDRetryObjects1});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.GameOverCode.GDRetryObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score_loaded")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Highscore"), gdjs.GameOverCode.GDHighscoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameOverCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDHighscoreObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDHighscoreObjects2[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Score_loaded")));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects2[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score_loaded")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Highscore"), gdjs.GameOverCode.GDHighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameOverCode.GDScoreObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("ScoreDB", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDHighscoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHighscoreObjects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{



}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.GameOverCode.GDBGObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDBGObjects1[i].setYOffset(gdjs.GameOverCode.GDBGObjects1[i].getYOffset() - (2));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.GameOverCode.GDRetryObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDRetryObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDRetryObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRetryObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.GameOverCode.GDRetryObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDRetryObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDRetryObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRetryObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.GameOverCode.GDRetryObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10882364);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDRetryObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Tween_Curtain"), gdjs.GameOverCode.GDTween_95CurtainObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "retro click sound effect (non copyright) (mp3cut.net).mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(-(100));
}{for(var i = 0, len = gdjs.GameOverCode.GDTween_95CurtainObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTween_95CurtainObjects1[i].resetTimer("cd");
}
}{for(var i = 0, len = gdjs.GameOverCode.GDTween_95CurtainObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTween_95CurtainObjects1[i].getBehavior("Tween").addObjectPositionYTween("Animation", 0, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDRetryObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRetryObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tween_Curtain"), gdjs.GameOverCode.GDTween_95CurtainObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDTween_95CurtainObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDTween_95CurtainObjects1[i].getTimerElapsedTimeInSecondsOrNaN("cd") > 2 ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDTween_95CurtainObjects1[k] = gdjs.GameOverCode.GDTween_95CurtainObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDTween_95CurtainObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loading", false);
}}

}


{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewHs"), gdjs.GameOverCode.GDNewHsObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDNewHsObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDNewHsObjects1[i].hide();
}
}}

}


{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("ScoreDB", "HighScore"));
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10886940);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Highscore"), gdjs.GameOverCode.GDHighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameOverCode.GDScoreObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("ScoreDB", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDHighscoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHighscoreObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))));
}
}}

}


{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("ScoreDB", "HighScore");
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10889460);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("ScoreDB", "HighScore", runtimeScene, runtimeScene.getVariables().get("Score_loaded"));
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if( gdjs.GameOverCode.condition0IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5));
if( gdjs.GameOverCode.condition1IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score_loaded")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewHs"), gdjs.GameOverCode.GDNewHsObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.GameOverCode.GDNewHsObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDNewHsObjects1[i].hide(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.GameOverCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Highscore"), gdjs.GameOverCode.GDHighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Highscore_Text"), gdjs.GameOverCode.GDHighscore_95TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameOverCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score_Text"), gdjs.GameOverCode.GDScore_95TextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setX((( gdjs.GameOverCode.GDBGObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDBGObjects1[0].getWidth()) / 2 - (gdjs.GameOverCode.GDScoreObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDHighscoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHighscoreObjects1[i].setX((( gdjs.GameOverCode.GDBGObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDBGObjects1[0].getWidth()) / 2 - (gdjs.GameOverCode.GDHighscoreObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDScore_95TextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScore_95TextObjects1[i].setX((( gdjs.GameOverCode.GDBGObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDBGObjects1[0].getWidth()) / 2 - (gdjs.GameOverCode.GDScore_95TextObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDHighscore_95TextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHighscore_95TextObjects1[i].setX((( gdjs.GameOverCode.GDBGObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDBGObjects1[0].getWidth()) / 2 - (gdjs.GameOverCode.GDHighscore_95TextObjects1[i].getWidth()) / 2);
}
}}

}


{


gdjs.GameOverCode.eventsList1(runtimeScene);
}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDTitleObjects1.length = 0;
gdjs.GameOverCode.GDTitleObjects2.length = 0;
gdjs.GameOverCode.GDTitleObjects3.length = 0;
gdjs.GameOverCode.GDBGObjects1.length = 0;
gdjs.GameOverCode.GDBGObjects2.length = 0;
gdjs.GameOverCode.GDBGObjects3.length = 0;
gdjs.GameOverCode.GDPlayer_95HitboxObjects1.length = 0;
gdjs.GameOverCode.GDPlayer_95HitboxObjects2.length = 0;
gdjs.GameOverCode.GDPlayer_95HitboxObjects3.length = 0;
gdjs.GameOverCode.GDTween_95CurtainObjects1.length = 0;
gdjs.GameOverCode.GDTween_95CurtainObjects2.length = 0;
gdjs.GameOverCode.GDTween_95CurtainObjects3.length = 0;
gdjs.GameOverCode.GDScore_95TextObjects1.length = 0;
gdjs.GameOverCode.GDScore_95TextObjects2.length = 0;
gdjs.GameOverCode.GDScore_95TextObjects3.length = 0;
gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;
gdjs.GameOverCode.GDScoreObjects3.length = 0;
gdjs.GameOverCode.GDRetryObjects1.length = 0;
gdjs.GameOverCode.GDRetryObjects2.length = 0;
gdjs.GameOverCode.GDRetryObjects3.length = 0;
gdjs.GameOverCode.GDHighscore_95TextObjects1.length = 0;
gdjs.GameOverCode.GDHighscore_95TextObjects2.length = 0;
gdjs.GameOverCode.GDHighscore_95TextObjects3.length = 0;
gdjs.GameOverCode.GDHighscoreObjects1.length = 0;
gdjs.GameOverCode.GDHighscoreObjects2.length = 0;
gdjs.GameOverCode.GDHighscoreObjects3.length = 0;
gdjs.GameOverCode.GDNewHsObjects1.length = 0;
gdjs.GameOverCode.GDNewHsObjects2.length = 0;
gdjs.GameOverCode.GDNewHsObjects3.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameOverCode.GDNewTiledSpriteObjects3.length = 0;

gdjs.GameOverCode.eventsList2(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;

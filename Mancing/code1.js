gdjs.GameoverCode = {};
gdjs.GameoverCode.GDRestartObjects1= [];
gdjs.GameoverCode.GDRestartObjects2= [];
gdjs.GameoverCode.GDRestartObjects3= [];
gdjs.GameoverCode.GDBackgroundObjects1= [];
gdjs.GameoverCode.GDBackgroundObjects2= [];
gdjs.GameoverCode.GDBackgroundObjects3= [];
gdjs.GameoverCode.GDTimerLogoObjects1= [];
gdjs.GameoverCode.GDTimerLogoObjects2= [];
gdjs.GameoverCode.GDTimerLogoObjects3= [];
gdjs.GameoverCode.GDTimerTextObjects1= [];
gdjs.GameoverCode.GDTimerTextObjects2= [];
gdjs.GameoverCode.GDTimerTextObjects3= [];
gdjs.GameoverCode.GDTimerScoreObjects1= [];
gdjs.GameoverCode.GDTimerScoreObjects2= [];
gdjs.GameoverCode.GDTimerScoreObjects3= [];
gdjs.GameoverCode.GDRockLogoObjects1= [];
gdjs.GameoverCode.GDRockLogoObjects2= [];
gdjs.GameoverCode.GDRockLogoObjects3= [];
gdjs.GameoverCode.GDRockTextObjects1= [];
gdjs.GameoverCode.GDRockTextObjects2= [];
gdjs.GameoverCode.GDRockTextObjects3= [];
gdjs.GameoverCode.GDRockScoreObjects1= [];
gdjs.GameoverCode.GDRockScoreObjects2= [];
gdjs.GameoverCode.GDRockScoreObjects3= [];
gdjs.GameoverCode.GDBottleLogoObjects1= [];
gdjs.GameoverCode.GDBottleLogoObjects2= [];
gdjs.GameoverCode.GDBottleLogoObjects3= [];
gdjs.GameoverCode.GDBottleTextObjects1= [];
gdjs.GameoverCode.GDBottleTextObjects2= [];
gdjs.GameoverCode.GDBottleTextObjects3= [];
gdjs.GameoverCode.GDBottleScoreObjects1= [];
gdjs.GameoverCode.GDBottleScoreObjects2= [];
gdjs.GameoverCode.GDBottleScoreObjects3= [];
gdjs.GameoverCode.GDFishLogoObjects1= [];
gdjs.GameoverCode.GDFishLogoObjects2= [];
gdjs.GameoverCode.GDFishLogoObjects3= [];
gdjs.GameoverCode.GDFishTextObjects1= [];
gdjs.GameoverCode.GDFishTextObjects2= [];
gdjs.GameoverCode.GDFishTextObjects3= [];
gdjs.GameoverCode.GDFishScoreObjects1= [];
gdjs.GameoverCode.GDFishScoreObjects2= [];
gdjs.GameoverCode.GDFishScoreObjects3= [];
gdjs.GameoverCode.GDTotalScoreObjects1= [];
gdjs.GameoverCode.GDTotalScoreObjects2= [];
gdjs.GameoverCode.GDTotalScoreObjects3= [];
gdjs.GameoverCode.GDTandaXObjects1= [];
gdjs.GameoverCode.GDTandaXObjects2= [];
gdjs.GameoverCode.GDTandaXObjects3= [];
gdjs.GameoverCode.GDAngka1Objects1= [];
gdjs.GameoverCode.GDAngka1Objects2= [];
gdjs.GameoverCode.GDAngka1Objects3= [];
gdjs.GameoverCode.GDAngka3Objects1= [];
gdjs.GameoverCode.GDAngka3Objects2= [];
gdjs.GameoverCode.GDAngka3Objects3= [];
gdjs.GameoverCode.GDAngka5Objects1= [];
gdjs.GameoverCode.GDAngka5Objects2= [];
gdjs.GameoverCode.GDAngka5Objects3= [];
gdjs.GameoverCode.GDAngka5NegatifObjects1= [];
gdjs.GameoverCode.GDAngka5NegatifObjects2= [];
gdjs.GameoverCode.GDAngka5NegatifObjects3= [];
gdjs.GameoverCode.GDYourScoreObjects1= [];
gdjs.GameoverCode.GDYourScoreObjects2= [];
gdjs.GameoverCode.GDYourScoreObjects3= [];

gdjs.GameoverCode.conditionTrue_0 = {val:false};
gdjs.GameoverCode.condition0IsTrue_0 = {val:false};
gdjs.GameoverCode.condition1IsTrue_0 = {val:false};
gdjs.GameoverCode.condition2IsTrue_0 = {val:false};


gdjs.GameoverCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BottleScore"), gdjs.GameoverCode.GDBottleScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottleText"), gdjs.GameoverCode.GDBottleTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("FishScore"), gdjs.GameoverCode.GDFishScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("FishText"), gdjs.GameoverCode.GDFishTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RockScore"), gdjs.GameoverCode.GDRockScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("RockText"), gdjs.GameoverCode.GDRockTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimerScore"), gdjs.GameoverCode.GDTimerScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.GameoverCode.GDTimerTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TotalScore"), gdjs.GameoverCode.GDTotalScoreObjects1);
{runtimeScene.getVariables().get("TimeScore").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameoverCode.GDTimerTextObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameoverCode.GDTimerTextObjects1[0].getVariables()).getFromIndex(0))));
}{for(var i = 0, len = gdjs.GameoverCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDTimerTextObjects1[i].setBBText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameoverCode.GDTimerTextObjects1[i].getVariables().getFromIndex(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDTimerScoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDTimerScoreObjects1[i].setBBText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("TimeScore")))));
}
}{runtimeScene.getVariables().get("RockScore").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameoverCode.GDRockTextObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameoverCode.GDRockTextObjects1[0].getVariables()).getFromIndex(0))) * 3);
}{for(var i = 0, len = gdjs.GameoverCode.GDRockTextObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDRockTextObjects1[i].setBBText(gdjs.evtTools.common.toString(Math.floor((gdjs.RuntimeObject.getVariableNumber(gdjs.GameoverCode.GDRockTextObjects1[i].getVariables().getFromIndex(0))))));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDRockScoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDRockScoreObjects1[i].setBBText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("RockScore")))));
}
}{runtimeScene.getVariables().get("BottleScore").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameoverCode.GDBottleTextObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameoverCode.GDBottleTextObjects1[0].getVariables()).getFromIndex(0))) * 5);
}{for(var i = 0, len = gdjs.GameoverCode.GDBottleTextObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDBottleTextObjects1[i].setBBText(gdjs.evtTools.common.toString(Math.floor((gdjs.RuntimeObject.getVariableNumber(gdjs.GameoverCode.GDBottleTextObjects1[i].getVariables().getFromIndex(0))))));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDBottleScoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDBottleScoreObjects1[i].setBBText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("BottleScore")))));
}
}{runtimeScene.getVariables().get("FishScore").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameoverCode.GDFishTextObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameoverCode.GDFishTextObjects1[0].getVariables()).getFromIndex(0))) * -(5));
}{for(var i = 0, len = gdjs.GameoverCode.GDFishTextObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDFishTextObjects1[i].setBBText(gdjs.evtTools.common.toString(Math.floor((gdjs.RuntimeObject.getVariableNumber(gdjs.GameoverCode.GDFishTextObjects1[i].getVariables().getFromIndex(0))))));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDFishScoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDFishScoreObjects1[i].setBBText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FishScore")))));
}
}{runtimeScene.getVariables().get("FishScore").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("TimeScore")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("RockScore")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("BottleScore")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FishScore")));
}{for(var i = 0, len = gdjs.GameoverCode.GDTotalScoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDTotalScoreObjects1[i].setBBText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FishScore")))));
}
}}

}


};gdjs.GameoverCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Angka1"), gdjs.GameoverCode.GDAngka1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Angka3"), gdjs.GameoverCode.GDAngka3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Angka5"), gdjs.GameoverCode.GDAngka5Objects2);
gdjs.copyArray(runtimeScene.getObjects("Angka5Negatif"), gdjs.GameoverCode.GDAngka5NegatifObjects2);
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.GameoverCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottleLogo"), gdjs.GameoverCode.GDBottleLogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottleScore"), gdjs.GameoverCode.GDBottleScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottleText"), gdjs.GameoverCode.GDBottleTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("FishLogo"), gdjs.GameoverCode.GDFishLogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("FishScore"), gdjs.GameoverCode.GDFishScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("FishText"), gdjs.GameoverCode.GDFishTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("RockLogo"), gdjs.GameoverCode.GDRockLogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("RockScore"), gdjs.GameoverCode.GDRockScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("RockText"), gdjs.GameoverCode.GDRockTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimerLogo"), gdjs.GameoverCode.GDTimerLogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimerScore"), gdjs.GameoverCode.GDTimerScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.GameoverCode.GDTimerTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("TotalScore"), gdjs.GameoverCode.GDTotalScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("YourScore"), gdjs.GameoverCode.GDYourScoreObjects2);
{for(var i = 0, len = gdjs.GameoverCode.GDYourScoreObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDYourScoreObjects2[i].setX((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) / 2 - (gdjs.GameoverCode.GDYourScoreObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDTotalScoreObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDTotalScoreObjects2[i].setX((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) / 2 - (gdjs.GameoverCode.GDTotalScoreObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDAngka1Objects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDAngka1Objects2[i].setPosition((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) / 2 - (gdjs.GameoverCode.GDAngka1Objects2[i].getWidth()) / 2,(( gdjs.GameoverCode.GDTimerLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDTimerLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDAngka1Objects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDTimerTextObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDTimerTextObjects2[i].setPosition((( gdjs.GameoverCode.GDTimerLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDTimerLogoObjects2[0].getPointX("")) + 30,(( gdjs.GameoverCode.GDTimerLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDTimerLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDTimerTextObjects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDTimerScoreObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDTimerScoreObjects2[i].setPosition((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) - 100 - (gdjs.GameoverCode.GDTimerScoreObjects2[i].getWidth()),(( gdjs.GameoverCode.GDTimerLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDTimerLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDTimerScoreObjects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDAngka3Objects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDAngka3Objects2[i].setPosition((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) / 2 - (gdjs.GameoverCode.GDAngka3Objects2[i].getWidth()) / 2,(( gdjs.GameoverCode.GDRockLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDRockLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDAngka3Objects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDRockTextObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDRockTextObjects2[i].setPosition((( gdjs.GameoverCode.GDRockLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDRockLogoObjects2[0].getPointX("")) + 30,(( gdjs.GameoverCode.GDRockLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDRockLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDRockTextObjects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDRockScoreObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDRockScoreObjects2[i].setPosition((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) - 100 - (gdjs.GameoverCode.GDRockScoreObjects2[i].getWidth()),(( gdjs.GameoverCode.GDRockLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDRockLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDRockScoreObjects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDAngka5Objects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDAngka5Objects2[i].setPosition((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) / 2 - (gdjs.GameoverCode.GDAngka5Objects2[i].getWidth()) / 2,(( gdjs.GameoverCode.GDBottleLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBottleLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDAngka5Objects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDBottleTextObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDBottleTextObjects2[i].setPosition((( gdjs.GameoverCode.GDBottleLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBottleLogoObjects2[0].getPointX("")) + 30,(( gdjs.GameoverCode.GDBottleLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBottleLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDBottleTextObjects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDBottleScoreObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDBottleScoreObjects2[i].setPosition((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) - 100 - (gdjs.GameoverCode.GDBottleScoreObjects2[i].getWidth()),(( gdjs.GameoverCode.GDBottleLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBottleLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDBottleScoreObjects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDAngka5NegatifObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDAngka5NegatifObjects2[i].setPosition((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) / 2 - (gdjs.GameoverCode.GDAngka5NegatifObjects2[i].getWidth()) / 2,(( gdjs.GameoverCode.GDFishLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDFishLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDAngka5NegatifObjects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDFishTextObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDFishTextObjects2[i].setPosition((( gdjs.GameoverCode.GDFishLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDFishLogoObjects2[0].getPointX("")) + 30,(( gdjs.GameoverCode.GDFishLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDFishLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDFishTextObjects2[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDFishScoreObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDFishScoreObjects2[i].setPosition((( gdjs.GameoverCode.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects2[0].getWidth()) - 100 - (gdjs.GameoverCode.GDFishScoreObjects2[i].getWidth()),(( gdjs.GameoverCode.GDFishLogoObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDFishLogoObjects2[0].getPointY("")) - (gdjs.GameoverCode.GDFishScoreObjects2[i].getHeight()) / 2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.GameoverCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottleScore"), gdjs.GameoverCode.GDBottleScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("FishScore"), gdjs.GameoverCode.GDFishScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("RockScore"), gdjs.GameoverCode.GDRockScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimerScore"), gdjs.GameoverCode.GDTimerScoreObjects1);
{for(var i = 0, len = gdjs.GameoverCode.GDTimerScoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDTimerScoreObjects1[i].setX((( gdjs.GameoverCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects1[0].getWidth()) - 100 - (gdjs.GameoverCode.GDTimerScoreObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDRockScoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDRockScoreObjects1[i].setX((( gdjs.GameoverCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects1[0].getWidth()) - 100 - (gdjs.GameoverCode.GDRockScoreObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDFishScoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDFishScoreObjects1[i].setX((( gdjs.GameoverCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects1[0].getWidth()) - 100 - (gdjs.GameoverCode.GDFishScoreObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDBottleScoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDBottleScoreObjects1[i].setX((( gdjs.GameoverCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackgroundObjects1[0].getWidth()) - 100 - (gdjs.GameoverCode.GDBottleScoreObjects1[i].getWidth()));
}
}}

}


};gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects2Objects = Hashtable.newFrom({"Restart": gdjs.GameoverCode.GDRestartObjects2});
gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects2Objects = Hashtable.newFrom({"Restart": gdjs.GameoverCode.GDRestartObjects2});
gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.GameoverCode.GDRestartObjects1});
gdjs.GameoverCode.asyncCallback9694980 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", false);
}}
gdjs.GameoverCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.GameoverCode.asyncCallback9694980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameoverCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameoverCode.GDRestartObjects2);

gdjs.GameoverCode.condition0IsTrue_0.val = false;
gdjs.GameoverCode.condition1IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameoverCode.condition0IsTrue_0.val ) {
{
gdjs.GameoverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.GameoverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameoverCode.GDRestartObjects2 */
{for(var i = 0, len = gdjs.GameoverCode.GDRestartObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDRestartObjects2[i].getBehavior("Tween").addObjectScaleTween("Down", 0.09, 0.09, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameoverCode.GDRestartObjects2);

gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects2Objects, runtimeScene, true, true);
}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameoverCode.GDRestartObjects2 */
{for(var i = 0, len = gdjs.GameoverCode.GDRestartObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDRestartObjects2[i].getBehavior("Tween").addObjectScaleTween("Up", 0.1, 0.1, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameoverCode.GDRestartObjects1);

gdjs.GameoverCode.condition0IsTrue_0.val = false;
gdjs.GameoverCode.condition1IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameoverCode.condition0IsTrue_0.val ) {
{
gdjs.GameoverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameoverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameoverCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.GameoverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDRestartObjects1[i].getBehavior("Tween").addObjectScaleTween("Down", 0.09, 0.09, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDRestartObjects1[i].getBehavior("Tween").addObjectScaleTween("Up", 0.1, 0.1, "linear", 100, false, true);
}
}
{ //Subevents
gdjs.GameoverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameoverCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottleText"), gdjs.GameoverCode.GDBottleTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("FishText"), gdjs.GameoverCode.GDFishTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RockText"), gdjs.GameoverCode.GDRockTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.GameoverCode.GDTimerTextObjects1);
{for(var i = 0, len = gdjs.GameoverCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDTimerTextObjects1[i].getBehavior("Tween").addVariableTween("TimerNumber", gdjs.GameoverCode.GDTimerTextObjects1[i].getVariables().getFromIndex(0), 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("TimePlayed")), "linear", 1500, false);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDRockTextObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDRockTextObjects1[i].getBehavior("Tween").addVariableTween("RockNumber", gdjs.GameoverCode.GDRockTextObjects1[i].getVariables().getFromIndex(0), 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("RockCaught")), "linear", 1500, false);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDBottleTextObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDBottleTextObjects1[i].getBehavior("Tween").addVariableTween("BottleNumber", gdjs.GameoverCode.GDBottleTextObjects1[i].getVariables().getFromIndex(0), 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("BottleCaught")), "linear", 1500, false);
}
}{for(var i = 0, len = gdjs.GameoverCode.GDFishTextObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDFishTextObjects1[i].getBehavior("Tween").addVariableTween("FishNumber", gdjs.GameoverCode.GDFishTextObjects1[i].getVariables().getFromIndex(0), 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("FishCaught")), "linear", 1500, false);
}
}}

}


{


gdjs.GameoverCode.eventsList0(runtimeScene);
}


{


gdjs.GameoverCode.eventsList1(runtimeScene);
}


{


gdjs.GameoverCode.eventsList3(runtimeScene);
}


};

gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDRestartObjects1.length = 0;
gdjs.GameoverCode.GDRestartObjects2.length = 0;
gdjs.GameoverCode.GDRestartObjects3.length = 0;
gdjs.GameoverCode.GDBackgroundObjects1.length = 0;
gdjs.GameoverCode.GDBackgroundObjects2.length = 0;
gdjs.GameoverCode.GDBackgroundObjects3.length = 0;
gdjs.GameoverCode.GDTimerLogoObjects1.length = 0;
gdjs.GameoverCode.GDTimerLogoObjects2.length = 0;
gdjs.GameoverCode.GDTimerLogoObjects3.length = 0;
gdjs.GameoverCode.GDTimerTextObjects1.length = 0;
gdjs.GameoverCode.GDTimerTextObjects2.length = 0;
gdjs.GameoverCode.GDTimerTextObjects3.length = 0;
gdjs.GameoverCode.GDTimerScoreObjects1.length = 0;
gdjs.GameoverCode.GDTimerScoreObjects2.length = 0;
gdjs.GameoverCode.GDTimerScoreObjects3.length = 0;
gdjs.GameoverCode.GDRockLogoObjects1.length = 0;
gdjs.GameoverCode.GDRockLogoObjects2.length = 0;
gdjs.GameoverCode.GDRockLogoObjects3.length = 0;
gdjs.GameoverCode.GDRockTextObjects1.length = 0;
gdjs.GameoverCode.GDRockTextObjects2.length = 0;
gdjs.GameoverCode.GDRockTextObjects3.length = 0;
gdjs.GameoverCode.GDRockScoreObjects1.length = 0;
gdjs.GameoverCode.GDRockScoreObjects2.length = 0;
gdjs.GameoverCode.GDRockScoreObjects3.length = 0;
gdjs.GameoverCode.GDBottleLogoObjects1.length = 0;
gdjs.GameoverCode.GDBottleLogoObjects2.length = 0;
gdjs.GameoverCode.GDBottleLogoObjects3.length = 0;
gdjs.GameoverCode.GDBottleTextObjects1.length = 0;
gdjs.GameoverCode.GDBottleTextObjects2.length = 0;
gdjs.GameoverCode.GDBottleTextObjects3.length = 0;
gdjs.GameoverCode.GDBottleScoreObjects1.length = 0;
gdjs.GameoverCode.GDBottleScoreObjects2.length = 0;
gdjs.GameoverCode.GDBottleScoreObjects3.length = 0;
gdjs.GameoverCode.GDFishLogoObjects1.length = 0;
gdjs.GameoverCode.GDFishLogoObjects2.length = 0;
gdjs.GameoverCode.GDFishLogoObjects3.length = 0;
gdjs.GameoverCode.GDFishTextObjects1.length = 0;
gdjs.GameoverCode.GDFishTextObjects2.length = 0;
gdjs.GameoverCode.GDFishTextObjects3.length = 0;
gdjs.GameoverCode.GDFishScoreObjects1.length = 0;
gdjs.GameoverCode.GDFishScoreObjects2.length = 0;
gdjs.GameoverCode.GDFishScoreObjects3.length = 0;
gdjs.GameoverCode.GDTotalScoreObjects1.length = 0;
gdjs.GameoverCode.GDTotalScoreObjects2.length = 0;
gdjs.GameoverCode.GDTotalScoreObjects3.length = 0;
gdjs.GameoverCode.GDTandaXObjects1.length = 0;
gdjs.GameoverCode.GDTandaXObjects2.length = 0;
gdjs.GameoverCode.GDTandaXObjects3.length = 0;
gdjs.GameoverCode.GDAngka1Objects1.length = 0;
gdjs.GameoverCode.GDAngka1Objects2.length = 0;
gdjs.GameoverCode.GDAngka1Objects3.length = 0;
gdjs.GameoverCode.GDAngka3Objects1.length = 0;
gdjs.GameoverCode.GDAngka3Objects2.length = 0;
gdjs.GameoverCode.GDAngka3Objects3.length = 0;
gdjs.GameoverCode.GDAngka5Objects1.length = 0;
gdjs.GameoverCode.GDAngka5Objects2.length = 0;
gdjs.GameoverCode.GDAngka5Objects3.length = 0;
gdjs.GameoverCode.GDAngka5NegatifObjects1.length = 0;
gdjs.GameoverCode.GDAngka5NegatifObjects2.length = 0;
gdjs.GameoverCode.GDAngka5NegatifObjects3.length = 0;
gdjs.GameoverCode.GDYourScoreObjects1.length = 0;
gdjs.GameoverCode.GDYourScoreObjects2.length = 0;
gdjs.GameoverCode.GDYourScoreObjects3.length = 0;

gdjs.GameoverCode.eventsList4(runtimeScene);
return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;

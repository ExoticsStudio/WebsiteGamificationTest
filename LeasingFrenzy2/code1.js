gdjs.LoadingCode = {};
gdjs.LoadingCode.GDLoadingBarObjects1= [];
gdjs.LoadingCode.GDLoadingBarObjects2= [];
gdjs.LoadingCode.GDLoadingBarObjects3= [];
gdjs.LoadingCode.GDLoadingBarObjects4= [];
gdjs.LoadingCode.GDLoadingBarObjects5= [];
gdjs.LoadingCode.GDLoadingBarObjects6= [];
gdjs.LoadingCode.GDLoadingFrameObjects1= [];
gdjs.LoadingCode.GDLoadingFrameObjects2= [];
gdjs.LoadingCode.GDLoadingFrameObjects3= [];
gdjs.LoadingCode.GDLoadingFrameObjects4= [];
gdjs.LoadingCode.GDLoadingFrameObjects5= [];
gdjs.LoadingCode.GDLoadingFrameObjects6= [];
gdjs.LoadingCode.GDWheelObjects1= [];
gdjs.LoadingCode.GDWheelObjects2= [];
gdjs.LoadingCode.GDWheelObjects3= [];
gdjs.LoadingCode.GDWheelObjects4= [];
gdjs.LoadingCode.GDWheelObjects5= [];
gdjs.LoadingCode.GDWheelObjects6= [];
gdjs.LoadingCode.GDLoadingFrame2Objects1= [];
gdjs.LoadingCode.GDLoadingFrame2Objects2= [];
gdjs.LoadingCode.GDLoadingFrame2Objects3= [];
gdjs.LoadingCode.GDLoadingFrame2Objects4= [];
gdjs.LoadingCode.GDLoadingFrame2Objects5= [];
gdjs.LoadingCode.GDLoadingFrame2Objects6= [];
gdjs.LoadingCode.GDLoadingTextObjects1= [];
gdjs.LoadingCode.GDLoadingTextObjects2= [];
gdjs.LoadingCode.GDLoadingTextObjects3= [];
gdjs.LoadingCode.GDLoadingTextObjects4= [];
gdjs.LoadingCode.GDLoadingTextObjects5= [];
gdjs.LoadingCode.GDLoadingTextObjects6= [];
gdjs.LoadingCode.GDBGObjects1= [];
gdjs.LoadingCode.GDBGObjects2= [];
gdjs.LoadingCode.GDBGObjects3= [];
gdjs.LoadingCode.GDBGObjects4= [];
gdjs.LoadingCode.GDBGObjects5= [];
gdjs.LoadingCode.GDBGObjects6= [];

gdjs.LoadingCode.conditionTrue_0 = {val:false};
gdjs.LoadingCode.condition0IsTrue_0 = {val:false};
gdjs.LoadingCode.condition1IsTrue_0 = {val:false};


gdjs.LoadingCode.asyncCallback10648604 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", false);
}}
gdjs.LoadingCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.LoadingCode.asyncCallback10648604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.asyncCallback11365188 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("LoadingBar"), gdjs.LoadingCode.GDLoadingBarObjects5);

{for(var i = 0, len = gdjs.LoadingCode.GDLoadingBarObjects5.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingBarObjects5[i].getBehavior("Tween").addObjectWidthTween("Width", 345, "easeInOutQuad", 1000, false);
}
}
{ //Subevents
gdjs.LoadingCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LoadingCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.LoadingCode.GDLoadingBarObjects4) asyncObjectsList.addObject("LoadingBar", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 1.5)), (runtimeScene) => (gdjs.LoadingCode.asyncCallback11365188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.asyncCallback8736476 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("LoadingBar"), gdjs.LoadingCode.GDLoadingBarObjects4);

{for(var i = 0, len = gdjs.LoadingCode.GDLoadingBarObjects4.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingBarObjects4[i].getBehavior("Tween").addObjectWidthTween("Width", gdjs.randomInRange(200, 225), "easeInOutQuad", 1000, false);
}
}
{ //Subevents
gdjs.LoadingCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LoadingCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.LoadingCode.GDLoadingBarObjects3) asyncObjectsList.addObject("LoadingBar", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 1.5)), (runtimeScene) => (gdjs.LoadingCode.asyncCallback8736476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.asyncCallback10606772 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("LoadingBar"), gdjs.LoadingCode.GDLoadingBarObjects3);

{for(var i = 0, len = gdjs.LoadingCode.GDLoadingBarObjects3.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingBarObjects3[i].getBehavior("Tween").addObjectWidthTween("Width", gdjs.randomInRange(125, 150), "easeInOutQuad", 1000, false);
}
}
{ //Subevents
gdjs.LoadingCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LoadingCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.LoadingCode.GDLoadingBarObjects2) asyncObjectsList.addObject("LoadingBar", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 1.5)), (runtimeScene) => (gdjs.LoadingCode.asyncCallback10606772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.eventsList4 = function(runtimeScene) {

{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LoadingBar"), gdjs.LoadingCode.GDLoadingBarObjects2);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingBarObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingBarObjects2[i].getBehavior("Tween").addObjectWidthTween("Width", gdjs.randomInRange(50, 75), "easeInOutQuad", 1000, false);
}
}
{ //Subevents
gdjs.LoadingCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.LoadingCode.asyncCallback10625860 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects6);

{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects6.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects6[i].setString("L O A D I N G .");
}
}}
gdjs.LoadingCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.LoadingCode.GDLoadingTextObjects5) asyncObjectsList.addObject("LoadingText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.LoadingCode.asyncCallback10625860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.asyncCallback10824052 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects5);

{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects5.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects5[i].setString("L O A D I N G . .");
}
}
{ //Subevents
gdjs.LoadingCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LoadingCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.LoadingCode.GDLoadingTextObjects4) asyncObjectsList.addObject("LoadingText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.LoadingCode.asyncCallback10824052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.asyncCallback8056732 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects4);

{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects4.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects4[i].setString("L O A D I N G . . .");
}
}
{ //Subevents
gdjs.LoadingCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LoadingCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.LoadingCode.GDLoadingTextObjects3) asyncObjectsList.addObject("LoadingText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.LoadingCode.asyncCallback8056732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.asyncCallback10604972 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects3);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects3.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects3[i].setString("L O A D I N G . .");
}
}
{ //Subevents
gdjs.LoadingCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LoadingCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.LoadingCode.asyncCallback10604972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.eventsList9 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.LoadingCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.LoadingCode.eventsList10 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("LoadingBar"), gdjs.LoadingCode.GDLoadingBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wheel"), gdjs.LoadingCode.GDWheelObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingBarObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingBarObjects1[i].setXOffset(gdjs.LoadingCode.GDLoadingBarObjects1[i].getXOffset() + (0.5));
}
}{for(var i = 0, len = gdjs.LoadingCode.GDWheelObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDWheelObjects1[i].rotate(90, runtimeScene);
}
}}

}


};gdjs.LoadingCode.eventsList11 = function(runtimeScene) {

{


gdjs.LoadingCode.eventsList4(runtimeScene);
}


{


gdjs.LoadingCode.eventsList9(runtimeScene);
}


{


gdjs.LoadingCode.eventsList10(runtimeScene);
}


};gdjs.LoadingCode.eventsList12 = function(runtimeScene) {

{


gdjs.LoadingCode.eventsList11(runtimeScene);
}


};

gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDLoadingBarObjects1.length = 0;
gdjs.LoadingCode.GDLoadingBarObjects2.length = 0;
gdjs.LoadingCode.GDLoadingBarObjects3.length = 0;
gdjs.LoadingCode.GDLoadingBarObjects4.length = 0;
gdjs.LoadingCode.GDLoadingBarObjects5.length = 0;
gdjs.LoadingCode.GDLoadingBarObjects6.length = 0;
gdjs.LoadingCode.GDLoadingFrameObjects1.length = 0;
gdjs.LoadingCode.GDLoadingFrameObjects2.length = 0;
gdjs.LoadingCode.GDLoadingFrameObjects3.length = 0;
gdjs.LoadingCode.GDLoadingFrameObjects4.length = 0;
gdjs.LoadingCode.GDLoadingFrameObjects5.length = 0;
gdjs.LoadingCode.GDLoadingFrameObjects6.length = 0;
gdjs.LoadingCode.GDWheelObjects1.length = 0;
gdjs.LoadingCode.GDWheelObjects2.length = 0;
gdjs.LoadingCode.GDWheelObjects3.length = 0;
gdjs.LoadingCode.GDWheelObjects4.length = 0;
gdjs.LoadingCode.GDWheelObjects5.length = 0;
gdjs.LoadingCode.GDWheelObjects6.length = 0;
gdjs.LoadingCode.GDLoadingFrame2Objects1.length = 0;
gdjs.LoadingCode.GDLoadingFrame2Objects2.length = 0;
gdjs.LoadingCode.GDLoadingFrame2Objects3.length = 0;
gdjs.LoadingCode.GDLoadingFrame2Objects4.length = 0;
gdjs.LoadingCode.GDLoadingFrame2Objects5.length = 0;
gdjs.LoadingCode.GDLoadingFrame2Objects6.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects1.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects2.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects3.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects4.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects5.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects6.length = 0;
gdjs.LoadingCode.GDBGObjects1.length = 0;
gdjs.LoadingCode.GDBGObjects2.length = 0;
gdjs.LoadingCode.GDBGObjects3.length = 0;
gdjs.LoadingCode.GDBGObjects4.length = 0;
gdjs.LoadingCode.GDBGObjects5.length = 0;
gdjs.LoadingCode.GDBGObjects6.length = 0;

gdjs.LoadingCode.eventsList12(runtimeScene);
return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;

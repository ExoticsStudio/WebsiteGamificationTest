gdjs.Stage2Code = {};
gdjs.Stage2Code.GDCarObjects3_1final = [];

gdjs.Stage2Code.GDLoadingObjects3_1final = [];

gdjs.Stage2Code.GDRoadDown2Objects3_1final = [];

gdjs.Stage2Code.GDRoadDownObjects3_1final = [];

gdjs.Stage2Code.GDRoadLeft2Objects3_1final = [];

gdjs.Stage2Code.GDRoadLeftObjects3_1final = [];

gdjs.Stage2Code.GDRoadRight2Objects3_1final = [];

gdjs.Stage2Code.GDRoadRightObjects3_1final = [];

gdjs.Stage2Code.GDRoadUp2Objects3_1final = [];

gdjs.Stage2Code.GDRoadUpObjects3_1final = [];

gdjs.Stage2Code.forEachIndex3 = 0;

gdjs.Stage2Code.forEachObjects3 = [];

gdjs.Stage2Code.forEachTemporary3 = null;

gdjs.Stage2Code.forEachTotalCount3 = 0;

gdjs.Stage2Code.GDRoadRightObjects1= [];
gdjs.Stage2Code.GDRoadRightObjects2= [];
gdjs.Stage2Code.GDRoadRightObjects3= [];
gdjs.Stage2Code.GDRoadRightObjects4= [];
gdjs.Stage2Code.GDRoadRightObjects5= [];
gdjs.Stage2Code.GDRoadRight2Objects1= [];
gdjs.Stage2Code.GDRoadRight2Objects2= [];
gdjs.Stage2Code.GDRoadRight2Objects3= [];
gdjs.Stage2Code.GDRoadRight2Objects4= [];
gdjs.Stage2Code.GDRoadRight2Objects5= [];
gdjs.Stage2Code.GDRoadDownObjects1= [];
gdjs.Stage2Code.GDRoadDownObjects2= [];
gdjs.Stage2Code.GDRoadDownObjects3= [];
gdjs.Stage2Code.GDRoadDownObjects4= [];
gdjs.Stage2Code.GDRoadDownObjects5= [];
gdjs.Stage2Code.GDRoadDown2Objects1= [];
gdjs.Stage2Code.GDRoadDown2Objects2= [];
gdjs.Stage2Code.GDRoadDown2Objects3= [];
gdjs.Stage2Code.GDRoadDown2Objects4= [];
gdjs.Stage2Code.GDRoadDown2Objects5= [];
gdjs.Stage2Code.GDRoadLeftObjects1= [];
gdjs.Stage2Code.GDRoadLeftObjects2= [];
gdjs.Stage2Code.GDRoadLeftObjects3= [];
gdjs.Stage2Code.GDRoadLeftObjects4= [];
gdjs.Stage2Code.GDRoadLeftObjects5= [];
gdjs.Stage2Code.GDRoadLeft2Objects1= [];
gdjs.Stage2Code.GDRoadLeft2Objects2= [];
gdjs.Stage2Code.GDRoadLeft2Objects3= [];
gdjs.Stage2Code.GDRoadLeft2Objects4= [];
gdjs.Stage2Code.GDRoadLeft2Objects5= [];
gdjs.Stage2Code.GDRoadUpObjects1= [];
gdjs.Stage2Code.GDRoadUpObjects2= [];
gdjs.Stage2Code.GDRoadUpObjects3= [];
gdjs.Stage2Code.GDRoadUpObjects4= [];
gdjs.Stage2Code.GDRoadUpObjects5= [];
gdjs.Stage2Code.GDRoadUp2Objects1= [];
gdjs.Stage2Code.GDRoadUp2Objects2= [];
gdjs.Stage2Code.GDRoadUp2Objects3= [];
gdjs.Stage2Code.GDRoadUp2Objects4= [];
gdjs.Stage2Code.GDRoadUp2Objects5= [];
gdjs.Stage2Code.GDCarObjects1= [];
gdjs.Stage2Code.GDCarObjects2= [];
gdjs.Stage2Code.GDCarObjects3= [];
gdjs.Stage2Code.GDCarObjects4= [];
gdjs.Stage2Code.GDCarObjects5= [];
gdjs.Stage2Code.GDGrassObjects1= [];
gdjs.Stage2Code.GDGrassObjects2= [];
gdjs.Stage2Code.GDGrassObjects3= [];
gdjs.Stage2Code.GDGrassObjects4= [];
gdjs.Stage2Code.GDGrassObjects5= [];
gdjs.Stage2Code.GDObstacleObjects1= [];
gdjs.Stage2Code.GDObstacleObjects2= [];
gdjs.Stage2Code.GDObstacleObjects3= [];
gdjs.Stage2Code.GDObstacleObjects4= [];
gdjs.Stage2Code.GDObstacleObjects5= [];
gdjs.Stage2Code.GDGrassBGObjects1= [];
gdjs.Stage2Code.GDGrassBGObjects2= [];
gdjs.Stage2Code.GDGrassBGObjects3= [];
gdjs.Stage2Code.GDGrassBGObjects4= [];
gdjs.Stage2Code.GDGrassBGObjects5= [];
gdjs.Stage2Code.GDDecorObjects1= [];
gdjs.Stage2Code.GDDecorObjects2= [];
gdjs.Stage2Code.GDDecorObjects3= [];
gdjs.Stage2Code.GDDecorObjects4= [];
gdjs.Stage2Code.GDDecorObjects5= [];
gdjs.Stage2Code.GDTimerObjects1= [];
gdjs.Stage2Code.GDTimerObjects2= [];
gdjs.Stage2Code.GDTimerObjects3= [];
gdjs.Stage2Code.GDTimerObjects4= [];
gdjs.Stage2Code.GDTimerObjects5= [];
gdjs.Stage2Code.GDStageClearedObjects1= [];
gdjs.Stage2Code.GDStageClearedObjects2= [];
gdjs.Stage2Code.GDStageClearedObjects3= [];
gdjs.Stage2Code.GDStageClearedObjects4= [];
gdjs.Stage2Code.GDStageClearedObjects5= [];
gdjs.Stage2Code.GDNewTextObjects1= [];
gdjs.Stage2Code.GDNewTextObjects2= [];
gdjs.Stage2Code.GDNewTextObjects3= [];
gdjs.Stage2Code.GDNewTextObjects4= [];
gdjs.Stage2Code.GDNewTextObjects5= [];
gdjs.Stage2Code.GDLoadingObjects1= [];
gdjs.Stage2Code.GDLoadingObjects2= [];
gdjs.Stage2Code.GDLoadingObjects3= [];
gdjs.Stage2Code.GDLoadingObjects4= [];
gdjs.Stage2Code.GDLoadingObjects5= [];

gdjs.Stage2Code.conditionTrue_0 = {val:false};
gdjs.Stage2Code.condition0IsTrue_0 = {val:false};
gdjs.Stage2Code.condition1IsTrue_0 = {val:false};
gdjs.Stage2Code.condition2IsTrue_0 = {val:false};
gdjs.Stage2Code.condition3IsTrue_0 = {val:false};
gdjs.Stage2Code.conditionTrue_1 = {val:false};
gdjs.Stage2Code.condition0IsTrue_1 = {val:false};
gdjs.Stage2Code.condition1IsTrue_1 = {val:false};
gdjs.Stage2Code.condition2IsTrue_1 = {val:false};
gdjs.Stage2Code.condition3IsTrue_1 = {val:false};


gdjs.Stage2Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects3, gdjs.Stage2Code.GDCarObjects4);

gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.Stage2Code.GDGrassObjects4);
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects4.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects4[i].getBehavior("Physics2").addPrismaticJoint((gdjs.Stage2Code.GDCarObjects4[i].getCenterXInScene()), (gdjs.Stage2Code.GDCarObjects4[i].getCenterYInScene()), (gdjs.Stage2Code.GDGrassObjects4.length !== 0 ? gdjs.Stage2Code.GDGrassObjects4[0] : null), (gdjs.Stage2Code.GDCarObjects4[i].getCenterXInScene()), (gdjs.Stage2Code.GDCarObjects4[i].getCenterYInScene()), (gdjs.Stage2Code.GDCarObjects4[i].getAngle()), 0, false, 100, 100, false, 0, 0, false, runtimeScene.getVariables().get("JointID"));
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects4.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects4[i].returnVariable(gdjs.Stage2Code.GDCarObjects4[i].getVariables().get("JointID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("JointID")));
}
}}

}


};gdjs.Stage2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Stage2Code.GDCarObjects2);

for(gdjs.Stage2Code.forEachIndex3 = 0;gdjs.Stage2Code.forEachIndex3 < gdjs.Stage2Code.GDCarObjects2.length;++gdjs.Stage2Code.forEachIndex3) {
gdjs.Stage2Code.GDCarObjects3.length = 0;


gdjs.Stage2Code.forEachTemporary3 = gdjs.Stage2Code.GDCarObjects2[gdjs.Stage2Code.forEachIndex3];
gdjs.Stage2Code.GDCarObjects3.push(gdjs.Stage2Code.forEachTemporary3);
if (true) {

{ //Subevents: 
gdjs.Stage2Code.eventsList0(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Stage2Code.eventsList2 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().get("DrivingSpeed").setNumber(350);
}{runtimeScene.getVariables().get("RotationSpeed").setNumber(450);
}}

}


};gdjs.Stage2Code.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Stage2Code.GDCarObjects2);
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects2[i].setAnimationFrame(gdjs.randomInRange(0, 8));
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects2[i].pauseAnimation();
}
}}

}


};gdjs.Stage2Code.eventsList4 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().get("SceneTimeLeft").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


};gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDTimerObjects2Objects = Hashtable.newFrom({"Timer": gdjs.Stage2Code.GDTimerObjects2});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDStageClearedObjects2Objects = Hashtable.newFrom({"StageCleared": gdjs.Stage2Code.GDStageClearedObjects2});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDLoadingObjects2Objects = Hashtable.newFrom({"Loading": gdjs.Stage2Code.GDLoadingObjects2});
gdjs.Stage2Code.eventsList5 = function(runtimeScene) {

{


{
gdjs.Stage2Code.GDLoadingObjects2.length = 0;

gdjs.Stage2Code.GDStageClearedObjects2.length = 0;

gdjs.Stage2Code.GDTimerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDTimerObjects2Objects, gdjs.evtTools.window.getWindowInnerWidth() / 2 - (( gdjs.Stage2Code.GDTimerObjects2.length === 0 ) ? 0 :gdjs.Stage2Code.GDTimerObjects2[0].getWidth()) / 2, 25, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDStageClearedObjects2Objects, gdjs.evtTools.window.getWindowInnerWidth() / 2 - (( gdjs.Stage2Code.GDStageClearedObjects2.length === 0 ) ? 0 :gdjs.Stage2Code.GDStageClearedObjects2[0].getWidth()) / 2, 75, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDLoadingObjects2Objects, 0, -(100), "Loading");
}}

}


};gdjs.Stage2Code.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Stage2Code.GDCarObjects1);
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects1.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects1[i].activateBehavior("DraggablePhysics", false);
}
}}

}


};gdjs.Stage2Code.eventsList7 = function(runtimeScene) {

{


gdjs.Stage2Code.eventsList1(runtimeScene);
}


{


gdjs.Stage2Code.eventsList2(runtimeScene);
}


{


gdjs.Stage2Code.eventsList3(runtimeScene);
}


{


gdjs.Stage2Code.eventsList4(runtimeScene);
}


{


gdjs.Stage2Code.eventsList5(runtimeScene);
}


{


gdjs.Stage2Code.eventsList6(runtimeScene);
}


};gdjs.Stage2Code.eventsList8 = function(runtimeScene) {

{


gdjs.Stage2Code.condition0IsTrue_0.val = false;
{
gdjs.Stage2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Stage2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Stage2Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Stage2Code.eventsList9 = function(runtimeScene) {

{


{
}

}


};gdjs.Stage2Code.eventsList10 = function(runtimeScene) {

{


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
{
gdjs.Stage2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft")) >= 0;
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
gdjs.Stage2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft")) < 10;
}}
if (gdjs.Stage2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Stage2Code.GDTimerObjects2);
{for(var i = 0, len = gdjs.Stage2Code.GDTimerObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDTimerObjects2[i].setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft"))), 0, 3));
}
}}

}


{


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
{
gdjs.Stage2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft")) >= 10;
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
gdjs.Stage2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft")) < 100;
}}
if (gdjs.Stage2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Stage2Code.GDTimerObjects2);
{for(var i = 0, len = gdjs.Stage2Code.GDTimerObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDTimerObjects2[i].setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft"))), 0, 4));
}
}}

}


{


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
{
gdjs.Stage2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft")) >= 100;
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
gdjs.Stage2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft")) < 1000;
}}
if (gdjs.Stage2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Stage2Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Stage2Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Stage2Code.GDTimerObjects1[i].setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft"))), 0, 5));
}
}}

}


};gdjs.Stage2Code.eventsList11 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("StageCleared"), gdjs.Stage2Code.GDStageClearedObjects1);
{for(var i = 0, len = gdjs.Stage2Code.GDStageClearedObjects1.length ;i < len;++i) {
    gdjs.Stage2Code.GDStageClearedObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}
{ //Subevents
gdjs.Stage2Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Stage2Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Stage2Code.GDLoadingObjects2);

gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDLoadingObjects2.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDLoadingObjects2[i].getBehavior("Tween").hasFinished("LoadingOut") ) {
        gdjs.Stage2Code.condition0IsTrue_0.val = true;
        gdjs.Stage2Code.GDLoadingObjects2[k] = gdjs.Stage2Code.GDLoadingObjects2[i];
        ++k;
    }
}
gdjs.Stage2Code.GDLoadingObjects2.length = k;}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition1IsTrue_0;
gdjs.Stage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13209468);
}
}}
if (gdjs.Stage2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Stage2Code.GDCarObjects2);
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects2[i].activateBehavior("DraggablePhysics", true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SecondsTimer");
}}

}


};gdjs.Stage2Code.eventsList13 = function(runtimeScene) {

{


gdjs.Stage2Code.condition0IsTrue_0.val = false;
{
gdjs.Stage2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SecondsTimer") >= 0.1;
}if (gdjs.Stage2Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("SceneTimeLeft").sub(0.1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SecondsTimer");
}}

}


};gdjs.Stage2Code.eventsList14 = function(runtimeScene) {

{


gdjs.Stage2Code.eventsList12(runtimeScene);
}


{


gdjs.Stage2Code.eventsList13(runtimeScene);
}


};gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects2});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDGrassObjects2Objects = Hashtable.newFrom({"Grass": gdjs.Stage2Code.GDGrassObjects2});
gdjs.Stage2Code.eventsList15 = function(runtimeScene) {

{


{
/* Reuse gdjs.Stage2Code.GDCarObjects2 */
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects2[i].getBehavior("Physics2").removeJoint((gdjs.RuntimeObject.getVariableNumber(gdjs.Stage2Code.GDCarObjects2[i].getVariables().get("JointID"))));
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects2[i].activateBehavior("DraggablePhysics", false);
}
}}

}


};gdjs.Stage2Code.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Stage2Code.GDCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.Stage2Code.GDGrassObjects2);

gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDCarObjects2[i].getVariableBoolean(gdjs.Stage2Code.GDCarObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.Stage2Code.condition0IsTrue_0.val = true;
        gdjs.Stage2Code.GDCarObjects2[k] = gdjs.Stage2Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs.Stage2Code.GDCarObjects2.length = k;}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
gdjs.Stage2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects2Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDGrassObjects2Objects, true, runtimeScene, false);
}}
if (gdjs.Stage2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects2 */
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects2[i].setVariableBoolean(gdjs.Stage2Code.GDCarObjects2[i].getVariables().getFromIndex(0), true);
}
}
{ //Subevents
gdjs.Stage2Code.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadRightObjects4Objects = Hashtable.newFrom({"RoadRight": gdjs.Stage2Code.GDRoadRightObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadRight2Objects4Objects = Hashtable.newFrom({"RoadRight2": gdjs.Stage2Code.GDRoadRight2Objects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadDownObjects3Objects = Hashtable.newFrom({"RoadDown": gdjs.Stage2Code.GDRoadDownObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadUpObjects3Objects = Hashtable.newFrom({"RoadUp": gdjs.Stage2Code.GDRoadUpObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadDownObjects4Objects = Hashtable.newFrom({"RoadDown": gdjs.Stage2Code.GDRoadDownObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadDown2Objects4Objects = Hashtable.newFrom({"RoadDown2": gdjs.Stage2Code.GDRoadDown2Objects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadRightObjects3Objects = Hashtable.newFrom({"RoadRight": gdjs.Stage2Code.GDRoadRightObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadLeftObjects3Objects = Hashtable.newFrom({"RoadLeft": gdjs.Stage2Code.GDRoadLeftObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadLeftObjects4Objects = Hashtable.newFrom({"RoadLeft": gdjs.Stage2Code.GDRoadLeftObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadLeft2Objects4Objects = Hashtable.newFrom({"RoadLeft2": gdjs.Stage2Code.GDRoadLeft2Objects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadDownObjects3Objects = Hashtable.newFrom({"RoadDown": gdjs.Stage2Code.GDRoadDownObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadUpObjects3Objects = Hashtable.newFrom({"RoadUp": gdjs.Stage2Code.GDRoadUpObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadUpObjects4Objects = Hashtable.newFrom({"RoadUp": gdjs.Stage2Code.GDRoadUpObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadUp2Objects4Objects = Hashtable.newFrom({"RoadUp2": gdjs.Stage2Code.GDRoadUp2Objects4});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadRightObjects3Objects = Hashtable.newFrom({"RoadRight": gdjs.Stage2Code.GDRoadRightObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects3});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadLeftObjects3Objects = Hashtable.newFrom({"RoadLeft": gdjs.Stage2Code.GDRoadLeftObjects3});
gdjs.Stage2Code.eventsList17 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("RoadDown"), gdjs.Stage2Code.GDRoadDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("RoadUp"), gdjs.Stage2Code.GDRoadUpObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects3);

gdjs.Stage2Code.GDRoadRightObjects3.length = 0;

gdjs.Stage2Code.GDRoadRight2Objects3.length = 0;


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
gdjs.Stage2Code.condition2IsTrue_0.val = false;
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition0IsTrue_0;
gdjs.Stage2Code.GDCarObjects3_1final.length = 0;gdjs.Stage2Code.GDRoadRightObjects3_1final.length = 0;gdjs.Stage2Code.GDRoadRight2Objects3_1final.length = 0;gdjs.Stage2Code.condition0IsTrue_1.val = false;
gdjs.Stage2Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects4);

gdjs.copyArray(runtimeScene.getObjects("RoadRight"), gdjs.Stage2Code.GDRoadRightObjects4);
gdjs.Stage2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadRightObjects4Objects, false, runtimeScene, false);
if( gdjs.Stage2Code.condition0IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage2Code.GDCarObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDCarObjects3_1final.indexOf(gdjs.Stage2Code.GDCarObjects4[j]) === -1 )
            gdjs.Stage2Code.GDCarObjects3_1final.push(gdjs.Stage2Code.GDCarObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Stage2Code.GDRoadRightObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDRoadRightObjects3_1final.indexOf(gdjs.Stage2Code.GDRoadRightObjects4[j]) === -1 )
            gdjs.Stage2Code.GDRoadRightObjects3_1final.push(gdjs.Stage2Code.GDRoadRightObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects4);

gdjs.copyArray(runtimeScene.getObjects("RoadRight2"), gdjs.Stage2Code.GDRoadRight2Objects4);
gdjs.Stage2Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadRight2Objects4Objects, false, runtimeScene, false);
if( gdjs.Stage2Code.condition1IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage2Code.GDCarObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDCarObjects3_1final.indexOf(gdjs.Stage2Code.GDCarObjects4[j]) === -1 )
            gdjs.Stage2Code.GDCarObjects3_1final.push(gdjs.Stage2Code.GDCarObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Stage2Code.GDRoadRight2Objects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDRoadRight2Objects3_1final.indexOf(gdjs.Stage2Code.GDRoadRight2Objects4[j]) === -1 )
            gdjs.Stage2Code.GDRoadRight2Objects3_1final.push(gdjs.Stage2Code.GDRoadRight2Objects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects3_1final, gdjs.Stage2Code.GDCarObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDRoadRightObjects3_1final, gdjs.Stage2Code.GDRoadRightObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDRoadRight2Objects3_1final, gdjs.Stage2Code.GDRoadRight2Objects3);
}
}
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
gdjs.Stage2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadDownObjects3Objects, true, runtimeScene, false);
}if ( gdjs.Stage2Code.condition1IsTrue_0.val ) {
{
gdjs.Stage2Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadUpObjects3Objects, true, runtimeScene, false);
}}
}
if (gdjs.Stage2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects3 */
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].returnVariable(gdjs.Stage2Code.GDCarObjects3[i].getVariables().get("Direction")).setString("Right");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RoadLeft"), gdjs.Stage2Code.GDRoadLeftObjects3);
gdjs.copyArray(runtimeScene.getObjects("RoadRight"), gdjs.Stage2Code.GDRoadRightObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects3);

gdjs.Stage2Code.GDRoadDownObjects3.length = 0;

gdjs.Stage2Code.GDRoadDown2Objects3.length = 0;


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
gdjs.Stage2Code.condition2IsTrue_0.val = false;
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition0IsTrue_0;
gdjs.Stage2Code.GDCarObjects3_1final.length = 0;gdjs.Stage2Code.GDRoadDownObjects3_1final.length = 0;gdjs.Stage2Code.GDRoadDown2Objects3_1final.length = 0;gdjs.Stage2Code.condition0IsTrue_1.val = false;
gdjs.Stage2Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects4);

gdjs.copyArray(runtimeScene.getObjects("RoadDown"), gdjs.Stage2Code.GDRoadDownObjects4);
gdjs.Stage2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadDownObjects4Objects, false, runtimeScene, false);
if( gdjs.Stage2Code.condition0IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage2Code.GDCarObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDCarObjects3_1final.indexOf(gdjs.Stage2Code.GDCarObjects4[j]) === -1 )
            gdjs.Stage2Code.GDCarObjects3_1final.push(gdjs.Stage2Code.GDCarObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Stage2Code.GDRoadDownObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDRoadDownObjects3_1final.indexOf(gdjs.Stage2Code.GDRoadDownObjects4[j]) === -1 )
            gdjs.Stage2Code.GDRoadDownObjects3_1final.push(gdjs.Stage2Code.GDRoadDownObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects4);

gdjs.copyArray(runtimeScene.getObjects("RoadDown2"), gdjs.Stage2Code.GDRoadDown2Objects4);
gdjs.Stage2Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadDown2Objects4Objects, false, runtimeScene, false);
if( gdjs.Stage2Code.condition1IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage2Code.GDCarObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDCarObjects3_1final.indexOf(gdjs.Stage2Code.GDCarObjects4[j]) === -1 )
            gdjs.Stage2Code.GDCarObjects3_1final.push(gdjs.Stage2Code.GDCarObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Stage2Code.GDRoadDown2Objects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDRoadDown2Objects3_1final.indexOf(gdjs.Stage2Code.GDRoadDown2Objects4[j]) === -1 )
            gdjs.Stage2Code.GDRoadDown2Objects3_1final.push(gdjs.Stage2Code.GDRoadDown2Objects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects3_1final, gdjs.Stage2Code.GDCarObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDRoadDownObjects3_1final, gdjs.Stage2Code.GDRoadDownObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDRoadDown2Objects3_1final, gdjs.Stage2Code.GDRoadDown2Objects3);
}
}
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
gdjs.Stage2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadRightObjects3Objects, true, runtimeScene, false);
}if ( gdjs.Stage2Code.condition1IsTrue_0.val ) {
{
gdjs.Stage2Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadLeftObjects3Objects, true, runtimeScene, true);
}}
}
if (gdjs.Stage2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects3 */
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].returnVariable(gdjs.Stage2Code.GDCarObjects3[i].getVariables().get("Direction")).setString("Down");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RoadDown"), gdjs.Stage2Code.GDRoadDownObjects3);
gdjs.copyArray(runtimeScene.getObjects("RoadUp"), gdjs.Stage2Code.GDRoadUpObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects3);

gdjs.Stage2Code.GDRoadLeftObjects3.length = 0;

gdjs.Stage2Code.GDRoadLeft2Objects3.length = 0;


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
gdjs.Stage2Code.condition2IsTrue_0.val = false;
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition0IsTrue_0;
gdjs.Stage2Code.GDCarObjects3_1final.length = 0;gdjs.Stage2Code.GDRoadLeftObjects3_1final.length = 0;gdjs.Stage2Code.GDRoadLeft2Objects3_1final.length = 0;gdjs.Stage2Code.condition0IsTrue_1.val = false;
gdjs.Stage2Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects4);

gdjs.copyArray(runtimeScene.getObjects("RoadLeft"), gdjs.Stage2Code.GDRoadLeftObjects4);
gdjs.Stage2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadLeftObjects4Objects, false, runtimeScene, true);
if( gdjs.Stage2Code.condition0IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage2Code.GDCarObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDCarObjects3_1final.indexOf(gdjs.Stage2Code.GDCarObjects4[j]) === -1 )
            gdjs.Stage2Code.GDCarObjects3_1final.push(gdjs.Stage2Code.GDCarObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Stage2Code.GDRoadLeftObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDRoadLeftObjects3_1final.indexOf(gdjs.Stage2Code.GDRoadLeftObjects4[j]) === -1 )
            gdjs.Stage2Code.GDRoadLeftObjects3_1final.push(gdjs.Stage2Code.GDRoadLeftObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects4);

gdjs.copyArray(runtimeScene.getObjects("RoadLeft2"), gdjs.Stage2Code.GDRoadLeft2Objects4);
gdjs.Stage2Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadLeft2Objects4Objects, false, runtimeScene, true);
if( gdjs.Stage2Code.condition1IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage2Code.GDCarObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDCarObjects3_1final.indexOf(gdjs.Stage2Code.GDCarObjects4[j]) === -1 )
            gdjs.Stage2Code.GDCarObjects3_1final.push(gdjs.Stage2Code.GDCarObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Stage2Code.GDRoadLeft2Objects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDRoadLeft2Objects3_1final.indexOf(gdjs.Stage2Code.GDRoadLeft2Objects4[j]) === -1 )
            gdjs.Stage2Code.GDRoadLeft2Objects3_1final.push(gdjs.Stage2Code.GDRoadLeft2Objects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects3_1final, gdjs.Stage2Code.GDCarObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDRoadLeftObjects3_1final, gdjs.Stage2Code.GDRoadLeftObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDRoadLeft2Objects3_1final, gdjs.Stage2Code.GDRoadLeft2Objects3);
}
}
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
gdjs.Stage2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadDownObjects3Objects, true, runtimeScene, false);
}if ( gdjs.Stage2Code.condition1IsTrue_0.val ) {
{
gdjs.Stage2Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadUpObjects3Objects, true, runtimeScene, false);
}}
}
if (gdjs.Stage2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects3 */
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].returnVariable(gdjs.Stage2Code.GDCarObjects3[i].getVariables().get("Direction")).setString("Left");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RoadLeft"), gdjs.Stage2Code.GDRoadLeftObjects3);
gdjs.copyArray(runtimeScene.getObjects("RoadRight"), gdjs.Stage2Code.GDRoadRightObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects3);

gdjs.Stage2Code.GDRoadUpObjects3.length = 0;

gdjs.Stage2Code.GDRoadUp2Objects3.length = 0;


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
gdjs.Stage2Code.condition2IsTrue_0.val = false;
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition0IsTrue_0;
gdjs.Stage2Code.GDCarObjects3_1final.length = 0;gdjs.Stage2Code.GDRoadUpObjects3_1final.length = 0;gdjs.Stage2Code.GDRoadUp2Objects3_1final.length = 0;gdjs.Stage2Code.condition0IsTrue_1.val = false;
gdjs.Stage2Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects4);

gdjs.copyArray(runtimeScene.getObjects("RoadUp"), gdjs.Stage2Code.GDRoadUpObjects4);
gdjs.Stage2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadUpObjects4Objects, false, runtimeScene, false);
if( gdjs.Stage2Code.condition0IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage2Code.GDCarObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDCarObjects3_1final.indexOf(gdjs.Stage2Code.GDCarObjects4[j]) === -1 )
            gdjs.Stage2Code.GDCarObjects3_1final.push(gdjs.Stage2Code.GDCarObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Stage2Code.GDRoadUpObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDRoadUpObjects3_1final.indexOf(gdjs.Stage2Code.GDRoadUpObjects4[j]) === -1 )
            gdjs.Stage2Code.GDRoadUpObjects3_1final.push(gdjs.Stage2Code.GDRoadUpObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects4);

gdjs.copyArray(runtimeScene.getObjects("RoadUp2"), gdjs.Stage2Code.GDRoadUp2Objects4);
gdjs.Stage2Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects4Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadUp2Objects4Objects, false, runtimeScene, false);
if( gdjs.Stage2Code.condition1IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage2Code.GDCarObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDCarObjects3_1final.indexOf(gdjs.Stage2Code.GDCarObjects4[j]) === -1 )
            gdjs.Stage2Code.GDCarObjects3_1final.push(gdjs.Stage2Code.GDCarObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Stage2Code.GDRoadUp2Objects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDRoadUp2Objects3_1final.indexOf(gdjs.Stage2Code.GDRoadUp2Objects4[j]) === -1 )
            gdjs.Stage2Code.GDRoadUp2Objects3_1final.push(gdjs.Stage2Code.GDRoadUp2Objects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Stage2Code.GDCarObjects3_1final, gdjs.Stage2Code.GDCarObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDRoadUpObjects3_1final, gdjs.Stage2Code.GDRoadUpObjects3);
gdjs.copyArray(gdjs.Stage2Code.GDRoadUp2Objects3_1final, gdjs.Stage2Code.GDRoadUp2Objects3);
}
}
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
gdjs.Stage2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadRightObjects3Objects, true, runtimeScene, false);
}if ( gdjs.Stage2Code.condition1IsTrue_0.val ) {
{
gdjs.Stage2Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects3Objects, gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDRoadLeftObjects3Objects, true, runtimeScene, true);
}}
}
if (gdjs.Stage2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects3 */
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].returnVariable(gdjs.Stage2Code.GDCarObjects3[i].getVariables().get("Direction")).setString("Up");
}
}}

}


{

gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects3);


gdjs.Stage2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDCarObjects3.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDCarObjects3[i].getVariableString(gdjs.Stage2Code.GDCarObjects3[i].getVariables().get("Direction")) == "Right" ) {
        gdjs.Stage2Code.condition0IsTrue_0.val = true;
        gdjs.Stage2Code.GDCarObjects3[k] = gdjs.Stage2Code.GDCarObjects3[i];
        ++k;
    }
}
gdjs.Stage2Code.GDCarObjects3.length = k;}if (gdjs.Stage2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects3 */
gdjs.copyArray(runtimeScene.getObjects("RoadRight"), gdjs.Stage2Code.GDRoadRightObjects3);
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].rotateTowardAngle(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("RotationSpeed")), runtimeScene);
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].setY((( gdjs.Stage2Code.GDRoadRightObjects3.length === 0 ) ? 0 :gdjs.Stage2Code.GDRoadRightObjects3[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].getBehavior("Physics2").setLinearVelocityX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("DrivingSpeed")));
}
}}

}


{

gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects3);


gdjs.Stage2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDCarObjects3.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDCarObjects3[i].getVariableString(gdjs.Stage2Code.GDCarObjects3[i].getVariables().get("Direction")) == "Down" ) {
        gdjs.Stage2Code.condition0IsTrue_0.val = true;
        gdjs.Stage2Code.GDCarObjects3[k] = gdjs.Stage2Code.GDCarObjects3[i];
        ++k;
    }
}
gdjs.Stage2Code.GDCarObjects3.length = k;}if (gdjs.Stage2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects3 */
gdjs.copyArray(runtimeScene.getObjects("RoadDown"), gdjs.Stage2Code.GDRoadDownObjects3);
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].rotateTowardAngle(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("RotationSpeed")), runtimeScene);
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].setX((( gdjs.Stage2Code.GDRoadDownObjects3.length === 0 ) ? 0 :gdjs.Stage2Code.GDRoadDownObjects3[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].getBehavior("Physics2").setLinearVelocityY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("DrivingSpeed")));
}
}}

}


{

gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects3);


gdjs.Stage2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDCarObjects3.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDCarObjects3[i].getVariableString(gdjs.Stage2Code.GDCarObjects3[i].getVariables().get("Direction")) == "Left" ) {
        gdjs.Stage2Code.condition0IsTrue_0.val = true;
        gdjs.Stage2Code.GDCarObjects3[k] = gdjs.Stage2Code.GDCarObjects3[i];
        ++k;
    }
}
gdjs.Stage2Code.GDCarObjects3.length = k;}if (gdjs.Stage2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects3 */
gdjs.copyArray(runtimeScene.getObjects("RoadLeft"), gdjs.Stage2Code.GDRoadLeftObjects3);
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].rotateTowardAngle(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("RotationSpeed")), runtimeScene);
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].setY((( gdjs.Stage2Code.GDRoadLeftObjects3.length === 0 ) ? 0 :gdjs.Stage2Code.GDRoadLeftObjects3[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].getBehavior("Physics2").setLinearVelocityX(-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("DrivingSpeed"))));
}
}}

}


{

gdjs.copyArray(gdjs.Stage2Code.GDCarObjects2, gdjs.Stage2Code.GDCarObjects3);


gdjs.Stage2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDCarObjects3.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDCarObjects3[i].getVariableString(gdjs.Stage2Code.GDCarObjects3[i].getVariables().get("Direction")) == "Up" ) {
        gdjs.Stage2Code.condition0IsTrue_0.val = true;
        gdjs.Stage2Code.GDCarObjects3[k] = gdjs.Stage2Code.GDCarObjects3[i];
        ++k;
    }
}
gdjs.Stage2Code.GDCarObjects3.length = k;}if (gdjs.Stage2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects3 */
gdjs.copyArray(runtimeScene.getObjects("RoadUp"), gdjs.Stage2Code.GDRoadUpObjects3);
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].rotateTowardAngle(270, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("RotationSpeed")), runtimeScene);
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].setX((( gdjs.Stage2Code.GDRoadUpObjects3.length === 0 ) ? 0 :gdjs.Stage2Code.GDRoadUpObjects3[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects3.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects3[i].getBehavior("Physics2").setLinearVelocityY(-(1.5) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("DrivingSpeed")));
}
}}

}


{



}


{

/* Reuse gdjs.Stage2Code.GDCarObjects2 */

gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDCarObjects2[i].getY() < 0 ) {
        gdjs.Stage2Code.condition0IsTrue_0.val = true;
        gdjs.Stage2Code.GDCarObjects2[k] = gdjs.Stage2Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs.Stage2Code.GDCarObjects2.length = k;}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition1IsTrue_0;
gdjs.Stage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13226916);
}
}}
if (gdjs.Stage2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects2 */
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Stage2Code.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Stage2Code.GDCarObjects2);

gdjs.Stage2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDCarObjects2[i].getVariableBoolean(gdjs.Stage2Code.GDCarObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.Stage2Code.condition0IsTrue_0.val = true;
        gdjs.Stage2Code.GDCarObjects2[k] = gdjs.Stage2Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs.Stage2Code.GDCarObjects2.length = k;}if (gdjs.Stage2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Stage2Code.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects1});
gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.Stage2Code.GDCarObjects1});
gdjs.Stage2Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Stage2Code.GDCarObjects1);

gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
gdjs.Stage2Code.condition2IsTrue_0.val = false;
{
gdjs.Stage2Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects1Objects, "Physics2", gdjs.Stage2Code.mapOfGDgdjs_46Stage2Code_46GDCarObjects1Objects, false);
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDCarObjects1[i].getVariableBoolean(gdjs.Stage2Code.GDCarObjects1[i].getVariables().getFromIndex(0), false) ) {
        gdjs.Stage2Code.condition1IsTrue_0.val = true;
        gdjs.Stage2Code.GDCarObjects1[k] = gdjs.Stage2Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs.Stage2Code.GDCarObjects1.length = k;}if ( gdjs.Stage2Code.condition1IsTrue_0.val ) {
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition2IsTrue_0;
gdjs.Stage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13228348);
}
}}
}
if (gdjs.Stage2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Stage2Code.GDCarObjects1 */
{for(var i = 0, len = gdjs.Stage2Code.GDCarObjects1.length ;i < len;++i) {
    gdjs.Stage2Code.GDCarObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 10, 10, 0, 0, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Metal_Sheets_Sledgehammer_Hit_02.aac", false, 100, 1);
}}

}


};gdjs.Stage2Code.eventsList20 = function(runtimeScene) {

{


gdjs.Stage2Code.eventsList16(runtimeScene);
}


{


gdjs.Stage2Code.eventsList18(runtimeScene);
}


{


gdjs.Stage2Code.eventsList19(runtimeScene);
}


};gdjs.Stage2Code.eventsList21 = function(runtimeScene) {

{

gdjs.Stage2Code.GDLoadingObjects3.length = 0;


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition0IsTrue_0;
gdjs.Stage2Code.GDLoadingObjects3_1final.length = 0;gdjs.Stage2Code.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Stage2Code.GDLoadingObjects4);
for(var i = 0, k = 0, l = gdjs.Stage2Code.GDLoadingObjects4.length;i<l;++i) {
    if ( gdjs.Stage2Code.GDLoadingObjects4[i].getBehavior("Tween").hasFinished("LoadingIn") ) {
        gdjs.Stage2Code.condition0IsTrue_1.val = true;
        gdjs.Stage2Code.GDLoadingObjects4[k] = gdjs.Stage2Code.GDLoadingObjects4[i];
        ++k;
    }
}
gdjs.Stage2Code.GDLoadingObjects4.length = k;if( gdjs.Stage2Code.condition0IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Stage2Code.GDLoadingObjects4.length;j<jLen;++j) {
        if ( gdjs.Stage2Code.GDLoadingObjects3_1final.indexOf(gdjs.Stage2Code.GDLoadingObjects4[j]) === -1 )
            gdjs.Stage2Code.GDLoadingObjects3_1final.push(gdjs.Stage2Code.GDLoadingObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Stage2Code.GDLoadingObjects3_1final, gdjs.Stage2Code.GDLoadingObjects3);
}
}
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition1IsTrue_0;
gdjs.Stage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13229844);
}
}}
if (gdjs.Stage2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft")) + 15);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.random(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0)) - 1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)))), false);
}{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getGame().getVariables().getFromIndex(0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{



}


{


gdjs.Stage2Code.condition0IsTrue_0.val = false;
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition0IsTrue_0;
gdjs.Stage2Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0);
}
}if (gdjs.Stage2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getGame().getVariables().getFromIndex(0), "Stage1");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getGame().getVariables().getFromIndex(0), "Stage2");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getGame().getVariables().getFromIndex(0), "Stage3");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getGame().getVariables().getFromIndex(0), "Stage4");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getGame().getVariables().getFromIndex(0), "Stage5");
}}

}


};gdjs.Stage2Code.eventsList22 = function(runtimeScene) {

{


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition0IsTrue_0;
gdjs.Stage2Code.condition0IsTrue_1.val = false;
gdjs.Stage2Code.condition1IsTrue_1.val = false;
{
gdjs.Stage2Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if( gdjs.Stage2Code.condition0IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Stage2Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SceneTimeLeft")) <= 0;
if( gdjs.Stage2Code.condition1IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition1IsTrue_0;
gdjs.Stage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13234484);
}
}}
if (gdjs.Stage2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


};gdjs.Stage2Code.eventsList23 = function(runtimeScene) {

{


gdjs.Stage2Code.eventsList21(runtimeScene);
}


{


gdjs.Stage2Code.eventsList22(runtimeScene);
}


};gdjs.Stage2Code.mapOfEmptyGDCarObjects = Hashtable.newFrom({"Car": []});
gdjs.Stage2Code.eventsList24 = function(runtimeScene) {

{


gdjs.Stage2Code.condition0IsTrue_0.val = false;
{
gdjs.Stage2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Stage2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Stage2Code.GDLoadingObjects2);
{for(var i = 0, len = gdjs.Stage2Code.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDLoadingObjects2[i].getBehavior("Tween").addObjectOpacityTween("LoadingOut", 0, "easeInQuad", 750, false);
}
}}

}


{


gdjs.Stage2Code.condition0IsTrue_0.val = false;
gdjs.Stage2Code.condition1IsTrue_0.val = false;
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition0IsTrue_0;
gdjs.Stage2Code.condition0IsTrue_1.val = false;
gdjs.Stage2Code.condition1IsTrue_1.val = false;
{
gdjs.Stage2Code.condition0IsTrue_1.val = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Stage2Code.mapOfEmptyGDCarObjects) == 0;
if( gdjs.Stage2Code.condition0IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Stage2Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if( gdjs.Stage2Code.condition1IsTrue_1.val ) {
    gdjs.Stage2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Stage2Code.condition0IsTrue_0.val ) {
{
{gdjs.Stage2Code.conditionTrue_1 = gdjs.Stage2Code.condition1IsTrue_0;
gdjs.Stage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13239492);
}
}}
if (gdjs.Stage2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Stage2Code.GDLoadingObjects2);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "SecondsTimer");
}{for(var i = 0, len = gdjs.Stage2Code.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.Stage2Code.GDLoadingObjects2[i].getBehavior("Tween").addObjectOpacityTween("LoadingIn", 255, "easeInQuad", 750, false);
}
}}

}


{



}


};gdjs.Stage2Code.eventsList25 = function(runtimeScene) {

{



}


{


gdjs.Stage2Code.eventsList24(runtimeScene);
}


};gdjs.Stage2Code.eventsList26 = function(runtimeScene) {

{


{
}

}


{



}


{


gdjs.Stage2Code.eventsList8(runtimeScene);
}


{


gdjs.Stage2Code.eventsList9(runtimeScene);
}


{


gdjs.Stage2Code.eventsList11(runtimeScene);
}


{


gdjs.Stage2Code.eventsList14(runtimeScene);
}


{


gdjs.Stage2Code.eventsList20(runtimeScene);
}


{


gdjs.Stage2Code.eventsList23(runtimeScene);
}


{


gdjs.Stage2Code.eventsList25(runtimeScene);
}


};

gdjs.Stage2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Stage2Code.GDRoadRightObjects1.length = 0;
gdjs.Stage2Code.GDRoadRightObjects2.length = 0;
gdjs.Stage2Code.GDRoadRightObjects3.length = 0;
gdjs.Stage2Code.GDRoadRightObjects4.length = 0;
gdjs.Stage2Code.GDRoadRightObjects5.length = 0;
gdjs.Stage2Code.GDRoadRight2Objects1.length = 0;
gdjs.Stage2Code.GDRoadRight2Objects2.length = 0;
gdjs.Stage2Code.GDRoadRight2Objects3.length = 0;
gdjs.Stage2Code.GDRoadRight2Objects4.length = 0;
gdjs.Stage2Code.GDRoadRight2Objects5.length = 0;
gdjs.Stage2Code.GDRoadDownObjects1.length = 0;
gdjs.Stage2Code.GDRoadDownObjects2.length = 0;
gdjs.Stage2Code.GDRoadDownObjects3.length = 0;
gdjs.Stage2Code.GDRoadDownObjects4.length = 0;
gdjs.Stage2Code.GDRoadDownObjects5.length = 0;
gdjs.Stage2Code.GDRoadDown2Objects1.length = 0;
gdjs.Stage2Code.GDRoadDown2Objects2.length = 0;
gdjs.Stage2Code.GDRoadDown2Objects3.length = 0;
gdjs.Stage2Code.GDRoadDown2Objects4.length = 0;
gdjs.Stage2Code.GDRoadDown2Objects5.length = 0;
gdjs.Stage2Code.GDRoadLeftObjects1.length = 0;
gdjs.Stage2Code.GDRoadLeftObjects2.length = 0;
gdjs.Stage2Code.GDRoadLeftObjects3.length = 0;
gdjs.Stage2Code.GDRoadLeftObjects4.length = 0;
gdjs.Stage2Code.GDRoadLeftObjects5.length = 0;
gdjs.Stage2Code.GDRoadLeft2Objects1.length = 0;
gdjs.Stage2Code.GDRoadLeft2Objects2.length = 0;
gdjs.Stage2Code.GDRoadLeft2Objects3.length = 0;
gdjs.Stage2Code.GDRoadLeft2Objects4.length = 0;
gdjs.Stage2Code.GDRoadLeft2Objects5.length = 0;
gdjs.Stage2Code.GDRoadUpObjects1.length = 0;
gdjs.Stage2Code.GDRoadUpObjects2.length = 0;
gdjs.Stage2Code.GDRoadUpObjects3.length = 0;
gdjs.Stage2Code.GDRoadUpObjects4.length = 0;
gdjs.Stage2Code.GDRoadUpObjects5.length = 0;
gdjs.Stage2Code.GDRoadUp2Objects1.length = 0;
gdjs.Stage2Code.GDRoadUp2Objects2.length = 0;
gdjs.Stage2Code.GDRoadUp2Objects3.length = 0;
gdjs.Stage2Code.GDRoadUp2Objects4.length = 0;
gdjs.Stage2Code.GDRoadUp2Objects5.length = 0;
gdjs.Stage2Code.GDCarObjects1.length = 0;
gdjs.Stage2Code.GDCarObjects2.length = 0;
gdjs.Stage2Code.GDCarObjects3.length = 0;
gdjs.Stage2Code.GDCarObjects4.length = 0;
gdjs.Stage2Code.GDCarObjects5.length = 0;
gdjs.Stage2Code.GDGrassObjects1.length = 0;
gdjs.Stage2Code.GDGrassObjects2.length = 0;
gdjs.Stage2Code.GDGrassObjects3.length = 0;
gdjs.Stage2Code.GDGrassObjects4.length = 0;
gdjs.Stage2Code.GDGrassObjects5.length = 0;
gdjs.Stage2Code.GDObstacleObjects1.length = 0;
gdjs.Stage2Code.GDObstacleObjects2.length = 0;
gdjs.Stage2Code.GDObstacleObjects3.length = 0;
gdjs.Stage2Code.GDObstacleObjects4.length = 0;
gdjs.Stage2Code.GDObstacleObjects5.length = 0;
gdjs.Stage2Code.GDGrassBGObjects1.length = 0;
gdjs.Stage2Code.GDGrassBGObjects2.length = 0;
gdjs.Stage2Code.GDGrassBGObjects3.length = 0;
gdjs.Stage2Code.GDGrassBGObjects4.length = 0;
gdjs.Stage2Code.GDGrassBGObjects5.length = 0;
gdjs.Stage2Code.GDDecorObjects1.length = 0;
gdjs.Stage2Code.GDDecorObjects2.length = 0;
gdjs.Stage2Code.GDDecorObjects3.length = 0;
gdjs.Stage2Code.GDDecorObjects4.length = 0;
gdjs.Stage2Code.GDDecorObjects5.length = 0;
gdjs.Stage2Code.GDTimerObjects1.length = 0;
gdjs.Stage2Code.GDTimerObjects2.length = 0;
gdjs.Stage2Code.GDTimerObjects3.length = 0;
gdjs.Stage2Code.GDTimerObjects4.length = 0;
gdjs.Stage2Code.GDTimerObjects5.length = 0;
gdjs.Stage2Code.GDStageClearedObjects1.length = 0;
gdjs.Stage2Code.GDStageClearedObjects2.length = 0;
gdjs.Stage2Code.GDStageClearedObjects3.length = 0;
gdjs.Stage2Code.GDStageClearedObjects4.length = 0;
gdjs.Stage2Code.GDStageClearedObjects5.length = 0;
gdjs.Stage2Code.GDNewTextObjects1.length = 0;
gdjs.Stage2Code.GDNewTextObjects2.length = 0;
gdjs.Stage2Code.GDNewTextObjects3.length = 0;
gdjs.Stage2Code.GDNewTextObjects4.length = 0;
gdjs.Stage2Code.GDNewTextObjects5.length = 0;
gdjs.Stage2Code.GDLoadingObjects1.length = 0;
gdjs.Stage2Code.GDLoadingObjects2.length = 0;
gdjs.Stage2Code.GDLoadingObjects3.length = 0;
gdjs.Stage2Code.GDLoadingObjects4.length = 0;
gdjs.Stage2Code.GDLoadingObjects5.length = 0;

gdjs.Stage2Code.eventsList26(runtimeScene);
return;

}

gdjs['Stage2Code'] = gdjs.Stage2Code;
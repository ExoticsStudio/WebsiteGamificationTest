gdjs.MenuCode = {};
gdjs.MenuCode.GDBGObjects1= [];
gdjs.MenuCode.GDBGObjects2= [];
gdjs.MenuCode.GDBGObjects3= [];
gdjs.MenuCode.GDStarObjects1= [];
gdjs.MenuCode.GDStarObjects2= [];
gdjs.MenuCode.GDStarObjects3= [];
gdjs.MenuCode.GDPlanetObjects1= [];
gdjs.MenuCode.GDPlanetObjects2= [];
gdjs.MenuCode.GDPlanetObjects3= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuCode.GDNewTiledSpriteObjects3= [];
gdjs.MenuCode.GDSSSSObjects1= [];
gdjs.MenuCode.GDSSSSObjects2= [];
gdjs.MenuCode.GDSSSSObjects3= [];
gdjs.MenuCode.GDPlanetRObjects1= [];
gdjs.MenuCode.GDPlanetRObjects2= [];
gdjs.MenuCode.GDPlanetRObjects3= [];
gdjs.MenuCode.GDCometObjects1= [];
gdjs.MenuCode.GDCometObjects2= [];
gdjs.MenuCode.GDCometObjects3= [];
gdjs.MenuCode.GDButtonObjects1= [];
gdjs.MenuCode.GDButtonObjects2= [];
gdjs.MenuCode.GDButtonObjects3= [];
gdjs.MenuCode.GDUFOObjects1= [];
gdjs.MenuCode.GDUFOObjects2= [];
gdjs.MenuCode.GDUFOObjects3= [];
gdjs.MenuCode.GDVibrateObjects1= [];
gdjs.MenuCode.GDVibrateObjects2= [];
gdjs.MenuCode.GDVibrateObjects3= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDNewTextObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.condition4IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};
gdjs.MenuCode.condition4IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.MenuCode.GDButtonObjects2});
gdjs.MenuCode.asyncCallback10969532 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Button"), gdjs.MenuCode.GDButtonObjects3);

{for(var i = 0, len = gdjs.MenuCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonObjects3[i].getBehavior("Tween").addObjectScaleTween("BEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "War", false);
}}
gdjs.MenuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.MenuCode.GDButtonObjects2) asyncObjectsList.addObject("Button", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback10969532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.MenuCode.GDButtonObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10969212);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Small", 0.9, 0.9, "easeInOutQuad", 100, false, true);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.MenuCode.asyncCallback10968340 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback10968340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.MenuCode.GDButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDVibrateObjects1Objects = Hashtable.newFrom({"Vibrate": gdjs.MenuCode.GDVibrateObjects1});
gdjs.MenuCode.asyncCallback10974212 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MenuCode.GDNewTextObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Vibrate"), gdjs.MenuCode.GDVibrateObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDVibrateObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDVibrateObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MenuCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTextObjects2[i].setString("Vibration inactive");
}
}}
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MenuCode.GDVibrateObjects1) asyncObjectsList.addObject("Vibrate", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback10974212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDVibrateObjects1Objects = Hashtable.newFrom({"Vibrate": gdjs.MenuCode.GDVibrateObjects1});
gdjs.MenuCode.asyncCallback10975980 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MenuCode.GDNewTextObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Vibrate"), gdjs.MenuCode.GDVibrateObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDVibrateObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDVibrateObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTextObjects2[i].setString("Vibration active");
}
}}
gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MenuCode.GDVibrateObjects1) asyncObjectsList.addObject("Vibrate", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback10975980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Comet"), gdjs.MenuCode.GDCometObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlanetR"), gdjs.MenuCode.GDPlanetRObjects1);
gdjs.copyArray(runtimeScene.getObjects("UFO"), gdjs.MenuCode.GDUFOObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDPlanetRObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlanetRObjects1[i].getBehavior("Tween").addObjectPositionTween("Down", 252, 330, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDCometObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCometObjects1[i].getBehavior("Tween").addObjectPositionTween("DownC", 70, 240, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDUFOObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDUFOObjects1[i].getBehavior("Tween").addObjectPositionTween("DownU", 50, 355, "linear", 1000, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.MenuCode.GDStarObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStarObjects1[i].setXOffset(gdjs.MenuCode.GDStarObjects1[i].getXOffset() + (0.1));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlanetR"), gdjs.MenuCode.GDPlanetRObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDPlanetRObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlanetRObjects1[i].getBehavior("Tween").hasFinished("Down") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDPlanetRObjects1[k] = gdjs.MenuCode.GDPlanetRObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlanetRObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10964076);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlanetRObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlanetRObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlanetRObjects1[i].getBehavior("Tween").addObjectPositionTween("Up", 252, 320, "linear", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlanetR"), gdjs.MenuCode.GDPlanetRObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDPlanetRObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlanetRObjects1[i].getBehavior("Tween").hasFinished("Up") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDPlanetRObjects1[k] = gdjs.MenuCode.GDPlanetRObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlanetRObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10965204);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlanetRObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlanetRObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlanetRObjects1[i].getBehavior("Tween").addObjectPositionTween("Down", 252, 330, "linear", 1000, false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Comet"), gdjs.MenuCode.GDCometObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDCometObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCometObjects1[i].getBehavior("Tween").hasFinished("UpC") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDCometObjects1[k] = gdjs.MenuCode.GDCometObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDCometObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10966004);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDCometObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDCometObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCometObjects1[i].getBehavior("Tween").addObjectPositionTween("DownC", 70, 240, "linear", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Comet"), gdjs.MenuCode.GDCometObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDCometObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCometObjects1[i].getBehavior("Tween").hasFinished("DownC") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDCometObjects1[k] = gdjs.MenuCode.GDCometObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDCometObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10967020);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDCometObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDCometObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCometObjects1[i].getBehavior("Tween").addObjectPositionTween("UpC", 75, 245, "linear", 1000, false);
}
}}

}


{



}


{


{
}

}


{


{

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.MenuCode.GDButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10970772);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("BEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("UFO"), gdjs.MenuCode.GDUFOObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDUFOObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDUFOObjects1[i].getBehavior("Tween").hasFinished("UpU") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDUFOObjects1[k] = gdjs.MenuCode.GDUFOObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDUFOObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10969756);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDUFOObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDUFOObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDUFOObjects1[i].getBehavior("Tween").addObjectPositionTween("DownU", 50, 355, "linear", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UFO"), gdjs.MenuCode.GDUFOObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDUFOObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDUFOObjects1[i].getBehavior("Tween").hasFinished("DownU") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDUFOObjects1[k] = gdjs.MenuCode.GDUFOObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDUFOObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10972548);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDUFOObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDUFOObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDUFOObjects1[i].getBehavior("Tween").addObjectPositionTween("UpU", 60, 355, "linear", 1000, false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Vibrate"), gdjs.MenuCode.GDVibrateObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDVibrateObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDVibrateObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDVibrateObjects1[i].getAnimation() == 0 ) {
        gdjs.MenuCode.condition2IsTrue_0.val = true;
        gdjs.MenuCode.GDVibrateObjects1[k] = gdjs.MenuCode.GDVibrateObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDVibrateObjects1.length = k;}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10973980);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Vibrate").setNumber(1);
}
{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vibrate"), gdjs.MenuCode.GDVibrateObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDVibrateObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDVibrateObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDVibrateObjects1[i].getAnimation() == 1 ) {
        gdjs.MenuCode.condition2IsTrue_0.val = true;
        gdjs.MenuCode.GDVibrateObjects1[k] = gdjs.MenuCode.GDVibrateObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDVibrateObjects1.length = k;}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10975908);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Vibrate").setNumber(0);
}
{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


{


{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDBGObjects3.length = 0;
gdjs.MenuCode.GDStarObjects1.length = 0;
gdjs.MenuCode.GDStarObjects2.length = 0;
gdjs.MenuCode.GDStarObjects3.length = 0;
gdjs.MenuCode.GDPlanetObjects1.length = 0;
gdjs.MenuCode.GDPlanetObjects2.length = 0;
gdjs.MenuCode.GDPlanetObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.MenuCode.GDSSSSObjects1.length = 0;
gdjs.MenuCode.GDSSSSObjects2.length = 0;
gdjs.MenuCode.GDSSSSObjects3.length = 0;
gdjs.MenuCode.GDPlanetRObjects1.length = 0;
gdjs.MenuCode.GDPlanetRObjects2.length = 0;
gdjs.MenuCode.GDPlanetRObjects3.length = 0;
gdjs.MenuCode.GDCometObjects1.length = 0;
gdjs.MenuCode.GDCometObjects2.length = 0;
gdjs.MenuCode.GDCometObjects3.length = 0;
gdjs.MenuCode.GDButtonObjects1.length = 0;
gdjs.MenuCode.GDButtonObjects2.length = 0;
gdjs.MenuCode.GDButtonObjects3.length = 0;
gdjs.MenuCode.GDUFOObjects1.length = 0;
gdjs.MenuCode.GDUFOObjects2.length = 0;
gdjs.MenuCode.GDUFOObjects3.length = 0;
gdjs.MenuCode.GDVibrateObjects1.length = 0;
gdjs.MenuCode.GDVibrateObjects2.length = 0;
gdjs.MenuCode.GDVibrateObjects3.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects3.length = 0;

gdjs.MenuCode.eventsList5(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;

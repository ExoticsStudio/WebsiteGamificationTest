gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDTitleObjects3_1final = [];

gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDTitleObjects3= [];
gdjs.MainMenuCode.GDTitleObjects4= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects3= [];
gdjs.MainMenuCode.GDPlayButtonObjects4= [];
gdjs.MainMenuCode.GDShineObjects1= [];
gdjs.MainMenuCode.GDShineObjects2= [];
gdjs.MainMenuCode.GDShineObjects3= [];
gdjs.MainMenuCode.GDShineObjects4= [];
gdjs.MainMenuCode.GDBGObjects1= [];
gdjs.MainMenuCode.GDBGObjects2= [];
gdjs.MainMenuCode.GDBGObjects3= [];
gdjs.MainMenuCode.GDBGObjects4= [];
gdjs.MainMenuCode.GDCurrentURLObjects1= [];
gdjs.MainMenuCode.GDCurrentURLObjects2= [];
gdjs.MainMenuCode.GDCurrentURLObjects3= [];
gdjs.MainMenuCode.GDCurrentURLObjects4= [];
gdjs.MainMenuCode.GDGetParameterObjects1= [];
gdjs.MainMenuCode.GDGetParameterObjects2= [];
gdjs.MainMenuCode.GDGetParameterObjects3= [];
gdjs.MainMenuCode.GDGetParameterObjects4= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition3IsTrue_0 = {val:false};
gdjs.MainMenuCode.conditionTrue_1 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition3IsTrue_1 = {val:false};


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setString(gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setString(gdjs.evtsExt__URLTools__URLQueryStringParameter.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)), "ContractID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("CurrentURL"), gdjs.MainMenuCode.GDCurrentURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("GetParameter"), gdjs.MainMenuCode.GDGetParameterObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDCurrentURLObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCurrentURLObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGetParameterObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGetParameterObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)));
}
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.MainMenuCode.GDTitleObjects3.length = 0;


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.GDTitleObjects3_1final.length = 0;gdjs.MainMenuCode.condition0IsTrue_1.val = false;
gdjs.MainMenuCode.condition1IsTrue_1.val = false;
gdjs.MainMenuCode.condition2IsTrue_1.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if( gdjs.MainMenuCode.condition0IsTrue_1.val ) {
    gdjs.MainMenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MainMenuCode.GDTitleObjects4);
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDTitleObjects4.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDTitleObjects4[i].getBehavior("Tween").exists("ScaleDown")) ) {
        gdjs.MainMenuCode.condition1IsTrue_1.val = true;
        gdjs.MainMenuCode.GDTitleObjects4[k] = gdjs.MainMenuCode.GDTitleObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTitleObjects4.length = k;if( gdjs.MainMenuCode.condition1IsTrue_1.val ) {
    gdjs.MainMenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainMenuCode.GDTitleObjects4.length;j<jLen;++j) {
        if ( gdjs.MainMenuCode.GDTitleObjects3_1final.indexOf(gdjs.MainMenuCode.GDTitleObjects4[j]) === -1 )
            gdjs.MainMenuCode.GDTitleObjects3_1final.push(gdjs.MainMenuCode.GDTitleObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MainMenuCode.GDTitleObjects4);
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDTitleObjects4.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTitleObjects4[i].getBehavior("Tween").hasFinished("ScaleDown") ) {
        gdjs.MainMenuCode.condition2IsTrue_1.val = true;
        gdjs.MainMenuCode.GDTitleObjects4[k] = gdjs.MainMenuCode.GDTitleObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTitleObjects4.length = k;if( gdjs.MainMenuCode.condition2IsTrue_1.val ) {
    gdjs.MainMenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainMenuCode.GDTitleObjects4.length;j<jLen;++j) {
        if ( gdjs.MainMenuCode.GDTitleObjects3_1final.indexOf(gdjs.MainMenuCode.GDTitleObjects4[j]) === -1 )
            gdjs.MainMenuCode.GDTitleObjects3_1final.push(gdjs.MainMenuCode.GDTitleObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainMenuCode.GDTitleObjects3_1final, gdjs.MainMenuCode.GDTitleObjects3);
}
}
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition1IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11436788);
}
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDTitleObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDTitleObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTitleObjects3[i].getBehavior("Tween").addObjectScaleTween("ScaleUp", 0.21, 0.21, "linear", 1000, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MainMenuCode.GDTitleObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDTitleObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTitleObjects2[i].getBehavior("Tween").hasFinished("ScaleUp") ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDTitleObjects2[k] = gdjs.MainMenuCode.GDTitleObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTitleObjects2.length = k;}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition1IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9279780);
}
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDTitleObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDTitleObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTitleObjects2[i].getBehavior("Tween").addObjectScaleTween("ScaleDown", 0.2, 0.2, "linear", 1000, false, true);
}
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects3Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects3});
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects3Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects3});
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects2});
gdjs.MainMenuCode.asyncCallback7399508 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loading", false);
}}
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback7399508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects3);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.condition0IsTrue_1.val = false;
gdjs.MainMenuCode.condition1IsTrue_1.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition0IsTrue_1.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects3Objects, runtimeScene, true, false);
}}
gdjs.MainMenuCode.conditionTrue_1.val = true && gdjs.MainMenuCode.condition0IsTrue_1.val && gdjs.MainMenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Tween").addObjectScaleTween("PlayDown", 0.19, 0.19, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects3);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects3Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Tween").addObjectScaleTween("PlayUp", 0.2, 0.2, "linear", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
gdjs.MainMenuCode.condition2IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition2IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9239964);
}
}}
}
if (gdjs.MainMenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("PlayDown", 0.19, 0.19, "linear", 100, false, true);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("PlayUp", 0.2, 0.2, "linear", 100, false, true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm.wav", false, 100, 1);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 1, 0.5);
}
{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Shine"), gdjs.MainMenuCode.GDShineObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDShineObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDShineObjects1[i].rotate(45, runtimeScene);
}
}}

}


};gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "MainMenu.mp3", false, 100, 1);
}}

}


{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList3(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList4(runtimeScene);
}


};gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList0(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList5(runtimeScene);
}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MainMenuCode.GDShineObjects1.length = 0;
gdjs.MainMenuCode.GDShineObjects2.length = 0;
gdjs.MainMenuCode.GDShineObjects3.length = 0;
gdjs.MainMenuCode.GDShineObjects4.length = 0;
gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDBGObjects3.length = 0;
gdjs.MainMenuCode.GDBGObjects4.length = 0;
gdjs.MainMenuCode.GDCurrentURLObjects1.length = 0;
gdjs.MainMenuCode.GDCurrentURLObjects2.length = 0;
gdjs.MainMenuCode.GDCurrentURLObjects3.length = 0;
gdjs.MainMenuCode.GDCurrentURLObjects4.length = 0;
gdjs.MainMenuCode.GDGetParameterObjects1.length = 0;
gdjs.MainMenuCode.GDGetParameterObjects2.length = 0;
gdjs.MainMenuCode.GDGetParameterObjects3.length = 0;
gdjs.MainMenuCode.GDGetParameterObjects4.length = 0;

gdjs.MainMenuCode.eventsList6(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;

gdjs.LoadingCode = {};
gdjs.LoadingCode.GDTitleObjects1= [];
gdjs.LoadingCode.GDTitleObjects2= [];
gdjs.LoadingCode.GDBGObjects1= [];
gdjs.LoadingCode.GDBGObjects2= [];
gdjs.LoadingCode.GDPlayer_95HitboxObjects1= [];
gdjs.LoadingCode.GDPlayer_95HitboxObjects2= [];
gdjs.LoadingCode.GDTween_95CurtainObjects1= [];
gdjs.LoadingCode.GDTween_95CurtainObjects2= [];

gdjs.LoadingCode.conditionTrue_0 = {val:false};
gdjs.LoadingCode.condition0IsTrue_0 = {val:false};
gdjs.LoadingCode.condition1IsTrue_0 = {val:false};
gdjs.LoadingCode.condition2IsTrue_0 = {val:false};
gdjs.LoadingCode.condition3IsTrue_0 = {val:false};
gdjs.LoadingCode.conditionTrue_1 = {val:false};
gdjs.LoadingCode.condition0IsTrue_1 = {val:false};
gdjs.LoadingCode.condition1IsTrue_1 = {val:false};
gdjs.LoadingCode.condition2IsTrue_1 = {val:false};
gdjs.LoadingCode.condition3IsTrue_1 = {val:false};


gdjs.LoadingCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.LoadingCode.GDBGObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDBGObjects1[i].setYOffset(gdjs.LoadingCode.GDBGObjects1[i].getYOffset() - (2));
}
}}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
gdjs.LoadingCode.condition1IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.LoadingCode.condition0IsTrue_0.val ) {
{
{gdjs.LoadingCode.conditionTrue_1 = gdjs.LoadingCode.condition1IsTrue_0;
gdjs.LoadingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11025548);
}
}}
if (gdjs.LoadingCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.LoadingCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.LoadingCode.GDTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tween_Curtain"), gdjs.LoadingCode.GDTween_95CurtainObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDTitleObjects1[i].getBehavior("Tween").addObjectPositionTween("Loading", (( gdjs.LoadingCode.GDBGObjects1.length === 0 ) ? 0 :gdjs.LoadingCode.GDBGObjects1[0].getWidth()) / 2 - 0 / 2, 250, "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.LoadingCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDTitleObjects1[i].resetTimer("cd");
}
}{for(var i = 0, len = gdjs.LoadingCode.GDTween_95CurtainObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDTween_95CurtainObjects1[i].getBehavior("Tween").addObjectPositionYTween("Animation", -(900), "easeInOutQuad", 500, true);
}
}{for(var i = 0, len = gdjs.LoadingCode.GDTween_95CurtainObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDTween_95CurtainObjects1[i].getBehavior("Tween").addObjectOpacityTween("opcaity", 0, "easeInOutQuad", 1000, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Swish Swoosh Cutscene Sound Effect (mp3cut.net)_22.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.LoadingCode.GDTitleObjects1);

gdjs.LoadingCode.condition0IsTrue_0.val = false;
gdjs.LoadingCode.condition1IsTrue_0.val = false;
gdjs.LoadingCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoadingCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDTitleObjects1[i].getBehavior("Tween").hasFinished("Loading") ) {
        gdjs.LoadingCode.condition0IsTrue_0.val = true;
        gdjs.LoadingCode.GDTitleObjects1[k] = gdjs.LoadingCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.LoadingCode.GDTitleObjects1.length = k;}if ( gdjs.LoadingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LoadingCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDTitleObjects1[i].getTimerElapsedTimeInSecondsOrNaN("cd") > 2 ) {
        gdjs.LoadingCode.condition1IsTrue_0.val = true;
        gdjs.LoadingCode.GDTitleObjects1[k] = gdjs.LoadingCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.LoadingCode.GDTitleObjects1.length = k;}if ( gdjs.LoadingCode.condition1IsTrue_0.val ) {
{
{gdjs.LoadingCode.conditionTrue_1 = gdjs.LoadingCode.condition2IsTrue_0;
gdjs.LoadingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11030012);
}
}}
}
if (gdjs.LoadingCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.LoadingCode.GDBGObjects1);
/* Reuse gdjs.LoadingCode.GDTitleObjects1 */
{for(var i = 0, len = gdjs.LoadingCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDTitleObjects1[i].getBehavior("Tween").addObjectPositionTween("Loading2", (( gdjs.LoadingCode.GDBGObjects1.length === 0 ) ? 0 :gdjs.LoadingCode.GDBGObjects1[0].getWidth()) / 2 - 0 / 2, -(400), "easeInOutQuad", 1000, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Swish Swoosh Cutscene Sound Effect (mp3cut.net).mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.LoadingCode.GDTitleObjects1);

gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoadingCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDTitleObjects1[i].getTimerElapsedTimeInSecondsOrNaN("cd") > 3.5 ) {
        gdjs.LoadingCode.condition0IsTrue_0.val = true;
        gdjs.LoadingCode.GDTitleObjects1[k] = gdjs.LoadingCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.LoadingCode.GDTitleObjects1.length = k;}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", false);
}}

}


};

gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDTitleObjects1.length = 0;
gdjs.LoadingCode.GDTitleObjects2.length = 0;
gdjs.LoadingCode.GDBGObjects1.length = 0;
gdjs.LoadingCode.GDBGObjects2.length = 0;
gdjs.LoadingCode.GDPlayer_95HitboxObjects1.length = 0;
gdjs.LoadingCode.GDPlayer_95HitboxObjects2.length = 0;
gdjs.LoadingCode.GDTween_95CurtainObjects1.length = 0;
gdjs.LoadingCode.GDTween_95CurtainObjects2.length = 0;

gdjs.LoadingCode.eventsList0(runtimeScene);
return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;

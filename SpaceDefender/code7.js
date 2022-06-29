gdjs.NotMobileCode = {};
gdjs.NotMobileCode.GDBGObjects1= [];
gdjs.NotMobileCode.GDBGObjects2= [];
gdjs.NotMobileCode.GDDownloadObjects1= [];
gdjs.NotMobileCode.GDDownloadObjects2= [];

gdjs.NotMobileCode.conditionTrue_0 = {val:false};
gdjs.NotMobileCode.condition0IsTrue_0 = {val:false};
gdjs.NotMobileCode.condition1IsTrue_0 = {val:false};
gdjs.NotMobileCode.condition2IsTrue_0 = {val:false};
gdjs.NotMobileCode.condition3IsTrue_0 = {val:false};
gdjs.NotMobileCode.conditionTrue_1 = {val:false};
gdjs.NotMobileCode.condition0IsTrue_1 = {val:false};
gdjs.NotMobileCode.condition1IsTrue_1 = {val:false};
gdjs.NotMobileCode.condition2IsTrue_1 = {val:false};
gdjs.NotMobileCode.condition3IsTrue_1 = {val:false};


gdjs.NotMobileCode.mapOfGDgdjs_46NotMobileCode_46GDDownloadObjects1Objects = Hashtable.newFrom({"Download": gdjs.NotMobileCode.GDDownloadObjects1});
gdjs.NotMobileCode.asyncCallback11210388 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Download"), gdjs.NotMobileCode.GDDownloadObjects2);

{for(var i = 0, len = gdjs.NotMobileCode.GDDownloadObjects2.length ;i < len;++i) {
    gdjs.NotMobileCode.GDDownloadObjects2[i].getBehavior("Tween").addObjectScaleTween("BEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}{gdjs.evtTools.window.openURL("https://play.google.com/store/apps/details?id=com.mobmif", runtimeScene);
}}
gdjs.NotMobileCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.NotMobileCode.GDDownloadObjects1) asyncObjectsList.addObject("Download", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.NotMobileCode.asyncCallback11210388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.NotMobileCode.mapOfGDgdjs_46NotMobileCode_46GDDownloadObjects1Objects = Hashtable.newFrom({"Download": gdjs.NotMobileCode.GDDownloadObjects1});
gdjs.NotMobileCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Download"), gdjs.NotMobileCode.GDDownloadObjects1);

gdjs.NotMobileCode.condition0IsTrue_0.val = false;
gdjs.NotMobileCode.condition1IsTrue_0.val = false;
gdjs.NotMobileCode.condition2IsTrue_0.val = false;
{
gdjs.NotMobileCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NotMobileCode.mapOfGDgdjs_46NotMobileCode_46GDDownloadObjects1Objects, runtimeScene, true, false);
}if ( gdjs.NotMobileCode.condition0IsTrue_0.val ) {
{
gdjs.NotMobileCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.NotMobileCode.condition1IsTrue_0.val ) {
{
{gdjs.NotMobileCode.conditionTrue_1 = gdjs.NotMobileCode.condition2IsTrue_0;
gdjs.NotMobileCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11210068);
}
}}
}
if (gdjs.NotMobileCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NotMobileCode.GDDownloadObjects1 */
{for(var i = 0, len = gdjs.NotMobileCode.GDDownloadObjects1.length ;i < len;++i) {
    gdjs.NotMobileCode.GDDownloadObjects1[i].getBehavior("Tween").addObjectScaleTween("Small", 0.9, 0.9, "easeInOutQuad", 100, false, true);
}
}
{ //Subevents
gdjs.NotMobileCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Download"), gdjs.NotMobileCode.GDDownloadObjects1);

gdjs.NotMobileCode.condition0IsTrue_0.val = false;
{
gdjs.NotMobileCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NotMobileCode.mapOfGDgdjs_46NotMobileCode_46GDDownloadObjects1Objects, runtimeScene, true, true);
}if (gdjs.NotMobileCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NotMobileCode.GDDownloadObjects1 */
{for(var i = 0, len = gdjs.NotMobileCode.GDDownloadObjects1.length ;i < len;++i) {
    gdjs.NotMobileCode.GDDownloadObjects1[i].getBehavior("Tween").addObjectScaleTween("BEEG", 1, 1, "easeInOutQuad", 100, false, true);
}
}}

}


};

gdjs.NotMobileCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NotMobileCode.GDBGObjects1.length = 0;
gdjs.NotMobileCode.GDBGObjects2.length = 0;
gdjs.NotMobileCode.GDDownloadObjects1.length = 0;
gdjs.NotMobileCode.GDDownloadObjects2.length = 0;

gdjs.NotMobileCode.eventsList1(runtimeScene);
return;

}

gdjs['NotMobileCode'] = gdjs.NotMobileCode;

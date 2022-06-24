gdjs.CongratzCode = {};
gdjs.CongratzCode.GDUiObjects1= [];
gdjs.CongratzCode.GDUiObjects2= [];
gdjs.CongratzCode.GDMENUObjects1= [];
gdjs.CongratzCode.GDMENUObjects2= [];

gdjs.CongratzCode.conditionTrue_0 = {val:false};
gdjs.CongratzCode.condition0IsTrue_0 = {val:false};
gdjs.CongratzCode.condition1IsTrue_0 = {val:false};
gdjs.CongratzCode.condition2IsTrue_0 = {val:false};
gdjs.CongratzCode.condition3IsTrue_0 = {val:false};
gdjs.CongratzCode.conditionTrue_1 = {val:false};
gdjs.CongratzCode.condition0IsTrue_1 = {val:false};
gdjs.CongratzCode.condition1IsTrue_1 = {val:false};
gdjs.CongratzCode.condition2IsTrue_1 = {val:false};
gdjs.CongratzCode.condition3IsTrue_1 = {val:false};


gdjs.CongratzCode.mapOfGDgdjs_46CongratzCode_46GDMENUObjects1Objects = Hashtable.newFrom({"MENU": gdjs.CongratzCode.GDMENUObjects1});
gdjs.CongratzCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MENU"), gdjs.CongratzCode.GDMENUObjects1);

gdjs.CongratzCode.condition0IsTrue_0.val = false;
gdjs.CongratzCode.condition1IsTrue_0.val = false;
gdjs.CongratzCode.condition2IsTrue_0.val = false;
{
gdjs.CongratzCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CongratzCode.mapOfGDgdjs_46CongratzCode_46GDMENUObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CongratzCode.condition0IsTrue_0.val ) {
{
gdjs.CongratzCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CongratzCode.condition1IsTrue_0.val ) {
{
{gdjs.CongratzCode.conditionTrue_1 = gdjs.CongratzCode.condition2IsTrue_0;
gdjs.CongratzCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11180508);
}
}}
}
if (gdjs.CongratzCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.CongratzCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CongratzCode.GDUiObjects1.length = 0;
gdjs.CongratzCode.GDUiObjects2.length = 0;
gdjs.CongratzCode.GDMENUObjects1.length = 0;
gdjs.CongratzCode.GDMENUObjects2.length = 0;

gdjs.CongratzCode.eventsList0(runtimeScene);
return;

}

gdjs['CongratzCode'] = gdjs.CongratzCode;

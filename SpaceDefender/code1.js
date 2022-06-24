gdjs.InputContractIDCode = {};
gdjs.InputContractIDCode.GDInputContractIDObjects1= [];
gdjs.InputContractIDCode.GDInputContractIDObjects2= [];
gdjs.InputContractIDCode.GDTextObjects1= [];
gdjs.InputContractIDCode.GDTextObjects2= [];
gdjs.InputContractIDCode.GDNewSpriteObjects1= [];
gdjs.InputContractIDCode.GDNewSpriteObjects2= [];

gdjs.InputContractIDCode.conditionTrue_0 = {val:false};
gdjs.InputContractIDCode.condition0IsTrue_0 = {val:false};
gdjs.InputContractIDCode.condition1IsTrue_0 = {val:false};
gdjs.InputContractIDCode.condition2IsTrue_0 = {val:false};
gdjs.InputContractIDCode.condition3IsTrue_0 = {val:false};
gdjs.InputContractIDCode.conditionTrue_1 = {val:false};
gdjs.InputContractIDCode.condition0IsTrue_1 = {val:false};
gdjs.InputContractIDCode.condition1IsTrue_1 = {val:false};
gdjs.InputContractIDCode.condition2IsTrue_1 = {val:false};
gdjs.InputContractIDCode.condition3IsTrue_1 = {val:false};


gdjs.InputContractIDCode.mapOfGDgdjs_46InputContractIDCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.InputContractIDCode.GDNewSpriteObjects1});
gdjs.InputContractIDCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("InputContractID"), gdjs.InputContractIDCode.GDInputContractIDObjects1);
{for(var i = 0, len = gdjs.InputContractIDCode.GDInputContractIDObjects1.length ;i < len;++i) {
    gdjs.InputContractIDCode.GDInputContractIDObjects1[i].activate(true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("InputContractID"), gdjs.InputContractIDCode.GDInputContractIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.InputContractIDCode.GDTextObjects1);
{for(var i = 0, len = gdjs.InputContractIDCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.InputContractIDCode.GDTextObjects1[i].setString((( gdjs.InputContractIDCode.GDInputContractIDObjects1.length === 0 ) ? "" :gdjs.InputContractIDCode.GDInputContractIDObjects1[0].getString()));
}
}{runtimeScene.getVariables().get("ID").getChild("Contract").setString((( gdjs.InputContractIDCode.GDInputContractIDObjects1.length === 0 ) ? "" :gdjs.InputContractIDCode.GDInputContractIDObjects1[0].getString()));
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.InputContractIDCode.GDNewSpriteObjects1);

gdjs.InputContractIDCode.condition0IsTrue_0.val = false;
gdjs.InputContractIDCode.condition1IsTrue_0.val = false;
gdjs.InputContractIDCode.condition2IsTrue_0.val = false;
{
gdjs.InputContractIDCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InputContractIDCode.mapOfGDgdjs_46InputContractIDCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InputContractIDCode.condition0IsTrue_0.val ) {
{
gdjs.InputContractIDCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.InputContractIDCode.condition1IsTrue_0.val ) {
{
{gdjs.InputContractIDCode.conditionTrue_1 = gdjs.InputContractIDCode.condition2IsTrue_0;
gdjs.InputContractIDCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10888628);
}
}}
}
if (gdjs.InputContractIDCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.firestore.writeDocument("Database", "test", runtimeScene.getVariables().get("ID"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SplashScreen", false);
}}

}


};

gdjs.InputContractIDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InputContractIDCode.GDInputContractIDObjects1.length = 0;
gdjs.InputContractIDCode.GDInputContractIDObjects2.length = 0;
gdjs.InputContractIDCode.GDTextObjects1.length = 0;
gdjs.InputContractIDCode.GDTextObjects2.length = 0;
gdjs.InputContractIDCode.GDNewSpriteObjects1.length = 0;
gdjs.InputContractIDCode.GDNewSpriteObjects2.length = 0;

gdjs.InputContractIDCode.eventsList0(runtimeScene);
return;

}

gdjs['InputContractIDCode'] = gdjs.InputContractIDCode;

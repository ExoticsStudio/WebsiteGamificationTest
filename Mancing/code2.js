gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.asyncCallback9777676 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2[i].getBehavior("Tween").addObjectWidthTween("Width2", 406, "linear", 2000, false);
}
}{runtimeScene.getVariables().get("A").setNumber(1);
}}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1) asyncObjectsList.addObject("NewTiledSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9777676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getBehavior("Tween").addObjectWidthTween("Width", 200, "linear", 1000, false);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].setXOffset(gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getXOffset() + (2));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;

gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.GDLogoObjects1= [];
gdjs.SplashScreenCode.GDLogoObjects2= [];
gdjs.SplashScreenCode.GDBackObjects1= [];
gdjs.SplashScreenCode.GDBackObjects2= [];
gdjs.SplashScreenCode.GDStarsObjects1= [];
gdjs.SplashScreenCode.GDStarsObjects2= [];
gdjs.SplashScreenCode.GDCurrentURLObjects1= [];
gdjs.SplashScreenCode.GDCurrentURLObjects2= [];
gdjs.SplashScreenCode.GDGetParamaterObjects1= [];
gdjs.SplashScreenCode.GDGetParamaterObjects2= [];

gdjs.SplashScreenCode.conditionTrue_0 = {val:false};
gdjs.SplashScreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashScreenCode.condition1IsTrue_0 = {val:false};


gdjs.SplashScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.SplashScreenCode.GDLogoObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "328668__pearcewilsonking__alien-ufo-lab-1.wav", true, 100, 1);
}{for(var i = 0, len = gdjs.SplashScreenCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLogoObjects1[i].setOpacity(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.SplashScreenCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.SplashScreenCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLogoObjects1[i].setOpacity(gdjs.SplashScreenCode.GDLogoObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.SplashScreenCode.GDLogoObjects1);

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashScreenCode.GDLogoObjects1.length;i<l;++i) {
    if ( gdjs.SplashScreenCode.GDLogoObjects1[i].getOpacity() >= 255 ) {
        gdjs.SplashScreenCode.condition0IsTrue_0.val = true;
        gdjs.SplashScreenCode.GDLogoObjects1[k] = gdjs.SplashScreenCode.GDLogoObjects1[i];
        ++k;
    }
}
gdjs.SplashScreenCode.GDLogoObjects1.length = k;}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SplashScreen2", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.SplashScreenCode.GDStarsObjects1);
{for(var i = 0, len = gdjs.SplashScreenCode.GDStarsObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDStarsObjects1[i].rotate(10, runtimeScene);
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



}


{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("CurrentURL").setString(gdjs.evtsExt__URLTools__CurrentURL.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getGame().getVariables().get("Param_ContractID").setString(gdjs.evtsExt__URLTools__URLQueryStringParameter.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("CurrentURL")), "ContractID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getGame().getVariables().get("Username").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Param_ContractID")));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("CurrentURL"), gdjs.SplashScreenCode.GDCurrentURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("GetParamater"), gdjs.SplashScreenCode.GDGetParamaterObjects1);
{for(var i = 0, len = gdjs.SplashScreenCode.GDCurrentURLObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDCurrentURLObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("CurrentURL")));
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDGetParamaterObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDGetParamaterObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Param_ContractID")));
}
}}

}


};

gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDLogoObjects1.length = 0;
gdjs.SplashScreenCode.GDLogoObjects2.length = 0;
gdjs.SplashScreenCode.GDBackObjects1.length = 0;
gdjs.SplashScreenCode.GDBackObjects2.length = 0;
gdjs.SplashScreenCode.GDStarsObjects1.length = 0;
gdjs.SplashScreenCode.GDStarsObjects2.length = 0;
gdjs.SplashScreenCode.GDCurrentURLObjects1.length = 0;
gdjs.SplashScreenCode.GDCurrentURLObjects2.length = 0;
gdjs.SplashScreenCode.GDGetParamaterObjects1.length = 0;
gdjs.SplashScreenCode.GDGetParamaterObjects2.length = 0;

gdjs.SplashScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;

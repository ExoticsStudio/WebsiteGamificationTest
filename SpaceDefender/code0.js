gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.GDLogoObjects1= [];
gdjs.SplashScreenCode.GDLogoObjects2= [];
gdjs.SplashScreenCode.GDBackObjects1= [];
gdjs.SplashScreenCode.GDBackObjects2= [];
gdjs.SplashScreenCode.GDStarsObjects1= [];
gdjs.SplashScreenCode.GDStarsObjects2= [];

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
    gdjs.SplashScreenCode.GDLogoObjects1[i].setOpacity(gdjs.SplashScreenCode.GDLogoObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 30));
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


};

gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDLogoObjects1.length = 0;
gdjs.SplashScreenCode.GDLogoObjects2.length = 0;
gdjs.SplashScreenCode.GDBackObjects1.length = 0;
gdjs.SplashScreenCode.GDBackObjects2.length = 0;
gdjs.SplashScreenCode.GDStarsObjects1.length = 0;
gdjs.SplashScreenCode.GDStarsObjects2.length = 0;

gdjs.SplashScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;

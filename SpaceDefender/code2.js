gdjs.SplashScreen2Code = {};
gdjs.SplashScreen2Code.GDLogoObjects1= [];
gdjs.SplashScreen2Code.GDLogoObjects2= [];
gdjs.SplashScreen2Code.GDBackObjects1= [];
gdjs.SplashScreen2Code.GDBackObjects2= [];
gdjs.SplashScreen2Code.GDStarsObjects1= [];
gdjs.SplashScreen2Code.GDStarsObjects2= [];

gdjs.SplashScreen2Code.conditionTrue_0 = {val:false};
gdjs.SplashScreen2Code.condition0IsTrue_0 = {val:false};
gdjs.SplashScreen2Code.condition1IsTrue_0 = {val:false};


gdjs.SplashScreen2Code.eventsList0 = function(runtimeScene) {

{


gdjs.SplashScreen2Code.condition0IsTrue_0.val = false;
{
gdjs.SplashScreen2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashScreen2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.SplashScreen2Code.GDLogoObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "328668__pearcewilsonking__alien-ufo-lab-1.wav", true, 100, 1);
}{for(var i = 0, len = gdjs.SplashScreen2Code.GDLogoObjects1.length ;i < len;++i) {
    gdjs.SplashScreen2Code.GDLogoObjects1[i].setOpacity(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.SplashScreen2Code.GDLogoObjects1);
{for(var i = 0, len = gdjs.SplashScreen2Code.GDLogoObjects1.length ;i < len;++i) {
    gdjs.SplashScreen2Code.GDLogoObjects1[i].setOpacity(gdjs.SplashScreen2Code.GDLogoObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.SplashScreen2Code.GDLogoObjects1);

gdjs.SplashScreen2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashScreen2Code.GDLogoObjects1.length;i<l;++i) {
    if ( gdjs.SplashScreen2Code.GDLogoObjects1[i].getOpacity() >= 255 ) {
        gdjs.SplashScreen2Code.condition0IsTrue_0.val = true;
        gdjs.SplashScreen2Code.GDLogoObjects1[k] = gdjs.SplashScreen2Code.GDLogoObjects1[i];
        ++k;
    }
}
gdjs.SplashScreen2Code.GDLogoObjects1.length = k;}if (gdjs.SplashScreen2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.SplashScreen2Code.GDStarsObjects1);
{for(var i = 0, len = gdjs.SplashScreen2Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.SplashScreen2Code.GDStarsObjects1[i].rotate(10, runtimeScene);
}
}}

}


{



}


};

gdjs.SplashScreen2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreen2Code.GDLogoObjects1.length = 0;
gdjs.SplashScreen2Code.GDLogoObjects2.length = 0;
gdjs.SplashScreen2Code.GDBackObjects1.length = 0;
gdjs.SplashScreen2Code.GDBackObjects2.length = 0;
gdjs.SplashScreen2Code.GDStarsObjects1.length = 0;
gdjs.SplashScreen2Code.GDStarsObjects2.length = 0;

gdjs.SplashScreen2Code.eventsList0(runtimeScene);
return;

}

gdjs['SplashScreen2Code'] = gdjs.SplashScreen2Code;
